"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

function CountUp({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const increment = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
}

const timeBlocks = [
  { label: "Email & communication", pct: 28, color: "bg-coral" },
  { label: "Data entry & updates", pct: 19, color: "bg-amber" },
  { label: "Report generation", pct: 14, color: "bg-brand" },
  { label: "Document processing", pct: 11, color: "bg-sky" },
  { label: "Actual strategic work", pct: 28, color: "bg-emerald" },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-[13px] font-semibold text-coral uppercase tracking-wider mb-3">
            The reality check
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            Your team spends 72% of their day on tasks a machine should handle
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-slate-500">
            We audited 50+ companies last year. The pattern is always the same:
            talented people buried in busywork while the work that actually moves
            the business forward gets maybe two hours of their day.
          </p>
        </motion.div>

        {/* Time visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Where an average employee&apos;s day actually goes
          </p>

          {/* Stacked horizontal bar */}
          <div className="flex h-12 sm:h-14 rounded-xl overflow-hidden">
            {timeBlocks.map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ width: 0 }}
                animate={inView ? { width: `${block.pct}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                className={`${block.color} ${i === timeBlocks.length - 1 ? "" : "border-r-2 border-white"} relative group cursor-default`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] sm:text-[12px] font-bold text-white drop-shadow-sm">
                    {block.pct}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {timeBlocks.map((block) => (
              <div key={block.label} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-sm ${block.color}`} />
                <span className="text-[12px] text-slate-500">{block.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Callout — the cost */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="rounded-2xl bg-slate-50 border border-slate-100 p-6"
          >
            <div className="text-[2.2rem] font-bold tracking-tight text-slate-900">
              <CountUp end={23} suffix="hrs" />
            </div>
            <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
              Per employee, per week lost to tasks that could be fully automated
              with today&apos;s AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="rounded-2xl bg-slate-50 border border-slate-100 p-6"
          >
            <div className="text-[2.2rem] font-bold tracking-tight text-slate-900">
              $<CountUp end={4.7} suffix="T" decimals={1} />
            </div>
            <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
              Lost in productivity annually across the global economy
              due to manual repetitive work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="rounded-2xl bg-brand-50 border border-brand-100 p-6"
          >
            <div className="text-[2.2rem] font-bold tracking-tight text-brand">
              <CountUp end={60} suffix="%" />
            </div>
            <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
              Of these tasks can be automated right now — not in five years,
              not with futuristic AI. Today.
            </p>
          </motion.div>
        </div>

        {/* Transition line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-14 text-center"
        >
          <p className="text-[15px] text-slate-400 font-medium">
            That green sliver? We make it the whole bar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
