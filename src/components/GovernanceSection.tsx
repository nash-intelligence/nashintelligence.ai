"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const complianceCards = [
  {
    title: "SOC 2 Type II",
    subtitle: "Designed to support alignment",
    description:
      "Supports evidence-driven controls for security, availability, confidentiality, processing integrity, and privacy. Includes audit trails, access control, change tracking, and operational evidence.",
    points: ["Audit trails", "Access control", "Change tracking", "Operational evidence"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "ISO 27001",
    subtitle: "Designed to support alignment",
    description:
      "Supports information security management practices across people, process, technology, and organisational risk. Addresses information asset management, access control, security policies, and supplier controls.",
    points: ["Information asset management", "Risk management", "Security policies", "Supplier controls"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "ISO 42001",
    subtitle: "Designed to support alignment",
    description:
      "Supports responsible AI management practices for organisations adopting, governing, and monitoring AI systems. Covers AI governance, human oversight, accountability, risk assessment, and lifecycle management.",
    points: ["AI governance", "Human oversight", "Risk assessment", "Lifecycle management"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
  },
];

const capabilities = [
  "Role-based access control",
  "Source trust levels",
  "Knowledge ownership",
  "Approval workflows",
  "Audit trails",
  "Policy-aware automation",
  "Evidence capture",
  "Human-in-the-loop review",
  "Change history",
  "Version control",
  "Data classification",
  "Governed change workflows",
];

export default function GovernanceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #080d1a 0%, #0b1120 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">
            Security &amp; governance
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-5">
            Built for governed AI adoption.
          </h2>
          <p className="text-[#8892a4] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            KnowledgeFund is designed for organisations that need more than AI experimentation.
            It supports a governed approach to business-owned automation, with security, compliance,
            auditability, access control, and organisational accountability considered from the start.
          </p>
        </motion.div>

        {/* Governance principle callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="glass-panel rounded-xl px-8 py-6 mb-10 max-w-3xl mx-auto text-center"
          style={{ borderColor: "rgba(99,102,241,0.15)" }}
        >
          <p className="text-sm text-[#8892a4] leading-relaxed">
            <span className="text-[#f0f4ff] font-semibold block mb-1 text-base">Governed knowledge. Controlled automation. Accountable AI use.</span>
            Governance is not the brake. Governance is how organisations move faster without losing control.
          </p>
        </motion.div>

        {/* Compliance cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {complianceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 + i * 0.1 }}
              className="glass-panel card-hover rounded-xl p-7 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <div className="text-xs text-[#4b5568] mb-0.5 font-medium">{card.subtitle}</div>
                  <h3 className="text-base font-bold text-[#f0f4ff]">{card.title}</h3>
                </div>
              </div>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-5 flex-1">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.points.map((pt) => (
                  <span key={pt} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/8 text-blue-400/80 border border-blue-500/12">
                    {pt}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-panel rounded-xl p-7 lg:p-8"
        >
          <h3 className="text-sm font-semibold text-[#f0f4ff] mb-6">
            Governance capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {capabilities.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                <span className="text-sm text-[#8892a4]">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
