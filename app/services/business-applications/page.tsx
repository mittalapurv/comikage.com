import type { Metadata } from "next";
import { CTASection, Checklist, FeatureCard, Page, PageHero, Prose, Section } from "@/components/content";

export const metadata: Metadata = {
  title: "Business Application Development — Comikage",
  description:
    "Custom business applications, dashboards, portals, CRM-style systems, and workflow tools for businesses that need software around real operations."
};

const examples = [
  "Leads are not tracked properly",
  "Approvals happen informally",
  "Project status is unclear",
  "Documents are scattered",
  "Clients keep asking for updates",
  "Reports take too long to prepare",
  "Teams depend on a few people remembering everything"
];

const builds = [
  "Admin dashboards",
  "Client portals",
  "CRM-style systems",
  "Approval workflows",
  "Project tracking tools",
  "Document management systems",
  "Quotation tools",
  "Reporting dashboards",
  "Internal operations tools"
];

const clarify = [
  "Who will use the system",
  "What each user needs to do",
  "What data needs to be captured",
  "What approvals or statuses exist",
  "What reports are needed",
  "What should be automated",
  "What can be deferred to later phases"
];

const phases = ["Core workflow", "Reporting and automation", "Client portal or integrations", "AI-assisted features"];

export default function BusinessApplications() {
  return (
    <Page>
      <PageHero
        eyebrow="Business Applications"
        title="Custom business applications for work that has outgrown spreadsheets."
        body={
          <p>
            When operations depend on Excel files, WhatsApp messages, email follow-ups, and manual status tracking, growth becomes
            harder to manage. Comikage builds practical applications around how your team actually works.
          </p>
        }
      />

      <Section title="Focused tools for specific bottlenecks" surface>
        <Prose>
          <p>Many businesses do not need a large enterprise system. They need a focused internal tool that solves a specific operational bottleneck.</p>
        </Prose>
        <div className="mt-8">
          <Checklist items={examples} />
        </div>
      </Section>

      <Section title="What we build">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((x, i) => (
            <FeatureCard key={x} title={x} number={String(i + 1).padStart(2, "0")} />
          ))}
        </div>
      </Section>

      <Section title="We begin by mapping the workflow" surface>
        <p className="body-copy mb-8 max-w-3xl">Before building screens, we clarify:</p>
        <Checklist items={clarify} />
      </Section>

      <Section title="Phased development">
        <p className="body-copy mb-8 max-w-3xl">
          Business applications should not be overbuilt on day one. Comikage recommends phased development:
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          {phases.map((x, i) => (
            <FeatureCard key={x} title={x} number={`Phase ${i + 1}`} />
          ))}
        </div>
      </Section>

      <CTASection title="Turn a messy workflow into a usable system." label="Discuss an Application" />
    </Page>
  );
}
