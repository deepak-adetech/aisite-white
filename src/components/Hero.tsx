"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/* ── Floating node with gentle hover ── */
function FloatNode({
  children,
  className,
  delay,
  float = true,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  float?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={float ? { y: [0, -6, 0] } : {}}
        transition={float ? { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" } : {}}
        className="hover:scale-110 transition-transform duration-200 cursor-default"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Animated data particle ── */
function DataParticle({ delay, path }: { delay: number; path: string }) {
  return (
    <motion.circle
      r="3"
      fill="#818CF8"
      opacity="0.6"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{ delay, duration: 2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      style={{ offsetPath: `path('${path}')` }}
    />
  );
}

/* ── Live task counter ── */
function TaskCounter() {
  const [count, setCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-[12%] left-1/2 -translate-x-1/2"
    >
      <div className="bg-white rounded-xl border border-slate-200 shadow-md px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          <span className="text-[10px] font-bold text-emerald uppercase">Live</span>
        </div>
        <div className="w-px h-4 bg-slate-200" />
        <div>
          <motion.span
            key={count}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[15px] font-extrabold text-slate-900 tabular-nums"
          >
            {count.toLocaleString()}
          </motion.span>
          <span className="text-[10px] text-slate-400 ml-1.5">tasks today</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Workflow Animation ── */
function AnimatedWorkflow() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      {/* Circular backgrounds */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[360px] h-[360px] rounded-full bg-gradient-to-br from-brand-50 via-slate-50 to-purple-50/80 border border-slate-200/40" />
        {/* Spinning orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-slate-200/50"
        >
          {/* Orbiting dot */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand/40" />
        </motion.div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-slate-100/60" />
      </div>

      <div className="relative aspect-square flex items-center justify-center">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
          <path d="M108 128 Q165 160 175 185" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.3" />
          <path d="M292 128 Q235 160 225 185" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.3" />
          <path d="M200 250 L200 272" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.3" />
          <path d="M175 305 Q140 315 118 322" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.3" />
          <path d="M225 305 Q260 315 282 322" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.3" />
        </svg>

        {/* Input nodes — gently floating */}
        <FloatNode delay={0.3} className="top-[2%] left-1/2 -translate-x-1/2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-3.5 py-2.5 text-center w-[82px]">
            <div className="text-[15px] mb-0.5">👤</div>
            <div className="text-[10px] font-bold text-slate-700">Leads</div>
            <div className="text-[8px] text-slate-400">inbound</div>
          </div>
        </FloatNode>

        <FloatNode delay={0.4} className="top-[13%] left-[4%]">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-3.5 py-2.5 text-center w-[82px]">
            <div className="text-[15px] mb-0.5">📧</div>
            <div className="text-[10px] font-bold text-slate-700">Emails</div>
            <div className="text-[8px] text-slate-400">1.2K/day</div>
          </div>
        </FloatNode>

        <FloatNode delay={0.5} className="top-[13%] right-[4%]">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-3.5 py-2.5 text-center w-[82px]">
            <div className="text-[15px] mb-0.5">📄</div>
            <div className="text-[10px] font-bold text-slate-700">Invoices</div>
            <div className="text-[8px] text-slate-400">PDF / scan</div>
          </div>
        </FloatNode>

        {/* Central AI Agent — pulsing glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6, type: "spring", bounce: 0.25 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]"
        >
          <div className="relative">
            {/* Pulsing glow ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-2xl bg-brand/20 blur-md"
            />
            <div className="relative bg-gradient-to-br from-brand to-[#6D28D9] rounded-2xl shadow-xl shadow-brand/25 px-6 py-4 text-center">
              <div className="text-[20px] mb-1">🤖</div>
              <div className="text-[12px] font-bold text-white">AI Agent</div>
              <div className="text-[9px] text-indigo-200 mt-0.5">Processing</div>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-2 flex justify-center gap-1"
              >
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Route node */}
        <FloatNode delay={0.9} className="bottom-[22%] left-1/2 -translate-x-1/2" float={false}>
          <div className="bg-amber-50 rounded-xl border border-amber-200 shadow-sm px-4 py-2 text-center">
            <div className="text-[10px] font-bold text-amber-800">⚡ Route & Act</div>
          </div>
        </FloatNode>

        {/* Output nodes */}
        <FloatNode delay={1.05} className="bottom-[5%] left-[4%]">
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 shadow-sm px-3.5 py-2.5 text-center w-[82px]">
            <div className="text-[15px] mb-0.5">💾</div>
            <div className="text-[10px] font-bold text-emerald-700">CRM</div>
            <div className="text-[8px] text-emerald-500">updated</div>
          </div>
        </FloatNode>

        <FloatNode delay={1.1} className="bottom-[5%] right-[4%]">
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 shadow-sm px-3.5 py-2.5 text-center w-[82px]">
            <div className="text-[15px] mb-0.5">✅</div>
            <div className="text-[10px] font-bold text-emerald-700">Reply</div>
            <div className="text-[8px] text-emerald-500">auto-sent</div>
          </div>
        </FloatNode>

        {/* Live badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          className="absolute top-[16%] right-[15%]"
        >
          <div className="flex items-center gap-1 bg-white rounded-full border border-slate-200 shadow-sm px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            <span className="text-[9px] font-bold text-slate-500">24/7</span>
          </div>
        </motion.div>

        {/* Live task counter */}
        <TaskCounter />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand/[0.05] to-purple-300/[0.03] blur-3xl animate-mesh" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-coral/[0.03] to-amber/[0.02] blur-3xl animate-mesh" style={{ animationDelay: "-8s" }} />
        <div className="absolute inset-0 opacity-[0.25]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="heroGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="#94A3B8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100/80 px-3.5 py-1.5 mb-7">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <span className="text-[11px] font-bold text-brand tracking-wide uppercase">
                  AI &amp; Automation Partners for Scaling Teams
                </span>
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
              Turn Workflows into <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">Autopilot.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.18)} className="mt-4 text-[17px] sm:text-[19px] leading-[1.6] text-slate-500 max-w-[500px]">
              We build custom AI agents and automations so your team can stop drowning in repetitive work and start focusing on what actually grows the business.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 transition-all duration-200">
                Start with a free workflow
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-7 py-3.5 text-[15px] font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">
                See client results
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.45)} className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#6366F1", "#EC4899", "#F59E0B", "#10B981"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c }}>
                    {["JR", "SK", "MH", "AW"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-slate-500">
                <span className="font-bold text-slate-700">50+ companies</span> automated this year
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <AnimatedWorkflow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
