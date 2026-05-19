"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const outcomes = [
  {
    label: "Understand",
    detail: "Every person has access to the knowledge they need to do their job well. Trusted answers, shared context, clear operating logic.",
  },
  {
    label: "Agree",
    detail: "The organisation has a shared view of what it is doing, why, and how. Decisions are grounded. Policies are clear. Processes are consistent.",
  },
  {
    label: "Move in one direction",
    detail: "Automation, people, and systems are oriented toward the same outcomes — governed, coordinated, and accountable to the business mission.",
  },
];

export default function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #080d1a 0%, #0b1220 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="section-label mb-6 inline-flex">Mission alignment</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-6 leading-tight">
              Help your organisation understand, agree, and move in one direction.
            </h2>
            <p className="text-[#8892a4] leading-relaxed mb-6">
              Every organisation has a mission, but the mission only becomes real when people understand
              what it means, agree on how work should happen, and move together.
            </p>
            <p className="text-[#8892a4] leading-relaxed mb-6">
              KnowledgeFund turns scattered organisational knowledge into shared understanding,
              trusted operating logic, governed change, and coordinated action.
            </p>
            <p className="text-[#8892a4] leading-relaxed">
              It helps people, systems, and AI work from the same trusted foundation, so the organisation
              can move with more confidence, less confusion, and stronger alignment to the business mission.
            </p>
          </motion.div>

          <div className="space-y-4">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="glass-panel card-hover rounded-xl p-6 flex items-start gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f0f4ff] mb-2">{outcome.label}</h3>
                  <p className="text-sm text-[#8892a4] leading-relaxed">{outcome.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
