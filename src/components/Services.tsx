"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Bot, Workflow, FileText, Plug, MessageSquare, Search } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Autonomous agents that handle multi-step processes end-to-end. They research, decide, and act — like employees that never clock out.",
    tag: "Most requested",
    iconBg: "bg-[#0071e3]/5 text-[#0071e3] group-hover:bg-brand group-hover:text-white",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "We map your processes, find the bottlenecks, and replace manual steps with AI pipelines that run on autopilot.",
    tag: null,
    iconBg: "bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Invoices, contracts, reports, applications — extracted, classified, and routed in seconds. 99%+ accuracy, every time.",
    tag: null,
    iconBg: "bg-[#64D2FF]/10 text-[#64D2FF] group-hover:bg-[#64D2FF] group-hover:text-white",
  },
  {
    icon: Plug,
    title: "System Integration",
    description: "Your CRM doesn't talk to your ERP. Your ERP doesn't talk to support. We make them all talk through AI middleware.",
    tag: null,
    iconBg: "bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white",
  },
  {
    icon: MessageSquare,
    title: "AI Assistants & Chatbots",
    description: "Customer-facing or internal, voice or text. Agents that actually resolve issues — not just deflect to a human.",
    tag: null,
    iconBg: "bg-[#30D158]/10 text-[#30D158] group-hover:bg-[#30D158] group-hover:text-white",
  },
  {
    icon: Search,
    title: "AI Strategy & Audit",
    description: "Not sure where to start? We audit your operations, rank opportunities by ROI, and give you a concrete plan. No fluff.",
    tag: "Good starting point",
    iconBg: "bg-[#FF9F0A]/10 text-[#FF9F0A] group-hover:bg-[#FF9F0A] group-hover:text-white",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[#F5F3FF]/60 to-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mb-14"
        >
          <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">
            What we build
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]">
            Six ways we put AI to work for you
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#424245]">
            Every engagement starts with understanding your workflows. Then we pick the right approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: "easeOut" }}
                className="group rounded-2xl bg-white border border-[#d2d2d7]/80 p-7 hover:border-slate-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${s.iconBg}`}>
                    <Icon size={20} />
                  </div>
                  {s.tag && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0071e3]/5 text-[#0071e3]">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-[16px] font-bold text-[#1d1d1f]">{s.title}</h3>
                <p className="mt-2.5 text-[14px] text-[#424245] leading-[1.65]">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
