"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/edge", label: "Edge" },
  { href: "/mind", label: "Mind" },
  { href: "/axis", label: "Axis" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${scrolled || mobileOpen ? "border-nash-line/40 bg-nash-background/90" : "border-nash-line/20 bg-nash-background/72"}`}>
      <div className="nash-container">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/nash/icons/nash-intelligence-dark.png" alt="Nash Intelligence" width={40} height={40} className="h-10 w-10 rounded" priority />
            <span className="font-display text-xl font-bold tracking-tight text-nash-text">Nash Intelligence</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-nash-muted transition-colors hover:text-nash-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="rounded-md border border-nash-line/60 px-4 py-2 text-sm font-semibold text-nash-text transition hover:bg-white/5">
              Contact
            </Link>
            <Link href="/contact" className="rounded-md bg-nash-primary px-5 py-2 text-sm font-bold text-nash-blue transition hover:bg-nash-primaryFixed">
              Book a conversation
            </Link>
          </div>

          <button type="button" className="grid h-10 w-10 place-items-center rounded-md border border-nash-line/60 text-nash-muted lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label="Toggle navigation">
            <span className="flex flex-col gap-1.5"><span className="h-px w-5 bg-current" /><span className="h-px w-5 bg-current" /><span className="h-px w-5 bg-current" /></span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-nash-line/30 bg-nash-background/95 lg:hidden">
          <div className="nash-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md px-2 py-3 text-sm font-medium text-nash-muted hover:bg-white/5 hover:text-nash-text" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 rounded-md bg-nash-primary px-4 py-3 text-center text-sm font-bold text-nash-blue" onClick={() => setMobileOpen(false)}>
              Book a conversation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
