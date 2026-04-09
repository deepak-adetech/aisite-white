"use client";

const groups = [
  {
    title: "Solutions",
    links: [
      { label: "AI Agents", href: "#services" },
      { label: "Workflow Automation", href: "#services" },
      { label: "Document Intelligence", href: "#services" },
      { label: "System Integration", href: "#services" },
      { label: "AI Chatbots", href: "#services" },
      { label: "Strategy & Audit", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Results", href: "#case-studies" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@autoworkflows.ai", href: "mailto:hello@autoworkflows.ai" },
      { label: "Book a call", href: "#cta" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="shrink-0">
                <rect width="28" height="28" rx="7" fill="#4F46E5" />
                <circle cx="10" cy="10" r="2.5" fill="white" />
                <circle cx="18" cy="10" r="2.5" fill="white" opacity="0.65" />
                <circle cx="10" cy="18" r="2.5" fill="white" opacity="0.65" />
                <circle cx="18" cy="18" r="2.5" fill="white" />
              </svg>
              <span className="text-[15px] font-semibold tracking-[-0.01em]">
                <span className="text-slate-900">AutoWorkflows</span>
                <span className="text-brand">.AI</span>
              </span>
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed max-w-[200px]">
              Custom AI agents and workflow automation. Built for your business.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {g.title}
              </h4>
              <ul className="space-y-2">
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

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} AutoWorkflows.AI
          </p>
          <p className="text-[11px] text-slate-400">
            AI is all we do.
          </p>
        </div>
      </div>
    </footer>
  );
}
