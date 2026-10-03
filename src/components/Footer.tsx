"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Systems", href: "#systems" },
  { label: "Process", href: "#process" },
  { label: "What We Solve", href: "#problems" },
  { label: "Contact", href: "/contact" },
  { label: "Demos", href: "/demos" },
];

const capabilities = [
  "AI Products",
  "Business Systems",
  "Automation",
  "Digital Experiences",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--background)]">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(241,236,227,0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(241,236,227,0.025) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="grid gap-12 border-b border-[var(--border)] py-12 sm:py-14 lg:grid-cols-[1.4fr_0.6fr_0.7fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-[var(--border-strong)] text-[10px] font-semibold tracking-[0.08em] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                GL
              </span>

              <span className="text-sm font-semibold tracking-[-0.02em]">
                GANLARY LABS
              </span>
            </a>

            <p className="mt-6 max-w-md font-editorial text-xl leading-[1.15] tracking-[-0.03em] sm:text-2xl">
              Intelligent systems for businesses that want to build what comes
              next.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

              <span className="technical-label">
                AI · SOFTWARE · SYSTEMS
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="technical-label">NAVIGATION</span>

            <nav className="mt-5 flex flex-col items-start">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 py-1 text-xs text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Capabilities */}
          <div>
            <span className="technical-label">CAPABILITIES</span>

            <div className="mt-5 flex flex-col gap-2">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs text-[var(--muted)]"
                >
                  <span className="font-editorial text-[10px] text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col justify-between gap-5 border-b border-[var(--border)] py-6 sm:flex-row sm:items-center">
          <div>
            <span className="technical-label">START A CONVERSATION</span>

            <a
              href="mailto:hello@ganlarylabs.com"
              className="group mt-1.5 flex items-center gap-2 font-editorial text-lg tracking-[-0.02em] transition-colors duration-300 hover:text-[var(--accent-soft)]"
            >
              hello@ganlarylabs.com

              <ArrowUpRight
                size={14}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <a
            href="#top"
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center border border-[var(--border-strong)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)]"
          >
            <ArrowUp
              size={14}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-3 py-5 text-[9px] uppercase tracking-[0.15em] text-[var(--muted-dark)] sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© {currentYear} Ganlary Labs</span>
            <span>All systems operational</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Built with intent</span>
            <span>India / Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}