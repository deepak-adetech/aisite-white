"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, Rocket, ShieldCheck, Key } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Outcome-First",
    description:
      "We don't bill for effort — we deliver measurable outcomes. If it doesn't move the needle, we don't build it.",
    color: "bg-purple-50 text-primary border-purple-100",
  },
  {
    icon: Rocket,
    title: "Speed to Value",
    description:
      "First automation live in 2 weeks, not 6 months. We move fast so you see ROI before the invoice lands.",
    color: "bg-orange-50 text-secondary border-orange-100",
  },
  {
    icon: ShieldCheck,
    title: "Zero Risk",
    description:
      "Your first workflow is free. No commitment, no contract. We earn your trust with results, not promises.",
    color: "bg-teal-50 text-accent-teal border-teal-100",
  },
  {
    icon: Key,
    title: "You Own Everything",
    description:
      "Every agent, workflow, and line of code is yours. No vendor lock-in. No hostage situations. Ever.",
    color: "bg-pink-50 text-accent-pink border-pink-100",
  },
];

export default function Pillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our commitments to you
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Four principles that guide every project we take on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border p-6 text-center ${pillar.color}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
