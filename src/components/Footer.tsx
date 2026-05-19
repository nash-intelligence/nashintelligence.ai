import Image from "next/image";
import Link from "next/link";

const sections = [
  { heading: "Core", links: [{ href: "/platform", label: "Platform" }, { href: "/mind", label: "Mind" }, { href: "/axis", label: "Axis" }] },
  { heading: "Deployment", links: [{ href: "/edge", label: "Edge" }, { href: "/platform", label: "Cloud" }, { href: "/platform", label: "BYOD" }] },
  { heading: "Company", links: [{ href: "/use-cases", label: "Use Cases" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-nash-line/30 bg-nash-ink">
      <div className="nash-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold text-nash-text">
              <Image src="/nash/icons/nash-intelligence-dark.png" alt="Nash Intelligence" width={34} height={34} className="h-8 w-8 rounded" />
              Nash Intelligence
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-nash-subtle">
              Governed AI infrastructure for organisations that need intelligence to stay useful, private, auditable, and under control.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-nash-primary">{section.heading}</h2>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.heading}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-nash-subtle transition-colors hover:text-nash-text">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-nash-line/20 pt-7 font-mono text-[11px] uppercase tracking-widest text-nash-subtle md:flex-row md:items-center md:justify-between">
          <p>© 2026 Nash Intelligence. All rights reserved.</p>
          <p>Cloud · Edge · BYOD · Hybrid</p>
        </div>
      </div>
    </footer>
  );
}
