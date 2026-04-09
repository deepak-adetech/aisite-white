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
    <footer className="border-t border-[#e8e8ed] bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" className="shrink-0">
                <rect width="30" height="30" rx="8" fill="#1d1d1f" />
                <circle cx="15" cy="12" r="4" fill="white" />
                <circle cx="15" cy="12" r="2" fill="#1d1d1f" />
                <circle cx="7.5" cy="21" r="3" fill="white" opacity="0.8" />
                <circle cx="22.5" cy="21" r="3" fill="white" opacity="0.8" />
                <path d="M12 15 L9 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
                <path d="M18 15 L21 18.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
              </svg>
              <span className="text-[15px] font-bold tracking-[-0.01em]">
                <span className="text-[#1d1d1f]">AutoWorkflows</span>
                <span className="text-[#0071e3]">.AI</span>
              </span>
            </div>
            <p className="text-[13px] text-[#86868b] leading-relaxed max-w-[220px]">
              Custom AI agents and workflow automation. Built for your business, owned by you.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider mb-4">
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-7 border-t border-[#e8e8ed] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-[#86868b]">
            &copy; {new Date().getFullYear()} AutoWorkflows.AI. All rights reserved.
          </p>
          <p className="text-[12px] text-[#86868b]">AI is all we do.</p>
        </div>
      </div>
    </footer>
  );
}
