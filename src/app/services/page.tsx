"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Bot, Workflow, FileText, Plug, MessageSquare, Search, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "ai-agents",
    icon: Bot,
    title: "Custom AI Agents",
    tagline: "Autonomous digital workers that handle multi-step processes end-to-end",
    description: "We build AI agents tailored to your specific workflows. They don't just follow rules — they reason, decide, and act. From research to data processing to customer interactions, our agents handle complex tasks that previously required human judgment.",
    useCases: ["Customer support triage & resolution", "Lead qualification & outreach", "Data research & enrichment", "Content generation & review"],
    color: "from-brand to-brand-dark",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Replace manual processes with intelligent AI-powered pipelines",
    description: "We map your existing processes, identify every bottleneck, and build automated pipelines that run on autopilot. Not simple if-then rules — intelligent workflows that adapt, learn, and improve.",
    useCases: ["End-to-end process automation", "Multi-system orchestration", "Approval & routing workflows", "Scheduled reporting & monitoring"],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "document-intelligence",
    icon: FileText,
    title: "Document Intelligence",
    tagline: "Extract, classify, and process documents at 99%+ accuracy",
    description: "Invoices, contracts, applications, reports — our document AI extracts data, validates it, classifies it, and routes it to the right system. Handles PDFs, scans, handwritten notes, and messy formats.",
    useCases: ["Invoice extraction & ERP posting", "Contract analysis & risk flagging", "Application processing", "Compliance document verification"],
    color: "from-sky to-blue-600",
  },
  {
    id: "system-integration",
    icon: Plug,
    title: "System Integration",
    tagline: "Connect your tools into a unified AI-powered data fabric",
    description: "Your CRM doesn't talk to your ERP. Your ERP doesn't talk to your support desk. We build AI middleware that connects everything, syncs data in real-time, and eliminates manual copy-paste between systems.",
    useCases: ["CRM ↔ ERP synchronization", "Multi-platform data unification", "Real-time event processing", "Legacy system modernization"],
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "ai-chatbots",
    icon: MessageSquare,
    title: "AI Assistants & Chatbots",
    tagline: "Conversational AI that actually resolves issues",
    description: "Customer-facing or internal, voice or text — our AI assistants understand context, access your knowledge base, take actions in your systems, and escalate intelligently when needed. Not just deflection bots.",
    useCases: ["Customer support (email, chat, voice)", "Internal helpdesk & IT support", "Sales qualification & booking", "Knowledge base Q&A"],
    color: "from-emerald to-emerald/80",
  },
  {
    id: "ai-strategy",
    icon: Search,
    title: "AI Strategy & Audit",
    tagline: "Know exactly where to automate for maximum ROI",
    description: "Not sure where to start? We conduct a thorough audit of your operations, identify the highest-ROI automation opportunities, rank them by impact and feasibility, and deliver a concrete implementation roadmap.",
    useCases: ["Operations audit & opportunity mapping", "ROI modeling per workflow", "Technology stack recommendation", "Implementation roadmap & timeline"],
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

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-[980px] px-6 sm:px-10 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="max-w-3xl mx-auto text-center">
              <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">Our services</p>
              <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f]">
                Six ways we put{" "}
                <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">
                  AI to work
                </span>{" "}
                for you
              </h1>
              <p className="mt-6 text-[18px] leading-[1.7] text-[#424245] max-w-2xl mx-auto">
                Every engagement starts with understanding your workflows. Then we pick
                the right approach — or combine several — to deliver measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[980px] px-6 sm:px-10 lg:px-16 space-y-12">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isEven = i % 2 === 0;
              return (
                <Section key={s.id} className={`rounded-2xl border border-[#d2d2d7]/80 bg-white p-8 sm:p-10 lg:p-12 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow`}>
                  <div className={`grid lg:grid-cols-[1fr_1fr] gap-10 items-start ${!isEven ? "lg:direction-rtl" : ""}`}>
                    <div>
                      <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} items-center justify-center text-white mb-5`}>
                        <Icon size={22} />
                      </div>
                      <h2 className="text-[1.8rem] sm:text-[2.2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#1d1d1f]">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-[16px] font-semibold text-[#86868b]">{s.tagline}</p>
                      <p className="mt-4 text-[15px] leading-[1.7] text-[#424245]">{s.description}</p>
                    </div>
                    <div className="bg-[#f5f5f7] rounded-xl p-6">
                      <p className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider mb-4">Common use cases</p>
                      <ul className="space-y-3">
                        {s.useCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-3">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/10 flex items-center justify-center shrink-0">
                              <Check size={11} className="text-[#30D158]" strokeWidth={3} />
                            </div>
                            <span className="text-[14px] text-slate-700">{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Section>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F5F3FF]/40 to-white">
          <div className="mx-auto max-w-[980px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center max-w-2xl mx-auto">
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                Not sure which service you need?
              </h2>
              <p className="mt-4 text-[16px] text-[#424245] leading-relaxed">
                Start with a free strategy call. We&apos;ll audit your workflows and tell you
                exactly where AI will have the biggest impact.
              </p>
              <a href="/contact" className="group inline-flex items-center gap-2 mt-8 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200">
                Book a free strategy call
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
