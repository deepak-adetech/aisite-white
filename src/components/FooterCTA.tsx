"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FooterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1040] to-brand-dark" />

          {/* Decorative mesh */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-light/10 rounded-full blur-[60px]" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 lg:px-24 lg:py-28 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 mb-8"
            >
              <Sparkles size={13} className="text-amber" />
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                Free first workflow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white max-w-3xl mx-auto"
            >
              Ready to stop doing work that a machine could handle?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 text-[17px] text-slate-300 max-w-lg mx-auto leading-relaxed"
            >
              Book a 30-minute strategy call. We&apos;ll map your workflows and
              show you exactly what to automate first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:hello@autoworkflows.ai"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-[15px] font-bold text-slate-900 shadow-2xl shadow-black/20 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a free strategy call
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="mailto:hello@autoworkflows.ai"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 backdrop-blur-sm px-8 py-4 text-[15px] font-bold text-white hover:bg-white/10 transition-all duration-200"
              >
                Email us directly
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 text-[13px] text-slate-400"
            >
              No contract. No credit card. No catch.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
