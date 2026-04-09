"use client";

import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none" className="shrink-0">
        <rect width="30" height="30" rx="8" fill="#1d1d1f" />
        <circle cx="15" cy="12" r="4" fill="white" />
        <circle cx="15" cy="12" r="2" fill="#1d1d1f" />
        <circle cx="7.5" cy="21" r="3" fill="white" opacity="0.8" />
        <circle cx="22.5" cy="21" r="3" fill="white" opacity="0.8" />
        <path d="M12 15 L9 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        <path d="M18 15 L21 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      </svg>
      <span className="text-[18px] font-semibold tracking-[-0.03em] relative">
        <span className="text-[#1d1d1f]">AutoWorkflows</span>
        <span className="relative inline-block">
          <span className="text-gradient bg-gradient-to-r from-[#0071e3] to-[#2997ff] bg-[length:200%_100%] animate-shimmer">.AI</span>
          <motion.span
            animate={{ y: [0, -2.5, 0], x: [0, 1, -0.5, 0], rotate: [0, 12, -8, 0], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1.5 -right-1.5 text-[8px] text-[#0071e3] pointer-events-none select-none"
          >✦</motion.span>
        </span>
      </span>
    </a>
  );
}
