"use client";

const groups = [
  {
    title: "Solutions",
    links: [
      { label: "AI Agents", href: "/services#ai-agents" },
      { label: "Workflow Automation", href: "/services#workflow-automation" },
      { label: "Document Intelligence", href: "/services#document-intelligence" },
      { label: "System Integration", href: "/services#system-integration" },
      { label: "AI Chatbots", href: "/services#ai-chatbots" },
      { label: "Strategy & Audit", href: "/services#ai-strategy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@autoworkflows.ai", href: "mailto:hello@autoworkflows.ai" },
      { label: "Get in touch", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" className="shrink-0">
                <rect width="30" height="30" rx="8" fill="#4F46E5" />
                <circle cx="15" cy="12" r="4" fill="white" />
                <circle cx="15" cy="12" r="2" fill="#4F46E5" />
                <circle cx="7.5" cy="21" r="3" fill="white" opacity="0.8" />
                <circle cx="22.5" cy="21" r="3" fill="white" opacity="0.8" />
                <path d="M12 15 L9 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
                <path d="M18 15 L21 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
                <path d="M10.5 21 L19.5 21" stroke="white" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.4" />
              </svg>
              <span className="text-[15px] font-bold tracking-[-0.01em]">
                <span className="text-slate-900">AutoWorkflows</span>
                <span className="text-brand">.AI</span>
              </span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed max-w-[220px]">
              Custom AI agents and workflow automation. Built for your business, owned by you.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-7 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-slate-400">
            &copy; {new Date().getFullYear()} AutoWorkflows.AI. All rights reserved.
          </p>
          <p className="text-[12px] text-slate-400">AI is all we do.</p>
        </div>
      </div>
    </footer>
  );
}
