"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Check, GearSix, List, Robot, X, Browser, CaretDown } from "@/components/icons";

const nav = [["Services", "/services"], ["Approach", "/approach"], ["Packages", "/packages"], ["About", "/about"], ["Contact", "mailto:hello@comikage.com"]];

function Logo() {
  return <a href="#top" className="flex items-center gap-3" aria-label="Comikage home">
    <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-ink text-white"><span className="h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-white" /></span>
    <span className="text-sm font-bold tracking-[0.16em]">COMIKAGE</span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-xl">
    <div className="shell flex h-20 items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        {nav.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-muted transition hover:text-ink">{label}</a>)}
        <a href="mailto:hello@comikage.com?subject=Discovery Session" className="button-primary !px-4 !py-3">Book Discovery <ArrowRight weight="bold" /></a>
      </nav>
      <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white lg:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={20} /> : <List size={22} />}</button>
    </div>
    {open && <nav className="shell flex flex-col gap-1 border-t border-line py-4 lg:hidden" aria-label="Mobile navigation">
      {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-white">{label}</a>)}
      <a href="mailto:hello@comikage.com?subject=Discovery Session" className="button-primary mt-2">Book Discovery</a>
    </nav>}
  </header>;
}

const flow = ["Business", "Strategy", "Design", "Technology", "Growth"];

