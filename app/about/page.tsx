import type { Metadata } from "next";
import Link from "next/link";
import { CTASection, Checklist, FeatureCard, Page, PageHero, Prose, Section, TwoColumnSection } from "@/components/content";

export const metadata: Metadata = {
  title: "About LetsCRUD — Founder-Led Business Technology Studio",
  description: "LetsCRUD is a founder-led business technology studio by Apurv Mittal, helping businesses clarify requirements before building websites, applications, and AI-powered digital systems."
};

const businessReality = [
  "Workflows that have evolved without being formally documented",
  "Vendor coordination, approvals, and operational dependencies",
  "Spreadsheets carrying more responsibility than they were designed for",
  "Financial decisions made with incomplete or scattered information",
  "Projects moving through ambiguity, changing priorities, and manual follow-up",
  "Software requirements that different stakeholders describe differently"
];

const builds = [
  ["Business websites", "Clear, credible websites and landing pages that organise the business message, explain the offer, and make the next step easier for the customer."],
  ["Business applications", "Dashboards, portals, CRM-style systems, approval workflows, reporting tools, and focused software shaped around real operations."],
  ["AI and automation", "Practical assistants, document search, workflow automation, and AI-supported tools with clear boundaries and useful human review points."]
];

export default function About() {
  return <Page>
    <PageHero eyebrow="About LetsCRUD" title="Built by a business operator, not just a developer." body={<>
      <p>LetsCRUD is a business-first technology studio founded to help business owners build websites, applications, and AI-powered systems with greater clarity.</p>
      <p>The idea behind LetsCRUD comes from a simple observation: most business owners do not struggle because they cannot find someone to write code or design pages. They struggle because the real business requirement is often unclear, unstructured, or difficult to translate into a digital product.</p>
      <Link href="/#contact" className="button-primary mt-3">Let&apos;s Begin With the Business</Link>
    </>} />

    <Section eyebrow="The founder" title="A technical education. A business operator’s perspective." surface>
      <div className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <aside className="card overflow-hidden p-6 sm:p-8">
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border border-line bg-white/[.04]">
            <div className="absolute h-52 w-52 rounded-full border border-violet/40" />
            <div className="absolute h-32 w-32 rotate-45 rounded-[28px] border border-accent/30 bg-white/[.05]" />
            <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-accent text-2xl font-bold text-canvas shadow-[0_0_26px_rgba(198,243,47,.22)]">AM</div>
          </div>
          <p className="mt-7 text-2xl font-semibold tracking-tight">Apurv Mittal</p>
          <p className="mt-1 text-[15px] font-semibold text-accent">Founder, LetsCRUD</p>
          <p className="mt-5 border-t border-line pt-5 text-base leading-relaxed text-muted">Business operator, systems thinker, and AI-assisted technology builder.</p>
        </aside>
        <Prose>
          <p>Apurv Mittal’s path into technology did not begin inside a web agency. It began with electronics engineering, followed by a master’s degree in systems engineering and robotics—fields that encourage thinking in relationships, constraints, feedback loops, and complete systems rather than isolated parts.</p>
          <p>That technical foundation was followed by more than 15 years around business operations, including the operational reality of infrastructure and civil engineering businesses. The work involved the less visible machinery that keeps a business moving: vendors, approvals, spreadsheets, financial decisions, project execution, manual coordination, and problems that rarely arrive in a neat specification.</p>
          <p>It also created practical exposure to significant business scale and operational complexity, and to the challenge of thinking through enterprise and business software requirements before a system is built.</p>
          <blockquote className="border-l-2 border-accent pl-6 text-xl font-semibold leading-8 text-ink">“The technology is only useful when it fits the way the business actually works.”</blockquote>
        </Prose>
      </div>
    </Section>

    <Section eyebrow="Why it matters" title="Clients should not have to translate their business into developer language.">
      <TwoColumnSection>
        <Prose><p>Most developers begin by asking for a page list, content document, feature requirements, and examples of what the client likes. Those inputs are useful—but many business owners are seeking help precisely because those decisions are not yet clear.</p><p>Asking the client to define everything first transfers the most important thinking back to them.</p></Prose>
        <Prose><p>LetsCRUD begins one level earlier. We discuss the business, customer, offer, workflow, constraints, and decisions the digital product needs to support. From that understanding, the page structure, content direction, system scope, and technical requirements become clearer.</p><p>This reduces guesswork before design and development begin.</p></Prose>
      </TwoColumnSection>
    </Section>

    <Section eyebrow="Business reality" title="Technology has to survive contact with operations." surface>
      <p className="body-copy mb-9 max-w-3xl">Business requirements are rarely clean at the start. They are shaped by existing habits, people, commercial constraints, and years of practical workarounds. LetsCRUD understands that reality.</p>
      <Checklist items={businessReality} />
    </Section>

    <Section eyebrow="How technology is used" title="AI-assisted, but judgment-led.">
      <TwoColumnSection>
        <Prose><p>LetsCRUD uses modern AI-assisted development workflows to explore, prototype, review, and build efficiently. These tools can shorten feedback loops and make focused delivery possible.</p><p>But speed is not a substitute for judgment. AI does not decide what the business should communicate, which workflow matters most, where risk sits, or what should be deferred.</p></Prose>
        <div className="glass-card p-8 sm:p-10"><p className="eyebrow">The operating principle</p><p className="mt-5 text-2xl font-semibold leading-9 tracking-tight">Use AI for leverage. Use human judgment for direction, scope, and business fit.</p></div>
      </TwoColumnSection>
    </Section>

    <Section eyebrow="What we build" title="Practical digital systems around real business needs." surface>
      <div className="grid gap-5 lg:grid-cols-3">{builds.map(([title, description], index) => <FeatureCard key={title} title={title} number={`0${index + 1}`}>{description}</FeatureCard>)}</div>
    </Section>

    <Section eyebrow="The working relationship" title="Start with understanding. Build in sensible phases.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard number="01" title="Understand"><p>Discuss the business model, customer, offer, workflow, and constraints.</p></FeatureCard>
        <FeatureCard number="02" title="Clarify"><p>Turn business knowledge into a clear website structure, feature scope, or automation use case.</p></FeatureCard>
        <FeatureCard number="03" title="Build"><p>Design and develop the focused first phase with modern, maintainable tools.</p></FeatureCard>
        <FeatureCard number="04" title="Improve"><p>Review what is working, then expand only where the business case is clear.</p></FeatureCard>
      </div>
    </Section>

    <Section eyebrow="A good fit" title="Who should work with LetsCRUD" surface>
      <Prose><p>LetsCRUD is for founders, consultants, professional firms, service businesses, and growing companies that want someone to think with them—not simply wait for instructions.</p><p>It is particularly useful when the business problem is understood but the digital solution is not yet fully defined: when you know the website needs to communicate better, the workflow needs structure, or AI may be useful, but the right scope still needs careful thought.</p><p>If you already have a clear specification, LetsCRUD can help execute it. If you have business knowledge, operational friction, and an unfinished idea, LetsCRUD can help turn that ambiguity into a practical first step.</p></Prose>
    </Section>

    <CTASection title="Let’s begin with the business." body="Tell us what you are trying to improve, build, or understand. We will help clarify the right digital first step." label="Discuss a Project" />
  </Page>;
}
