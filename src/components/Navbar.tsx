"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-[#d2d2d7]/60 shadow-[0_3px_30px_rgba(0,0,0,0.08)] py-2 min-w-[220px]">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="block px-5 py-2.5 text-[14px] font-normal text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors">
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
          ? "bg-white/72 backdrop-blur-xl backdrop-saturate-[180%] border-b border-[#d2d2d7]/40 shadow-[0_0_1px_rgba(0,0,0,0.04)]"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto max-w-[980px] px-6">
        <div className="flex h-[48px] items-center justify-between">
          <Logo />

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.label} className="relative" onMouseEnter={() => handleEnter(link.label)} onMouseLeave={handleLeave}>
                  <button className="flex items-center gap-1 text-[12px] font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">
                    {link.label}
                    <ChevronDown size={10} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  <Dropdown items={link.children} open={openDropdown === link.label} />
                </div>
              ) : (
                <a key={link.label} href={link.href} className="text-[12px] font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">
                  {link.label}
                </a>
              )
            )}
            <a href="/start" className="rounded-full bg-[#0071e3] px-4 py-1.5 text-[12px] font-normal text-white hover:bg-[#0077ED] transition-colors">
              Get started
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 -mr-2 text-[#1d1d1f]" aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#d2d2d7]/40 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) =>
                "children" in link && link.children ? (
                  <div key={link.label} className="py-2">
                    <p className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">{link.label}</p>
                    {link.children.map((child) => (
                      <a key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-3 text-[15px] text-[#1d1d1f] hover:text-[#0071e3]">
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-[15px] text-[#1d1d1f]">
                    {link.label}
                  </a>
                )
              )}
              <a href="/start" onClick={() => setMobileOpen(false)} className="block w-full text-center rounded-full bg-[#0071e3] px-5 py-3 mt-3 text-[14px] text-white">
                Get started free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
