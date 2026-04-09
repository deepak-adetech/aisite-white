"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, ArrowRight, MapPin, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const faqs = [
  { q: "What happens on the strategy call?", a: "We spend 30 minutes understanding your workflows, identifying the highest-ROI automation opportunities, and mapping out a concrete plan. No sales pitch — just useful insights you can act on whether or not you work with us." },
  { q: "Is the first workflow really free?", a: "Yes. We build and deploy one complete automation at zero cost. No credit card, no contract. We do this because the results speak for themselves." },
  { q: "How quickly can you start?", a: "Most projects kick off within a week of the strategy call. Your first automation is typically live within 2 weeks." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
              {/* Left — copy */}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0071e3]/5 border border-brand-100/80 px-3.5 py-1.5 mb-7">
                  <Sparkles size={12} className="text-[#0071e3]" />
                  <span className="text-[11px] font-bold text-[#0071e3] tracking-wide uppercase">
                    Free first workflow
                  </span>
                </div>
                <h1 className="text-[2.4rem] sm:text-[3rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f]">
                  Let&apos;s talk about{" "}
                  <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light">
                    what to automate first
                  </span>
                </h1>
                <p className="mt-6 text-[17px] leading-[1.7] text-[#424245] max-w-md">
                  Book a free 30-minute strategy call. We&apos;ll map your workflows,
                  identify the biggest opportunities, and show you exactly how to get started.
                </p>

                {/* Contact details */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0071e3]/5 flex items-center justify-center text-[#0071e3] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">Email</p>
                      <a href="mailto:hello@autoworkflows.ai" className="text-[15px] font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors">
                        hello@autoworkflows.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#30D158]/10 flex items-center justify-center text-[#30D158] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">Response time</p>
                      <p className="text-[15px] font-semibold text-[#1d1d1f]">Under 4 hours, usually faster</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center text-amber shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">Location</p>
                      <p className="text-[15px] font-semibold text-[#1d1d1f]">Remote-first, global clients</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — contact form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              >
                <div className="rounded-2xl bg-white border border-[#d2d2d7] shadow-sm p-8">
                  <h2 className="text-[20px] font-bold text-[#1d1d1f] mb-6">Get in touch</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-[#86868b] uppercase tracking-wider mb-1.5">First name</label>
                        <input type="text" className="w-full rounded-lg border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-2.5 text-[14px] text-[#1d1d1f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition" placeholder="Jane" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#86868b] uppercase tracking-wider mb-1.5">Last name</label>
                        <input type="text" className="w-full rounded-lg border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-2.5 text-[14px] text-[#1d1d1f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition" placeholder="Smith" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868b] uppercase tracking-wider mb-1.5">Work email</label>
                      <input type="email" className="w-full rounded-lg border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-2.5 text-[14px] text-[#1d1d1f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition" placeholder="jane@company.com" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868b] uppercase tracking-wider mb-1.5">Company</label>
                      <input type="text" className="w-full rounded-lg border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-2.5 text-[14px] text-[#1d1d1f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition" placeholder="Acme Corp" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868b] uppercase tracking-wider mb-1.5">What do you want to automate?</label>
                      <textarea rows={4} className="w-full rounded-lg border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-2.5 text-[14px] text-[#1d1d1f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition resize-none" placeholder="Tell us about the workflows or tasks you'd like to automate..." />
                    </div>
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-dark px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Send message
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <p className="text-[12px] text-[#86868b] text-center">
                      We&apos;ll respond within 4 hours. No spam, ever.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick FAQs */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
            <Section className="text-center mb-12">
              <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1d1d1f]">
                Before you reach out
              </h2>
            </Section>
            <div className="space-y-4">
              {faqs.map((f) => (
                <Section key={f.q} className="rounded-2xl bg-white border border-[#d2d2d7] p-6 sm:p-8">
                  <h3 className="text-[16px] font-bold text-[#1d1d1f]">{f.q}</h3>
                  <p className="mt-2 text-[14px] text-[#424245] leading-[1.7]">{f.a}</p>
                </Section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
