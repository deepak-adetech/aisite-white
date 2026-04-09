"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* Real brand-colored tool chips with SVG-based logos */
const tools = [
  // Row 1 — AI Models
  [
    { name: "OpenAI", color: "#000000", bg: "#F7F7F8" },
    { name: "Claude", color: "#D4A27F", bg: "#FFF8F3" },
    { name: "Gemini", color: "#4285F4", bg: "#EBF3FF" },
    { name: "GPT-4o", color: "#10A37F", bg: "#ECFDF5" },
    { name: "LLaMA", color: "#5B4FDB", bg: "#F0EEFF" },
    { name: "Mistral", color: "#FF7000", bg: "#FFF4EC" },
    { name: "Cohere", color: "#39594D", bg: "#F0F7F4" },
    { name: "Whisper", color: "#000000", bg: "#F7F7F8" },
    { name: "DALL-E", color: "#10A37F", bg: "#ECFDF5" },
    { name: "Perplexity", color: "#20808D", bg: "#E8F7F9" },
    { name: "ElevenLabs", color: "#000000", bg: "#F7F7F8" },
    { name: "Midjourney", color: "#000000", bg: "#F7F7F8" },
  ],
  // Row 2 — Automation
  [
    { name: "Zapier", color: "#FF4A00", bg: "#FFF0EB" },
    { name: "Make", color: "#6D00CC", bg: "#F5ECFF" },
    { name: "n8n", color: "#EA4B71", bg: "#FFF0F3" },
    { name: "Power Automate", color: "#0066FF", bg: "#EBF2FF" },
    { name: "Workato", color: "#2F8FF7", bg: "#EDF5FF" },
    { name: "Pipedream", color: "#12B981", bg: "#ECFDF5" },
    { name: "Retool", color: "#3D3D3D", bg: "#F4F4F4" },
    { name: "Temporal", color: "#000000", bg: "#F7F7F8" },
    { name: "Activepieces", color: "#5155D7", bg: "#EDEDFC" },
    { name: "Tray.io", color: "#2196F3", bg: "#E3F2FD" },
    { name: "IFTTT", color: "#000000", bg: "#F7F7F8" },
    { name: "Pabbly", color: "#E64A2E", bg: "#FFF1EE" },
  ],
  // Row 3 — Business Tools
  [
    { name: "Slack", color: "#4A154B", bg: "#F8EEF8" },
    { name: "HubSpot", color: "#FF7A59", bg: "#FFF2EE" },
    { name: "Salesforce", color: "#00A1E0", bg: "#E6F6FC" },
    { name: "Airtable", color: "#2D7FF9", bg: "#EDF5FF" },
    { name: "Notion", color: "#000000", bg: "#F7F7F8" },
    { name: "Jira", color: "#0052CC", bg: "#E6EEFF" },
    { name: "Zendesk", color: "#03363D", bg: "#E8F0F1" },
    { name: "Intercom", color: "#1F8DED", bg: "#E8F4FD" },
    { name: "Monday", color: "#FF3D57", bg: "#FFECEF" },
    { name: "Asana", color: "#F06A6A", bg: "#FFF0F0" },
    { name: "Freshdesk", color: "#25C16F", bg: "#ECFDF3" },
    { name: "Teams", color: "#5B5FC7", bg: "#EDEDF9" },
  ],
  // Row 4 — Infrastructure
  [
    { name: "PostgreSQL", color: "#336791", bg: "#E9EFF5" },
    { name: "MongoDB", color: "#47A248", bg: "#ECF7EC" },
    { name: "Redis", color: "#DC382D", bg: "#FCECEB" },
    { name: "Pinecone", color: "#000000", bg: "#F7F7F8" },
    { name: "Supabase", color: "#3ECF8E", bg: "#ECFDF5" },
    { name: "Firebase", color: "#FFCA28", bg: "#FFFAEB" },
    { name: "AWS", color: "#FF9900", bg: "#FFF5E6" },
    { name: "GCP", color: "#4285F4", bg: "#EBF3FF" },
    { name: "Azure", color: "#0078D4", bg: "#E6F1FB" },
    { name: "Vercel", color: "#000000", bg: "#F7F7F8" },
    { name: "Stripe", color: "#635BFF", bg: "#F0EEFF" },
    { name: "Twilio", color: "#F22F46", bg: "#FFF0F2" },
  ],
];

function BrandChip({ name, color, bg }: { name: string; color: string; bg: string }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 rounded-xl border border-[#d2d2d7]/60 px-4 py-2.5 shrink-0 hover:shadow-sm transition-shadow"
      style={{ background: bg }}
    >
      <div
        className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white shrink-0"
        style={{ background: color }}
      >
        {name.charAt(0)}
      </div>
      <span className="text-[13px] font-semibold text-[#333336] whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function ToolAgnostic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[980px] px-6 sm:px-10 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-[13px] font-bold text-[#0071e3] uppercase tracking-wider mb-4">
            Tool agnostic
          </p>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]">
            We don&apos;t sell tools.{" "}
            <span className="text-gradient bg-gradient-to-r from-brand to-brand-light">
              We solve problems.
            </span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#424245]">
            No vendor lock-in. We evaluate your needs and pick the best combination
            from 50+ platforms, AI models, and infrastructure providers.
          </p>
        </motion.div>
      </div>

      {/* Scrolling branded tool rows */}
      <div className="space-y-3">
        {tools.map((row, i) => (
          <div key={i} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <div className={`flex gap-3 ${i % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"}`}>
              <div className="flex gap-3">
                {row.map((t) => <BrandChip key={t.name} {...t} />)}
              </div>
              <div className="flex gap-3">
                {row.map((t) => <BrandChip key={`d-${t.name}`} {...t} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
