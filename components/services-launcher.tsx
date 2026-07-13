"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CONTACT_PREFILL_EVENT, CONTACT_PREFILL_KEY } from "@/lib/contact";

type Service = {
  id: string;
  label: string;
  icon: string;
  grad: string;
  tag: string;
  keywords: string[];
  body: string[];
};

const SERVICES: Service[] = [
  { id: "web-design", label: "Web Design", icon: "🎨", grad: "linear-gradient(135deg,#37B6FF,#1F6FEB)",
    tag: "Design that positions, not decorates",
    keywords: ["website", "ui", "layout", "landing", "design"],
    body: [
      "We design around your customer's decision, not around trends. Every page answers: who is this for, what should they feel, and what should they do next.",
      "You get a design system — type, colour, components — so the site stays coherent as it grows, instead of drifting page by page."
    ] },
  { id: "business-websites", label: "Business Websites", icon: "🌐", grad: "linear-gradient(135deg,#4ADE80,#15803D)",
    tag: "Credibility that generates enquiries",
    keywords: ["site", "company", "corporate", "landing", "pages"],
    body: [
      "A professional website that communicates clearly, establishes credibility, and turns visitors into enquiries — built after we understand your business, not before.",
      "Includes structure, messaging, responsive build, deployment, and the boring-but-critical details: analytics, SEO basics, business email."
    ] },
  { id: "seo", label: "SEO", icon: "🔍", grad: "linear-gradient(135deg,#FBBF24,#D97706)",
    tag: "Be found for what you actually sell",
    keywords: ["search", "google", "ranking", "traffic", "keywords"],
    body: [
      "We start with the searches your customers actually make — in your city, in your industry, in their words — and structure your pages to answer them.",
      "Technical hygiene (speed, sitemaps, metadata) plus content that earns rankings. No black-hat tricks, no vanity keyword reports."
    ] },
  { id: "content", label: "Content Creation", icon: "✍️", grad: "linear-gradient(135deg,#F472B6,#BE185D)",
    tag: "Your business, expressed clearly",
    keywords: ["copy", "writing", "blog", "messaging", "words"],
    body: [
      "Most business owners know their business deeply but struggle to put it into words. That's the actual job: we sit with you, understand how you create value, and express it in language your customers recognise themselves in.",
      "Service pages, founder stories, case studies, proposals — written from your business knowledge, shaped by us. You review, we refine."
    ] },
  { id: "graphics", label: "Website Graphics", icon: "🖼️", grad: "linear-gradient(135deg,#A78BFA,#6D28D9)",
    tag: "Visuals with a reason to exist",
    keywords: ["illustration", "icons", "images", "banners", "visual"],
    body: [
      "Custom illustrations, diagrams, and imagery that explain your business — not stock photos of handshakes.",
      "Where a picture can replace three paragraphs, we make the picture: process diagrams, product visuals, service icons, social banners."
    ] },
  { id: "business-email", label: "Business Emails", icon: "✉️", grad: "linear-gradient(135deg,#38BDF8,#0369A1)",
    tag: "you@yourcompany.com, done right",
    keywords: ["gmail", "workspace", "domain", "mail", "professional"],
    body: [
      "Sending quotations from a personal Gmail costs trust. We set up email on your own domain — Google Workspace or Zoho — with the records that keep you out of spam folders (SPF, DKIM, DMARC).",
      "Includes signatures, shared inboxes like sales@ and support@, and migration of old mail if needed."
    ] },
  { id: "web-apps", label: "Business Applications", icon: "▦", grad: "linear-gradient(135deg,#B18CFF,#6A4DE0)",
    tag: "For work that outgrew spreadsheets",
    keywords: ["app", "crm", "portal", "internal", "tool", "software"],
    body: [
      "Dashboards, client portals, CRM-style systems, approval workflows — focused tools that fix a specific operational bottleneck.",
      "We map the actual workflow first: who uses it, what they decide, what data matters. Then we build in phases, so you never pay for software you don't use."
    ] },
  { id: "dashboards", label: "Dashboards", icon: "📊", grad: "linear-gradient(135deg,#34D399,#047857)",
    tag: "Your business at a glance",
    keywords: ["reports", "analytics", "kpi", "metrics", "data"],
    body: [
      "When reports take days to prepare, decisions wait. We build dashboards that pull your operations into one live view — orders, projects, payments, pipelines.",
      "Built on your existing data wherever it lives: spreadsheets, Tally, your app's database."
    ] },
  { id: "workflows", label: "Approvals & Workflows", icon: "✅", grad: "linear-gradient(135deg,#FB923C,#C2410C)",
    tag: "From phone-call approvals to a clear queue",
    keywords: ["process", "automation", "status", "tracking", "operations"],
    body: [
      "Approvals that happen over phone calls and WhatsApp leave no trail and stall when one person is busy. We turn them into request → review → release flows with visible status.",
      "Everyone knows what's pending, with whom, and since when. That alone changes how a business runs."
    ] },
  { id: "ai-assistants", label: "AI Assistants", icon: "✦", grad: "linear-gradient(135deg,#F2A93B,#B97A1C)",
    tag: "Practical AI, not gimmicks",
    keywords: ["chatbot", "gpt", "assistant", "knowledge", "llm", "ai"],
    body: [
      "Internal assistants that answer from your documents, price lists, and SOPs — so your team stops re-asking the same three people the same questions.",
      "We begin with the use case, not the tool: what's repeatedly searched, what's repetitive, where human review must stay."
    ] },
  { id: "automation", label: "Automation", icon: "⚡", grad: "linear-gradient(135deg,#F87171,#B91C1C)",
    tag: "Kill the repetitive work",
    keywords: ["workflow", "integration", "zapier", "scripts", "repetitive", "ai"],
    body: [
      "Data re-entered in three places, reports assembled by hand, documents renamed one by one — we automate the work nobody should be doing.",
      "Quiet, reliable automations with clear boundaries and a human in the loop where judgment matters."
    ] },
  { id: "whatsapp", label: "WhatsApp Integration", icon: "💬", grad: "linear-gradient(135deg,#4ADE80,#166534)",
    tag: "Meet customers where they already are",
    keywords: ["chat", "messaging", "business api", "leads", "india"],
    body: [
      "Your customers live on WhatsApp — your website should hand off to it cleanly. Click-to-chat, structured enquiries, order updates via the Business API.",
      "We keep the habit your customers already have, but structure the data so nothing gets lost in a chat scroll."
    ] },
  { id: "analytics", label: "Analytics Setup", icon: "📈", grad: "linear-gradient(135deg,#60A5FA,#1D4ED8)",
    tag: "Know what's working",
    keywords: ["ga4", "tracking", "conversion", "measurement", "data"],
    body: [
      "Which pages bring enquiries? Which ads waste money? We set up GA4 and conversion tracking that answers real questions, and a simple monthly view you'll actually read.",
      "No drowning in dashboards — three numbers that matter beat thirty that don't."
    ] },
  { id: "hosting", label: "Hosting & Domains", icon: "🗄️", grad: "linear-gradient(135deg,#94A3B8,#475569)",
    tag: "The plumbing, handled",
    keywords: ["server", "deploy", "domain", "dns", "ssl", "maintenance"],
    body: [
      "Domains, DNS, SSL, deployment, backups, uptime — the plumbing every business site needs and no business owner should think about.",
      "We set it up properly and can keep maintaining it, so your site stays fast, secure, and yours."
    ] }
];

