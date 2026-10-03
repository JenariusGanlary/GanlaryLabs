"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Systems", href: "#systems" },
  { label: "Studio", href: "#studio" },
  { label: "Demos", href: "#demos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[var(--border)] bg-[rgba(13,13,12,0.86)] backdrop-blur-xl">
      <div className="site-container relative flex h-[76px] items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center"
          aria-label="Ganlary Labs home"
        >
          <div className="flex h-12 items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.96] px-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:border-[var(--accent)]/30 group-hover:shadow-[0_10px_36px_rgba(201,130,91,0.12)]">
            <img
              src="data:image/png;base64,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"
              alt="Ganlary Labs"
              className="h-10 w-14 object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation — intentionally centered */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-[var(--accent)] transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="ml-auto hidden h-11 items-center gap-3 rounded-full border border-[rgba(201,130,91,0.32)] bg-[var(--accent)] px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17130f] shadow-[0_8px_28px_rgba(201,130,91,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[#d99a70] hover:shadow-[0_12px_34px_rgba(201,130,91,0.16)] lg:inline-flex"
        >
          Start a Project
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
            <ArrowUpRight size={12} strokeWidth={1.6} />
          </span>
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/[0.02] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(201,130,91,0.06)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[rgba(13,13,12,0.98)] lg:hidden">
          <nav className="site-container flex flex-col py-5">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-[var(--border)] py-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[8px] text-[var(--accent)]">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight size={13} strokeWidth={1.4} />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--accent)] text-xs font-semibold uppercase tracking-[0.1em] text-[#17130f] shadow-[0_10px_30px_rgba(201,130,91,0.1)]"
            >
              Start a Project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight size={13} />
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}