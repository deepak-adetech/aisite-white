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
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-[13px] font-bold text-brand uppercase tracking-wider mb-4">
            Why us
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900">
            Not your typical consultancy
          </h2>
          <p className="mt-4 text-[16px] text-slate-600 max-w-md mx-auto">
            Most agencies sell hours. We sell outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] border-b border-slate-100 bg-slate-50/80">
            <div className="p-5" />
            <div className="p-5 text-center text-[11px] font-bold text-brand uppercase tracking-wider">Us</div>
            <div className="p-5 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider">Others</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.feature}
              className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] ${
                i < rows.length - 1 ? "border-b border-slate-50" : ""
              } hover:bg-slate-50/50 transition-colors`}
            >
              <div className="p-5 text-[14px] font-medium text-slate-700">{r.feature}</div>
              <div className="p-5 flex justify-center">
                <div className="w-7 h-7 rounded-full bg-emerald/10 flex items-center justify-center">
                  <Check size={14} className="text-emerald" strokeWidth={3} />
                </div>
              </div>
              <div className="p-5 flex justify-center">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                  <X size={14} className="text-slate-300" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
