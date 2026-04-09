"use client";

import Logo from "./Logo";

const navGroups = [
  {
    title: "Services",
    links: [
      { label: "Custom AI Agents", href: "#services" },
      { label: "Workflow Automation", href: "#services" },
      { label: "Document Intelligence", href: "#services" },
      { label: "System Integration", href: "#services" },
      { label: "AI Chatbots", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@autoworkflows.ai", href: "mailto:hello@autoworkflows.ai" },
      { label: "Book a Call", href: "#cta" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0"
              >
                <rect width="32" height="32" rx="8" fill="#7C3AED" />
                <circle cx="11" cy="11" r="3" fill="white" />
                <circle cx="21" cy="11" r="3" fill="white" opacity="0.7" />
                <circle cx="11" cy="21" r="3" fill="white" opacity="0.7" />
                <circle cx="21" cy="21" r="3" fill="white" />
                <line x1="14" y1="11" x2="18" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <line x1="11" y1="14" x2="11" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <line x1="21" y1="14" x2="21" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <line x1="14" y1="21" x2="18" y2="21" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-white">AutoWorkflows</span>
                <span className="text-primary-light">.AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              We build custom AI agents and automations that save businesses
              thousands of hours. AI is all we do.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} AutoWorkflows.AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            AI is all we do.
          </p>
        </div>
      </div>
    </footer>
  );
}
