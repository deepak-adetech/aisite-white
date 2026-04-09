"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, Rocket, ShieldCheck, Key } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Outcome-first",
    description: "We don't bill for effort. Every project has a measurable target. If it doesn't move your numbers, we don't build it.",
    number: "01",
    color: "text-[#0071e3]",
  },
  {
    icon: Rocket,
    title: "Fast to value",
    description: "Your first automation goes live in two weeks, not six months. You see ROI before the invoice lands.",
    number: "02",
    color: "text-[#FF3B30]",
  },
  {
    icon: ShieldCheck,
    title: "Zero risk start",
    description: "First workflow is free. No contract, no commitment. We earn your business with results — not sales decks.",
    number: "03",
    color: "text-[#30D158]",
  },
  {
    icon: Key,
    title: "You own everything",
    description: "Every line of code, agent, and workflow is yours. Take it in-house whenever you want. No hostage situations.",
    number: "04",
    color: "text-[#FF9F0A]",
  },
];

export default function Pillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[#FFF7ED]/50 to-white">
      <div className="mx-auto max-w-[980px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mb-14"
        >
          <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">
            How we work
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]">
            Four commitments we make on every project
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                className="rounded-2xl bg-white border border-[#d2d2d7]/80 p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl bg-[#f5f5f7] flex items-center justify-center ${p.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[32px] font-extrabold text-slate-100 select-none">{p.number}</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#1d1d1f]">{p.title}</h3>
                <p className="mt-2.5 text-[14px] text-[#424245] leading-[1.65]">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
