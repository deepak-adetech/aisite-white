"use client";

const groups = [
  {
    title: "Solutions",
    links: [
      { label: "Finance & Accounting", href: "/for/finance-ops" },
      { label: "Operations", href: "/for/operations" },
      { label: "Sales & Marketing", href: "/for/sales-marketing" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Workflow Automation", href: "/capabilities/workflow-automation" },
      { label: "AI Agents", href: "/capabilities/ai-agents" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Free Assessment", href: "/start" },
      { label: "Contact Us", href: "/contact" },
      { label: "hello@autoworkflows.ai", href: "mailto:hello@autoworkflows.ai" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
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
