"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Free Pilot",
    price: "$0",
    period: "one workflow",
    description: "We build and deploy one complete automation at zero cost. Prove the value before spending a dollar.",
    features: [
      "One full workflow automated",
      "Production deployment",
      "Complete code ownership",
      "No credit card required",
      "No contract or commitment",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Full Build",
    price: "$10K–$50K+",
    period: "project",
    description: "End-to-end AI automation. Custom agents, integrations, and workflows designed for your specific operations.",
    features: [
      "Custom AI agent development",
      "Full system integration",
      "Dedicated engineering team",
      "2-week delivery sprints",
      "90-day post-launch support",
      "All code and IP is yours",
    ],
    cta: "Talk to us",
    featured: true,
  },
  {
    name: "Managed AI",
    price: "$2K–$8K",
    period: "per month",
    description: "Ongoing optimization and expansion. We monitor, improve, and build new automations month over month.",
    features: [
      "Continuous optimization",
      "Monthly automation sprints",
      "Priority support channel",
      "Performance monitoring",
      "Model and tool upgrades",
    ],
    cta: "Learn more",
    featured: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[#ECFDF5]/40 to-white">
      <div className="mx-auto max-w-[980px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-lg mx-auto mb-14"
        >
          <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]">
            Start free. Scale when ready.
          </h2>
          <p className="mt-4 text-[16px] text-[#424245]">
            No surprises, no hidden fees. Every engagement starts with a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className={`rounded-2xl border p-7 flex flex-col ${
                t.featured
                  ? "bg-white border-[#0071e3] shadow-xl shadow-[#0071e3]/[0.08] ring-1 ring-[#0071e3]/10 relative"
                  : "bg-white border-[#d2d2d7]/80"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0071e3] to-[#0066cc] px-4 py-1 text-[10px] font-bold text-white shadow-md shadow-[#0071e3]/20">
                  <Sparkles size={11} />
                  Most popular
                </div>
              )}

              <h3 className="text-[16px] font-bold text-[#1d1d1f]">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[2.2rem] font-extrabold tracking-tight text-[#1d1d1f]">{t.price}</span>
                <span className="text-[14px] text-[#86868b] font-medium">/ {t.period}</span>
              </div>
              <p className="mt-3 text-[14px] text-[#424245] leading-[1.6]">{t.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/10 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-[#30D158]" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-[#424245]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-7 group flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[14px] font-bold transition-all duration-200 ${
                  t.featured
                    ? "bg-gradient-to-r from-[#0071e3] to-[#0066cc] text-white shadow-lg shadow-[#0071e3]/20 hover:shadow-xl hover:shadow-[#0071e3]/25 hover:-translate-y-0.5"
                    : "bg-slate-100 text-[#333336] hover:bg-slate-200"
                }`}
              >
                {t.cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
