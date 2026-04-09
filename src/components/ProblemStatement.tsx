"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function CountUp({
  end, suffix = "", prefix = "", decimals = 0, duration = 2000,
}: {
  end: number; suffix?: string; prefix?: string; decimals?: number; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const inc = end / (duration / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= end) { setCount(end); clearInterval(t); }
      else { setCount(decimals > 0 ? parseFloat(cur.toFixed(decimals)) : Math.floor(cur)); }
    }, 16);
    return () => clearInterval(t);
  }, [inView, end, duration, decimals]);

  return <span ref={ref}>{prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}</span>;
}

const timeBlocks = [
  { label: "Email & comms", pct: 28, color: "bg-coral", textColor: "text-coral" },
  { label: "Data entry", pct: 19, color: "bg-amber", textColor: "text-amber" },
  { label: "Reports", pct: 14, color: "bg-brand", textColor: "text-brand" },
  { label: "Doc processing", pct: 11, color: "bg-sky", textColor: "text-sky" },
  { label: "Strategic work", pct: 28, color: "bg-emerald", textColor: "text-emerald" },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left — narrative */}
          <div>
            <motion.div {...fadeUp(0)} animate={inView ? { opacity: 1, y: 0 } : {}}>
              <p className="text-[13px] font-bold text-coral uppercase tracking-wider mb-4">
                The reality check
              </p>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900"
            >
              Your team spends <span className="text-gradient bg-gradient-to-r from-coral to-coral-light">72% of their day</span> on work a machine should handle
            </motion.h2>
            <motion.p
              {...fadeUp(0.2)}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="mt-5 text-[16px] leading-[1.75] text-slate-600"
            >
              We&apos;ve audited 50+ companies. The pattern is always the same — talented
              people buried in busywork while the work that actually moves the business
              forward gets two hours a day, if they&apos;re lucky.
            </motion.p>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.4)}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                <div className="text-[1.8rem] font-extrabold tracking-tight text-slate-900">
                  <CountUp end={23} suffix="h" />
                </div>
                <p className="mt-1 text-[12px] text-slate-500 leading-snug">Lost per employee every week</p>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                <div className="text-[1.8rem] font-extrabold tracking-tight text-slate-900">
                  $<CountUp end={4.7} suffix="T" decimals={1} />
                </div>
                <p className="mt-1 text-[12px] text-slate-500 leading-snug">Global productivity drain annually</p>
              </div>
              <div className="rounded-xl bg-brand-50 border border-brand-100 p-4">
                <div className="text-[1.8rem] font-extrabold tracking-tight text-brand">
                  <CountUp end={60} suffix="%" />
                </div>
                <p className="mt-1 text-[12px] text-slate-500 leading-snug">Can be automated with today&apos;s AI</p>
              </div>
            </motion.div>
          </div>

          {/* Right — time visualization */}
          <motion.div
            {...fadeUp(0.3)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-5">
              Where an average employee&apos;s day goes
            </p>

            {/* Horizontal stacked bar */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <div className="flex h-16 sm:h-20">
                {timeBlocks.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${b.pct}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.12, ease: "easeOut" }}
                    className={`${b.color} relative group cursor-default ${
                      i < timeBlocks.length - 1 ? "border-r-2 border-white" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[13px] sm:text-[15px] font-extrabold text-white drop-shadow-sm">
                        {b.pct}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeBlocks.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-3 py-2">
                  <div className={`w-3 h-3 rounded-sm ${b.color} shrink-0`} />
                  <span className="text-[12px] font-medium text-slate-600">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Punchline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-8 rounded-xl bg-emerald/5 border border-emerald/20 px-5 py-4"
            >
              <p className="text-[15px] font-bold text-emerald">
                That green sliver? We make it the whole bar.
              </p>
              <p className="mt-1 text-[13px] text-slate-500">
                Every section in red, orange, blue and purple above — those are the tasks
                our AI agents handle for you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
