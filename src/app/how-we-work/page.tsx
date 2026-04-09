"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, FileText, Code, Rocket, BarChart3, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    duration: "Week 1",
    description: "We dig into your workflows — not with a questionnaire, but by watching how your team actually works. We identify every manual step, bottleneck, and opportunity.",
    deliverables: ["Workflow mapping document", "Automation opportunity matrix", "ROI projections per workflow", "Prioritized implementation plan"],
    color: "from-brand to-brand-dark",
  },
  {
    number: "02",
    icon: FileText,
    title: "Solution Design",
    duration: "Week 1–2",
    description: "We architect the solution — which AI models, what integrations, how data flows, where humans stay in the loop. You approve every decision before we build.",
    deliverables: ["Technical architecture doc", "Integration mapping", "AI model selection rationale", "User experience mockups"],
    color: "from-purple-500 to-purple-700",
  },
  {
    number: "03",
    icon: Code,
    title: "Build & Iterate",
    duration: "Week 2–4",
    description: "We build in 1-week sprints with demos every Friday. You see working software weekly, give feedback, and we adjust in real-time. No big-bang reveals.",
    deliverables: ["Weekly working demos", "Sprint progress reports", "Test results & accuracy metrics", "Documentation as we go"],
    color: "from-sky to-blue-600",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy & Launch",
    duration: "Week 3–4",
    description: "Staged rollout — we start with a subset of your data or team, monitor for issues, tune performance, and scale to full production when metrics look right.",
    deliverables: ["Production deployment", "Monitoring dashboards", "Runbook & escalation flows", "Team training sessions"],
    color: "from-emerald to-emerald/80",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Optimize & Expand",
    duration: "Ongoing",
    description: "Post-launch, we monitor performance, optimize for edge cases, and identify the next automation to build. Most clients expand to 3–5 workflows within 6 months.",
    deliverables: ["Monthly performance reports", "Optimization recommendations", "New workflow proposals", "Model retraining as needed"],
    color: "from-amber to-amber/80",
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

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
              <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">How we work</p>
              <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f]">
                From first call to{" "}
                <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">production in weeks</span>
              </h1>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#424245] max-w-2xl mx-auto">
                No six-month timelines. No endless discovery phases. We move fast, show
                you working software every week, and get to measurable results before the
                first invoice.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <div className="space-y-8">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Section key={s.number}>
                    <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 items-start">
                      {/* Left — number & timeline */}
                      <div className="flex lg:flex-col items-center lg:items-start gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg`}>
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="text-[32px] font-extrabold text-slate-100 block leading-none">{s.number}</span>
                          <span className="text-[12px] font-bold text-[#0071e3] uppercase tracking-wider">{s.duration}</span>
                        </div>
                      </div>

                      {/* Right — content */}
                      <div className="rounded-2xl bg-white border border-[#d2d2d7]/80 p-7 sm:p-8">
                        <h3 className="text-[1.4rem] sm:text-[1.6rem] font-extrabold text-[#1d1d1f] tracking-[-0.02em]">{s.title}</h3>
                        <p className="mt-3 text-[15px] leading-[1.7] text-[#424245]">{s.description}</p>
                        <div className="mt-6">
                          <p className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider mb-3">Deliverables</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {s.deliverables.map((d) => (
                              <div key={d} className="flex items-center gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-[#30D158]/10 flex items-center justify-center shrink-0">
                                  <Check size={9} className="text-[#30D158]" strokeWidth={3} />
                                </div>
                                <span className="text-[13px] text-[#424245]">{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F5F3FF]/40 to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center max-w-2xl mx-auto">
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                Ready to get started?
              </h2>
              <p className="mt-4 text-[16px] text-[#424245]">Answer a few quick questions and we&apos;ll put together a custom plan for your team.</p>
              <a href="/start" className="group inline-flex items-center gap-2 mt-8 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200">
                Start your free assessment
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
