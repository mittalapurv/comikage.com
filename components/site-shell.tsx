"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, List, X } from "./icons";

export const siteNav = [
  ["Services", "/services"], ["Approach", "/approach"], ["Packages", "/packages"], ["About", "/about"]
] as const;

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="LetsCRUD home">
      <span className="text-2xl leading-none text-accent" aria-hidden="true">影</span>
      <span className="text-base font-extrabold tracking-[0.12em]">LETSCRUD</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-[18px] z-50 flex justify-center px-4 sm:px-8">
      <header className="glass-card flex w-full max-w-4xl items-center justify-between gap-4 rounded-full py-2.5 pl-6 pr-2.5">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {siteNav.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-lg px-1 py-2 text-base font-medium text-muted transition hover:text-ink">
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="button-primary !min-h-11 !px-5 !py-3.5">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <List />}
        </button>
      </header>
      {open && (
        <nav
          className="glass-card absolute left-4 right-4 top-[70px] flex flex-col gap-1 rounded-3xl p-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {siteNav.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-white/5">
              {label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="button-primary mt-2 justify-center">
            Start a conversation
          </Link>
        </nav>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-base leading-relaxed text-muted">Business-first websites, applications, and AI systems.</p>
          </div>
          <div className="flex max-w-xl flex-wrap gap-x-8 gap-y-4">
            {siteNav.map(([label, href]) => (
              <Link key={label} href={href} className="text-base text-muted hover:text-ink">{label}</Link>
            ))}
            <Link href="/privacy" className="text-base text-muted hover:text-ink">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-7 text-base text-muted sm:flex-row">
          <a href="mailto:hello@letscrud.com" className="hover:text-ink">hello@letscrud.com</a>
          <p>© 2026 LetsCRUD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
