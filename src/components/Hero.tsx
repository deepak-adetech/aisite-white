"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background blob */}
      <ellipse cx="300" cy="220" rx="260" ry="200" fill="#F5F3FF" />
      <ellipse cx="300" cy="220" rx="200" ry="155" fill="#EDE9FE" />

      {/* Central monitor */}
      <rect x="195" y="100" width="210" height="150" rx="12" fill="white" stroke="#7C3AED" strokeWidth="2" />
      <rect x="195" y="100" width="210" height="26" rx="12" fill="#7C3AED" />
      <circle cx="210" cy="113" r="4" fill="#C4B5FD" />
      <circle cx="224" cy="113" r="4" fill="#C4B5FD" />
      <circle cx="238" cy="113" r="4" fill="#C4B5FD" />

      {/* Monitor content — workflow diagram */}
      <rect x="215" y="145" width="60" height="24" rx="6" fill="#7C3AED" opacity="0.15" />
      <text x="245" y="161" textAnchor="middle" fontSize="9" fill="#7C3AED" fontWeight="600">Input</text>
      <line x1="275" y1="157" x2="295" y2="157" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

      <rect x="295" y="140" width="60" height="34" rx="8" fill="#7C3AED" />
      <text x="325" y="161" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">AI Agent</text>
      <line x1="355" y1="157" x2="375" y2="157" stroke="#7C3AED" strokeWidth="1.5" />

      <rect x="375" y="145" width="56" height="24" rx="6" fill="#F97316" opacity="0.2" />
      <text x="403" y="161" textAnchor="middle" fontSize="9" fill="#F97316" fontWeight="600">Output</text>

      {/* Sub-flow lines */}
      <rect x="225" y="185" width="50" height="18" rx="4" fill="#14B8A6" opacity="0.15" />
      <text x="250" y="197" textAnchor="middle" fontSize="7" fill="#14B8A6" fontWeight="500">Analyze</text>
      <rect x="290" y="185" width="50" height="18" rx="4" fill="#EC4899" opacity="0.15" />
      <text x="315" y="197" textAnchor="middle" fontSize="7" fill="#EC4899" fontWeight="500">Process</text>
      <rect x="355" y="185" width="50" height="18" rx="4" fill="#FBBF24" opacity="0.15" />
      <text x="380" y="197" textAnchor="middle" fontSize="7" fill="#B45309" fontWeight="500">Deliver</text>

      {/* Monitor stand */}
      <rect x="280" y="250" width="40" height="16" rx="2" fill="#D1D5DB" />
      <rect x="265" y="262" width="70" height="6" rx="3" fill="#D1D5DB" />

      {/* Person left — sitting with laptop */}
      <circle cx="110" cy="200" r="22" fill="#FBBF24" opacity="0.3" />
      <circle cx="110" cy="188" r="14" fill="#FDE68A" />
      {/* Face */}
      <circle cx="105" cy="185" r="2" fill="#92400E" />
      <circle cx="115" cy="185" r="2" fill="#92400E" />
      <path d="M106 192 Q110 196 114 192" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Body */}
      <rect x="96" y="205" width="28" height="30" rx="8" fill="#7C3AED" />
      {/* Laptop */}
      <rect x="85" y="225" width="34" height="22" rx="3" fill="#374151" />
      <rect x="88" y="228" width="28" height="16" rx="2" fill="#60A5FA" opacity="0.4" />
      <rect x="78" y="247" width="48" height="4" rx="2" fill="#4B5563" />

      {/* Connection line from person to monitor */}
      <path d="M132 220 Q160 200 195 170" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="132" cy="220" r="3" fill="#7C3AED" opacity="0.6" />

      {/* Person right — standing, pointing */}
      <circle cx="500" cy="180" r="22" fill="#14B8A6" opacity="0.2" />
      <circle cx="500" cy="168" r="14" fill="#99F6E4" />
      {/* Face */}
      <circle cx="495" cy="165" r="2" fill="#134E4A" />
      <circle cx="505" cy="165" r="2" fill="#134E4A" />
      <path d="M496 172 Q500 176 504 172" stroke="#134E4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Body */}
      <rect x="486" y="185" width="28" height="36" rx="8" fill="#F97316" />
      {/* Arm pointing */}
      <line x1="486" y1="198" x2="460" y2="190" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
      {/* Legs */}
      <line x1="494" y1="221" x2="490" y2="252" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
      <line x1="506" y1="221" x2="510" y2="252" stroke="#374151" strokeWidth="3" strokeLinecap="round" />

      {/* Connection line from person to monitor */}
      <path d="M470 195 Q440 185 405 170" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="470" cy="195" r="3" fill="#F97316" opacity="0.6" />

      {/* Floating elements */}
      {/* Gear */}
      <g transform="translate(150, 120)">
        <circle cx="0" cy="0" r="12" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="white" stroke="#9CA3AF" strokeWidth="1.5" />
        <rect x="-2" y="-14" width="4" height="6" rx="2" fill="#9CA3AF" />
        <rect x="-2" y="8" width="4" height="6" rx="2" fill="#9CA3AF" />
        <rect x="-14" y="-2" width="6" height="4" rx="2" fill="#9CA3AF" />
        <rect x="8" y="-2" width="6" height="4" rx="2" fill="#9CA3AF" />
      </g>

      {/* Lightning bolt */}
      <g transform="translate(460, 130)">
        <polygon points="5,0 0,12 6,12 3,22 14,8 8,8 12,0" fill="#FBBF24" />
      </g>

      {/* Check badge */}
      <g transform="translate(170, 280)">
        <circle cx="10" cy="10" r="10" fill="#10B981" opacity="0.2" />
        <circle cx="10" cy="10" r="7" fill="#10B981" />
        <polyline points="7,10 9,12.5 13.5,7.5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Chat bubble */}
      <g transform="translate(420, 270)">
        <rect x="0" y="0" width="40" height="26" rx="8" fill="#EDE9FE" />
        <polygon points="10,26 15,33 20,26" fill="#EDE9FE" />
        <circle cx="12" cy="13" r="2.5" fill="#7C3AED" />
        <circle cx="20" cy="13" r="2.5" fill="#7C3AED" opacity="0.6" />
        <circle cx="28" cy="13" r="2.5" fill="#7C3AED" opacity="0.3" />
      </g>

      {/* Small floating dots */}
      <circle cx="80" cy="150" r="4" fill="#7C3AED" opacity="0.2" />
      <circle cx="530" cy="240" r="5" fill="#F97316" opacity="0.2" />
      <circle cx="160" cy="320" r="3" fill="#14B8A6" opacity="0.3" />
      <circle cx="450" cy="100" r="4" fill="#EC4899" opacity="0.2" />

      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#7C3AED" />
        </marker>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white to-orange-50/40 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-100 px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                AI is all we do
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Automate your workflows with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                custom AI agents
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed">
              We build intelligent automations that save your team thousands of
              hours. From document processing to customer support — we handle it
              all.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
              >
                Book a free strategy call
                <ArrowRight size={18} />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all duration-200"
              >
                See our work
              </a>
            </div>

            <p className="mt-5 text-sm italic text-gray-400">
              First workflow automated free — no strings attached.
            </p>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
