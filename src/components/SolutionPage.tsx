"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Pain { title: string; description: string }
interface Solution { icon: LucideIcon; title: string; description: string }
interface Result { value: string; label: string }
interface Workflow { before: string; after: string; label: string }

interface SolutionPageProps {
  tag: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  pains: Pain[];
  solutions: Solution[];
  workflows: Workflow[];
  results: Result[];
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

export default function SolutionPage({ tag, title, titleGradient, subtitle, pains, solutions, workflows, results }: SolutionPageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
              <p className="text-[13px] font-bold text-brand uppercase tracking-wider mb-4">{tag}</p>
              <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
                {title}{" "}
                <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">{titleGradient}</span>
              </h1>
              <p className="mt-5 text-[17px] leading-[1.7] text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
              <a href="/start" className="group inline-flex items-center gap-2 mt-8 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200">
                Automate your first workflow free
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="max-w-xl mb-12">
              <p className="text-[13px] font-bold text-coral uppercase tracking-wider mb-4">The challenge</p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900">
                Sound familiar?
              </h2>
            </Section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pains.map((p) => (
                <Section key={p.title} className="rounded-2xl bg-white border border-slate-200/80 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-[15px] font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-[14px] text-slate-600 leading-[1.65]">{p.description}</p>
                </Section>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F5F3FF]/40 to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="max-w-xl mb-12">
              <p className="text-[13px] font-bold text-brand uppercase tracking-wider mb-4">What we build</p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900">
                AI-powered solutions
              </h2>
            </Section>
            <div className="grid sm:grid-cols-2 gap-5">
              {solutions.map((s) => {
                const Icon = s.icon;
                return (
                  <Section key={s.title} className="rounded-2xl bg-white border border-slate-200/80 p-7 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[16px] font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-[14px] text-slate-600 leading-[1.65]">{s.description}</p>
                  </Section>
                );
              })}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center max-w-xl mx-auto mb-12">
              <p className="text-[13px] font-bold text-emerald uppercase tracking-wider mb-4">The transformation</p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900">Before vs. After</h2>
            </Section>
            <div className="space-y-4 max-w-3xl mx-auto">
              {workflows.map((w) => (
                <Section key={w.label} className="rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6">
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-3">{w.label}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-50 border border-slate-100 p-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Before</p>
                      <p className="mt-1 text-[15px] font-bold text-slate-700">{w.before}</p>
                    </div>
                    <div className="rounded-xl bg-emerald/5 border border-emerald/10 p-4">
                      <p className="text-[10px] font-bold text-emerald uppercase">After</p>
                      <p className="mt-1 text-[15px] font-bold text-emerald">{w.after}</p>
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gradient-to-r from-brand via-[#5B4FDB] to-brand-dark">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((r) => (
                <div key={r.label} className="text-center">
                  <div className="text-[2.4rem] sm:text-[3rem] font-extrabold tracking-tight text-white">{r.value}</div>
                  <p className="mt-1.5 text-[12px] font-semibold text-indigo-200 uppercase tracking-wider">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center max-w-2xl mx-auto">
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900">
                Ready to transform your {tag.toLowerCase()}?
              </h2>
              <p className="mt-4 text-[16px] text-slate-600">Your first workflow is free. Answer a few questions to get started.</p>
              <a href="/start" className="group inline-flex items-center gap-2 mt-8 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200">
                Start your free assessment <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
