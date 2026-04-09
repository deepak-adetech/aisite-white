"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const focusItems = [
  "Data Entry",
  "Report Generation",
  "Invoice Processing",
  "Lead Routing",
  "Email Triage",
  "PPT Decks",
  "Compliance Checks",
];

function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const increment = end / (duration / 16);
    let current = start;
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
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ProblemStatement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % focusItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            The problem is clear
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your team is still spending hours on tasks AI can handle in seconds
          </p>
        </motion.div>

        {/* Cycling focus items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {focusItems.map((item, i) => (
            <div
              key={item}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                i === activeIndex
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-110"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-primary">
              <CountUp end={60} suffix="%" />
            </div>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              of tasks in any business can be automated
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-orange-50 to-white border border-orange-100">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-secondary">
              <CountUp end={4} suffix=".7T" prefix="$" />
            </div>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              in annual productivity lost to manual work
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-teal-50 to-white border border-teal-100">
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-accent-teal">
              <CountUp end={23} suffix="+" />
            </div>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              hours/week wasted per knowledge worker
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
