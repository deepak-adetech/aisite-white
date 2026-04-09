"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="7" fill="#4F46E5" />
        <circle cx="10" cy="10" r="2.5" fill="white" />
        <circle cx="18" cy="10" r="2.5" fill="white" opacity="0.65" />
        <circle cx="10" cy="18" r="2.5" fill="white" opacity="0.65" />
        <circle cx="18" cy="18" r="2.5" fill="white" />
        <line x1="12.5" y1="10" x2="15.5" y2="10" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="10" y1="12.5" x2="10" y2="15.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="18" y1="12.5" x2="18" y2="15.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="12.5" y1="18" x2="15.5" y2="18" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="12" y1="12" x2="16" y2="16" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
      <span className="text-[17px] font-semibold tracking-[-0.02em]">
        <span className="text-slate-900">AutoWorkflows</span>
        <span className="text-brand">.AI</span>
      </span>
    </a>
  );
}
