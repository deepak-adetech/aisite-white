"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const toolRows = [
  [
    "OpenAI",
    "GPT-4",
    "Claude",
    "Gemini",
    "LLaMA",
    "Mistral",
    "Cohere",
    "Perplexity",
    "Midjourney",
    "DALL-E",
    "Whisper",
    "ElevenLabs",
  ],
  [
    "Zapier",
    "Make",
    "n8n",
    "Power Automate",
    "Workato",
    "Tray.io",
    "Pipedream",
    "Activepieces",
    "Integromat",
    "IFTTT",
    "Pabbly",
    "Automate.io",
  ],
  [
    "Slack",
    "Teams",
    "HubSpot",
    "Salesforce",
    "Airtable",
    "Notion",
    "Monday",
    "Asana",
    "Jira",
    "Zendesk",
    "Freshdesk",
    "Intercom",
  ],
  [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Pinecone",
    "Weaviate",
    "Supabase",
    "Firebase",
    "AWS",
    "GCP",
    "Azure",
    "Vercel",
    "Railway",
  ],
];

function ToolCard({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 whitespace-nowrap shrink-0">
      {name}
    </div>
  );
}

export default function ToolAgnostic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            We don&apos;t sell tools.{" "}
            <span className="text-primary">We solve problems.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tool-agnostic by design. We pick the best stack for your specific
            needs — not ours.
          </p>
        </motion.div>
      </div>

      {/* Scrolling tool rows */}
      <div className="space-y-3 mt-10">
        {toolRows.map((row, i) => (
          <div key={i} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            <div
              className={`flex gap-3 ${
                i % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"
              }`}
            >
              <div className="flex gap-3">
                {row.map((tool) => (
                  <ToolCard key={tool} name={tool} />
                ))}
              </div>
              <div className="flex gap-3">
                {row.map((tool) => (
                  <ToolCard key={`dup-${tool}`} name={tool} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
