"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cases = [
  {
    industry: "E-Commerce",
    title: "Customer support that never clocks out",
    challenge: "A D2C brand doing $20M ARR was drowning in support tickets. 45-minute average response times were hurting retention and reviews.",
    solution: "We built an AI agent that handles tier-1 inquiries across email, chat, and social media. It understands context, accesses order data, processes returns, and escalates complex issues to humans.",
    results: [
      { label: "Auto-resolved", value: "80%" },
      { label: "Response time", value: "<2 min" },
      { label: "Monthly savings", value: "$12K" },
      { label: "CSAT improvement", value: "+18%" },
    ],
    color: "from-brand to-brand-dark",
  },
  {
    industry: "Logistics",
    title: "Invoice processing on autopilot",
    challenge: "A logistics company had 3 people manually entering invoice data into their ERP. Processing took 4 days per batch with frequent errors.",
    solution: "Built an AI pipeline that extracts data from any invoice format (PDF, scan, email), validates against PO records, flags discrepancies, and posts directly to the ERP.",
    results: [
      { label: "Processing time", value: "12 min" },
      { label: "Accuracy", value: "99.4%" },
      { label: "Annual savings", value: "$180K" },
      { label: "FTEs redeployed", value: "3" },
    ],
    color: "from-coral to-coral-dark",
  },
  {
    industry: "SaaS",
    title: "Lead response in 90 seconds",
    challenge: "A B2B SaaS company's sales team took 6+ hours to respond to inbound leads. By then, prospects had moved on to competitors.",
    solution: "Instant lead qualification + personalized outreach. Every inbound is scored, enriched with firmographic data, routed to the right rep, and gets a personalized email within 90 seconds.",
    results: [
      { label: "Response time", value: "90 sec" },
      { label: "More meetings", value: "3.2x" },
      { label: "Pipeline increase", value: "47%" },
      { label: "New headcount", value: "Zero" },
    ],
    color: "from-amber to-amber/80",
  },
  {
    industry: "Healthcare",
    title: "90-day backlog to zero in 6 weeks",
    challenge: "A healthcare staffing agency had a 90-day credentialing backlog. Nurses couldn't start assignments, and the agency was losing contracts.",
    solution: "AI-powered credentialing workflow that verifies documents, completes checklists, flags expirations, and ensures 100% compliance with state and federal requirements.",
    results: [
      { label: "Backlog", value: "0 days" },
      { label: "Compliance", value: "100%" },
      { label: "FTEs redeployed", value: "3" },
      { label: "Time to clear", value: "6 weeks" },
    ],
    color: "from-emerald to-emerald/80",
  },
  {
    industry: "Real Estate",
    title: "Property reports in 3 minutes, not 2 days",
    challenge: "Agents at a top-20 brokerage spent 2 days per CMA report, manually pulling MLS data, running comps, and formatting presentations.",
    solution: "Automated report generation combining MLS data, comparable analysis, market trends, and custom branding — delivered as a polished PDF in minutes.",
    results: [
      { label: "Report time", value: "3 min" },
      { label: "Speed increase", value: "40x" },
      { label: "Annual savings", value: "$180K" },
      { label: "Agent satisfaction", value: "98%" },
    ],
    color: "from-sky to-blue-600",
  },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-3xl mx-auto text-center">
              <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">Case studies</p>
              <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f]">
                Real results from{" "}
                <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">
                  real automations
                </span>
              </h1>
              <p className="mt-6 text-[18px] leading-[1.7] text-[#424245] max-w-2xl mx-auto">
                Every project below started with a single question: &quot;What if we didn&apos;t
                have to do this manually?&quot; Here&apos;s what happened next.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 space-y-10">
            {cases.map((c, i) => (
              <Section key={c.title}>
                <div className="rounded-2xl border border-[#d2d2d7]/80 bg-white overflow-hidden">
                  {/* Header bar */}
                  <div className={`bg-gradient-to-r ${c.color} px-8 py-4 flex items-center justify-between`}>
                    <span className="text-[12px] font-bold text-white/80 uppercase tracking-wider">{c.industry}</span>
                    <span className="text-[12px] font-bold text-white/60">Case study #{i + 1}</span>
                  </div>
                  {/* Content */}
                  <div className="p-8 sm:p-10">
                    <h2 className="text-[1.6rem] sm:text-[2rem] font-extrabold tracking-[-0.02em] text-[#1d1d1f]">{c.title}</h2>
                    <div className="grid lg:grid-cols-2 gap-8 mt-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-[12px] font-bold text-coral uppercase tracking-wider mb-2">The challenge</p>
                          <p className="text-[15px] leading-[1.7] text-[#424245]">{c.challenge}</p>
                        </div>
                        <div>
                          <p className="text-[12px] font-bold text-[#0071e3] uppercase tracking-wider mb-2">Our solution</p>
                          <p className="text-[15px] leading-[1.7] text-[#424245]">{c.solution}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-[#30D158] uppercase tracking-wider mb-4">Results</p>
                        <div className="grid grid-cols-2 gap-3">
                          {c.results.map((r) => (
                            <div key={r.label} className="rounded-xl bg-[#f5f5f7] border border-[#e8e8ed] p-4">
                              <div className="text-[1.6rem] font-extrabold text-[#1d1d1f] leading-none">{r.value}</div>
                              <p className="mt-1 text-[12px] text-[#86868b] font-medium">{r.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#ECFDF5]/30 to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center max-w-2xl mx-auto">
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                Your workflow could be next
              </h2>
              <p className="mt-4 text-[16px] text-[#424245] leading-relaxed">
                We automate your first workflow for free. See the results before you commit.
              </p>
              <a href="/contact" className="group inline-flex items-center gap-2 mt-8 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200">
                Start your free pilot
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
