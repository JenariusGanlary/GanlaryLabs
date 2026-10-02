"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Systems", href: "#systems" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[var(--border)]">
      <div className="site-container flex h-[76px] items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label="Ganlary Labs home"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-125" />

          <span className="text-[13px] font-semibold tracking-[0.12em]">
            GANLARY LABS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-only flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-3 inline-flex h-10 items-center gap-2 border border-[var(--border-strong)] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(201,130,91,0.06)]"
          >
            Start a Project
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mobile-only flex h-10 w-10 items-center justify-center border border-[var(--border)]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="mobile-only border-t border-[var(--border)] bg-[var(--background)]">
          <nav className="site-container flex flex-col py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border)] py-4 text-xs uppercase tracking-[0.12em] text-[var(--muted)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 bg-[var(--foreground)] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--background)]"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}