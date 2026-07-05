import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "./icons";
import { Footer, Header } from "./site-shell";

export function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: ReactNode }) {
  return (
    // Top padding clears the fixed glass nav pill
    <section className="shell pb-16 pt-[clamp(140px,16vh,180px)] sm:pb-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-6 max-w-5xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.018em] sm:text-6xl lg:text-[64px]">{title}</h1>
      <div className="body-copy mt-7 max-w-3xl space-y-5">{body}</div>
    </section>
  );
}

export function Section({ eyebrow, title, children, surface = false, id }: { eyebrow?: string; title: string; children: ReactNode; surface?: boolean; id?: string }) {
  return (
    <section id={id} className={`border-t border-line py-20 lg:py-28 ${surface ? "bg-white/[.03]" : ""}`}>
      <div className="shell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function TwoColumnSection({ children }: { children: ReactNode }) {
  return <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">{children}</div>;
}

export function FeatureCard({ title, children, number }: { title: string; children?: ReactNode; number?: string }) {
  return (
    <article className="card p-7 sm:p-8">
      {number && <span className="text-[15px] font-bold text-accent">{number}</span>}
      <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>
      {children && <div className="mt-4 text-base leading-relaxed text-muted">{children}</div>}
    </article>
  );
}

export function ServiceCard({ title, children, href }: { title: string; children: ReactNode; href: string }) {
  return (
    <Link href={href} className="card group flex min-h-72 flex-col p-8">
      <span className="text-[15px] font-bold uppercase tracking-[.1em] text-accent">Service</span>
      <h3 className="mt-auto pt-12 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{children}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-ink group-hover:text-accent">
        Explore service <ArrowRight />
      </span>
    </Link>
  );
}

export function Checklist({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  const cls = columns === 3 ? "lg:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "";
  return (
    <ul className={`grid gap-3 ${cls}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-xl border border-line bg-white/[.04] p-4 text-base leading-relaxed">
          <Check className="mt-0.5 shrink-0 text-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PackageCard({ title, price, description, items, featured }: { title: string; price: string; description: string; items: string[]; featured?: boolean }) {
  return (
    <article className={`glass-card flex flex-col p-8 ${featured ? "!border-accent/60 shadow-[0_0_40px_rgba(198,243,47,.12)]" : ""}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-6 text-3xl font-bold tracking-tight">{price}</p>
      <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
      <div className="my-6 h-px bg-line" />
      <Checklist items={items} columns={1} />
    </article>
  );
}

export function CTASection({ title, body, label }: { title: string; body?: string; label: string; subject?: string }) {
  return (
    <section className="shell py-16 lg:py-24">
      <div className="glass-card relative overflow-hidden rounded-[28px] px-6 py-16 text-center sm:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_50%,rgba(139,124,246,.15),transparent_72%)]" aria-hidden="true" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-[-.018em] sm:text-5xl">{title}</h2>
          {body && <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">{body}</p>}
          <Link href="/#contact" className="button-primary mt-8">
            {label} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-6 text-lg leading-8 text-muted">{children}</div>;
}
