"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-primary-dark px-8 py-14 sm:px-14 sm:py-20 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent-yellow rounded-full" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
              Stop paying humans to do what AI does better
            </h2>
            <p className="mt-5 text-lg text-purple-200 max-w-lg mx-auto">
              Book a free strategy call. We&apos;ll map your workflows and show
              you exactly what to automate first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@autoworkflows.ai"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200"
              >
                Book a free strategy call
                <ArrowRight size={18} />
              </a>
            </div>
            <p className="mt-5 text-sm text-purple-300 italic">
              First workflow automated free — no strings attached
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
