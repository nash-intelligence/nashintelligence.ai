"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const threeCs = [
  {
    accent: "C",
    word: "Communication",
    subhead: "Communication creates shared understanding",
    description:
      "Communication helps people share information, intent, updates, questions, decisions, and context. It moves knowledge from one person to another — through documents, meetings, messages, and systems. Good communication is necessary, but on its own it cannot produce alignment. People can understand the same facts and still act differently.",
    detail: "People can find the same trusted answers, context, decisions, and operating logic.",
    color: "from-blue-500/8 to-transparent",
    border: "border-blue-500/12",
  },
  {
    accent: "C",
    word: "Collaboration",
    subhead: "Collaboration turns understanding into shared work",
    description:
      "Collaboration helps people work together on shared goals, documents, tasks, problems, and outcomes. It requires trust, shared context, and agreed ways of working. Collaboration improves outcomes when people are genuinely aligned — but it cannot compensate for an organisation that has not yet agreed on what it is doing and why.",
    detail: "Teams can draft, review, improve, and reuse work from the same governed source of knowledge.",
    color: "from-indigo-500/8 to-transparent",
    border: "border-indigo-500/12",
  },
  {
    accent: "C",
    word: "Coordination",
    subhead: "Coordination turns shared work into mission-aligned action",
    description:
      "Coordination helps people align their actions, timing, responsibilities, dependencies, and handoffs so the organisation moves as one. It is the hardest of the three to achieve, and the most consequential. It requires that individuals, teams, and systems are not just informed and cooperative, but oriented toward the same outcomes.",
    detail: "People, systems, and AI can move in one direction because ownership, approval, trust, and change are governed.",
    color: "from-violet-500/8 to-transparent",
    border: "border-violet-500/12",
  },
];

export default function ThreeCsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #0c1220 0%, #0e1528 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">
            How organisations work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-5">
            Communication. Collaboration. Coordination.
          </h2>
          <p className="text-[#8892a4] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Every organisation depends on three human operating patterns.
            KnowledgeFund strengthens all three by giving people and AI a trusted, governed knowledge foundation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {threeCs.map((c, i) => (
            <motion.div
              key={c.word}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.1 }}
              className={`glass-panel card-hover rounded-xl p-7 flex flex-col bg-gradient-to-br ${c.color}`}
            >
              <div className="text-6xl font-black text-blue-400/10 leading-none mb-3 select-none">
                {c.accent}
              </div>
              <h3 className="text-xl font-bold text-[#f0f4ff] mb-1">{c.word}</h3>
              <p className="text-xs font-semibold text-blue-400/70 mb-4 uppercase tracking-wide">{c.subhead}</p>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-5 flex-1">{c.description}</p>
              <div className={`border-t ${c.border} pt-4`}>
                <p className="text-xs text-blue-300/80 leading-relaxed">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="glass-panel rounded-2xl p-8 lg:p-10 max-w-3xl mx-auto text-center">
            <div className="text-3xl text-blue-400/25 font-serif mb-4 leading-none">&ldquo;</div>
            <p className="text-base lg:text-lg font-medium text-[#f0f4ff] leading-relaxed mb-4">
              Communication helps people understand.{" "}
              Collaboration helps people work together.{" "}
              Coordination helps the organisation move in one direction.
            </p>
            <p className="text-sm text-[#8892a4]">
              KnowledgeFund strengthens all three so people can understand, agree, and move in the direction of the business mission.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
