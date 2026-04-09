"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const increment = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>{count}{suffix}</span>
  );
}

const metrics = [
  { value: 50, suffix: "+", label: "Companies shipped" },
  { value: 14, suffix: " days", label: "Average time to live" },
  { value: 80, suffix: "%", label: "Cost reduction (avg)" },
  { value: 12, suffix: "x", label: "Return on investment" },
];

export default function MetricsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-14 border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="text-center lg:px-6">
              <div className="text-[2rem] sm:text-[2.4rem] font-bold tracking-tight text-slate-900">
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-1 text-[12px] font-medium text-slate-400 uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
