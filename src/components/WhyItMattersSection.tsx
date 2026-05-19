"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    heading: "AI reflects the knowledge it is given",
    body: "A model is only as reliable as its inputs. If the knowledge foundation is fragmented, inconsistent, or ungoverned, the AI will amplify those problems at scale. Inconsistent answers, risky drafts, weak automation, decisions based on unclear context.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
  {
    heading: "Trust cannot be retrofitted",
    body: "Governance cannot be added after deployment. It must be built into the knowledge layer before automation is switched on. Retrofitting trust is expensive, disruptive, and often impossible. Security by design is the only viable approach.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    heading: "Alignment is a structural problem",
    body: "Organisations do not become aligned by telling people to align. They align when the knowledge, processes, and systems that govern behaviour are coherent and maintained. KnowledgeFund creates the structural conditions for alignment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
];

export default function WhyItMattersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #0d1428 0%, #080d1a 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-6 inline-flex">Why it matters</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] max-w-2xl leading-tight mb-4">
            AI is only as useful as the knowledge it can trust.
          </h2>
          <p className="text-[#8892a4] text-base max-w-2xl leading-relaxed">
            AI does not magically make messy organisations intelligent.
            It exposes whether the organisation has cared for its knowledge well enough to trust what comes back.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.heading}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="glass-panel card-hover rounded-xl p-7"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                {point.icon}
              </div>
              <h3 className="text-base font-semibold text-[#f0f4ff] mb-3">{point.heading}</h3>
              <p className="text-[#8892a4] text-sm leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="mt-12 glass-panel rounded-xl px-8 py-6 text-center"
        >
          <p className="text-sm text-[#8892a4] leading-relaxed max-w-2xl mx-auto">
            <span className="text-[#f0f4ff] font-semibold">Without governed knowledge, automation creates faster fragmentation.</span>{" "}
            KnowledgeFund gives organisations a safer foundation for AI-powered work by connecting automation to governed,
            secure, mission-aligned knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
