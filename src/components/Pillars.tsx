"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, Rocket, ShieldCheck, Key } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Outcome-first",
    description:
      "We don't bill for effort. Every project has a measurable target. If it doesn't move your numbers, we don't build it.",
    number: "01",
  },
  {
    icon: Rocket,
    title: "Fast to value",
    description:
      "Your first automation goes live in two weeks, not six months. You see ROI before you've finished paying the invoice.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Zero risk start",
    description:
      "First workflow is free. No contract, no commitment. We earn your business with results, not sales decks.",
    number: "03",
  },
  {
    icon: Key,
    title: "You own everything",
    description:
      "Every line of code, every agent, every workflow — it's yours. Take it in-house whenever you want. No hostage situations.",
    number: "04",
  },
];

export default function Pillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[13px] font-semibold text-brand uppercase tracking-wider mb-3">
            How we work
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            Four commitments we make on every project
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200/80 p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand">
                    <Icon size={18} />
                  </div>
                  <span className="text-[28px] font-bold text-slate-100 select-none">{p.number}</span>
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-[1.6]">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
