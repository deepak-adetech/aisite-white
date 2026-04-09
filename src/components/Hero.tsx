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
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* Circular background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-brand-50 via-slate-50 to-purple-50 border border-slate-200/50" />
        <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-slate-200/60" />
      </div>

      {/* Content wrapper — square aspect */}
      <div className="relative aspect-square flex items-center justify-center">
        {/* Flow connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
          <path d="M100 120 Q155 155 165 175" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.35" />
          <path d="M280 120 Q225 155 215 175" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.35" />
          <path d="M190 230 L190 255" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.35" />
          <path d="M165 290 Q130 300 110 305" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.35" />
          <path d="M215 290 Q250 300 270 305" stroke="#10B981" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.35" />
        </svg>

        {/* Input: Email */}
        <motion.div {...nodeEnter(0.4)} className="absolute top-[12%] left-[6%]">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2.5 text-center w-[80px]">
            <div className="text-[14px] mb-0.5">📧</div>
            <div className="text-[10px] font-bold text-slate-700">Emails</div>
          </div>
        </motion.div>

        {/* Input: Invoices */}
        <motion.div {...nodeEnter(0.5)} className="absolute top-[12%] right-[6%]">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2.5 text-center w-[80px]">
            <div className="text-[14px] mb-0.5">📄</div>
            <div className="text-[10px] font-bold text-slate-700">Invoices</div>
          </div>
        </motion.div>

        {/* Input: Leads */}
        <motion.div {...nodeEnter(0.45)} className="absolute top-[2%] left-1/2 -translate-x-1/2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2.5 text-center w-[80px]">
            <div className="text-[14px] mb-0.5">👤</div>
            <div className="text-[10px] font-bold text-slate-700">Leads</div>
          </div>
        </motion.div>

        {/* Central AI Agent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5, type: "spring", bounce: 0.25 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]"
        >
          <div className="relative bg-gradient-to-br from-brand to-[#6D28D9] rounded-xl shadow-lg shadow-brand/20 px-5 py-3.5 text-center">
            <div className="text-[18px] mb-1">🤖</div>
            <div className="text-[11px] font-bold text-white">AI Agent</div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-1.5 flex justify-center gap-0.5"
            >
              <div className="w-1 h-1 rounded-full bg-indigo-300" />
              <div className="w-1 h-1 rounded-full bg-indigo-200" />
              <div className="w-1 h-1 rounded-full bg-indigo-300" />
            </motion.div>
            <div className="absolute -inset-0.5 rounded-xl bg-brand/15 blur-sm -z-10" />
          </div>
        </motion.div>

        {/* Route node */}
        <motion.div {...nodeEnter(0.9)} className="absolute bottom-[24%] left-1/2 -translate-x-1/2">
          <div className="bg-amber-50 rounded-xl border border-amber-200 px-4 py-2 text-center">
            <div className="text-[10px] font-bold text-amber-800">⚡ Route</div>
          </div>
        </motion.div>

        {/* Output: CRM */}
        <motion.div {...nodeEnter(1.05)} className="absolute bottom-[6%] left-[6%]">
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 px-3 py-2.5 text-center w-[80px]">
            <div className="text-[14px] mb-0.5">💾</div>
            <div className="text-[10px] font-bold text-emerald-700">CRM</div>
          </div>
        </motion.div>

        {/* Output: Reply */}
        <motion.div {...nodeEnter(1.1)} className="absolute bottom-[6%] right-[6%]">
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 px-3 py-2.5 text-center w-[80px]">
            <div className="text-[14px] mb-0.5">✅</div>
            <div className="text-[10px] font-bold text-emerald-700">Sent</div>
          </div>
        </motion.div>

        {/* Live badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          className="absolute top-[16%] right-[16%]"
        >
          <div className="flex items-center gap-1 bg-white rounded-full border border-slate-200 shadow-sm px-2 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            <span className="text-[8px] font-bold text-slate-500">24/7</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand/[0.05] to-purple-300/[0.03] blur-3xl animate-mesh" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-coral/[0.03] to-amber/[0.02] blur-3xl animate-mesh" style={{ animationDelay: "-8s" }} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.3]">
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
              className="text-slate-900"
            >
              <span className="block text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-extrabold leading-[1.05] tracking-[-0.035em]">
                We automate your work.
              </span>
              <span className="block text-[2.4rem] sm:text-[3.1rem] lg:text-[3.4rem] font-semibold leading-[1.1] tracking-[-0.03em] text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light mt-1">
                You scale your business.
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

          {/* Animated workflow — compact circle */}
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
