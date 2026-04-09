"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const toolRows = [
  ["GPT-4o", "Claude", "Gemini", "LLaMA", "Mistral", "Cohere", "Whisper", "ElevenLabs", "Midjourney", "DALL-E", "Stable Diffusion", "Perplexity"],
  ["Zapier", "Make", "n8n", "Power Automate", "Workato", "Tray.io", "Pipedream", "Activepieces", "IFTTT", "Pabbly", "Retool", "Temporal"],
  ["Slack", "Teams", "HubSpot", "Salesforce", "Airtable", "Notion", "Monday", "Asana", "Jira", "Zendesk", "Freshdesk", "Intercom"],
  ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Weaviate", "Supabase", "Firebase", "AWS", "GCP", "Azure", "Vercel", "Railway"],
];

function ToolChip({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-500 whitespace-nowrap shrink-0">
      {name}
    </div>
  );
}

export default function ToolAgnostic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="text-[13px] font-semibold text-brand uppercase tracking-wider mb-3">
            Tool agnostic
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900">
            We don&apos;t sell tools. We solve problems.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-slate-500">
            No vendor lock-in, no pushing our preferred stack. We evaluate your
            needs and pick the best combination from 50+ platforms and AI models.
          </p>
        </motion.div>
      </div>

      <div className="space-y-2.5">
        {toolRows.map((row, i) => (
          <div key={i} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className={`flex gap-2.5 ${i % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"}`}>
              <div className="flex gap-2.5">
                {row.map((t) => <ToolChip key={t} name={t} />)}
              </div>
              <div className="flex gap-2.5">
                {row.map((t) => <ToolChip key={`d-${t}`} name={t} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
