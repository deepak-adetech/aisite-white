"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Clock, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";

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

/* ── Lens focus with blur ── */
const focusItems = [
  "Invoice Processing",
  "Email Triage",
  "Data Entry",
  "Lead Routing",
  "PPT Decks",
  "Report Generation",
  "Compliance Checks",
];

function FocusLens({ inView }: { inView: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % focusItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {focusItems.map((item, i) => {
        const isActive = i === active;
        return (
          <motion.div
            key={item}
            animate={{
              scale: isActive ? 1.08 : 0.95,
              opacity: isActive ? 1 : 0.3,
              filter: isActive ? "blur(0px)" : "blur(3px)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative cursor-pointer"
            onClick={() => setActive(i)}
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-1.5 rounded-2xl bg-[#0071e3]/8 blur-sm"
                />
              )}
            </AnimatePresence>
            <div
              className={`relative rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-[14px] sm:text-[16px] font-bold transition-colors duration-300 ${
                isActive
                  ? "bg-white text-[#1d1d1f] shadow-lg shadow-[#0071e3]/10 border border-[#0071e3]/20 ring-2 ring-[#0071e3]/15"
                  : "bg-slate-100/80 text-[#86868b] border border-transparent"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="lensDot"
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand shadow-sm shadow-[#0071e3]/40"
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

/* ── Compact time bar ── */
const timeBlocks = [
  { label: "Email & comms", pct: 28, color: "bg-[#FF3B30]" },
  { label: "Data entry", pct: 19, color: "bg-[#FF9F0A]" },
  { label: "Reports", pct: 14, color: "bg-brand" },
  { label: "Doc processing", pct: 11, color: "bg-[#64D2FF]" },
  { label: "Strategic work", pct: 28, color: "bg-[#30D158]" },
];

function TimeBar({ inView }: { inView: boolean }) {
  return (
    <div>
      <p className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider mb-3">
        Your team&apos;s average day
      </p>
      <div className="flex h-8 rounded-lg overflow-hidden">
        {timeBlocks.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ width: 0 }}
            animate={inView ? { width: `${b.pct}%` } : { width: 0 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: "easeOut" }}
            className={`${b.color} relative ${i < timeBlocks.length - 1 ? "border-r-2 border-white" : ""}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white drop-shadow-sm">{b.pct}%</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
        {timeBlocks.map((b) => (
          <div key={b.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-sm ${b.color}`} />
            <span className="text-[10px] text-[#86868b]">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-[13px] font-bold text-[#FF3B30] uppercase tracking-wider mb-4">
            The reality check
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1d1d1f]">
            The problem is clear
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-[#424245] max-w-xl mx-auto">
            Every day, your team spends most of their time on tasks that
            don&apos;t need a human brain. This is where the hours go:
          </p>
        </motion.div>

        {/* Lens focus — blurred text cycling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mb-12"
        >
          <FocusLens inView={inView} />
        </motion.div>

        {/* Time bar — compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-14"
        >
          <TimeBar inView={inView} />
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="rounded-2xl bg-white border border-[#d2d2d7]/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#FF3B30]/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-[#FF3B30]" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight text-[#1d1d1f] leading-none">
                <CountUp end={23} suffix="h" />
              </div>
              <p className="mt-1 text-[13px] text-[#86868b]">Wasted per employee, every single week</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#d2d2d7]/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#FF9F0A]/10 flex items-center justify-center shrink-0">
              <DollarSign size={20} className="text-[#FF9F0A]" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight text-[#1d1d1f] leading-none">
                $<CountUp end={4.7} suffix="T" decimals={1} />
              </div>
              <p className="mt-1 text-[13px] text-[#86868b]">Global productivity lost to manual work annually</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-[#d2d2d7]/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#0071e3]/10 flex items-center justify-center shrink-0">
              <TrendingUp size={20} className="text-[#0071e3]" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight text-[#0071e3] leading-none">
                <CountUp end={60} suffix="%" />
              </div>
              <p className="mt-1 text-[13px] text-[#86868b]">Of business tasks are automatable right now</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#0066cc] p-6 flex items-start gap-4 text-white">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <AlertTriangle size={20} className="text-white" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight leading-none">
                <CountUp end={3} suffix="x" />
              </div>
              <p className="mt-1 text-[13px] text-indigo-200">More output from same team after automation</p>
            </div>
          </div>
        </motion.div>

        {/* Punchline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-[16px] font-semibold text-[#86868b]">
            The good news? <span className="text-[#0071e3] font-bold">All of this is fixable.</span> And we can prove it for free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
