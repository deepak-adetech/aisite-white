"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function AnimatedWorkflow() {
  const nodeEnter = (delay: number) => ({
    initial: { opacity: 0, scale: 0.85, y: 12 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Subtle grid pattern bg */}
      <div className="absolute inset-0 rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden">
        <svg width="100%" height="100%" className="opacity-[0.35]">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Flow connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" fill="none">
        {/* Top-left to center */}
        <path d="M110 135 Q200 135 220 200" stroke="#818CF8" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.4" />
        {/* Top-right to center */}
        <path d="M410 135 Q320 135 300 200" stroke="#818CF8" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.4" />
        {/* Center to bottom-center */}
        <path d="M260 280 L260 330" stroke="#818CF8" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.4" />
        {/* Bottom-center to left */}
        <path d="M230 385 Q170 390 130 395" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.4" />
        {/* Bottom-center to right */}
        <path d="M290 385 Q350 390 390 395" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.4" />
      </svg>

      {/* Input: Email */}
      <motion.div {...nodeEnter(0.4)} className="absolute top-[14%] left-[6%] w-[110px]">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-4 text-center">
          <div className="w-9 h-9 mx-auto rounded-xl bg-blue-50 flex items-center justify-center text-[18px] mb-2">📧</div>
          <div className="text-[12px] font-bold text-slate-800">Emails</div>
          <div className="text-[10px] text-slate-400 mt-0.5">1,200/day</div>
        </div>
      </motion.div>

      {/* Input: Invoices */}
      <motion.div {...nodeEnter(0.5)} className="absolute top-[14%] right-[6%] w-[110px]">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-4 text-center">
          <div className="w-9 h-9 mx-auto rounded-xl bg-orange-50 flex items-center justify-center text-[18px] mb-2">📄</div>
          <div className="text-[12px] font-bold text-slate-800">Invoices</div>
          <div className="text-[10px] text-slate-400 mt-0.5">PDF & scans</div>
        </div>
      </motion.div>

      {/* Input: Leads */}
      <motion.div {...nodeEnter(0.55)} className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[110px]">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-4 text-center">
          <div className="w-9 h-9 mx-auto rounded-xl bg-purple-50 flex items-center justify-center text-[18px] mb-2">👤</div>
          <div className="text-[12px] font-bold text-slate-800">Leads</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Inbound</div>
        </div>
      </motion.div>

      {/* Central AI Agent — hero element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, type: "spring", bounce: 0.3 }}
        className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[150px]"
      >
        <div className="bg-gradient-to-br from-brand to-[#6D28D9] rounded-2xl shadow-xl shadow-brand/25 p-5 text-center relative">
          <div className="text-[24px] mb-1.5">🤖</div>
          <div className="text-[13px] font-bold text-white tracking-wide">AI Agent</div>
          <div className="text-[10px] text-indigo-200 mt-1">Classifying, routing, acting</div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2.5 flex justify-center gap-1"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
          </motion.div>
          {/* Glow ring */}
          <div className="absolute -inset-1 rounded-2xl bg-brand/20 blur-md -z-10" />
        </div>
      </motion.div>

      {/* Decision node */}
      <motion.div {...nodeEnter(0.95)} className="absolute top-[64%] left-1/2 -translate-x-1/2 w-[120px]">
        <div className="bg-amber-50 rounded-2xl border border-amber-200 shadow-sm p-3.5 text-center">
          <div className="text-[16px] mb-1">⚡</div>
          <div className="text-[11px] font-bold text-amber-800">Route & Act</div>
        </div>
      </motion.div>

      {/* Output: CRM */}
      <motion.div {...nodeEnter(1.1)} className="absolute bottom-[6%] left-[6%] w-[110px]">
        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
          <div className="w-9 h-9 mx-auto rounded-xl bg-emerald-100 flex items-center justify-center text-[18px] mb-2">💾</div>
          <div className="text-[12px] font-bold text-emerald-800">CRM Updated</div>
          <div className="text-[10px] text-emerald-500 mt-0.5">Auto-logged</div>
        </div>
      </motion.div>

      {/* Output: Reply Sent */}
      <motion.div {...nodeEnter(1.15)} className="absolute bottom-[6%] right-[6%] w-[110px]">
        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm p-4 text-center">
          <div className="w-9 h-9 mx-auto rounded-xl bg-emerald-100 flex items-center justify-center text-[18px] mb-2">✅</div>
          <div className="text-[12px] font-bold text-emerald-800">Reply Sent</div>
          <div className="text-[10px] text-emerald-500 mt-0.5">Personalized</div>
        </div>
      </motion.div>

      {/* Live badge */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute top-[18%] right-[22%]"
      >
        <div className="flex items-center gap-1.5 bg-white rounded-full border border-slate-200 shadow-sm px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          <span className="text-[10px] font-semibold text-slate-600">Live — 24/7</span>
        </div>
      </motion.div>

      {/* Speed badge */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-[18%] left-1/2 -translate-x-1/2"
      >
        <div className="bg-white rounded-full border border-slate-200 shadow-sm px-3 py-1.5">
          <span className="text-[10px] font-semibold text-slate-600">~90 sec / task</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand/[0.04] to-purple-400/[0.02] blur-3xl animate-mesh" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-coral/[0.03] to-amber/[0.02] blur-3xl animate-mesh" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100/80 px-3.5 py-1.5 mb-7">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <span className="text-[11px] font-bold text-brand tracking-wide uppercase">
                  Accepting new clients
                </span>
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-slate-900"
            >
              We build AI that{" "}
              <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">
                works while you sleep
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-[17px] sm:text-[18px] leading-[1.7] text-slate-600 max-w-[480px]"
            >
              Custom AI agents that handle your repetitive work — processing documents,
              responding to leads, updating systems — so your team can focus on
              what actually grows revenue.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Start with a free workflow
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-7 py-3.5 text-[15px] font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                See client results
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.45)} className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#6366F1", "#EC4899", "#F59E0B", "#10B981"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: c }}
                  >
                    {["JR", "SK", "MH", "AW"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-slate-500">
                <span className="font-bold text-slate-700">50+ companies</span> automated this year
              </p>
            </motion.div>
          </div>

          {/* Animated workflow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedWorkflow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
