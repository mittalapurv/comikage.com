import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---- anti-spam state (in-memory; single-container deployment) ----------------------
// Per-IP: at most IP_MAX submissions per IP_WINDOW_MS.
// Global: at most DAILY_CAP sends per UTC day — a hard ceiling that keeps total volume
// far below Gmail's ~500/day limit no matter how distributed an attack is.
const IP_WINDOW_MS = 15 * 60 * 1000;
const IP_MAX = 3;
const DAILY_CAP = Number(process.env.CONTACT_DAILY_CAP || 100);

const ipHits = new Map<string, number[]>();
let dayKey = "";
let dayCount = 0;

function clientIp(request: Request) {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function ipLimited(ip: string) {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < IP_WINDOW_MS);
  if (hits.length >= IP_MAX) { ipHits.set(ip, hits); return true; }
  hits.push(now);
  ipHits.set(ip, hits);
  // Opportunistic cleanup so the map can't grow unbounded under a distributed flood
  if (ipHits.size > 10000) {
    ipHits.forEach((timestamps, key) => {
      if (timestamps.every((t) => now - t >= IP_WINDOW_MS)) ipHits.delete(key);
    });
  }
  return false;
}

function dailyCapReached() {
  const today = new Date().toISOString().slice(0, 10);
  if (today !== dayKey) { dayKey = today; dayCount = 0; }
  if (dayCount >= DAILY_CAP) return true;
  dayCount++;
  return false;
}

// -------------------------------------------------------------------------------------

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a hidden field humans never see. Bots that fill it get a fake success —
  // no email is sent, and they learn nothing.
  if ((body.website || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim().slice(0, 200);
  const email = (body.email || "").trim().slice(0, 200);
  const message = (body.message || "").trim().slice(0, 5000);

  if (!message) {
    return NextResponse.json({ error: "Tell us a little about what you need." }, { status: 400 });
  }

  // Link-stuffing heuristic: real enquiries rarely contain more than a couple of URLs.
  const linkCount = (message.match(/https?:\/\//gi) || []).length;
  if (linkCount > 5) {
    return NextResponse.json({ error: "That looks like spam. If it isn't, please email hello@letscrud.com." }, { status: 400 });
  }

  if (ipLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "Too many messages in a short time — please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  if (dailyCapReached()) {
    console.error("Contact form daily cap reached; refusing further sends today.");
    return NextResponse.json(
      { error: "We're receiving a lot of messages right now. Please email hello@letscrud.com directly." },
      { status: 429 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Contact form submission received but GMAIL_USER/GMAIL_APP_PASSWORD are not configured.", { name, email, message });
    return NextResponse.json(
      { error: "Email delivery isn't configured yet. Please email hello@letscrud.com directly for now." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "a29npvtltd@gmail.com";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass }
    });

    await transporter.sendMail({
      // Gmail requires the authenticated account as the sender; the visitor goes in replyTo
      from: `LetsCRUD Website <${user}>`,
      to,
      replyTo: email || undefined,
      subject: `New enquiry from ${name || "the LetsCRUD website"}`,
      text: [
        `Name: ${name || "(not provided)"}`,
        `Email/phone: ${email || "(not provided)"}`,
        `IP: ${clientIp(request)}`,
        "",
        message
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Couldn't send that just now. Please try again shortly." }, { status: 502 });
  }
}
