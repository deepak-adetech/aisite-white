"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const tools = [
  "OpenAI",
  "Zapier",
  "Make",
  "Slack",
  "HubSpot",
  "Salesforce",
  "Airtable",
  "Google Sheets",
  "Notion",
  "Twilio",
  "Stripe",
  "Intercom",
  "Microsoft 365",
  "Jira",
  "GitHub",
  "PostgreSQL",
  "AWS",
  "Anthropic",
];

function ToolPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white border border-gray-100 px-5 py-3 shadow-sm shrink-0">
      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <span className="text-xs font-bold text-primary">
          {name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function LogoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-14 bg-gray-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Integrated with the tools you already use
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-marquee">
          <div className="flex gap-4 pr-4">
            {tools.map((tool) => (
              <ToolPill key={tool} name={tool} />
            ))}
          </div>
          <div className="flex gap-4 pr-4">
            {tools.map((tool) => (
              <ToolPill key={`dup-${tool}`} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
