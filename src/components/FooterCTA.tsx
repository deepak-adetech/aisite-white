"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="py-20 lg:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-slate-900 px-8 py-14 sm:px-16 sm:py-20 text-center overflow-hidden"
        >
          {/* Subtle decorative gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-coral/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-[1.8rem] sm:text-[2.4rem] font-bold leading-[1.12] tracking-[-0.02em] text-white max-w-lg mx-auto">
              Ready to stop doing work that a machine could handle?
            </h2>
            <p className="mt-4 text-[15px] text-slate-400 max-w-md mx-auto leading-relaxed">
              Book a 30-minute strategy call. We&apos;ll map your workflows and
              show you exactly what to automate first.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@autoworkflows.ai"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Book a free strategy call
                <ArrowRight size={15} />
              </a>
            </div>
            <p className="mt-4 text-[12px] text-slate-500">
              First workflow is on us. No contract required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
