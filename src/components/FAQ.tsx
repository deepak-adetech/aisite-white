"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the first workflow really free?",
    a: "Yes, completely free. We automate one full workflow for you — deployed to production — at zero cost. No credit card, no contracts. We do this because we're confident you'll want to keep going once you see the results.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most automations are live within 2 weeks. Complex multi-system integrations may take 4-6 weeks. We work in fast sprints with weekly demos so you see progress from day one.",
  },
  {
    q: "What tools and platforms do you work with?",
    a: "We're tool-agnostic. We work with 50+ platforms including OpenAI, Zapier, Make, Slack, HubSpot, Salesforce, custom APIs, and more. We pick the best stack for your specific needs.",
  },
  {
    q: "What types of AI do you use?",
    a: "We use a mix of large language models (GPT-4, Claude, etc.), computer vision, NLP, and traditional ML — whatever solves your problem best. We're not tied to any single AI provider.",
  },
  {
    q: "Do we own the code and workflows you build?",
    a: "100%. Everything we build is yours — code, agents, workflows, documentation. No vendor lock-in. You can take it in-house whenever you want.",
  },
  {
    q: "What kind of support do you offer after launch?",
    a: "Every project includes 90 days of post-launch support. For ongoing needs, our Managed AI plan covers monitoring, optimization, and continuous improvements.",
  },
  {
    q: "What if AI isn't the right solution for our problem?",
    a: "We'll tell you. During our free strategy call, we assess your workflows honestly. If automation isn't the right fit, we'll say so. We'd rather build trust than sell something that won't deliver.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-gray-900 pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know before getting started
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-white border border-gray-200 px-6 sm:px-8 shadow-sm"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
