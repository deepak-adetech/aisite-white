"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    industry: "E-Commerce",
    title: "Customer support that never clocks out",
    description:
      "Built an AI agent handling tier-1 inquiries across email, chat, and social for a D2C brand doing $20M ARR.",
    before: "45-min avg response",
    after: "Under 2 minutes",
    highlight: "80% auto-resolved",
    savings: "$12K/mo saved",
    accent: "bg-brand",
  },
  {
    industry: "Logistics",
    title: "Invoice processing on autopilot",
    description:
      "Replaced a 3-person team's manual invoice workflow with an AI pipeline that extracts, validates, and posts to the ERP automatically.",
    before: "4 days per batch",
    after: "12 minutes",
    highlight: "99.4% accuracy",
    savings: "$180K/yr recaptured",
    accent: "bg-coral",
  },
  {
    industry: "SaaS",
    title: "Leads get a reply in 90 seconds, not 6 hours",
    description:
      "Built instant lead qualification + personalized outreach. Every inbound gets scored, routed, and responded to before they close the tab.",
    before: "6-hour response time",
    after: "90 seconds",
    highlight: "3.2x more meetings",
    savings: "Zero new headcount",
    accent: "bg-amber",
  },
  {
    industry: "Healthcare",
    title: "90-day backlog → zero in 6 weeks",
    description:
      "AI-powered credentialing workflow for a healthcare staffing agency. Documents verified, checklists completed, compliance guaranteed.",
    before: "90-day backlog",
    after: "0 days",
    highlight: "100% compliance",
    savings: "3 FTEs redeployed",
    accent: "bg-emerald",
  },
  {
    industry: "Real Estate",
    title: "Property reports in 3 minutes, not 2 days",
    description:
      "Automated CMA generation combining MLS data, comps, market trends, and custom branding for a top-20 brokerage.",
    before: "2 days per report",
    after: "3 minutes",
    highlight: "40x faster",
    savings: "$180K/yr recaptured",
    accent: "bg-sky",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[13px] font-semibold text-brand uppercase tracking-wider mb-3">
            Proof, not promises
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            What actually happens when you let AI do the work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl bg-white border border-slate-200/80 p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow ${
                i === 0 ? "lg:row-span-2 flex flex-col justify-between" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${c.accent}`} />
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {c.industry}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 leading-snug">{c.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-[1.6]">{c.description}</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 px-3.5 py-3">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Before</p>
                  <p className="mt-0.5 text-[14px] font-bold text-slate-600">{c.before}</p>
                </div>
                <div className="rounded-xl bg-emerald/5 px-3.5 py-3">
                  <p className="text-[10px] font-semibold text-emerald uppercase tracking-wider">After</p>
                  <p className="mt-0.5 text-[14px] font-bold text-emerald">{c.after}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-3 text-[12px] text-slate-500">
                <span className="font-semibold text-slate-700">{c.highlight}</span>
                <span className="text-slate-300">|</span>
                <span>{c.savings}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
