"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

/* Compact workflow animation */
function AnimatedWorkflow() {
  const [count, setCount] = useState(1247);
  useEffect(() => {
    const i = setInterval(() => setCount((c) => c + Math.floor(Math.random() * 3) + 1), 2500);
    return () => clearInterval(i);
  }, []);

  const nodeEnter = (delay: number) => ({
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#0071e3]/[0.06] via-[#f5f5f7] to-[#2997ff]/[0.04] border border-[#d2d2d7]/30" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-[#d2d2d7]/40">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#0071e3]/30" />
        </motion.div>
      </div>

      <div className="relative aspect-square flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
          <path d="M100 120 Q155 155 165 175" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.25" />
          <path d="M280 120 Q225 155 215 175" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.25" />
          <path d="M190 230 L190 255" stroke="#0071e3" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.25" />
          <path d="M165 290 Q130 300 110 305" stroke="#30D158" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.25" />
          <path d="M215 290 Q250 300 270 305" stroke="#30D158" strokeWidth="1.5" strokeDasharray="5 3" className="animate-dash-flow" opacity="0.25" />
        </svg>

        {[
          { emoji: "👤", label: "Leads", sub: "inbound", pos: "top-[2%] left-1/2 -translate-x-1/2", d: 0.3 },
          { emoji: "📧", label: "Emails", sub: "1.2K/day", pos: "top-[13%] left-[4%]", d: 0.4 },
          { emoji: "📄", label: "Invoices", sub: "PDF & scan", pos: "top-[13%] right-[4%]", d: 0.5 },
        ].map((n) => (
          <motion.div key={n.label} {...nodeEnter(n.d)} className={`absolute ${n.pos}`}>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="hover:scale-105 transition-transform">
              <div className="bg-white rounded-2xl border border-[#d2d2d7]/50 shadow-[0_2px_8px_rgba(0,0,0,0.06)] px-3 py-2.5 text-center w-[78px]">
                <div className="text-[14px]">{n.emoji}</div>
                <div className="text-[10px] font-semibold text-[#1d1d1f]">{n.label}</div>
                <div className="text-[8px] text-[#86868b]">{n.sub}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.5, type: "spring", bounce: 0.25 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]"
        >
          <div className="relative">
            <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-3 rounded-2xl bg-[#0071e3]/15 blur-md" />
            <div className="relative bg-[#1d1d1f] rounded-2xl shadow-[0_3px_20px_rgba(0,0,0,0.15)] px-5 py-3.5 text-center">
              <div className="text-[18px] mb-1">🤖</div>
              <div className="text-[11px] font-semibold text-white">AI Agent</div>
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="mt-1.5 flex justify-center gap-1">
                {[0, 0.2, 0.4].map((d) => (
                  <motion.div key={d} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: d }} className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div {...nodeEnter(0.9)} className="absolute bottom-[22%] left-1/2 -translate-x-1/2">
          <div className="bg-[#FF9F0A]/10 rounded-xl border border-[#FF9F0A]/20 px-4 py-2 text-center">
            <div className="text-[10px] font-semibold text-[#FF9F0A]">⚡ Route & Act</div>
          </div>
        </motion.div>

        {[
          { emoji: "💾", label: "CRM", sub: "updated", pos: "bottom-[5%] left-[4%]", d: 1.05 },
          { emoji: "✅", label: "Reply", sub: "auto-sent", pos: "bottom-[5%] right-[4%]", d: 1.1 },
        ].map((n) => (
          <motion.div key={n.label} {...nodeEnter(n.d)} className={`absolute ${n.pos}`}>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <div className="bg-[#30D158]/5 rounded-2xl border border-[#30D158]/20 px-3 py-2.5 text-center w-[78px]">
                <div className="text-[14px]">{n.emoji}</div>
                <div className="text-[10px] font-semibold text-[#1d1d1f]">{n.label}</div>
                <div className="text-[8px] text-[#30D158]">{n.sub}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-[12%] left-1/2 -translate-x-1/2">
          <div className="bg-white rounded-xl border border-[#d2d2d7]/50 shadow-sm px-4 py-2 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#30D158] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#30D158]" />
            </span>
            <motion.span key={count} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-[13px] font-semibold text-[#1d1d1f] tabular-nums">
              {count.toLocaleString()}
            </motion.span>
            <span className="text-[10px] text-[#86868b]">tasks today</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#f5f5f7] via-white to-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0071e3]/[0.05] to-[#2997ff]/[0.03] blur-3xl animate-mesh" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FF3B30]/[0.03] to-[#FF9F0A]/[0.02] blur-3xl animate-mesh" style={{ animationDelay: "-8s" }} />
        <div className="absolute inset-0 opacity-[0.2]">
          <svg width="100%" height="100%">
            <defs><pattern id="heroGrid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.5" fill="#86868b" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center">
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#d2d2d7]/50 px-3.5 py-1.5 mb-6 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#30D158] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#30D158]" />
                </span>
                <span className="text-[11px] font-medium text-[#86868b] tracking-wide uppercase">
                  AI & Automation Partners
                </span>
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="font-display text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f]">
              Turn Workflows into <span className="text-gradient bg-gradient-to-r from-[#0071e3] via-[#2997ff] to-[#64D2FF]">Autopilot.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.18)} className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-[#86868b] max-w-[460px]">
              We build custom AI agents and automations so your team can stop drowning in repetitive work and start focusing on what actually grows the business.
            </motion.p>

            <motion.div {...fadeUp(0.28)} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/start" className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-6 py-3 text-[17px] font-normal text-white hover:bg-[#0077ED] transition-colors">
                Get started free
              </a>
              <a href="/case-studies" className="inline-flex items-center justify-center rounded-full border border-[#0071e3] px-6 py-3 text-[17px] font-normal text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors">
                See results
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {["#0071e3", "#FF3B30", "#FF9F0A", "#30D158"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-semibold text-white" style={{ background: c }}>
                    {["JR", "SK", "MH", "AW"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[#86868b]">
                <span className="font-semibold text-[#1d1d1f]">50+ companies</span> automated
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <AnimatedWorkflow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
