"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

/* ── CountUp ── */
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
      else setCount(decimals > 0 ? parseFloat(cur.toFixed(decimals)) : Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end, duration, decimals]);

  return <span ref={ref}>{prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}</span>;
}

/* ── Lens Focus Items ── */
const focusItems = [
  "Data Entry",
  "Report Generation",
  "Invoice Processing",
  "Lead Routing",
  "Email Triage",
  "PPT Decks",
  "Compliance Checks",
];

function TrueFocusLens() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % focusItems.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {focusItems.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <motion.div
            key={item}
            animate={{
              scale: isActive ? 1.08 : 1,
              opacity: isActive ? 1 : 0.35,
              filter: isActive ? "blur(0px)" : "blur(1.5px)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow ring behind active item */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-1 rounded-2xl bg-brand/10 blur-sm"
                />
              )}
            </AnimatePresence>

            <div
              className={`relative rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-[14px] sm:text-[16px] font-bold transition-colors duration-300 ${
                isActive
                  ? "bg-white text-slate-900 shadow-lg shadow-brand/10 border border-brand/20 ring-2 ring-brand/20"
                  : "bg-slate-100/80 text-slate-400 border border-transparent"
              }`}
            >
              {/* Lens indicator dot */}
              {isActive && (
                <motion.span
                  layoutId="focusDot"
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand shadow-md shadow-brand/30"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                />
              )}
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Main Section ── */
export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[13px] font-bold text-coral uppercase tracking-wider mb-4">
            The reality check
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900">
            The problem is clear
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-slate-600 max-w-xl mx-auto">
            Your team is spending hours every day on repetitive tasks that AI
            can handle in seconds. Here&apos;s what&apos;s eating their time:
          </p>
        </motion.div>

        {/* Lens Focus Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-14 mb-16"
        >
          <TrueFocusLens />
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          <div className="text-center rounded-2xl bg-white border border-slate-200/80 shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="text-[3rem] sm:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-none">
              <CountUp end={60} suffix="%" />
            </div>
            <p className="mt-3 text-[14px] text-slate-500 leading-relaxed">
              of tasks in any business can be automated with today&apos;s AI
            </p>
          </div>

          <div className="text-center rounded-2xl bg-white border border-slate-200/80 shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="text-[3rem] sm:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-none">
              $<CountUp end={4.7} suffix="T" decimals={1} />
            </div>
            <p className="mt-3 text-[14px] text-slate-500 leading-relaxed">
              in productivity lost every year to manual repetitive work
            </p>
          </div>

          <div className="text-center rounded-2xl bg-brand-50 border border-brand-100 shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="text-[3rem] sm:text-[3.5rem] font-extrabold tracking-tight text-brand leading-none">
              <CountUp end={23} suffix="+" />
            </div>
            <p className="mt-3 text-[14px] text-slate-500 leading-relaxed">
              hours per week wasted per knowledge worker on automatable tasks
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
