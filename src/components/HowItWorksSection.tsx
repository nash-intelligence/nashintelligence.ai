"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    word: "Capture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.813c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    description:
      "Bring together the knowledge your business already depends on — documents, policies, proposals, templates, operating procedures, project history, customer context, business decisions, and system records.",
    examples: ["Documents & policies", "Process records", "Business decisions", "System knowledge"],
  },
  {
    number: "02",
    word: "Structure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    description:
      "Organise knowledge around how the business actually works — by function, process, team, client, service, decision, obligation, and dependency. Not a document graveyard — a living knowledge architecture.",
    examples: ["Business functions", "Processes & teams", "Obligations & handoffs", "Operating logic"],
  },
  {
    number: "03",
    word: "Govern",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    description:
      "Make ownership, access, approval, trust, change, and accountability clear — who owns each knowledge source, what is authoritative, what requires approval, what changed and why, and what can be used by AI.",
    examples: ["Access control", "Approval workflows", "Audit trails", "Source trust levels"],
  },
  {
    number: "04",
    word: "Activate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    description:
      "Use trusted knowledge to answer questions, create documents, trigger workflows, review content, update systems, and automate admin. AI draws on governed knowledge to complete real business tasks.",
    examples: ["Trusted Q&A", "Document generation", "Workflow automation", "System updates"],
  },
  {
    number: "05",
    word: "Improve",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    description:
      "Keep the KnowledgeFund alive as the organisation learns, changes, and grows. Learn from usage, identify gaps, update knowledge, and refine automation over time. The fund grows as the organisation uses it.",
    examples: ["Usage analytics", "Gap identification", "Knowledge refinement", "Automation tuning"],
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #0a1020 0%, #080d1a 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">How it works</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-4">
            From scattered knowledge to governed capability.
          </h2>
          <p className="text-[#8892a4] max-w-xl mx-auto text-base leading-relaxed">
            Five steps that turn what your organisation already knows into a trusted, governed, mission-aligned asset.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
              className="glass-panel card-hover rounded-xl p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-center gap-4 lg:w-52 flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-500/50 tracking-widest font-mono">{step.number}</div>
                    <div className="text-lg font-bold text-[#f0f4ff]">{step.word}</div>
                  </div>
                </div>
                <p className="text-[#8892a4] text-sm leading-relaxed flex-1">{step.description}</p>
                <div className="flex flex-wrap gap-2 lg:w-52 flex-shrink-0">
                  {step.examples.map((ex) => (
                    <span key={ex} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/8 text-blue-400/80 border border-blue-500/12 whitespace-nowrap">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#4b5568]">
            Knowledge → Understanding → Agreement → Governance → Coordination → Action → Mission
          </p>
        </motion.div>
      </div>
    </section>
  );
}
