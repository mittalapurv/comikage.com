import Link from "next/link";
import { Footer, Header } from "@/components/site-shell";
import { ServicesLauncher } from "@/components/services-launcher";
import { ContactForm } from "@/components/contact-form";

const clarity = [
  ["C", "Context", "Business model, goals, constraints."],
  ["L", "Listen", "Customers, stakeholders, decision-makers."],
  ["A", "Analyse", "Workflows, content needs, digital gaps."],
  ["R", "Recommend", "The right website, app, or automation."],
  ["I", "Implement", "Modern, AI-assisted delivery."],
  ["T", "Test", "Usability, performance, business fit."],
  ["Y", "Yield", "Support, improve, scale after launch."]
];

const packages = [
  { title: "Starter Site", from: "Starting at", price: "₹35,000", text: "A sharp, credible one-page presence — live in weeks, not months." },
  { title: "Business Website", from: "Starting at", price: "₹60,000", text: "Full multi-page site with content, SEO basics, and business email." },
  { title: "Applications & AI", from: "Scoped to your workflow", price: "Custom", text: "Workflow tools, dashboards, assistants — priced after we map the work." }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="shell pb-3 pt-[clamp(140px,17vh,190px)] text-center">
          <p className="eyebrow">Business-first technology consultancy</p>
          <h1 className="mt-4 text-balance text-[clamp(44px,5vw,72px)] font-bold leading-[1.08] tracking-[-0.018em]">
            What does your business need?
          </h1>
          <p className="mx-auto mt-5 max-w-[44ch] text-[23px] leading-relaxed text-muted">
            Type it. We probably build it. If not,{" "}
            <Link href="#contact" className="font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-[#DAFF5A]">
              get in touch
            </Link>
            .
          </p>
        </section>

        <section className="shell pb-6 pt-8">
          <ServicesLauncher />
        </section>

        <section aria-label="Our mission" className="relative border-y border-white/[.07] py-[clamp(64px,9vh,104px)] text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_50%,rgba(139,124,246,.17),transparent_72%)]" aria-hidden="true" />
          <div className="shell relative">
            <p className="mx-auto max-w-[30em] text-balance text-[clamp(24px,2.4vw,30px)] font-medium leading-relaxed tracking-[-0.008em]">
              Comikage turns <span className="text-accent">unclear requirements</span> — the WhatsApp threads, the spreadsheets, the half-written briefs — into websites, applications, and AI systems that <span className="text-accent">fit the way your business actually works</span>.
            </p>
          </div>
        </section>

        <section id="process" aria-label="The CLARITY process" className="shell pb-2 pt-[clamp(52px,7vh,80px)] text-center">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3.5 text-[clamp(26px,2.6vw,34px)] font-bold tracking-[-0.012em]">
            Seven letters. <span className="text-accent">CLARITY.</span>
          </h2>
          <div className="mt-8 overflow-x-auto pb-3">
            <div className="panel-shell relative grid min-w-[1080px] grid-cols-7 gap-2.5 text-left">
              <div className="pointer-events-none absolute inset-x-2 top-[34px] z-0 h-0.5 rounded-full bg-gradient-to-r from-accent to-violet opacity-85" aria-hidden="true" />
              {clarity.map(([letter, title, text]) => (
                <div key={letter} className="relative z-[1] rounded-[20px] border border-line bg-glass p-4 pb-5 shadow-card backdrop-blur-[28px]">
                  <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl border border-accent/40 bg-black/40 text-2xl font-bold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,.22),inset_0_-6px_10px_rgba(0,0,0,.35),0_8px_18px_rgba(0,0,0,.45)]">
                    {letter}
                  </span>
                  <b className="mt-3.5 block text-base font-bold">{title}</b>
                  <span className="mt-1.5 block text-[15px] leading-snug text-muted">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="shell pb-3 pt-11">
          <div className="panel-shell glass-card p-[clamp(26px,3.4vw,44px)]">
            <p className="eyebrow">Proof, not decoration</p>
            <blockquote className="mt-4 max-w-[34em] text-balance text-[clamp(23px,2.4vw,28px)] font-medium leading-tight tracking-[-0.01em]">
              &ldquo;The technology is only useful when it fits the way the business <span className="text-accent">actually works</span>.&rdquo;
            </blockquote>
            <p className="mt-3.5 text-base text-muted">
              <b className="font-bold text-ink">Apurv Mittal</b> — Founder. Electronics engineer, M.S. Systems Engineering &amp; Robotics, 15+ years running business operations across infrastructure and civil engineering.
            </p>
            <div className="mt-7 grid gap-x-11 gap-y-5 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <b className="mb-2 block text-[15px] font-bold uppercase tracking-[0.1em] text-violet">Case 01 · Placeholder</b>
                <p className="max-w-[62ch] text-lg leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">A contractor&apos;s approval chaos <span className="font-bold text-accent">→</span> a three-screen workflow tool.</strong> Approvals that took 4 days now clear in one.
                </p>
              </div>
              <div>
                <b className="mb-2 block text-[15px] font-bold uppercase tracking-[0.1em] text-violet">Case 02 · Placeholder</b>
                <p className="max-w-[62ch] text-lg leading-relaxed text-muted">
                  <strong className="font-semibold text-ink">A distributor&apos;s WhatsApp order pile <span className="font-bold text-accent">→</span> a structured order portal.</strong> Zero missed orders in the first quarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
          Planned: a "Portfolio" section goes here (between Proof and Packages) — a clickable
          mindmap whose nodes name real sites/apps (e.g. designlingua.com, apurvakriti.com) and
          open a full-page modal with an iframe, permissions allowing. Deferred to a later stage
          per Apurv — not built yet.
        */}

        <section id="pricing" aria-label="Packages" className="shell pb-3 pt-12 text-center">
          <p className="eyebrow">Packages</p>
          <div className="panel-shell mt-6 grid gap-3.5 text-left sm:grid-cols-3">
            {packages.map((p) => (
              <div key={p.title} className="glass-card p-[clamp(24px,3vw,32px)]">
                <h3 className="text-lg font-bold tracking-wide">{p.title}</h3>
                <p className="mt-3.5 text-[15px] font-semibold uppercase tracking-[0.08em] text-muted">{p.from}</p>
                <p className="mt-1 text-[clamp(30px,3vw,38px)] font-bold tracking-[-0.015em]">{p.price}</p>
                <p className="mt-3 text-base leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
          <Link href="/packages" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-[#DAFF5A]">
            View packages →
          </Link>
        </section>

        <section id="contact" className="shell scroll-mt-28 pb-3 pt-12">
          <div className="panel-shell glass-card p-[clamp(26px,3.4vw,44px)]">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-3 text-[clamp(26px,2.8vw,34px)] font-bold tracking-[-0.012em]">Tell us what&apos;s unclear. That&apos;s our starting point.</h2>
            <p className="mt-2.5 max-w-[52ch] text-lg leading-relaxed text-muted">
              A rough idea is enough — two lines about your business and what&apos;s slowing it down. We&apos;ll reply within one working day.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
