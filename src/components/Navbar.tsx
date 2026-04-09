"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    children: [
      { label: "Finance & Accounting", href: "/for/finance-ops" },
      { label: "Operations", href: "/for/operations" },
      { label: "Sales & Marketing", href: "/for/sales-marketing" },
    ],
  },
  {
    label: "Capabilities",
    children: [
      { label: "Workflow Automation", href: "/capabilities/workflow-automation" },
      { label: "AI Agents", href: "/capabilities/ai-agents" },
    ],
  },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/#pricing" },
];

function Dropdown({ items, open }: { items: { label: string; href: string }[]; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
        >
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50 py-2 min-w-[200px]">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-[13px] font-medium text-slate-600 hover:text-brand hover:bg-brand-50/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="flex h-[64px] items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(link.label)}
                  onMouseLeave={handleLeave}
                >
                  <button className="flex items-center gap-1 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  <Dropdown items={link.children} open={openDropdown === link.label} />
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/start"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Get started
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-slate-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) =>
                "children" in link && link.children ? (
                  <div key={link.label} className="py-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">{link.label}</p>
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-3 text-[14px] font-medium text-slate-600 hover:text-brand"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-[15px] font-medium text-slate-700 hover:text-slate-900"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="/start"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-lg bg-slate-900 px-5 py-3 mt-3 text-[14px] font-semibold text-white"
              >
                Get started free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
