"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, List, X } from "./icons";

export const siteNav = [
  ["Services", "/services"], ["Approach", "/approach"], ["Packages", "/packages"],
  ["About", "/about"], ["Contact", "mailto:hello@comikage.com"]
] as const;

export function Logo() {
  return <Link href="/" className="flex items-center gap-3" aria-label="Comikage home"><span className="grid h-9 w-9 place-items-center rounded-[10px] bg-ink text-white"><span className="h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-white" /></span><span className="text-sm font-bold tracking-[0.16em]">COMIKAGE</span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-xl"><div className="shell flex h-20 items-center justify-between"><Logo /><nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{siteNav.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-muted transition hover:text-ink">{label}</a>)}<a href="mailto:hello@comikage.com?subject=Discovery Session" className="button-primary !px-4 !py-3">Book Discovery <ArrowRight /></a></nav><button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white lg:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <List />}</button></div>{open && <nav className="shell flex flex-col gap-1 border-t border-line py-4 lg:hidden" aria-label="Mobile navigation">{siteNav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-white">{label}</a>)}<a href="mailto:hello@comikage.com?subject=Discovery Session" className="button-primary mt-2">Book Discovery</a></nav>}</header>;
}

export function Footer() {
  return <footer className="border-t border-line bg-white"><div className="shell py-12"><div className="flex flex-col justify-between gap-10 md:flex-row"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-muted">Business-first websites, applications, and AI systems.</p></div><div className="flex max-w-xl flex-wrap gap-x-8 gap-y-4">{siteNav.map(([label, href]) => <a key={label} href={href} className="text-sm text-muted hover:text-ink">{label}</a>)}<a href="/privacy" className="text-sm text-muted hover:text-ink">Privacy Policy</a></div></div><div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-7 text-sm text-muted sm:flex-row"><a href="mailto:hello@comikage.com" className="hover:text-ink">hello@comikage.com</a><p>© 2026 Comikage. All rights reserved.</p></div></div></footer>;
}
