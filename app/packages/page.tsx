import type { Metadata } from "next";
import { CTASection, FeatureCard, PackageCard, Page, PageHero, Prose, Section } from "@/components/content";

export const metadata: Metadata = {
  title: "Packages — Comikage Website & Application Development",
  description:
    "Comikage offers business-first website and application development packages, starting with focused websites and expanding into business applications, AI automation, and ongoing support."
};

const packs = [
  {
    title: "Startup Website Foundation",
    price: "Starting from ₹35,000",
    description: "For founders and small businesses that need a professional first website.",
    items: [
      "Discovery call",
      "Up to 5 pages",
      "Website structure planning",
      "Basic copy refinement",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "Deployment support",
      "1 revision round"
    ]
  },
  {
    title: "Business Presence Plus",
    price: "Starting from ₹60,000",
    description: "For service businesses that need stronger positioning and a more complete digital presence.",
    items: [
      "Deeper positioning support",
      "Up to 8 pages",
      "Service page copy refinement",
      "Analytics setup",
      "Search Console setup",
      "WhatsApp integration",
      "2 revision rounds",
      "Better conversion flow"
    ],
    featured: true
  },
  {
    title: "Website + Business Application",
    price: "Custom Engagement",
    description: "For businesses that need a website plus internal dashboards, portals, CRM, or workflow tools.",
    items: [
      "Custom project scoping",
      "Website planning",
      "Admin dashboard or portal planning",
      "Workflow mapping",
      "Login-based systems where required",
      "Automation opportunities",
      "Ongoing support options"
    ]
  }
];

const addons = [
  "Domain setup",
  "Hosting setup",
  "Business email setup",
  "Google Workspace setup",
  "Website maintenance",
  "Blog/content updates",
  "AI chatbot",
  "CRM integration",
  "Custom dashboard",
  "Analytics and Search Console",
  "WhatsApp integration",
  "PDF proposal or quotation tools"
];

export default function Packages() {
  return (
    <Page>
      <PageHero
        eyebrow="Packages"
        title="Start with the right scope. Expand when the business is ready."
        body={<p>Comikage engagements are structured to help businesses launch with clarity and then grow into deeper digital systems when needed.</p>}
      />
      <Section title="Choose a practical starting point" surface>
        <div className="grid gap-5 lg:grid-cols-3">
          {packs.map((p) => (
            <PackageCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
      <Section title="Add-ons">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((x, i) => (
            <FeatureCard key={x} title={x} number={String(i + 1).padStart(2, "0")} />
          ))}
        </div>
      </Section>
      <Section title="An important note" surface>
        <Prose>
          <p>
            Pricing depends on clarity of scope, content readiness, number of pages, integrations, and whether the project is a website, application, or
            phased digital system.
          </p>
        </Prose>
      </Section>
      <CTASection title="Need help choosing the right package?" label="Ask for a Recommendation" />
    </Page>
  );
}
