"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const tools = [
  { name: "OpenAI", color: "#000" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "Make", color: "#6D00CC" },
  { name: "Slack", color: "#4A154B" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Airtable", color: "#2D7FF9" },
  { name: "Google Sheets", color: "#34A853" },
  { name: "Notion", color: "#000" },
  { name: "Twilio", color: "#F22F46" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Intercom", color: "#1F8DED" },
  { name: "Microsoft 365", color: "#0078D4" },
  { name: "Jira", color: "#0052CC" },
  { name: "GitHub", color: "#24292F" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS", color: "#FF9900" },
  { name: "Anthropic", color: "#D4A27F" },
];

function ToolChip({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-white border border-slate-100 px-4 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] shrink-0">
      <div
        className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-extrabold text-white shrink-0"
        style={{ background: color }}
      >
        {name.charAt(0)}
      </div>
      <span className="text-[13px] font-semibold text-slate-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function LogoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 bg-slate-50/60 border-y border-slate-100/80 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-5 px-6"
      >
        Connects with your existing tools
      </motion.p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />
        <div className="flex animate-marquee">
          <div className="flex gap-3 pr-3">
            {tools.map((t) => <ToolChip key={t.name} {...t} />)}
          </div>
          <div className="flex gap-3 pr-3">
            {tools.map((t) => <ToolChip key={`d-${t.name}`} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
