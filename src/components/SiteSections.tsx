import Image from "next/image";
import Link from "next/link";

export type Feature = { title: string; body: string; icon?: string };

export function Hero({ kicker, title, body, image, cta = "Book a conversation", secondary = "Explore platform" }: { kicker: string; title: string; body: string; image?: string; cta?: string; secondary?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-nash-line/20 bg-nash-background bg-glow py-20 md:py-28">
      <div className="absolute inset-0 circuit-bg opacity-35" />
      <div className="nash-container relative z-10 grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <span className="nash-kicker">{kicker}</span>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance text-nash-text md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-nash-muted md:text-xl">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-md bg-nash-primary px-7 py-3 text-center text-sm font-bold text-nash-blue transition hover:bg-nash-primaryFixed">{cta}</Link>
            <Link href="/platform" className="rounded-md border border-nash-line/60 bg-white/[0.03] px-7 py-3 text-center text-sm font-bold text-nash-text transition hover:bg-white/[0.07]">{secondary}</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-nash-secondary/10 blur-3xl" />
          <div className="nash-card relative overflow-hidden p-4">
            {image ? <Image src={image} alt="Nash Intelligence visual" width={1024} height={1024} className="aspect-square w-full rounded-xl object-cover" priority /> : <SystemDiagram />}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return <div className="mb-12 max-w-3xl"><span className="nash-kicker">{kicker}</span><h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-nash-text md:text-5xl">{title}</h2>{body && <p className="mt-5 text-lg leading-8 text-nash-muted">{body}</p>}</div>;
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return <div className="grid gap-5 md:grid-cols-3">{features.map((f) => <article key={f.title} className="nash-card p-7"><div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-nash-line/40 bg-nash-secondary/10 text-xl text-nash-secondary">{f.icon || "✦"}</div><h3 className="font-display text-2xl font-semibold text-nash-text">{f.title}</h3><p className="mt-4 leading-7 text-nash-muted">{f.body}</p></article>)}</div>;
}

export function ProductBand() {
  const products = [
    ["/mind", "/nash/icons/nash-mind-dark.png", "Mind", "Organisational memory: evidence, history, relationships, accepted knowledge, and decision lineage."],
    ["/axis", "/nash/icons/nash-axis-dark.png", "Axis", "Governed orchestration: tasks, agents, approvals, leases, execution nodes, and audit trails."],
    ["/edge", "/nash/icons/nash-edge-dark.png", "Edge", "Private deployment: local execution, customer-controlled infrastructure, outbound-only node patterns."],
    ["/platform", "/nash/icons/nash-os-dark.png", "NashOS", "The portable core that keeps Cloud, BYOD, Edge, and Hybrid deployments consistent."],
  ];
  return <section className="nash-section border-y border-nash-line/20 bg-nash-ink"><div className="nash-container"><SectionIntro kicker="Ecosystem" title="One governed core across every deployment mode." body="Nash is not a generic chat wrapper. It is a controlled intelligence layer where memory, orchestration, execution, and deployment boundaries are designed together." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{products.map(([href,img,title,body]) => <Link key={title} href={href} className="nash-card group p-6 transition hover:-translate-y-1 hover:border-nash-secondary/40"><Image src={img} alt={title} width={96} height={96} className="h-16 w-16 rounded-xl" /><h3 className="mt-7 font-display text-2xl font-bold text-nash-text group-hover:text-nash-primary">{title}</h3><p className="mt-4 text-sm leading-6 text-nash-muted">{body}</p></Link>)}</div></div></section>;
}

export function SystemDiagram() {
  const layers = ["Surfaces", "Business Agent", "Axis", "Capability Services", "Mind", "NashOS", "Cloud · Edge · BYOD"];
  return <div className="space-y-3 p-4">{layers.map((layer, index) => <div key={layer} className="flex items-center gap-4 rounded-lg border border-nash-line/30 bg-white/[0.03] p-4"><div className="grid h-9 w-9 place-items-center rounded bg-nash-secondary/10 font-mono text-xs text-nash-secondary">{String(index + 1).padStart(2, "0")}</div><div><p className="font-display text-lg font-semibold text-nash-text">{layer}</p><div className="mt-2 h-1.5 w-52 max-w-full rounded-full bg-white/5"><div className="h-full rounded-full bg-nash-secondary" style={{ width: `${92 - index * 8}%` }} /></div></div></div>)}</div>;
}

export function Cta() {
  return <section className="nash-section"><div className="nash-container"><div className="nash-card mx-auto max-w-5xl overflow-hidden p-10 text-center md:p-16"><span className="nash-kicker">Next step</span><h2 className="mt-5 font-display text-4xl font-bold text-nash-text md:text-5xl">Build governed AI without surrendering control.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-nash-muted">Talk to Nash about the right architecture for your organisation: Cloud, private Edge, BYOD, or a hybrid control plane.</p><div className="mt-9"><Link href="/contact" className="rounded-md bg-nash-primary px-8 py-4 text-sm font-bold text-nash-blue">Book a conversation</Link></div></div></div></section>;
}
