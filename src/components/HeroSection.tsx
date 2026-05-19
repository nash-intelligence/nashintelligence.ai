"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function KnowledgeGraph() {
  const nodes = [
    { id: "centre",    cx: 300, cy: 260, r: 14, glow: true },
    { id: "govern",    cx: 300, cy: 130, r: 9 },
    { id: "activate",  cx: 420, cy: 185, r: 9 },
    { id: "capture",   cx: 420, cy: 335, r: 9 },
    { id: "improve",   cx: 300, cy: 390, r: 9 },
    { id: "structure", cx: 180, cy: 335, r: 9 },
    { id: "secure",    cx: 180, cy: 185, r: 9 },
    { id: "outer1",    cx: 300,  cy: 55,  r: 5 },
    { id: "outer2",    cx: 490, cy: 155, r: 5 },
    { id: "outer3",    cx: 490, cy: 365, r: 5 },
    { id: "outer4",    cx: 300,  cy: 465, r: 5 },
    { id: "outer5",    cx: 110, cy: 365, r: 5 },
    { id: "outer6",    cx: 110, cy: 155, r: 5 },
  ];

  const edges = [
    ["centre","govern"], ["centre","activate"], ["centre","capture"],
    ["centre","improve"], ["centre","structure"], ["centre","secure"],
    ["govern","outer1"], ["activate","outer2"], ["capture","outer3"],
    ["improve","outer4"], ["structure","outer5"], ["secure","outer6"],
    ["govern","activate"], ["activate","capture"], ["capture","improve"],
    ["improve","structure"], ["structure","secure"], ["secure","govern"],
  ];

  const labels = [
    { x: 300, y: 117, text: "Govern" },
    { x: 433, y: 175, text: "Activate" },
    { x: 433, y: 352, text: "Capture" },
    { x: 300, y: 410, text: "Improve" },
    { x: 163, y: 352, text: "Structure" },
    { x: 163, y: 175, text: "Secure" },
  ];

  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));

  return (
    <div className="relative w-full h-full select-none">
      <svg viewBox="0 50 600 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer orbit ring */}
        <circle cx="300" cy="260" r="215" stroke="rgba(59,130,246,0.04)" strokeWidth="1" strokeDasharray="3 8"/>
        <circle cx="300" cy="260" r="155" stroke="rgba(59,130,246,0.06)" strokeWidth="1" strokeDasharray="4 6"/>
        <circle cx="300" cy="260" r="95"  stroke="rgba(59,130,246,0.09)" strokeWidth="1"/>

        {/* Edges */}
        {edges.map(([a, b], i) => {
          const na = nodeMap[a], nb = nodeMap[b];
          return (
            <line key={i}
              x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              stroke="rgba(96,165,250,0.12)" strokeWidth="1"
            />
          );
        })}

        {/* Node halos */}
        {nodes.filter(n => !n.glow).map((n, i) => (
          <circle key={`halo-${i}`} cx={n.cx} cy={n.cy} r={n.r + 4}
            fill="rgba(59,130,246,0.04)" />
        ))}

        {/* Centre glow */}
        <circle cx="300" cy="260" r="32" fill="rgba(59,130,246,0.08)"/>
        <circle cx="300" cy="260" r="22" fill="rgba(59,130,246,0.14)"/>

        {/* All nodes */}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
            fill={n.glow ? "#3b82f6" : "rgba(26,35,64,0.95)"}
            stroke={n.glow ? "rgba(96,165,250,0.6)" : "rgba(96,165,250,0.28)"}
            strokeWidth="1"
          />
        ))}

        {/* Centre dot highlight */}
        <circle cx="295" cy="255" r="4" fill="rgba(255,255,255,0.25)"/>

        {/* Labels */}
        {labels.map((l, i) => (
          <text key={i} x={l.x} y={l.y} textAnchor="middle"
            fontSize="9" fill="rgba(148,163,184,0.7)"
            fontFamily="system-ui,sans-serif" letterSpacing="0.05em">
            {l.text}
          </text>
        ))}

        {/* Knowledge card overlay */}
        <rect x="206" y="224" width="188" height="72" rx="8"
          fill="rgba(8,13,26,0.7)" stroke="rgba(59,130,246,0.18)" strokeWidth="1"/>
        <rect x="218" y="238" width="100" height="5" rx="2.5" fill="rgba(96,165,250,0.35)"/>
        <rect x="218" y="249" width="68"  height="4" rx="2"   fill="rgba(96,165,250,0.18)"/>
        <rect x="218" y="259" width="84"  height="4" rx="2"   fill="rgba(96,165,250,0.18)"/>
        <rect x="218" y="269" width="52"  height="4" rx="2"   fill="rgba(96,165,250,0.1)"/>
        {/* card badge */}
        <rect x="300" y="236" width="82" height="20" rx="4" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
        <circle cx="313" cy="246" r="4" fill="rgba(96,165,250,0.5)"/>
        <rect x="321" y="242" width="48" height="4" rx="2" fill="rgba(96,165,250,0.25)"/>

        {/* Floating accent dots */}
        {[[370,120],[240,415],[480,270],[120,250]].map(([x,y],i)=>(
          <circle key={`accent-${i}`} cx={x} cy={y} r="2.5" fill="rgba(96,165,250,0.2)"/>
        ))}
      </svg>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080d1a]" />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(30,58,138,0.22) 0%, transparent 70%)" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 40% at 20% 70%, rgba(15,30,80,0.3) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column ─────────────────────────────── */}
          <div className="max-w-xl">
            <motion.div {...fadeUp(0)}>
              <span className="section-label mb-7 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Governed AI for organisations
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)}
              className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-5"
            >
              Turn organisational knowledge into{" "}
              <span className="gradient-text">
                secure, governed, mission-aligned action.
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)}
              className="text-base lg:text-lg text-[#8892a4] leading-relaxed mb-5"
            >
              KnowledgeFund helps organisations care for their shared knowledge,
              align their people, and safely automate the work that keeps the
              business moving.
            </motion.p>

            <motion.p {...fadeUp(0.22)}
              className="text-sm font-semibold text-blue-400 tracking-wide mb-8"
            >
              Understand. Agree. Govern. Move in one direction.
            </motion.p>

            <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-3 mb-8">
              <Link href="/contact"
                className="px-6 py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 text-sm"
              >
                Build your KnowledgeFund
              </Link>
              <Link href="/model"
                className="px-6 py-3 rounded-lg border border-white/10 hover:border-blue-400/30 text-[#f0f4ff] font-medium transition-all duration-200 hover:bg-white/5 text-sm"
              >
                Explore the model
              </Link>
            </motion.div>

            <motion.p {...fadeUp(0.34)}
              className="text-xs text-[#4b5568] leading-relaxed max-w-sm border-l-2 border-blue-500/20 pl-4"
            >
              Built for organisations that need AI to be useful, secure,
              governed, and aligned with the business mission.
            </motion.p>
          </div>

          {/* ── Right column — knowledge graph ──────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="glass-panel rounded-2xl p-6 blue-glow" style={{ aspectRatio: "1 / 0.85" }}>
              <KnowledgeGraph />
            </div>
            {/* Floating micro-badges */}
            <div className="absolute -top-3 -right-3 glass-panel-mid rounded-lg px-3 py-2 text-xs text-blue-300 font-medium border border-blue-500/20">
              Governed ✓
            </div>
            <div className="absolute -bottom-3 -left-3 glass-panel-mid rounded-lg px-3 py-2 text-xs text-blue-300 font-medium border border-blue-500/20">
              Mission-aligned ✓
            </div>
          </motion.div>
        </div>

        {/* Progress bar / journey line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex items-center gap-4 mt-16 max-w-2xl"
          style={{ transformOrigin: "left" }}
        >
          {["Knowledge","Understanding","Agreement","Governance","Coordination","Action","Mission"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${i === arr.length - 1 ? "bg-blue-400" : "bg-blue-500/40"}`} />
                <span className="text-[10px] text-[#4b5568] whitespace-nowrap">{step}</span>
              </div>
              {i < arr.length - 1 && (
                <div className="w-6 h-px bg-gradient-to-r from-blue-500/25 to-blue-500/10 flex-shrink-0 -mt-3" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
