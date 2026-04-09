"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const tools = [
  "OpenAI", "Zapier", "Make", "Slack", "HubSpot", "Salesforce",
  "Airtable", "Google Sheets", "Notion", "Twilio", "Stripe",
  "Intercom", "Microsoft 365", "Jira", "GitHub", "PostgreSQL", "AWS", "Anthropic",
];

function ToolChip({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white border border-slate-150 px-4 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] shrink-0">
      <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center">
        <span className="text-[10px] font-bold text-slate-400">{name.charAt(0)}</span>
      </div>
      <span className="text-[13px] font-medium text-slate-600 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function LogoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="text-center text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-6 px-5"
      >
        Connects with your existing stack
      </motion.p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50/80 to-transparent z-10" />
        <div className="flex animate-marquee">
          <div className="flex gap-3 pr-3">
            {tools.map((t) => <ToolChip key={t} name={t} />)}
          </div>
          <div className="flex gap-3 pr-3">
            {tools.map((t) => <ToolChip key={`d-${t}`} name={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
