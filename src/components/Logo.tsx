"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2 ${className}`}>
      {/* Workflow node icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#7C3AED" />
        <circle cx="11" cy="11" r="3" fill="white" />
        <circle cx="21" cy="11" r="3" fill="white" opacity="0.7" />
        <circle cx="11" cy="21" r="3" fill="white" opacity="0.7" />
        <circle cx="21" cy="21" r="3" fill="white" />
        <line
          x1="14"
          y1="11"
          x2="18"
          y2="11"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="11"
          y1="14"
          x2="11"
          y2="18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="21"
          y1="14"
          x2="21"
          y2="18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="14"
          y1="21"
          x2="18"
          y2="21"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="13.5"
          y1="13.5"
          x2="18.5"
          y2="18.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-gray-900">AutoWorkflows</span>
        <span className="text-primary">.AI</span>
      </span>
    </a>
  );
}
