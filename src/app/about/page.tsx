"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, Users, Zap, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Outcome-obsessed",
    description: "We measure success by your ROI, not our billable hours. Every project has a clear, measurable target before we write a single line of code.",
  },
  {
    icon: Zap,
    title: "Speed is a feature",
    description: "Two-week sprints, not six-month timelines. We move fast because we know the cost of waiting — your competitors aren't.",
  },
  {
    icon: Shield,
    title: "Zero-risk philosophy",
    description: "First workflow free. No contracts. No lock-in. We earn your trust with results, not legal agreements.",
  },
  {
    icon: Users,
    title: "Your team, extended",
    description: "We don't throw deliverables over the wall. We embed with your team, learn your workflows, and build like we're building for ourselves.",
  },
];

const team = [
  { initials: "DA", name: "Deepak A.", role: "Founder & AI Architect", color: "#4F46E5" },
  { initials: "SK", name: "Sarah K.", role: "Head of Engineering", color: "#EC4899" },
  { initials: "MR", name: "Marcus R.", role: "ML Engineer", color: "#F59E0B" },
  { initials: "JL", name: "Jordan L.", role: "Automation Specialist", color: "#10B981" },
  { initials: "AP", name: "Aisha P.", role: "Solutions Architect", color: "#0EA5E9" },
  { initials: "TW", name: "Tyler W.", role: "Integration Engineer", color: "#8B5CF6" },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">About us</p>
              <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f]">
                We&apos;re the team businesses call when they&apos;re{" "}
                <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">
                  ready to stop doing things manually
                </span>
              </h1>
              <p className="mt-6 text-[18px] leading-[1.7] text-[#424245] max-w-2xl mx-auto">
                AutoWorkflows.AI is a focused AI automation agency. We don&apos;t do
                everything — we do one thing exceptionally well: we build custom AI
                agents and automations that replace repetitive work, so your team
                can focus on what actually grows the business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <Section>
                <p className="text-[13px] font-bold text-coral uppercase tracking-wider mb-4">Our story</p>
                <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                  Born from frustration with how businesses waste talent
                </h2>
              </Section>
              <Section className="space-y-5 text-[16px] leading-[1.75] text-[#424245]">
                <p>
                  We started AutoWorkflows.AI after watching brilliant teams spend 70%+ of their
                  day on tasks a machine should handle — copying data between systems, generating
                  reports, triaging emails, processing invoices.
                </p>
                <p>
                  The technology to automate this existed. But most businesses didn&apos;t have the
                  in-house expertise to implement it, and the consulting firms they hired delivered
                  PowerPoint decks instead of production systems.
                </p>
                <p>
                  So we built a different kind of agency. One that ships working software in
                  weeks, not months. One that proves its value before asking for a dollar.
                  One where you own everything we build.
                </p>
                <p className="font-bold text-[#1d1d1f]">
                  50+ companies later, the model works. And we&apos;re just getting started.
                </p>
              </Section>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F5F3FF]/40 to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="max-w-xl mb-14">
              <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">Our values</p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                Principles that guide every decision
              </h2>
            </Section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Section key={v.title} className={`rounded-2xl bg-white border border-[#d2d2d7]/80 p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300`}>
                    <div className="w-11 h-11 rounded-xl bg-[#0071e3]/5 flex items-center justify-center text-[#0071e3] mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1d1d1f]">{v.title}</h3>
                    <p className="mt-2.5 text-[14px] text-[#424245] leading-[1.65]">{v.description}</p>
                  </Section>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center max-w-lg mx-auto mb-14">
              <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">The team</p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                Engineers who ship, not consultants who advise
              </h2>
            </Section>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {team.map((t) => (
                <Section key={t.name} className="text-center">
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-[18px] font-bold text-white mb-3"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#1d1d1f]">{t.name}</h3>
                  <p className="text-[12px] text-[#86868b] mt-0.5">{t.role}</p>
                </Section>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-[#1a1040] to-brand-dark px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/15 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-coral/10 rounded-full blur-[80px]" />
              <div className="relative">
                <h2 className="text-[2rem] sm:text-[2.6rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white max-w-lg mx-auto">
                  Want to see what we can automate for you?
                </h2>
                <p className="mt-4 text-[16px] text-slate-300 max-w-md mx-auto">
                  Your first workflow is free. No commitment required.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 mt-8 rounded-xl bg-white px-7 py-3.5 text-[15px] font-bold text-[#1d1d1f] hover:bg-[#f5f5f7] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get in touch
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
