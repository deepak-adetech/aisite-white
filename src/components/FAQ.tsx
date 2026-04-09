"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is the first workflow actually free?",
    a: "Yes. We build one complete automation — deployed to production, fully functional — at zero cost. No credit card, no contract, no follow-up sales calls unless you want them. We do this because once you see an AI agent saving your team 20 hours a week, the conversation about what's next happens naturally.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most automations go live within two weeks. Complex multi-system integrations might take four to six weeks. We work in fast sprints with weekly demos, so you're never wondering what's happening behind the scenes.",
  },
  {
    q: "What tools and AI models do you use?",
    a: "Whatever solves your problem best. We work with GPT-4o, Claude, Gemini, open-source models, and 50+ integration platforms. We're not locked into any vendor — we evaluate your specific needs and pick the optimal stack.",
  },
  {
    q: "Do we actually own the code?",
    a: "100%. Every agent, workflow, integration, and line of documentation is yours. We'll hand over the full repo, architecture docs, and deployment config. You can take it in-house, hire another team to maintain it, or keep working with us. No hostage situations.",
  },
  {
    q: "What if AI isn't right for our problem?",
    a: "We'll tell you. During the initial strategy call, we assess honestly. If your problem is better solved with a simple Zapier flow, a hire, or a process change, we'll say so. Building something that doesn't deliver results hurts us more than it hurts you.",
  },
  {
    q: "What kind of support do you offer post-launch?",
    a: "Every project includes 90 days of support — bug fixes, performance tuning, minor adjustments. For ongoing needs, our Managed AI tier covers continuous optimization, monitoring, and monthly improvement sprints.",
  },
  {
    q: "How is this different from hiring an AI consultant?",
    a: "Consultants give you a PDF. We give you working software. We're engineers who build and deploy production systems, not advisors who tell you what you should do and then leave.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-[14px] font-semibold text-slate-900 pr-8 group-hover:text-brand transition-colors">
          {faq.q}
        </span>
        <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-brand-50 transition-colors">
          {open ? (
            <Minus size={13} className="text-slate-500 group-hover:text-brand" />
          ) : (
            <Plus size={13} className="text-slate-500 group-hover:text-brand" />
          )}
        </div>
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
            <p className="pb-5 text-[13px] text-slate-500 leading-[1.7] max-w-2xl">
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
    <section id="faq" ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-white border border-slate-200 px-6 sm:px-8"
        >
          {faqs.map((f, i) => (
            <FAQItem key={i} faq={f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
