"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    number: "01",
    title: "Fragmented knowledge",
    description:
      "The facts, decisions, policies, templates, and operating logic that matter are scattered across documents, chats, emails, SaaS tools, spreadsheets, legacy systems, and people's heads. Some of it is duplicated. Some of it is outdated. Some of it is trusted by one team and unknown to another.",
    callout: "When knowledge is fragmented, people work from different assumptions — and AI can only amplify the inconsistency.",
  },
  {
    number: "02",
    title: "Uncoordinated automation",
    description:
      "As AI starts drafting, retrieving, updating, reporting, and triggering workflows, small automations create system-wide side effects that teams cannot fully see or govern. Actions overlap. Records drift. Processes fork. Decisions lose context. Teams lose visibility.",
    callout: "Without a shared knowledge foundation, automation does not create alignment. It creates faster fragmentation.",
  },
  {
    number: "03",
    title: "No governed change",
    description:
      "Most organisations lack a clean workflow for ownership, approval, policy, audit evidence, and propagation of change across systems, teams, and processes. Policies are difficult to encode. Ownership is unclear. Approvals happen outside the workflow.",
    callout: "Audit evidence is hard to reconstruct later. Change without governance is risk without visibility.",
  },
];

export default function CoordinationProblem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #080d1a 0%, #0c1220 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">
            The coordination problem
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] max-w-3xl mx-auto leading-tight mb-5">
            AI makes coordination the business problem that can no longer be ignored.
          </h2>
          <p className="text-[#8892a4] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Organisations are beginning to use AI across documents, decisions, reporting, and internal workflows.
            But most were not designed for tools that can continuously retrieve knowledge and trigger downstream action.
            Before organisations can safely automate more work, they need a governed foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="glass-panel card-hover rounded-xl p-7 flex flex-col"
            >
              <div className="text-xs font-bold text-blue-500/60 tracking-widest mb-4 font-mono">{card.number}</div>
              <h3 className="text-base font-semibold text-[#f0f4ff] mb-3">{card.title}</h3>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-5 flex-1">{card.description}</p>
              <div className="border-t border-blue-500/10 pt-4">
                <p className="text-xs text-blue-400/80 leading-relaxed italic">{card.callout}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 glass-panel rounded-xl px-8 py-6 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm text-[#8892a4] leading-relaxed">
            KnowledgeFund helps organisations create the foundation for coordinated AI adoption by turning scattered knowledge into a{" "}
            <span className="text-[#f0f4ff] font-medium">secure, governed, mission-aligned business asset.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
