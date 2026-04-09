"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ShoppingCart,
  FileText,
  Zap,
  Heart,
  Building2,
} from "lucide-react";

const cases = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Support Bot",
    description:
      "AI agent handling tier-1 customer inquiries across email, chat, and social media for a D2C brand.",
    stats: [
      { label: "Auto-resolved", value: "80%" },
      { label: "Saved/month", value: "$12K" },
    ],
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: FileText,
    title: "Invoice Processing Pipeline",
    description:
      "Automated end-to-end invoice extraction, validation, and ERP entry for a logistics company.",
    stats: [
      { label: "Processing time", value: "4d → 12min" },
      { label: "Accuracy", value: "99.4%" },
    ],
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Zap,
    title: "Lead Response Automation",
    description:
      "Instant lead qualification and routing system with personalized outreach for a SaaS company.",
    stats: [
      { label: "Response time", value: "6hr → 90s" },
      { label: "More meetings", value: "3.2x" },
    ],
    color: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Heart,
    title: "Healthcare Credentialing",
    description:
      "AI-powered credentialing workflow that eliminated a 90-day backlog for a healthcare staffing agency.",
    stats: [
      { label: "Backlog", value: "90 → 0 days" },
      { label: "Compliance", value: "100%" },
    ],
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Building2,
    title: "Real Estate Report Generation",
    description:
      "Automated property analysis reports combining MLS data, comps, and market trends for a brokerage.",
    stats: [
      { label: "Report time", value: "2d → 3min" },
      { label: "Recaptured/yr", value: "$180K" },
    ],
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Real results from{" "}
            <span className="text-primary">real automations</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Here&apos;s what happens when you let AI handle the busywork
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  i >= 3 ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${c.bgColor} mb-4`}
                >
                  <Icon size={20} className="text-gray-700" />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {c.description}
                </p>
                <div className="mt-5 flex gap-4">
                  {c.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 rounded-xl bg-gray-50 p-3 text-center"
                    >
                      <div className="font-display text-lg font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 font-medium mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
