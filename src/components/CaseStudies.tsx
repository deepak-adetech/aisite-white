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
    bg: "bg-white",
    border: "border-slate-200/80",
    accentDot: "bg-brand",
  },
  {
    industry: "Logistics",
    title: "Invoice processing on autopilot",
    description: "Replaced a 3-person team's manual workflow with an AI pipeline — extract, validate, and post to ERP.",
    before: "4 days per batch",
    after: "12 minutes",
    highlight: "99.4% accuracy",
    savings: "$180K/yr recaptured",
    bg: "bg-white",
    border: "border-slate-200/80",
    accentDot: "bg-orange-500",
  },
  {
    industry: "SaaS",
    title: "Lead response in 90 seconds",
    description: "Instant lead qualification + personalized outreach. Every inbound scored, routed, and responded to.",
    before: "6-hour response",
    after: "90 seconds",
    highlight: "3.2x more meetings",
    savings: "Zero new headcount",
    bg: "bg-white",
    border: "border-slate-200/80",
    accentDot: "bg-purple-500",
  },
  {
    industry: "Healthcare",
    title: "90-day backlog to zero in 6 weeks",
    description: "AI credentialing workflow for a staffing agency. Documents verified, checklists completed, compliance guaranteed.",
    before: "90-day backlog",
    after: "0 days",
    highlight: "100% compliance",
    savings: "3 FTEs redeployed",
    bg: "bg-white",
    border: "border-slate-200/80",
    accentDot: "bg-emerald",
  },
  {
    industry: "Real Estate",
    title: "Property reports in 3 minutes",
    description: "Automated CMA generation combining MLS data, comps, market trends, and custom branding.",
    before: "2 days per report",
    after: "3 minutes",
    highlight: "40x faster",
    savings: "$180K/yr recaptured",
    bg: "bg-white",
    border: "border-slate-200/80",
    accentDot: "bg-sky",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
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

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {cases.slice(0, 3).map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className={`group rounded-2xl ${c.bg} border ${c.border} p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-2 h-2 rounded-full ${c.accentDot}`} />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{c.industry}</span>
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 leading-snug">{c.title}</h3>
              <p className="mt-2 text-[13px] text-slate-600 leading-[1.6]">{c.description}</p>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <div className="rounded-lg bg-white/70 backdrop-blur-sm px-3 py-2.5">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Before</p>
                  <p className="mt-0.5 text-[14px] font-bold text-slate-700">{c.before}</p>
                </div>
                <div className="rounded-lg bg-white/70 backdrop-blur-sm px-3 py-2.5">
                  <p className="text-[9px] font-bold text-emerald uppercase tracking-wider">After</p>
                  <p className="mt-0.5 text-[14px] font-bold text-emerald">{c.after}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2.5 text-[12px]">
                <span className="font-bold text-slate-800">{c.highlight}</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">{c.savings}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.slice(3).map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease: "easeOut" }}
              className={`group rounded-2xl ${c.bg} border ${c.border} p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-2 h-2 rounded-full ${c.accentDot}`} />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{c.industry}</span>
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 leading-snug">{c.title}</h3>
              <p className="mt-2 text-[13px] text-slate-600 leading-[1.6]">{c.description}</p>

              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <div className="rounded-lg bg-white/70 backdrop-blur-sm px-3 py-2.5">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Before</p>
                  <p className="mt-0.5 text-[14px] font-bold text-slate-700">{c.before}</p>
                </div>
                <div className="rounded-lg bg-white/70 backdrop-blur-sm px-3 py-2.5">
                  <p className="text-[9px] font-bold text-emerald uppercase tracking-wider">After</p>
                  <p className="mt-0.5 text-[14px] font-bold text-emerald">{c.after}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2.5 text-[12px]">
                <span className="font-bold text-slate-800">{c.highlight}</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">{c.savings}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
