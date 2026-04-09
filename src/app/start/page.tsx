"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Step {
  id: string;
  question: string;
  subtitle: string;
  type: "select" | "multi" | "text" | "textarea";
  options?: string[];
  placeholder?: string;
}

const steps: Step[] = [
  {
    id: "department",
    question: "Which area of your business needs automation?",
    subtitle: "We'll tailor the assessment to your specific department.",
    type: "select",
    options: ["Finance & Accounting", "Operations", "Sales & Marketing", "Customer Support", "HR & People Ops", "IT & Engineering", "Multiple departments"],
  },
  {
    id: "challenge",
    question: "What's the biggest bottleneck right now?",
    subtitle: "Pick the one that costs you the most time or money.",
    type: "select",
    options: ["Manual data entry between systems", "Slow document processing (invoices, contracts)", "Lead response time is too slow", "Reporting takes forever to compile", "Customer support can't scale", "Onboarding new hires takes too long", "Compliance & audit preparation", "Something else"],
  },
  {
    id: "tools",
    question: "What tools does your team use today?",
    subtitle: "Select all that apply. This helps us understand your integration needs.",
    type: "multi",
    options: ["Salesforce", "HubSpot", "Slack", "Microsoft 365", "Google Workspace", "QuickBooks/Xero", "SAP/Oracle ERP", "Jira/Asana", "Zendesk/Freshdesk", "Airtable/Notion", "Custom internal tools", "Other"],
  },
  {
    id: "team-size",
    question: "How large is the team affected by this bottleneck?",
    subtitle: "This helps us estimate impact and ROI.",
    type: "select",
    options: ["1–5 people", "6–15 people", "16–50 people", "50–200 people", "200+ people"],
  },
  {
    id: "timeline",
    question: "How soon do you need this solved?",
    subtitle: "No wrong answer — we work fast regardless.",
    type: "select",
    options: ["ASAP — it's costing us money every day", "Within 1 month", "Within 3 months", "Just exploring for now"],
  },
  {
    id: "tried",
    question: "Have you tried automating this before?",
    subtitle: "It's okay if you have — most solutions hit limits. That's why we exist.",
    type: "select",
    options: ["No, this is our first attempt", "Yes, with Zapier/Make/similar", "Yes, with an in-house developer", "Yes, with another agency/consultant", "We've tried multiple approaches"],
  },
  {
    id: "description",
    question: "Describe the workflow you'd like to automate",
    subtitle: "Walk us through the steps as if you're explaining to a new team member. The more detail, the better our proposal.",
    type: "textarea",
    placeholder: "Example: Every day, our AP team receives ~50 invoices via email. They manually open each PDF, extract the vendor name, amount, and line items, then enter it into our ERP (NetSuite). It takes 3 people about 4 hours each day...",
  },
  {
    id: "contact",
    question: "Where should we send your automation plan?",
    subtitle: "We'll put together a custom assessment within 24 hours.",
    type: "text",
    placeholder: "",
  },
];

