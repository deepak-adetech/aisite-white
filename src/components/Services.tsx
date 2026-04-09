"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Bot, Workflow, FileText, Plug, MessageSquare, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Autonomous agents that handle multi-step processes end-to-end — research, decide, act. Think of them as employees that never sleep.",
    tag: "Most requested",
    tagColor: "bg-brand-50 text-brand",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "We map your existing processes, identify the bottlenecks, and replace the manual steps with AI-powered pipelines that run themselves.",
    tag: null,
    tagColor: "",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description:
      "Invoices, contracts, reports, applications — extracted, classified, and routed in seconds instead of hours. 99%+ accuracy.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Your CRM doesn't talk to your ERP. Your ERP doesn't talk to your support desk. We make them all talk to each other through AI.",
    tag: null,
    tagColor: "",
  },
  {
    icon: MessageSquare,
    title: "AI Assistants & Chatbots",
    description:
      "Customer-facing or internal, voice or text. Agents that actually resolve issues instead of just deflecting to a human.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Search,
    title: "AI Strategy & Audit",
    description:
      "Not sure where to start? We audit your operations, rank opportunities by ROI, and give you a concrete roadmap. No fluff.",
    tag: "Good starting point",
    tagColor: "bg-emerald/10 text-emerald",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[13px] font-semibold text-brand uppercase tracking-wider mb-3">
            What we build
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            Six ways we put AI to work for you
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-slate-500">
            Every engagement starts with understanding your specific workflows.
            Then we pick the right approach from our toolkit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                    <Icon size={20} />
                  </div>
                  {s.tag && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-[13px] text-slate-500 leading-[1.6]">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
