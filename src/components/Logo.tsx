"use client";

import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo icon — agent/workflow/AI concept */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="30" height="30" rx="8" fill="#4F46E5" />
        {/* Central AI brain node */}
        <circle cx="15" cy="12" r="4" fill="white" />
        <circle cx="15" cy="12" r="2" fill="#4F46E5" />
        {/* Left workflow node */}
        <circle cx="7.5" cy="21" r="3" fill="white" opacity="0.8" />
        {/* Right workflow node */}
        <circle cx="22.5" cy="21" r="3" fill="white" opacity="0.8" />
        {/* Connections from brain to nodes */}
        <path d="M12 15 L9 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        <path d="M18 15 L21 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
        {/* Bottom connection between nodes */}
        <path d="M10.5 21 L19.5 21" stroke="white" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
        {/* Small signal arcs around brain */}
        <path d="M9.5 9 Q11 6.5 15 6" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M20.5 9 Q19 6.5 15 6" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
      </svg>

      <span className="text-[17px] font-semibold tracking-[-0.02em] relative">
        <span className="text-slate-900">AutoWorkflows</span>
        <span className="relative inline-block">
          <span className="text-gradient bg-gradient-to-r from-brand via-purple-500 to-brand-light bg-[length:200%_100%] animate-shimmer">
            .AI
          </span>
          {/* Hovering sparkle — tight orbit */}
          <motion.span
            animate={{
              y: [0, -2.5, 0],
              x: [0, 1, -0.5, 0],
              rotate: [0, 12, -8, 0],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1.5 -right-1.5 text-[8px] text-brand pointer-events-none select-none"
          >
            ✦
          </motion.span>
        </span>
      </span>
    </a>
  );
}
