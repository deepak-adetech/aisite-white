"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is the first workflow actually free?",
    a: "Yes. One complete automation — built, deployed, running in production — at zero cost. No credit card, no contract, no obligation. We do this because once you see an AI agent saving 20+ hours a week, the next conversation happens naturally.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most automations go live within two weeks. Complex multi-system integrations might take four to six weeks. We work in fast sprints with weekly demos so you always know exactly where things stand.",
  },
  {
    q: "What tools and AI models do you use?",
    a: "Whatever solves your problem best. GPT-4o, Claude, Gemini, open-source models, Zapier, Make, n8n, custom APIs — we're not locked into any vendor. We evaluate your needs and build the optimal stack.",
  },
  {
    q: "Do we actually own the code?",
    a: "100%. Every agent, workflow, integration, and line of documentation is yours. Full repo, architecture docs, deployment config. You can take it in-house, hire another team, or keep working with us. No lock-in, ever.",
  },
  {
    q: "What if AI isn't the right fit for our problem?",
    a: "We'll tell you. During the strategy call, we assess honestly. If a simple Zapier flow, a new hire, or a process change is the better solution — we'll say so. Building something that doesn't deliver hurts us more than it hurts you.",
  },
  {
    q: "What support do you offer post-launch?",
    a: "Every project includes 90 days of support: bug fixes, performance tuning, minor adjustments. For ongoing needs, our Managed AI tier covers continuous optimization, monitoring, and monthly improvement sprints.",
  },
  {
    q: "How is this different from hiring a consultant?",
    a: "Consultants give you a PDF with recommendations. We give you working, deployed software. We're engineers who build and ship production systems — not advisors who tell you what to do and then leave.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e8e8ed] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 sm:py-6 text-left group"
      >
        <span className="text-[15px] font-bold text-[#1d1d1f] pr-8 group-hover:text-[#0071e3] transition-colors">
          {faq.q}
        </span>
        <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0071e3]/5 transition-colors">
          {open
            ? <Minus size={14} className="text-[#86868b] group-hover:text-[#0071e3]" />
            : <Plus size={14} className="text-[#86868b] group-hover:text-[#0071e3]" />
          }
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14px] text-[#424245] leading-[1.75] max-w-2xl">
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
    <section id="faq" ref={ref} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="rounded-2xl bg-white border border-[#d2d2d7] px-6 sm:px-10"
        >
          {faqs.map((f, i) => <FAQItem key={i} faq={f} />)}
        </motion.div>
      </div>
    </section>
  );
}
