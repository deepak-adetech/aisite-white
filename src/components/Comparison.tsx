"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "First workflow free",
    us: true,
    others: false,
  },
  {
    feature: "Custom-built for your stack",
    us: true,
    others: false,
  },
  {
    feature: "You own all the code",
    us: true,
    others: false,
  },
  {
    feature: "Live in 2 weeks",
    us: true,
    others: false,
  },
  {
    feature: "Tool-agnostic approach",
    us: true,
    others: false,
  },
  {
    feature: "Dedicated AI engineers",
    us: true,
    others: false,
  },
  {
    feature: "Ongoing optimization included",
    us: true,
    others: false,
  },
  {
    feature: "No long-term contracts",
    us: true,
    others: false,
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Not your typical{" "}
            <span className="text-primary">AI agency</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            See how we stack up against the rest
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 sm:p-5 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Feature
            </div>
            <div className="p-4 sm:p-5 text-center">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                AutoWorkflows.AI
              </span>
            </div>
            <div className="p-4 sm:p-5 text-center text-sm font-semibold text-gray-400">
              Others
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${
                i !== rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="p-4 sm:p-5 text-sm font-medium text-gray-700">
                {row.feature}
              </div>
              <div className="p-4 sm:p-5 flex justify-center">
                <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
                  <Check size={16} className="text-green-600" />
                </div>
              </div>
              <div className="p-4 sm:p-5 flex justify-center">
                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                  <X size={16} className="text-red-400" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
