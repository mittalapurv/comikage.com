import Link from "next/link";
import Image from "next/image";
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

// Names and inclusions mirror /packages — keep the two pages in sync when editing.
// `outcome` lines describe what the build does for its reader — keep them free of
// unverified metrics; client-attributed quotes/numbers go live only after sign-off.
const work = [
  {
    title: "Apurvakriti Infrastructure",
    tag: "Business website",
    text: "Corporate site for a rail-infrastructure company — projects, tenders, careers, and enquiries.",
    outcome: "Company-profile PDFs and courier packets → one living project record, built for the way prequalification committees actually read.",
    img: "/portfolio/apurvakriti.webp",
    href: "https://apurvakriti.com"
  },
  {
    title: "Design Lingua",
    tag: "Business website",
    text: "Studio site for an interior-design practice — services, project portfolio, and recruitment.",
    outcome: "A design practice judged on taste, showing its taste — portfolio first, brochure second.",
    img: "/portfolio/designlingua.webp",
    href: "http://designlingua.com"
  },
  {
    title: "Rizune Trips",
    tag: "Business application",
    text: "Executive travel desk — booking requests, approvals, documents, and expenses in one internal portal.",
    outcome: "Travel plans scattered across WhatsApp → request, approve, book, file. One auditable trail.",
    img: "/portfolio/rizune-trips.webp",
    href: null
  }
];

const packages = [
  { title: "Startup Website Foundation", from: "Starting at", price: "₹35,000", text: "A sharp, credible first website — up to 5 pages, live in weeks, not months." },
  { title: "Business Presence Plus", from: "Starting at", price: "₹60,000", text: "Multi-page site with stronger positioning, analytics, and WhatsApp integration." },
  { title: "Website + Business Application", from: "Scoped to your workflow", price: "Custom", text: "Workflow tools, dashboards, assistants — priced after we map the work." }
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
            <Link href="#contact" className="font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-[#FFC46B]">
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
              LetsCRUD turns <span className="text-accent">unclear requirements</span> — the WhatsApp threads, the spreadsheets, the half-written briefs — into websites, applications, and AI systems that <span className="text-accent">fit the way your business actually works</span>.
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
          </div>
        </section>

        <section id="work" aria-label="Selected work" className="shell pb-3 pt-12 text-center">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3.5 text-[clamp(26px,2.6vw,34px)] font-bold tracking-[-0.012em]">
            Real sites. Real systems.
          </h2>
          <div className="panel-shell mt-7 grid gap-3.5 text-left sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => {
              const card = (
                <>
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={w.img}
                      alt={`Screenshot of ${w.title}`}
                      width={1280}
                      height={800}
                      className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-4 text-[14px] font-bold uppercase tracking-[0.1em] text-accent">{w.tag}</p>
                  <h3 className="mt-1.5 text-lg font-bold">
                    {w.title}
                    {w.href && <span className="ml-2 font-semibold text-muted" aria-hidden="true">↗</span>}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{w.text}</p>
                  <p className="mt-3.5 border-t border-line pt-3.5 text-[15px] leading-relaxed text-ink">{w.outcome}</p>
                </>
              );
              return w.href ? (
                <a key={w.title} href={w.href} target="_blank" rel="noopener noreferrer" className="group glass-card block p-4 pb-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-5 sm:pb-7">
                  {card}
                </a>
              ) : (
                <div key={w.title} className="group glass-card p-4 pb-6 sm:p-5 sm:pb-7">
                  {card}
                </div>
              );
            })}
          </div>
        </section>

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
          <Link href="/packages" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-[#FFC46B]">
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