export default function StartPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  const step = steps[current];
  const progress = ((current + 1) / steps.length) * 100;

  const handleSelect = (option: string) => {
    setAnswers((a) => ({ ...a, [step.id]: option }));
    if (current < steps.length - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 300);
    }
  };

  const handleMulti = (option: string) => {
    const prev = (answers[step.id] as string[]) || [];
    const next = prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option];
    setAnswers((a) => ({ ...a, [step.id]: next }));
  };

  const canProceed = () => {
    if (step.type === "select") return !!answers[step.id];
    if (step.type === "multi") return ((answers[step.id] as string[]) || []).length > 0;
    if (step.type === "textarea") return !!answers[step.id];
    if (step.type === "text") return contactInfo.name && contactInfo.email;
    return true;
  };

  const handleNext = () => {
    if (current === steps.length - 1) {
      setSubmitted(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-xl px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <div className="w-16 h-16 rounded-2xl bg-[#30D158]/10 flex items-center justify-center text-[#30D158] mx-auto mb-6">
                <Check size={32} />
              </div>
              <h1 className="text-[2rem] sm:text-[2.6rem] font-extrabold tracking-[-0.03em] text-[#1d1d1f]">
                You&apos;re all set!
              </h1>
              <p className="mt-4 text-[17px] text-[#424245] leading-relaxed">
                We&apos;ll review your answers and send a custom automation plan to{" "}
                <span className="font-bold text-[#1d1d1f]">{contactInfo.email || "your email"}</span>{" "}
                within 24 hours.
              </p>
              <p className="mt-6 text-[14px] text-[#86868b]">
                In the meantime, check out how we&apos;ve helped other companies:
              </p>
              <a href="/case-studies" className="group inline-flex items-center gap-2 mt-4 text-[15px] font-bold text-[#0071e3] hover:text-[#0071e3]-dark transition-colors">
                View case studies <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 lg:pt-36 lg:pb-28 min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto max-w-2xl px-6 sm:px-10">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">
                Step {current + 1} of {steps.length}
              </span>
              <span className="text-[12px] font-bold text-[#0071e3]">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-[1.6rem] sm:text-[2rem] font-extrabold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
                {step.question}
              </h1>
              <p className="mt-2 text-[15px] text-[#86868b] leading-relaxed">{step.subtitle}</p>

              <div className="mt-8">
                {step.type === "select" && step.options && (
                  <div className="space-y-2.5">
                    {step.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className={`w-full text-left rounded-xl border-2 px-5 py-4 text-[15px] font-medium transition-all duration-200 ${
                          answers[step.id] === opt
                            ? "border-brand bg-[#0071e3]/5 text-[#0071e3]"
                            : "border-[#d2d2d7] text-slate-700 hover:border-slate-300 hover:bg-[#f5f5f7]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {step.type === "multi" && step.options && (
                  <div className="grid grid-cols-2 gap-2.5">
                    {step.options.map((opt) => {
                      const selected = ((answers[step.id] as string[]) || []).includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => handleMulti(opt)}
                          className={`text-left rounded-xl border-2 px-4 py-3.5 text-[14px] font-medium transition-all duration-200 ${
                            selected
                              ? "border-brand bg-[#0071e3]/5 text-[#0071e3]"
                              : "border-[#d2d2d7] text-slate-700 hover:border-slate-300 hover:bg-[#f5f5f7]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                              selected ? "border-brand bg-brand" : "border-slate-300"
                            }`}>
                              {selected && <Check size={10} className="text-white" strokeWidth={3} />}
                            </div>
                            {opt}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {step.type === "textarea" && (
                  <textarea
                    rows={6}
                    value={(answers[step.id] as string) || ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [step.id]: e.target.value }))}
                    placeholder={step.placeholder}
                    className="w-full rounded-xl border-2 border-[#d2d2d7] bg-white px-5 py-4 text-[15px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition resize-none"
                  />
                )}

                {step.type === "text" && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo((c) => ({ ...c, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full rounded-xl border-2 border-[#d2d2d7] bg-white px-5 py-3.5 text-[15px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                    />
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo((c) => ({ ...c, email: e.target.value }))}
                      placeholder="Work email"
                      className="w-full rounded-xl border-2 border-[#d2d2d7] bg-white px-5 py-3.5 text-[15px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                    />
                    <input
                      type="text"
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo((c) => ({ ...c, company: e.target.value }))}
                      placeholder="Company name"
                      className="w-full rounded-xl border-2 border-[#d2d2d7] bg-white px-5 py-3.5 text-[15px] text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="flex items-center gap-2 text-[14px] font-medium text-[#86868b] hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft size={15} /> Back
            </button>

            {(step.type === "multi" || step.type === "textarea" || step.type === "text") && (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-6 py-3 text-[14px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
              >
                {current === steps.length - 1 ? (
                  <>
                    <Sparkles size={15} /> Submit
                  </>
                ) : (
                  <>
                    Continue <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
