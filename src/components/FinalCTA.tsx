"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const pillars = [
  "Trusted answers",
  "Useful documents",
  "Better workflows",
  "Safer automation",
  "Governed change",
  "Mission-aligned action",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #0b1220 0%, #080d1a 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[#0d1528]" />
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)"
            }} />
            <div className="absolute inset-0 border border-blue-500/15 rounded-2xl" />

            <div className="relative px-8 lg:px-14 py-14 lg:py-18">
              <span className="section-label mb-8 inline-flex">Build your KnowledgeFund</span>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-5 leading-tight">
                Build the fund your business already depends on.
              </h2>
              <p className="text-[#8892a4] text-base mb-8 leading-relaxed max-w-2xl mx-auto">
                Start turning organisational knowledge into trusted answers, useful documents,
                better workflows, safer automation, governed change, and mission-aligned action.
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {pillars.map((p) => (
                  <span key={p} className="text-xs px-3 py-1.5 rounded-full bg-blue-500/8 text-blue-400/80 border border-blue-500/12">
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 text-sm"
                >
                  Start building your KnowledgeFund
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-lg border border-white/10 hover:border-blue-400/25 text-[#f0f4ff] font-medium transition-all duration-200 hover:bg-white/5 text-sm"
                >
                  Talk to us about governed AI adoption
                </Link>
              </div>

              <p className="mt-8 text-xs text-[#4b5568]">
                Care for knowledge. Govern automation. Move with confidence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
