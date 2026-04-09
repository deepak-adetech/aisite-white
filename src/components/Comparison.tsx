"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "First workflow free — no strings", us: true, others: false },
  { feature: "Custom-built for your exact stack", us: true, others: false },
  { feature: "Full code ownership from day one", us: true, others: false },
  { feature: "Production-ready in 2 weeks", us: true, others: false },
  { feature: "Tool-agnostic (no vendor lock-in)", us: true, others: false },
  { feature: "Dedicated AI engineers, not generalists", us: true, others: false },
  { feature: "Post-launch optimization included", us: true, others: false },
  { feature: "Month-to-month, cancel anytime", us: true, others: false },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-semibold text-brand uppercase tracking-wider mb-3">
            Why us
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            Not your typical consultancy
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-md mx-auto">
            Most agencies sell hours. We sell outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-white border border-slate-200 overflow-hidden"
        >
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] border-b border-slate-100 bg-slate-50">
            <div className="p-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider" />
            <div className="p-4 text-center text-[11px] font-bold text-brand uppercase tracking-wider">
              Us
            </div>
            <div className="p-4 text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Others
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.feature}
              className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_120px_120px] ${
                i !== rows.length - 1 ? "border-b border-slate-50" : ""
              }`}
            >
              <div className="p-4 text-[13px] font-medium text-slate-600">{r.feature}</div>
              <div className="p-4 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center">
                  <Check size={13} className="text-emerald" strokeWidth={3} />
                </div>
              </div>
              <div className="p-4 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                  <X size={13} className="text-slate-300" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
