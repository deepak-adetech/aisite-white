"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Free Pilot",
    price: "$0",
    period: "one workflow",
    description: "Prove the value before spending a dollar. We build and deploy one complete automation at zero cost.",
    features: [
      "One full workflow automated",
      "Production deployment",
      "Complete code ownership",
      "No credit card needed",
      "No contract or commitment",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Full Build",
    price: "$10K–$50K+",
    period: "project",
    description: "End-to-end AI automation projects. Custom agents, integrations, and workflows designed for your specific operations.",
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
    <section id="pricing" ref={ref} className="py-20 lg:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto mb-12"
        >
          <p className="text-[13px] font-semibold text-brand uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            Start free. Scale when ready.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500">
            No surprises, no hidden fees. Every engagement starts with a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 flex flex-col ${
                t.featured
                  ? "bg-white border-brand shadow-lg shadow-brand/[0.06] ring-1 ring-brand/10"
                  : "bg-white border-slate-200/80"
              }`}
            >
              {t.featured && (
                <div className="inline-flex self-start items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold text-brand mb-4">
                  Most popular
                </div>
              )}

              <h3 className="text-[15px] font-bold text-slate-900">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[2rem] font-bold tracking-tight text-slate-900">{t.price}</span>
                <span className="text-[13px] text-slate-400">/ {t.period}</span>
              </div>
              <p className="mt-3 text-[13px] text-slate-500 leading-[1.6]">{t.description}</p>

              <ul className="mt-5 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-emerald" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-6 flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                  t.featured
                    ? "bg-brand text-white hover:bg-brand-dark shadow-md shadow-brand/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {t.cta}
                <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
