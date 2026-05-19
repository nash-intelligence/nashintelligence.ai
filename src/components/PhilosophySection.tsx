"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #0e1528 0%, #0a1020 100%)" }}>
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6 inline-flex">
              The philosophy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f4ff] mb-6 leading-tight">
              Knowledge is a cooperative fund.
            </h2>
            <p className="text-[#8892a4] leading-relaxed mb-6">
              A fund is something contributed to, maintained, and drawn upon
              collectively. It has value not because it exists, but because it is
              cared for — organised, governed, and kept current.
            </p>
            <p className="text-[#8892a4] leading-relaxed mb-6">
              Most organisations treat knowledge as a byproduct. Documents are
              created and forgotten. Processes are defined and ignored. Expertise
              is accumulated and then walks out the door.
            </p>
            <p className="text-[#8892a4] leading-relaxed">
              KnowledgeFund treats knowledge as the primary asset of the
              organisation — one that can be tended, governed, and activated to
              produce real capability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel rounded-2xl p-10">
              <div className="text-5xl text-blue-400/30 font-serif mb-6">&ldquo;</div>
              <blockquote className="text-2xl lg:text-3xl font-semibold text-[#f0f4ff] leading-snug mb-8">
                Dumped knowledge becomes clutter. Tended knowledge becomes
                capability.
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div className="glass-panel rounded-lg p-4">
                  <div className="text-xs text-[#8892a4] mb-1 uppercase tracking-wider">Untended</div>
                  <div className="text-sm text-[#f0f4ff]">Clutter, confusion, risk</div>
                </div>
                <div className="glass-panel rounded-lg p-4">
                  <div className="text-xs text-blue-400 mb-1 uppercase tracking-wider">Tended</div>
                  <div className="text-sm text-[#f0f4ff]">Capability, clarity, trust</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
