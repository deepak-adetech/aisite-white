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

/* ── Animated donut chart ── */
function DonutChart({ percentage, color, label, inView }: { percentage: number; color: string; label: string; inView: boolean }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[100px] h-[100px]">
        <svg width="100" height="100" viewBox="0 0 100 100" className="-rotate-90">
          <circle cx="50" cy="50" r="42" stroke="#E2E8F0" strokeWidth="7" fill="none" />
          <motion.circle
            cx="50" cy="50" r="42"
            stroke={color}
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[20px] font-extrabold text-slate-900">{percentage}%</span>
        </div>
      </div>
      <p className="mt-2 text-[12px] font-semibold text-slate-500 text-center">{label}</p>
    </div>
  );
}

/* ── Focus lens items ── */
const focusItems = [
  { label: "Data Entry", icon: "📋", hours: "6.2h/week" },
  { label: "Report Generation", icon: "📊", hours: "4.8h/week" },
  { label: "Invoice Processing", icon: "🧾", hours: "5.1h/week" },
  { label: "Lead Routing", icon: "🔀", hours: "3.4h/week" },
  { label: "Email Triage", icon: "📧", hours: "7.3h/week" },
  { label: "PPT Decks", icon: "📑", hours: "3.7h/week" },
  { label: "Compliance Checks", icon: "✅", hours: "4.1h/week" },
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
      {focusItems.map((item, i) => {
        const isActive = i === active;
        return (
          <motion.button
            key={item.label}
            onClick={() => setActive(i)}
            animate={{
              scale: isActive ? 1.05 : 1,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative rounded-2xl p-4 text-center transition-all duration-300 cursor-pointer ${
              isActive
                ? "bg-white shadow-lg shadow-brand/8 border-2 border-brand/20 z-10"
                : "bg-slate-50 border-2 border-transparent hover:bg-white hover:opacity-75"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="focusRing"
                className="absolute -inset-px rounded-2xl border-2 border-brand/30"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <div className="text-[20px] mb-1.5">{item.icon}</div>
            <div className={`text-[11px] font-bold leading-tight ${isActive ? "text-slate-900" : "text-slate-400"}`}>
              {item.label}
            </div>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-1.5 text-[11px] font-bold text-coral">{item.hours}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Time bar infographic ── */
const timeSegments = [
  { label: "Automatable tasks", pct: 72, color: "#F43F5E" },
  { label: "Strategic work", pct: 28, color: "#10B981" },
];

function TimeBar({ inView }: { inView: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Your team&apos;s average day</span>
        <span className="text-[12px] font-bold text-coral">72% wasted</span>
      </div>
      <div className="h-6 rounded-full overflow-hidden bg-slate-100 flex">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "72%" } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-coral to-coral-light rounded-l-full relative"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white">72%</span>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "28%" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-emerald to-emerald/80 rounded-r-full relative"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white">28%</span>
        </motion.div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-coral" />
          <span className="text-[11px] text-slate-500">Repetitive tasks AI can handle</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald" />
          <span className="text-[11px] text-slate-500">Actual strategic work</span>
        </div>
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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[13px] font-bold text-coral uppercase tracking-wider mb-4">
            The reality check
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900">
            The problem is clear
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-slate-600 max-w-xl mx-auto">
            Every day, your best people spend most of their time on work that
            doesn&apos;t need a human brain. Here&apos;s what&apos;s eating their hours:
          </p>
        </motion.div>

        {/* Focus Lens — interactive task grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mb-14"
        >
          <FocusLens inView={inView} />
        </motion.div>

        {/* Infographic row — bar + donuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="rounded-2xl bg-white border border-slate-200/80 shadow-sm p-6 sm:p-8 mb-10"
        >
          <TimeBar inView={inView} />

          {/* Donut charts row */}
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md mx-auto">
            <DonutChart percentage={60} color="#4F46E5" label="Tasks automatable" inView={inView} />
            <DonutChart percentage={72} color="#F43F5E" label="Time on busywork" inView={inView} />
            <DonutChart percentage={28} color="#10B981" label="Strategic work" inView={inView} />
          </div>
        </motion.div>

        {/* Big stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-coral" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight text-slate-900 leading-none">
                <CountUp end={23} suffix="h" />
              </div>
              <p className="mt-1 text-[13px] text-slate-500">Wasted per employee, every single week</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
              <DollarSign size={20} className="text-amber" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight text-slate-900 leading-none">
                $<CountUp end={4.7} suffix="T" decimals={1} />
              </div>
              <p className="mt-1 text-[13px] text-slate-500">Global productivity lost to manual work annually</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
              <TrendingUp size={20} className="text-brand" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight text-brand leading-none">
                <CountUp end={60} suffix="%" />
              </div>
              <p className="mt-1 text-[13px] text-slate-500">Of business tasks are automatable right now</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-6 flex items-start gap-4 text-white">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <AlertTriangle size={20} className="text-white" />
            </div>
            <div>
              <div className="text-[2rem] font-extrabold tracking-tight leading-none">
                <CountUp end={3} suffix="x" />
              </div>
              <p className="mt-1 text-[13px] text-indigo-200">More output from same team size after automation</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom punchline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-[16px] font-semibold text-slate-400">
            The good news? <span className="text-brand font-bold">All of this is fixable.</span> And we can prove it for free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
