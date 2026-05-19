import Image from "next/image";
import { Cta, FeatureGrid, Hero, SectionIntro } from "@/components/SiteSections";

export default function EdgePage() {
  return (
    <>
      <Hero
        kicker="Nash Edge"
        title="Private AI deployment under your control."
        body="Run governed intelligence close to sensitive data, operational systems, and physical infrastructure boundaries."
        image="/nash/images/nash-edge-rack.png"
        cta="Request technical spec"
        secondary="View platform"
      />
      <section className="nash-section">
        <div className="nash-container">
          <SectionIntro kicker="Capabilities" title="What Nash Edge provides." />
          <FeatureGrid
            features={[
              {
                title: "Private boundary",
                body: "Compute can sit within your VPC, facility, or firewall while preserving Nash governance semantics.",
                icon: "🛡",
              },
              {
                title: "Customer controlled",
                body: "Model choices, update channels, storage, connectors, and deployment posture stay under customer authority.",
                icon: "⚙",
              },
              {
                title: "Local access",
                body: "Low-latency access for data and operations that cannot rely on public-cloud round trips.",
                icon: "↯",
              },
            ]}
          />
        </div>
      </section>
      <section className="nash-section border-y border-nash-line/20 bg-nash-ink">
        <div className="nash-container">
          <SectionIntro
            kicker="Deployment patterns"
            title="Cloud-control, local-control, or hybrid."
            body="Nash Edge supports outbound private execution nodes, customer-owned control planes, and hybrid topologies where result shape policies govern what crosses boundaries."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["/nash/images/nash-edge-desktop.png", "Nash Edge desktop"],
              ["/nash/images/nash-edge-halfrack.png", "Nash Edge half rack"],
              ["/nash/images/nash-edge-rack.png", "Nash Edge rack"],
            ].map(([src, alt]) => (
              <div key={src} className="nash-card overflow-hidden p-2">
                <Image src={src} alt={alt} width={1024} height={1024} className="aspect-square w-full rounded-xl object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
