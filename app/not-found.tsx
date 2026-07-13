import Link from "next/link";
import { Footer, Header } from "@/components/site-shell";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="shell pb-16 pt-[clamp(160px,22vh,240px)] text-center">
          <p className="eyebrow">404 — page not found</p>
          <h1 className="mt-4 text-balance text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] tracking-[-0.018em]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mx-auto mt-5 max-w-[44ch] text-xl leading-relaxed text-muted">
            The link may be old, or the page may have moved. Everything we do is one click away.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="button-primary">Back to home</Link>
            <Link href="/services" className="button-secondary">Browse services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