function highlight(label: string, needle: string) {
  if (!needle) return label;
  const i = label.toLowerCase().indexOf(needle.toLowerCase());
  if (i < 0) return label;
  return (
    <>
      {label.slice(0, i)}
      <mark className="border-b-2 border-accent bg-transparent text-accent">{label.slice(i, i + needle.length)}</mark>
      {label.slice(i + needle.length)}
    </>
  );
}

export function ServicesLauncher() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Service | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const needle = query.trim().toLowerCase();
  const matches = useMemo(
    () => SERVICES.filter((s) => !needle || (s.label + " " + s.keywords.join(" ")).toLowerCase().includes(needle)),
    [needle]
  );

  useEffect(() => {
    if (active) dialogRef.current?.showModal();
    else if (dialogRef.current?.open) dialogRef.current.close();
  }, [active]);

  // Every close path we control goes through here rather than through the dialog's
  // native "close" event — current Chrome (149) fails to deliver that event, which
  // left `active` stale (the same tile became unclickable) and broke the handoff.
  // onClose/onCancel on the <dialog> remain only as fallbacks for browser-initiated
  // closes in spec-compliant browsers.
  function closeModal() {
    setActive(null);
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  function discuss(service: Service) {
    sessionStorage.setItem(CONTACT_PREFILL_KEY, `I'd like to discuss: ${service.label}.\n`);
    window.dispatchEvent(new Event(CONTACT_PREFILL_EVENT));
    closeModal();

    const contactEl = document.getElementById("contact");
    if (!contactEl) {
      window.location.assign("/#contact");
      return;
    }
    // "auto" (not "smooth") so this defers to the html { scroll-behavior } CSS property —
    // an explicit "smooth" here would override that CSS and bypass the prefers-reduced-motion
    // guard that forces scroll-behavior back to "auto".
    const goToContact = () => {
      contactEl.scrollIntoView({ behavior: "auto", block: "start" });
      (document.getElementById("c-msg") as HTMLTextAreaElement | null)?.focus({ preventScroll: true });
    };
    // Run now, and reassert once more after the browser's dialog-close focus-restoration
    // (which can land a frame later and scroll back to the invoking tile) has had its say.
    goToContact();
    requestAnimationFrame(() => requestAnimationFrame(goToContact));
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const el = document.activeElement as HTMLElement | null;
      const typingElsewhere = !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable) && el !== inputRef.current;
      const modalOpen = dialogRef.current?.open;

      if (e.key === "Escape") {
        // The browser closes the <dialog> itself on Escape; mirror it into React state
        // here since the close event can't be trusted to arrive (see closeModal).
        if (modalOpen) { setActive(null); return; }
        if (query && !typingElsewhere) { setQuery(""); }
        return;
      }
      if (!modalOpen && el !== inputRef.current && !typingElsewhere && e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
        inputRef.current?.focus();
      }
      if (e.key === "Enter" && el === inputRef.current) {
        const first = matches[0];
        if (first) setActive(first);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [query, matches]);

  return (
    <div className="launcher-zone" id="services" aria-label="Service launcher">
      <style>{`
        .launcher-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(128px,1fr)); gap:8px; margin-top:8px; }
        @media (pointer: coarse) { .esc-hint { display:none; } }
        .launcher-tile { appearance:none; border:none; background:none; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:12px; padding:20px 8px 16px; border-radius:22px; transition:background .18s, scale .18s; }
        .launcher-tile:hover { background:rgba(255,255,255,.08); }
        .launcher-tile:active { scale:.94; }
        .launcher-tile .ico { width:68px; height:68px; border-radius:20px; display:grid; place-items:center; font-size:30px; box-shadow:inset 0 1px 0 rgba(255,255,255,.35), inset 0 -8px 14px rgba(0,0,0,.22), 0 12px 24px rgba(0,0,0,.45); transition:scale .18s cubic-bezier(.34,1.56,.64,1); }
        .launcher-tile:hover .ico { scale:1.09; }
        .launcher-tile .lbl { font-size:16px; font-weight:500; color:#F2F4F8; text-align:center; line-height:1.35; }
        @media (prefers-reduced-motion: reduce) { .launcher-tile, .launcher-tile .ico { transition:none; } }
      `}</style>

      <div className="panel-shell rounded-[32px] border border-line bg-glass p-[clamp(22px,3vw,34px)] shadow-soft backdrop-blur-[28px]">
        <div className="mx-auto flex max-w-[640px] items-center gap-3.5 rounded-2xl border-[1.5px] border-line bg-black/[.34] px-5 focus-within:border-accent/70 focus-within:shadow-[0_0_0_4px_rgba(242,169,59,.14)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="shrink-0 opacity-75" aria-hidden="true">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.4-3.4" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search services… try “web”, “content”, “ai”'
            autoComplete="off"
            spellCheck={false}
            aria-label="Search services"
            className="min-w-0 flex-1 bg-transparent py-[18px] text-xl font-medium text-ink placeholder:text-muted focus:outline-none"
          />
          <span className="esc-hint shrink-0 rounded-md border border-line px-2.5 py-1 text-sm font-bold text-muted" aria-hidden="true">esc</span>
        </div>

        <p className="min-h-[30px] pt-3 text-center text-base font-medium text-muted" aria-live="polite">
          {needle ? (matches.length ? <><b className="font-bold text-accent">{matches.length}</b> of {SERVICES.length} services match</> : "") : `${SERVICES.length} services — and counting`}
        </p>

        {matches.length > 0 ? (
          <div className="launcher-grid" role="list">
            {matches.map((s) => (
              <button key={s.id} type="button" role="listitem" className="launcher-tile" onClick={() => setActive(s)}>
                <span className="ico" style={{ background: s.grad }} aria-hidden="true">{s.icon}</span>
                <span className="lbl">{highlight(s.label, needle)}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-11 text-center text-lg text-muted">
            <p><b className="font-bold text-ink">Nothing matches &ldquo;{query.trim()}&rdquo;.</b><br />But if a business needs it, we probably do it.</p>
            <button type="button" onClick={() => { setQuery(""); inputRef.current?.focus(); }} className="button-secondary mt-4 !min-h-11 !px-5 !py-3">
              Clear search
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onCancel={() => setActive(null)}
        onClick={(e) => { if (e.target === dialogRef.current) closeModal(); }}
        aria-labelledby="launcher-modal-title"
        className="m-auto max-h-[86vh] w-[min(760px,94vw)] overflow-visible rounded-[28px] border-none bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-[10px]"
      >
        {active && (
          <article className="relative max-h-[86vh] overflow-y-auto rounded-[28px] border border-line bg-[rgba(24,25,33,.92)] p-[clamp(30px,5vw,44px)] text-ink shadow-soft backdrop-blur-[30px]">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close dialog"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[.06] text-xl text-ink hover:border-white/30 hover:bg-white/10"
            >
              ✕
            </button>
            <header className="flex items-center gap-4 pr-14">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_22px_rgba(0,0,0,.45)]" style={{ background: active.grad }} aria-hidden="true">
                {active.icon}
              </span>
              <div>
                <h2 id="launcher-modal-title" className="text-3xl font-bold leading-tight tracking-[-0.012em]">{active.label}</h2>
                <p className="mt-1.5 text-lg font-medium text-accent">{active.tag}</p>
              </div>
            </header>
            <div className="mt-6 space-y-4 text-xl leading-[1.75]" style={{ color: "#E7EAF0" }}>
              {active.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <footer className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => discuss(active)} className="button-primary">Discuss this with us →</button>
              <button type="button" onClick={closeModal} className="button-secondary">Close</button>
            </footer>
          </article>
        )}
      </dialog>
    </div>
  );
}
