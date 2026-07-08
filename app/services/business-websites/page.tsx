import type { Metadata } from "next";
import { CTASection, Checklist, PackageCard, Page, PageHero, Prose, Section } from "@/components/content";

export const metadata: Metadata = {
  title: "Business Website Development — LetsCRUD",
  description:
    "Business-first website development for founders, startups, consultants, and growing companies that need clear positioning, content structure, and professional execution."
};

const clarify = [
  "Your positioning",
  "Your ideal customer",
  "Your service structure",
  "Your customer journey",
  "Your calls-to-action",
  "Your page hierarchy",
  "Your launch scope"
];

const deliver = [
  "Homepage",
  "About page",
  "Services pages",
  "Contact section",
  "Lead capture form",
  "Basic SEO setup",
  "Mobile-responsive design",
  "Copy refinement",
  "Deployment support",
  "Analytics and Search Console setup as add-ons"
];

const suitableFor = [
  "Startups",
  "Consultants",
  "Professional firms",
  "Local businesses",
  "Service businesses",
  "Founders launching a new offer",
  "Companies redesigning an outdated site"
];

export default function BusinessWebsites() {
  return (
    <Page>
      <PageHero
        eyebrow="Business Websites"
        title="Business websites that say the right thing before they look good."
        body={
          <p>
            A good website is a structured business communication system that explains who you are, what you offer, why
            customers should trust you, and what they should do next.
          </p>
        }
      />

      <Section title="Most business websites fail before design begins" surface>
        <Prose>
          <p>
            The business owner is asked to supply the content, decide the page structure, define the messaging, and
            imagine the customer journey. The developer then builds what is provided.
          </p>
          <p>The result may look acceptable, but it often does not communicate clearly or generate meaningful enquiries.</p>
        </Prose>
      </Section>

      <Section title="LetsCRUD helps shape the website before building it">
        <Checklist items={clarify} />
      </Section>

      <Section title="Typical deliverables" surface>
        <Checklist items={deliver} />
      </Section>

      <Section title="Suitable for">
        <Checklist columns={3} items={suitableFor} />
      </Section>

      <Section title="Starting packages" surface>
        <div className="grid gap-5 lg:grid-cols-2">
          <PackageCard
            title="Startup Website Foundation"
            price="Starting from ₹35,000"
            description="A professional first website with a clear structure."
            items={["Up to 5 pages", "Responsive design", "Basic copy refinement"]}
          />
          <PackageCard
            title="Business Presence Plus"
            price="Starting from ₹60,000"
            description="A more complete presence with stronger positioning."
            items={["Up to 8 pages", "Service page refinement", "Better conversion flow"]}
            featured
          />
        </div>
      </Section>

      <CTASection title="Build a website that explains your business clearly." label="Discuss a Website Project" />
    </Page>
  );
}
