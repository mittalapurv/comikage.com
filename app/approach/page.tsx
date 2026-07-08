import type { Metadata } from "next";
import { CTASection, Checklist, Page, PageHero, Prose, Section } from "@/components/content";

export const metadata: Metadata = { title: "Approach — The LetsCRUD CLARITY Framework", description: "The LetsCRUD CLARITY Framework helps businesses move from unclear digital requirements to websites, applications, and AI systems built around real business needs." };

const steps = [
  ["C", "Context", "Understand the business model, goals, constraints, and commercial reality."],
  ["L", "Listen", "Understand customers, stakeholders, objections, and decision-makers."],
  ["A", "Analyse", "Map workflows, content needs, digital gaps, and operational bottlenecks."],
  ["R", "Recommend", "Define the right website, application, automation, or phased solution."],
  ["I", "Implement", "Build using modern, AI-assisted development workflows and strong technical judgment."],
  ["T", "Test", "Review usability, performance, content clarity, and business fit."],
  ["Y", "Yield", "Support, improve, and scale after launch."]
];

export default function Approach() {
  return (
    <Page>
      <PageHero
        eyebrow="Our approach"
        title="Think first. Build second."
        body={<p>Every LetsCRUD project begins with understanding. The goal is not to rush into pages, features, or tools, but to define what the business actually needs the digital product to achieve.</p>}
      />
      <Section title="The CLARITY Framework" surface>
        <div className="overflow-x-auto pb-3">
          <div className="relative grid min-w-[1240px] grid-cols-7 gap-2.5">
            <div className="pointer-events-none absolute inset-x-2 top-[34px] z-0 h-0.5 rounded-full bg-gradient-to-r from-accent to-violet opacity-85" aria-hidden="true" />
            {steps.map(([letter, title, text]) => (
              <article key={letter} className="relative z-[1] rounded-[20px] border border-line bg-glass p-4 pb-5 shadow-card backdrop-blur-[28px]">
                <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl border border-accent/40 bg-black/40 text-2xl font-bold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,.22),inset_0_-6px_10px_rgba(0,0,0,.35),0_8px_18px_rgba(0,0,0,.45)]">
                  {letter}
                </span>
                <h3 className="mt-3.5 text-base font-bold">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-snug text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section title="Why this matters">
        <Prose>
          <p>Most digital projects fail because they begin with execution before understanding. LetsCRUD uses discovery and structured thinking to reduce ambiguity before development begins.</p>
        </Prose>
      </Section>
      <Section title="What the client gets from discovery" surface>
        <Checklist items={["Recommended project type", "Suggested website or application structure", "Page list or feature list", "Content requirements", "Add-ons required", "Phase 1 scope", "Phase 2 opportunities", "Timeline", "Commercial estimate", "Assumptions and exclusions"]} />
      </Section>
      <CTASection title="Start with clarity." label="Book a Discovery Session" />
    </Page>
  );
}
