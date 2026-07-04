import type { Metadata } from "next";
import { Page, PageHero, Prose, Section } from "@/components/content";
export const metadata: Metadata = { title: "Privacy Policy — Comikage", description: "Privacy policy for Comikage." };
const sections=[
  ["Introduction",<p key="p">This policy explains how Comikage, a business-first website, application, and AI automation consultancy, handles information received through this website.</p>],
  ["Information we collect",<p key="p">We may collect information you voluntarily provide, such as your name, email address, company details, and project information. Basic technical information may also be collected through standard server logs and analytics.</p>],
  ["How we use information",<p key="p">We use information to respond to enquiries, understand potential project requirements, operate and improve the website, and maintain appropriate business records.</p>],
  ["Contact forms and email",<p key="p">This website currently uses email links rather than storing contact form submissions. Information you send by email is handled through our email provider and used to respond to your enquiry.</p>],
  ["Analytics",<p key="p">We may use privacy-conscious website analytics to understand general traffic and usage. If analytics are introduced, they may process device, browser, referral, and page-view information.</p>],
  ["Cookies",<p key="p">The current website does not intentionally use advertising cookies. Essential or analytics cookies may be introduced later, and this policy will be updated when appropriate.</p>],
  ["Data sharing",<p key="p">We do not sell personal information. Information may be shared with service providers where necessary to operate the website, communicate, or deliver requested services, or when required by law.</p>],
  ["Data retention",<p key="p">Information is retained only for as long as reasonably necessary for enquiries, service delivery, legal obligations, and legitimate business records.</p>],
  ["Contact",<p key="p">For privacy questions or requests, email <a className="font-semibold text-accent hover:underline" href="mailto:hello@comikage.com">hello@comikage.com</a>.</p>]
] as const;
export default function Privacy(){return <Page><PageHero eyebrow="Legal" title="Privacy Policy" body={<p>Last updated: 4 July 2026</p>} /><Section title="How we handle information" surface><div className="max-w-3xl divide-y divide-line">{sections.map(([title,body])=><article key={title} className="py-8 first:pt-0"><h2 className="text-xl font-semibold">{title}</h2><Prose><div className="mt-3">{body}</div></Prose></article>)}</div></Section></Page>}
