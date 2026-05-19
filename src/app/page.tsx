import { Cta, FeatureGrid, Hero, ProductBand, SectionIntro, SystemDiagram } from "@/components/SiteSections";

const trust = ["Tenant-aware", "Audit-first", "Human approval", "Private execution", "Hybrid deployment"];

export default function Home() {
  return (
    <>
      <Hero kicker="Governed AI infrastructure" title="AI that works inside your organisation's rules." body="Nash Intelligence combines organisational memory, governed agents, workflow control, and private deployment into one controlled infrastructure layer for enterprise work." image="/nash/images/img-nash-platfrom.png" />
      <section className="border-y border-nash-line/20 bg-nash-ink py-8"><div className="nash-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><p className="font-mono text-xs uppercase tracking-widest text-nash-subtle">Designed for organisations requiring</p><div className="flex flex-wrap gap-3">{trust.map((item) => <span key={item} className="rounded-full border border-nash-line/40 px-4 py-2 text-xs font-semibold text-nash-muted">{item}</span>)}</div></div></section>
      <ProductBand />
      <section className="nash-section"><div className="nash-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionIntro kicker="Operating model" title="From request to governed action." body="Every meaningful action carries tenant context, policy context, source evidence, approval state, execution placement, and audit events." /></div><div className="nash-card"><SystemDiagram /></div></div></section>
      <section className="nash-section border-y border-nash-line/20 bg-nash-surface"><div className="nash-container"><SectionIntro kicker="Why Nash" title="Control the work before agents act." /><FeatureGrid features={[{title:"Governed answers",body:"Nash answers from accepted knowledge, not random context fragments or unapproved documents.",icon:"✓"},{title:"Durable work",body:"Axis turns requests into trackable work items with ownership, authority domains, approvals, and audit records.",icon:"⇅"},{title:"Private deployment",body:"Run the same governed core in Cloud, Edge, BYOD, or Hybrid topologies without changing trust semantics.",icon:"▣"}]} /></div></section>
      <Cta />
    </>
  );
}