function HeroVisual() {
  return <div className="relative mx-auto max-w-lg lg:mr-0">
    <div className="absolute -inset-10 rounded-full bg-blue-100/50 blur-3xl" />
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-5 shadow-soft sm:p-7">
      <div className="mb-7 flex items-center justify-between border-b border-line pb-5">
        <div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Project blueprint</p><p className="mt-1 text-sm font-semibold">Built from the inside out</p></div>
        <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> In focus</span>
      </div>
      <div className="space-y-2">
        {flow.map((item, i) => <div key={item}>
          <div className={`flex items-center gap-4 rounded-2xl border p-4 ${i === 0 ? "border-accent/20 bg-blue-50" : "border-line bg-white"}`}>
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold ${i === 0 ? "bg-accent text-white" : "bg-slate-100 text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
            <span className="font-semibold">{item}</span><span className="ml-auto h-px w-8 bg-line" />
          </div>
          {i < flow.length - 1 && <div className="ml-[34px] h-4 w-px bg-slate-300" />}
        </div>)}
      </div>
    </div>
  </div>;
}

const services = [
  { icon: Browser, n: "01", title: "Business Websites", href: "/services/business-websites", text: "Professional websites that communicate clearly, establish credibility, and generate enquiries." },
  { icon: GearSix, n: "02", title: "Business Applications", href: "/services/business-applications", text: "Internal tools, dashboards, portals, CRMs, approval workflows, and custom software for businesses that have outgrown spreadsheets." },
  { icon: Robot, n: "03", title: "AI & Automation", href: "/services/ai-automation", text: "Practical AI systems that reduce repetitive work, improve access to information, and support faster decision-making." }
];

const clarity = [
  ["C", "Context", "Understand the business model, goals, and constraints."], ["L", "Listen", "Understand customers, stakeholders, and decision-makers."],
  ["A", "Analyse", "Map workflows, content needs, and digital gaps."], ["R", "Recommend", "Define the website, application, or automation strategy."],
  ["I", "Implement", "Build with modern, AI-assisted development workflows."], ["T", "Test", "Review usability, performance, and business fit."],
  ["Y", "Yield", "Support, improve, and scale after launch."]
];

const packages = [
  { title: "Startup Website Foundation", price: "₹35,000", desc: "For founders and small businesses that need a professional first website.", list: ["Up to 5 pages", "Responsive design", "Basic copy refinement", "Contact form", "Basic SEO", "Deployment support"] },
  { title: "Business Presence Plus", price: "₹60,000", desc: "For service businesses that need stronger positioning and a complete digital presence.", list: ["Up to 8 pages", "Service page copy", "Analytics setup", "Search Console", "WhatsApp integration", "Two revision rounds"], featured: true },
  { title: "Website + Business Application", price: "Custom Engagement", desc: "For businesses that need a website plus internal dashboards, portals, CRM, or workflow tools.", list: ["Custom scope", "Login-based systems", "Admin dashboards", "Workflow automation", "Ongoing support options"] }
];

const faqs = [
  ["Who writes the website content?", "Comikage helps shape and refine the content. The client provides business knowledge; we turn it into a clear website structure and message."],
  ["How quickly can a website launch?", "A focused starter website can be launched quickly once the scope, content direction, and assets are clear. More complex websites and applications are scoped separately."],
  ["Do you only build websites?", "No. Websites are often the starting point. We also build business applications, internal tools, dashboards, portals, and AI-assisted workflows."],
  ["Can you help with hosting and email?", "Yes. Hosting, domain configuration, business email, analytics, and ongoing maintenance can be added as separate services."]
];

export default function Home() {
  return <><Header /><main id="top">
    <section className="shell grid min-h-[760px] items-center gap-16 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
      <div><p className="eyebrow">Business-first technology consultancy</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">Technology built around your <span className="text-accent">business.</span> Not the other way around.</h1>
        <p className="body-copy mt-7 max-w-2xl">Comikage helps founders and business owners clarify their digital strategy before building websites, business applications, and AI-powered systems. Every project starts with understanding the business — not just the technology.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a className="button-primary" href="mailto:hello@comikage.com?subject=Discovery Session">Book a Discovery Session <ArrowRight weight="bold" /></a><a className="button-secondary" href="#approach">See How We Work <ArrowDown /></a></div>
      </div><HeroVisual />
    </section>

    <section className="border-y border-line bg-white"><div className="shell grid grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">{["15+ Years Business Experience", "₹100 Cr+ Operations Exposure", "Business-First Planning", "AI-Assisted Delivery"].map((x, i) => <div key={x} className="flex min-h-28 items-center gap-3 p-5 sm:p-7"><span className="text-sm font-bold text-accent">0{i + 1}</span><p className="text-sm font-semibold leading-5">{x}</p></div>)}</div></section>

    <section className="shell grid gap-12 py-24 lg:grid-cols-[.75fr_1.25fr] lg:py-32"><div><p className="eyebrow">The common problem</p><h2 className="section-title">Your website shouldn&apos;t require you to become a web designer.</h2></div><div className="max-w-2xl lg:pt-8"><p className="body-copy">Many business owners hire a developer expecting a finished website. Instead, they are asked to provide the content, page structure, messaging, customer journey, and calls-to-action themselves.</p><p className="mt-6 text-xl font-semibold leading-8 text-ink">Most developers simply build what they are given.</p><p className="body-copy mt-6">Comikage works differently. We help shape the business message before building the digital product.</p></div></section>

    <section id="approach" className="bg-ink py-24 text-white lg:py-32"><div className="shell"><p className="eyebrow !text-blue-400">A different starting point</p><h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Most developers ask, “What pages do you want?”</h2><p className="mt-4 text-xl text-slate-400 sm:text-2xl">We ask, “How does your business work?”</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2"><Contrast title="Typical Web Development" items={["Client provides content", "Client decides page structure", "Developer builds screens", "Website looks acceptable", "Business impact is unclear"]} /><Contrast title="The Comikage Approach" items={["Understand the business", "Clarify customers and offering", "Define content and conversion flow", "Build website or application", "Improve based on business goals"]} active /></div>
    </div></section>

    <section id="services" className="shell py-24 lg:py-32"><p className="eyebrow">What we build</p><h2 className="section-title">Websites, applications, and AI systems designed around real business needs.</h2><div className="mt-14 grid gap-5 lg:grid-cols-3">{services.map(({ icon: Icon, n, title, href, text }) => <a href={href} className="card flex min-h-[330px] flex-col p-7 sm:p-9" key={title}><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-accent"><Icon size={24} /></span><span className="text-xs font-semibold text-slate-400">{n}</span></div><h3 className="mt-auto pt-14 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-muted">{text}</p></a>)}</div></section>

    <section className="border-y border-line bg-white py-24 lg:py-32"><div className="shell"><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Our method</p><h2 className="section-title">The CLARITY Framework</h2><a href="/approach" className="button-secondary mt-7">Explore our approach <ArrowRight /></a></div><p className="body-copy lg:pt-8">Every Comikage project follows a structured discovery-to-delivery process, so the final product is based on understanding rather than guesswork.</p></div><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">{clarity.map(([letter, title, text], i) => <div key={letter} className={`bg-white p-7 ${i === 6 ? "lg:col-span-2" : ""}`}><span className="text-3xl font-semibold text-accent">{letter}</span><h3 className="mt-8 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>)}</div></div></section>

    <section id="packages" className="shell py-24 lg:py-32"><p className="eyebrow">Engagements</p><h2 className="section-title">Start with the right scope. Expand when the business is ready.</h2><div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">{packages.map(p => <article key={p.title} className={`relative flex flex-col rounded-2xl border p-7 sm:p-8 ${p.featured ? "border-accent bg-white shadow-soft" : "border-line bg-white shadow-card"}`}>{p.featured && <span className="absolute right-5 top-5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-accent">Most popular</span>}<h3 className="max-w-[220px] text-xl font-semibold leading-7">{p.title}</h3><p className="mt-8 text-xs font-semibold uppercase tracking-wider text-muted">{p.price === "Custom Engagement" ? "" : "Starting from"}</p><p className="mt-1 text-3xl font-semibold tracking-tight">{p.price}</p><p className="mt-5 min-h-20 text-sm leading-6 text-muted">{p.desc}</p><div className="my-6 h-px bg-line" /><ul className="space-y-3">{p.list.map(x => <li key={x} className="flex gap-3 text-sm"><Check className="mt-0.5 shrink-0 text-accent" weight="bold" />{x}</li>)}</ul><a href="mailto:hello@comikage.com?subject=Project Enquiry" className={p.featured ? "button-primary mt-8" : "button-secondary mt-8"}>Discuss this package <ArrowRight /></a></article>)}</div></section>

    <section className="border-t border-line bg-white py-24 lg:py-32"><div className="shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">FAQ</p><h2 className="section-title">Questions, answered plainly.</h2></div><div className="divide-y divide-line">{faqs.map(([q, a], i) => <details key={q} className="group py-6" open={i === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold"><span>{q}</span><CaretDown className="shrink-0 transition group-open:rotate-180" /></summary><p className="mt-4 max-w-2xl leading-7 text-muted">{a}</p></details>)}</div></div></section>

    <section id="contact" className="shell py-16 lg:py-24"><div className="relative overflow-hidden rounded-[28px] bg-accent px-6 py-16 text-center text-white sm:px-12 lg:py-24"><div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/15" /><div className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-white/10" /><div className="relative mx-auto max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-100">Start with clarity</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Ready to build technology around your business?</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">Tell us what you are trying to build. We will help clarify the right first step.</p><a className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-accent transition hover:bg-ink hover:text-white" href="mailto:hello@comikage.com?subject=Discovery Session">Book a Discovery Session <ArrowRight weight="bold" /></a></div></div></section>
  </main><Footer /></>;
}

function Contrast({ title, items, active = false }: { title: string; items: string[]; active?: boolean }) {
  return <article className={`rounded-2xl border p-7 sm:p-9 ${active ? "border-blue-500/40 bg-blue-500/10" : "border-white/10 bg-white/[.035]"}`}><div className="flex items-center gap-3"><span className={`h-2.5 w-2.5 rounded-full ${active ? "bg-blue-400" : "bg-slate-600"}`} /><h3 className="text-lg font-semibold">{title}</h3></div><ul className="mt-8 space-y-4">{items.map((x, i) => <li className="flex items-center gap-3 text-sm text-slate-300" key={x}><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${active ? "bg-blue-500/20 text-blue-300" : "bg-white/5 text-slate-500"}`}>{active ? <Check weight="bold" /> : i + 1}</span>{x}</li>)}</ul></article>;
}

function Footer() {
  return <footer className="border-t border-line bg-white"><div className="shell py-12"><div className="flex flex-col justify-between gap-10 md:flex-row"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-muted">Business-first websites, applications, and AI systems.</p></div><div className="flex flex-wrap gap-x-8 gap-y-4">{nav.map(([label, href]) => <a key={href} href={href} className="text-sm text-muted hover:text-ink">{label}</a>)}<a href="/privacy" className="text-sm text-muted hover:text-ink">Privacy Policy</a></div></div><div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-7 text-sm text-muted sm:flex-row"><a href="mailto:hello@comikage.com" className="hover:text-ink">hello@comikage.com</a><p>© 2026 Comikage. All rights reserved.</p></div></div></footer>;
}
