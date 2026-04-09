"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const cases = [
  {
    industry: "E-Commerce",
    title: "Customer support that never clocks out",
    description: "AI agent handling tier-1 inquiries across email, chat, and social for a D2C brand doing $20M ARR.",
    before: "45-min avg response",
    after: "Under 2 minutes",
    highlight: "80% auto-resolved",
    savings: "$12K/mo saved",
    accent: "bg-brand",
    accentLight: "bg-brand-50",
  },
  {
    industry: "Logistics",
    title: "Invoice processing on autopilot",
    description: "Replaced a 3-person team's manual workflow with an AI pipeline — extract, validate, and post to ERP automatically.",
    before: "4 days per batch",
    after: "12 minutes",
    highlight: "99.4% accuracy",
    savings: "$180K/yr recaptured",
    accent: "bg-coral",
    accentLight: "bg-red-50",
  },
  {
    industry: "SaaS",
    title: "Lead response in 90 seconds",
    description: "Instant lead qualification + personalized outreach. Every inbound scored, routed, and responded to before they close the tab.",
    before: "6-hour response",
    after: "90 seconds",
    highlight: "3.2x more meetings",
    savings: "Zero new headcount",
    accent: "bg-amber",
    accentLight: "bg-amber/10",
  },
  {
    industry: "Healthcare",
    title: "90-day backlog → zero in 6 weeks",
    description: "AI credentialing workflow for a staffing agency. Documents verified, checklists completed, compliance guaranteed.",
    before: "90-day backlog",
    after: "0 days",
    highlight: "100% compliance",
    savings: "3 FTEs redeployed",
    accent: "bg-emerald",
    accentLight: "bg-emerald/10",
  },
  {
    industry: "Real Estate",
    title: "Property reports in 3 minutes",
    description: "Automated CMA generation combining MLS data, comps, market trends, and custom branding for a top-20 brokerage.",
    before: "2 days per report",
    after: "3 minutes",
    highlight: "40x faster",
    savings: "$180K/yr recaptured",
    accent: "bg-sky",
    accentLight: "bg-sky/10",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mb-14"
        >
          <p className="text-[13px] font-bold text-brand uppercase tracking-wider mb-4">
            Proof, not promises
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900">
            What actually happens when you automate
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className={`group rounded-2xl bg-white border border-slate-200/80 p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ${
                i === 0 ? "lg:row-span-2 flex flex-col" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-2 h-2 rounded-full ${c.accent}`} />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{c.industry}</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 leading-snug">{c.title}</h3>
              <p className="mt-2.5 text-[14px] text-slate-600 leading-[1.65] flex-1">{c.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Before</p>
                  <p className="mt-1 text-[15px] font-bold text-slate-700">{c.before}</p>
                </div>
                <div className={`rounded-xl ${c.accentLight} px-4 py-3.5`}>
                  <p className="text-[10px] font-bold text-emerald uppercase tracking-wider">After</p>
                  <p className="mt-1 text-[15px] font-bold text-emerald">{c.after}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[13px]">
                <span className="font-bold text-slate-800">{c.highlight}</span>
                <span className="text-slate-200">|</span>
                <span className="text-slate-500">{c.savings}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
