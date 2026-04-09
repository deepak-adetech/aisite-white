"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Bot,
  Workflow,
  FileText,
  Plug,
  MessageSquare,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Purpose-built AI agents that handle complex tasks autonomously — from research to decision-making.",
    color: "bg-purple-50 text-primary",
    borderColor: "border-purple-100",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end automation of repetitive processes. Connect your tools and let AI run the show.",
    color: "bg-orange-50 text-secondary",
    borderColor: "border-orange-100",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description:
      "Extract, classify, and process documents at scale. Invoices, contracts, reports — handled automatically.",
    color: "bg-teal-50 text-accent-teal",
    borderColor: "border-teal-100",
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Connect your CRM, ERP, and tools into a unified AI-powered workflow. No data silos.",
    color: "bg-pink-50 text-accent-pink",
    borderColor: "border-pink-100",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents for support, sales, and internal operations. 24/7, instant.",
    color: "bg-yellow-50 text-amber-600",
    borderColor: "border-yellow-100",
  },
  {
    icon: Search,
    title: "AI Strategy & Audit",
    description:
      "Comprehensive assessment of your operations to identify the highest-ROI automation opportunities.",
    color: "bg-indigo-50 text-indigo-600",
    borderColor: "border-indigo-100",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            AI solutions engineered for{" "}
            <span className="text-primary">your workflows</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            From strategy to deployment, we build automations that actually work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative rounded-2xl bg-white border ${service.borderColor} p-7 shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-5`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
