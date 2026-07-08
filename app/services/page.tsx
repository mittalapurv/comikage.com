import type { Metadata } from "next";
import { CTASection, FeatureCard, Page, PageHero, Prose, Section, ServiceCard } from "@/components/content";
import { ServicesLauncher } from "@/components/services-launcher";

export const metadata: Metadata = {
  title: "Services — LetsCRUD",
  description: "LetsCRUD offers business websites, custom business applications, and practical AI automation systems for founders and growing companies."
};

export default function Services() {
  const scope = ["Understand the business", "Clarify the customer journey", "Identify operational gaps", "Build in practical phases"];
  return (
    <Page>
      <PageHero
        eyebrow="Services"
        title="Digital services built around business requirements."
        body={<p>LetsCRUD helps businesses define, design, and build websites, applications, and AI-assisted workflows that support real business outcomes.</p>}
      />

      <section aria-label="Search everything we do" className="shell -mt-6 pb-20 sm:-mt-8 lg:pb-24">
        <h2 className="eyebrow text-center">Search everything we do</h2>
        <div className="mt-6">
          <ServicesLauncher />
        </div>
      </section>

      <Section eyebrow="Or browse the three practice areas" title="The right digital scope" surface>
        <Prose>
          <p>
            A website may be the first requirement, but it is rarely the full story. Many businesses also need better enquiry handling, internal
            dashboards, client portals, workflow systems, or automation. LetsCRUD helps identify the right digital scope before development begins.
          </p>
        </Prose>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <ServiceCard title="Business Websites" href="/services/business-websites">
            Professional websites and landing pages that communicate clearly, build credibility, and generate better enquiries.
          </ServiceCard>
          <ServiceCard title="Business Applications" href="/services/business-applications">
            Custom dashboards, portals, CRMs, approval workflows, and internal tools for businesses that have outgrown spreadsheets.
          </ServiceCard>
          <ServiceCard title="AI & Automation" href="/services/ai-automation">
            Practical AI systems and automations that reduce repetitive work, improve access to information, and support faster decisions.
          </ServiceCard>
        </div>
      </Section>

      <Section title="How we choose the right scope">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scope.map((x, i) => (
            <FeatureCard key={x} title={x} number={`0${i + 1}`} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure what you need yet?"
        body="That is exactly where LetsCRUD is useful. We help clarify whether your first step should be a website, an application, automation, or a phased combination."
        label="Start a Discovery Conversation"
      />
    </Page>
  );
}
