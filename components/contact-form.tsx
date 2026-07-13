"use client";

import { useEffect, useState } from "react";
import { CONTACT_PREFILL_EVENT, CONTACT_PREFILL_KEY } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — humans never see or fill this
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    function applyPrefill() {
      const stored = sessionStorage.getItem(CONTACT_PREFILL_KEY);
      if (stored) {
        setMessage(stored);
        sessionStorage.removeItem(CONTACT_PREFILL_KEY);
      }
    }
    applyPrefill();
    window.addEventListener(CONTACT_PREFILL_EVENT, applyPrefill);
    return () => window.removeEventListener(CONTACT_PREFILL_EVENT, applyPrefill);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      setStatus("error");
      setError("Tell us a little about what you need.");
      return;
    }
    if (!email.trim()) {
      setStatus("error");
      setError("Please add an email or phone number so we can reply to you.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website })
      });
      if (!res.ok) {
        // On the static-export deployment the API route doesn't exist (nginx returns 404/405 HTML)
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error ||
            (res.status === 404 || res.status === 405
              ? "Email delivery isn't set up on this deployment yet — please email hello@letscrud.com."
              : "Something went wrong. Please try again.")
        );
      }
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : "Couldn't send just now — please try again, or email hello@letscrud.com."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2" noValidate>
      {/* Honeypot: off-screen (not display:none, which many bots detect). Real visitors
          never see it; bots that auto-fill every field reveal themselves. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="c-website">Leave this field empty</label>
        <input
          id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off"
          value={website} onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-name" className="text-[15px] font-semibold text-muted">Your name</label>
        <input
          id="c-name" name="name" type="text" autoComplete="name" placeholder="e.g. Priya Sharma"
          value={name} onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border-[1.5px] border-line bg-black/[.34] px-4 py-3.5 text-lg text-ink placeholder:text-muted focus:border-accent/70 focus:shadow-[0_0_0_4px_rgba(242,169,59,.14)] focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-email" className="text-[15px] font-semibold text-muted">Email or phone</label>
        <input
          id="c-email" name="email" type="text" autoComplete="email" placeholder="you@company.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border-[1.5px] border-line bg-black/[.34] px-4 py-3.5 text-lg text-ink placeholder:text-muted focus:border-accent/70 focus:shadow-[0_0_0_4px_rgba(242,169,59,.14)] focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="c-msg" className="text-[15px] font-semibold text-muted">What does your business need?</label>
        <textarea
          id="c-msg" name="message" placeholder="Even a WhatsApp-style message works — we'll ask the right questions."
          value={message} onChange={(e) => setMessage(e.target.value)}
          className="min-h-[132px] w-full resize-y rounded-2xl border-[1.5px] border-line bg-black/[.34] px-4 py-3.5 text-lg text-ink placeholder:text-muted focus:border-accent/70 focus:shadow-[0_0_0_4px_rgba(242,169,59,.14)] focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="button-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : status === "sent" ? "✓ Sent — we'll reply within a day" : "Send message →"}
        </button>
        {status === "error" && <p className="text-[15px] leading-snug text-accent">{error}</p>}
      </div>
    </form>
  );
}
