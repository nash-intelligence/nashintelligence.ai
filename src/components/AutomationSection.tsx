"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  { label: "Knowledge retrieval", desc: "Instant answers from governed sources" },
  { label: "Document generation", desc: "Drafts grounded in trusted knowledge" },
  { label: "Pitch & tender preparation", desc: "Consistent, accurate, on-brand" },
  { label: "Document review", desc: "Policy-aware checking at scale" },
  { label: "Marketing & social posts", desc: "Aligned with brand and governance" },
  { label: "Notifications & reminders", desc: "Triggered from governed workflows" },
  { label: "Reporting", desc: "From trusted, current data sources" },
  { label: "System input & updates", desc: "Governed record maintenance" },
  { label: "Job execution", desc: "Automated work within policy bounds" },
  { label: "Workflow creation", desc: "Structured from approved process knowledge" },
  { label: "Website updates", desc: "Governed content publication" },
  { label: "Business process automation", desc: "End-to-end with audit trails" },
];

export default function AutomationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #0b1120 0%, #0d1428 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">What it automates</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-5">
            The admin layer of the business, made usable.
          </h2>
          <p className="text-[#8892a4] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            KnowledgeFund helps organisations safely automate the everyday work that slows teams down —
            the searching, drafting, checking, updating, reporting, reminding, reviewing, and coordinating
            that sits across the business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {useCases.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.04 * i }}
              className="glass-panel card-hover rounded-xl px-5 py-5"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400/50 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-semibold text-[#f0f4ff] mb-1">{item.label}</div>
                  <div className="text-xs text-[#4b5568] leading-relaxed">{item.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#4b5568] max-w-xl mx-auto leading-relaxed">
            It gives AI access to governed organisational knowledge, so automation is connected to what the business knows,
            what the business has approved, and how the business intends to operate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
