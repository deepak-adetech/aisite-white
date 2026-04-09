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
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 50, suffix: "+", label: "Companies automated" },
  { value: 2, suffix: " weeks", label: "Average launch time" },
  { value: 80, suffix: "%", label: "Cost reduction" },
  { value: 12, suffix: "x", label: "Average ROI" },
];

export default function MetricsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                <CountUp end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="mt-2 text-sm text-purple-200 font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
