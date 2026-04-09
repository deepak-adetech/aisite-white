"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Free Pilot",
    price: "Free",
    priceNote: "First workflow",
    description:
      "We automate your first workflow at zero cost. See the value before you spend a dollar.",
    features: [
      "One complete workflow automated",
      "Full production deployment",
      "You own all the code",
      "No credit card required",
      "No strings attached",
    ],
    cta: "Start Free",
    featured: false,
    color: "border-gray-200",
  },
  {
    name: "Full Implementation",
    price: "$10K–$50K+",
    priceNote: "One-time",
    description:
      "End-to-end automation projects. Custom AI agents, integrations, and workflows built for your specific needs.",
    features: [
      "Custom AI agent development",
      "Full system integration",
      "Dedicated engineering team",
      "2-week sprints",
      "90-day post-launch support",
      "Complete code ownership",
    ],
    cta: "Get a Quote",
    featured: true,
    color: "border-primary",
  },
  {
    name: "Managed AI",
    price: "$2K–$8K",
    priceNote: "Per month",
    description:
      "Ongoing AI operations. We monitor, optimize, and expand your automations month over month.",
    features: [
      "Continuous optimization",
      "Monthly automation sprints",
      "Priority support",
      "Performance monitoring",
      "Model upgrades included",
    ],
    cta: "Learn More",
    featured: false,
    color: "border-gray-200",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Start free. Scale when you&apos;re ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border-2 bg-white p-7 flex flex-col ${
                tier.featured
                  ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                  : tier.color + " shadow-sm"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-lg font-bold text-gray-900">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-extrabold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {tier.priceNote}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-7 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                  tier.featured
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tier.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
