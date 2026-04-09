"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function AnimatedWorkflow() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto">
      <svg viewBox="0 0 540 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Soft background shape */}
        <ellipse cx="270" cy="200" rx="240" ry="180" fill="#F8FAFC" />

        {/* Flow lines — animated dashes */}
        <path d="M130 140 L210 140" stroke="#818CF8" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.5" />
        <path d="M310 140 L390 140" stroke="#818CF8" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.5" />
        <path d="M270 185 L270 225" stroke="#818CF8" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.5" />
        <path d="M210 270 L130 270" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.5" />
        <path d="M330 270 L390 270" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" opacity="0.5" />
      </svg>

      {/* Node cards — positioned absolutely over SVG for clean rendering */}
      {/* Input node — Email */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-[27%] left-[4%] w-[90px]"
      >
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 text-center">
          <div className="text-lg mb-1">📧</div>
          <div className="text-[10px] font-semibold text-slate-700">Emails</div>
          <div className="text-[8px] text-slate-400 mt-0.5">Incoming</div>
        </div>
      </motion.div>

      {/* Input node — Documents */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-[27%] right-[4%] w-[90px]"
      >
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 text-center">
          <div className="text-lg mb-1">📄</div>
          <div className="text-[10px] font-semibold text-slate-700">Invoices</div>
          <div className="text-[8px] text-slate-400 mt-0.5">PDF / Scan</div>
        </div>
      </motion.div>

      {/* Central AI node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[120px]"
      >
        <div className="bg-gradient-to-br from-brand to-brand-dark rounded-2xl shadow-lg shadow-brand/20 p-4 text-center">
          <div className="text-xl mb-1">🤖</div>
          <div className="text-[11px] font-bold text-white">AI Agent</div>
          <div className="text-[8px] text-indigo-200 mt-0.5">Processing...</div>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 flex justify-center gap-1"
          >
            <div className="w-1 h-1 rounded-full bg-indigo-300" />
            <div className="w-1 h-1 rounded-full bg-indigo-200" />
            <div className="w-1 h-1 rounded-full bg-indigo-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Decision node */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute top-[56%] left-1/2 -translate-x-1/2 w-[110px]"
      >
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-3 text-center">
          <div className="text-lg mb-1">⚡</div>
          <div className="text-[10px] font-semibold text-amber-800">Route & Act</div>
          <div className="text-[8px] text-amber-500 mt-0.5">Smart decisions</div>
        </div>
      </motion.div>

      {/* Output node — CRM */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-[14%] left-[4%] w-[90px]"
      >
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center">
          <div className="text-lg mb-1">💾</div>
          <div className="text-[10px] font-semibold text-emerald-800">CRM</div>
          <div className="text-[8px] text-emerald-500 mt-0.5">Updated</div>
        </div>
      </motion.div>

      {/* Output node — Reply */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-[14%] right-[4%] w-[90px]"
      >
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center">
          <div className="text-lg mb-1">✅</div>
          <div className="text-[10px] font-semibold text-emerald-800">Response</div>
          <div className="text-[8px] text-emerald-500 mt-0.5">Auto-sent</div>
        </div>
      </motion.div>

      {/* Floating badge — live indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="absolute top-[12%] right-[12%]"
      >
        <div className="flex items-center gap-1.5 bg-white rounded-full border border-slate-200 shadow-sm px-2.5 py-1">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald"
          />
          <span className="text-[9px] font-medium text-slate-500">Running 24/7</span>
        </div>
      </motion.div>

      {/* Floating speed badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.4 }}
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center gap-1.5 bg-white rounded-full border border-slate-200 shadow-sm px-2.5 py-1">
          <span className="text-[9px] font-medium text-slate-500">Avg. 90s per task</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand/[0.03] blur-3xl animate-mesh" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-coral/[0.03] blur-3xl animate-mesh" style={{ animationDelay: "-7s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <span className="text-[11px] font-semibold text-brand tracking-wide uppercase">
                  Now accepting new clients
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.5rem] sm:text-[3.2rem] lg:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-slate-900"
            >
              We build AI that works while{" "}
              <span className="text-brand">you sleep</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-[17px] leading-[1.6] text-slate-500 max-w-md"
            >
              Custom AI agents that handle your repetitive work — processing documents,
              responding to leads, updating systems — so your team can focus on
              what actually matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-brand/20 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/25 transition-all duration-200"
              >
                Start with a free workflow
                <ArrowRight size={15} />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-[14px] font-semibold text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-all duration-200"
              >
                See results
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-[13px] text-slate-400"
            >
              Your first automation is on us. No contract, no credit card.
            </motion.p>
          </div>

          {/* Right — animated workflow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedWorkflow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
