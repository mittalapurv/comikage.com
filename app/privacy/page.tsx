import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHero, Prose, Section } from "@/components/content";

export const metadata: Metadata = { title: "Privacy Policy — Comikage", description: "Privacy policy for Comikage." };

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Introduction",
    body: (
      <p>
        This policy explains how Comikage, a business-first website, application, and AI automation consultancy, handles
        information received through this website.
      </p>
    )
  },
  {
    title: "Information we collect",
    body: (
      <p>
        We may collect information you voluntarily provide, such as your name, email address, company details, and
        project information. Basic technical information may also be collected through standard server logs and
        analytics.
      </p>
    )
  },
  {
    title: "How we use information",
    body: (
      <p>
        We use information to respond to enquiries, understand potential project requirements, operate and improve the
        website, and maintain appropriate business records.
      </p>
    )
  },
  {
    title: "Contact forms and email",
    body: (
      <p>
        This website currently uses email links rather than storing contact form submissions. Information you send by
        email is handled through our email provider and used to respond to your enquiry.
      </p>
    )
  },
  {
    title: "Analytics",
    body: (
      <p>
        We may use privacy-conscious website analytics to understand general traffic and usage. If analytics are
        introduced, they may process device, browser, referral, and page-view information.
      </p>
    )
  },
  {
    title: "Cookies",
    body: (
      <p>
        The current website does not intentionally use advertising cookies. Essential or analytics cookies may be
        introduced later, and this policy will be updated when appropriate.
      </p>
    )
  },
  {
    title: "Data sharing",
    body: (
      <p>
        We do not sell personal information. Information may be shared with service providers where necessary to
        operate the website, communicate, or deliver requested services, or when required by law.
      </p>
    )
  },
  {
    title: "Data retention",
    body: (
      <p>
        Information is retained only for as long as reasonably necessary for enquiries, service delivery, legal
        obligations, and legitimate business records.
      </p>
    )
  },
  {
    title: "Contact",
    body: (
      <p>
        For privacy questions or requests, email{" "}
        <Link
          href="/#contact"
          className="font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-[#DAFF5A]"
        >
          hello@comikage.com
        </Link>
        .
      </p>
    )
  }
];

export default function Privacy() {
  return (
    <Page>
      <PageHero eyebrow="Legal" title="Privacy Policy" body={<p>Last updated: 4 July 2026</p>} />
      <Section title="How we handle information" surface>
        <div className="max-w-3xl divide-y divide-line">
          {sections.map(({ title, body }) => (
            <article key={title} className="py-8 first:pt-0 last:pb-0">
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <Prose>
                <div className="mt-3">{body}</div>
              </Prose>
            </article>
          ))}
        </div>
      </Section>
    </Page>
  );
}
