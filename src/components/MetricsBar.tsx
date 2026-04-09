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
    const inc = end / (duration / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { value: 50, suffix: "+", label: "Companies automated" },
  { value: 14, suffix: " days", label: "Avg. time to live" },
  { value: 80, suffix: "%", label: "Cost reduction (avg)" },
  { value: 12, suffix: "x", label: "Return on investment" },
];

export default function MetricsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-[#1d1d1f] via-[#1d1d1f] to-[#333336]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15"
        >
          {metrics.map((m) => (
            <div key={m.label} className="text-center lg:px-8">
              <div className="text-[2.4rem] sm:text-[3rem] font-extrabold tracking-tight text-white">
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-1.5 text-[12px] font-semibold text-indigo-200 uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
