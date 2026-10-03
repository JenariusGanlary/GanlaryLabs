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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAgAElEQVR4nO2dZ1gV57r37+mrL3qVInbFgkSsG7G3aOwNGwoqsZcY"
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