"use client";

import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Systems", href: "/#systems" },
  { label: "Process", href: "/#process" },
  { label: "What We Solve", href: "/#problems" },
  { label: "Demos", href: "/demos" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
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
    <footer className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(241,236,227,0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(241,236,227,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="site-container relative z-10">
        {/* Main footer */}
        <div className="border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <div>
              <a href="/" className="group inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-[10px] font-semibold tracking-[0.08em] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                  GL
                </span>
                <span className="text-sm font-semibold tracking-[-0.02em]">
                  GANLARY LABS
                </span>
              </a>

              <h2 className="mt-8 max-w-3xl font-editorial text-[clamp(2.8rem,5.5vw,5.8rem)] leading-[0.84] tracking-[-0.065em]">
                Build something
                <br />
                <span className="italic text-[var(--accent-soft)]">worth using.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                Ganlary Labs builds intelligent systems, software products,
                digital experiences, and automation for ambitious businesses.
              </p>

              <a
                href="/contact"
                className="btn-primary mt-8 inline-flex rounded-full"
              >
                Start a project <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-2">
              <div>
                <span className="technical-label">EXPLORE</span>
                <nav className="mt-5 flex flex-col items-start">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2 py-1.5 text-xs text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
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

              <div>
                <span className="technical-label">CAPABILITIES</span>
                <div className="mt-5 flex flex-col gap-2.5">
                  {capabilities.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <span className="font-editorial text-[10px] text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div className="grid gap-8 border-b border-[var(--border)] py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)]">
              <Mail size={15} strokeWidth={1.2} className="text-[var(--accent)]" />
            </span>
            <div>
              <span className="technical-label">START A CONVERSATION</span>
              <a
                href="mailto:hello@ganlarylabs.com"
                className="group mt-1.5 flex items-center gap-2 font-editorial text-lg tracking-[-0.02em] transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-xl"
              >
                hello@ganlarylabs.com
                <ArrowUpRight size={14} strokeWidth={1} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Contact studio <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Legal + meta */}
        <div className="grid gap-6 border-b border-[var(--border)] py-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <span className="technical-label">LEGAL</span>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted-dark)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted-dark)]">
            India / Worldwide
          </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-3 py-5 text-[9px] uppercase tracking-[0.15em] text-[var(--muted-dark)] sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© {currentYear} Ganlary Labs</span>
            <span>AI · Software · Systems</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Built with intent</span>
            <a
              href="#top"
              aria-label="Back to top"
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              <ArrowUp size={13} strokeWidth={1.2} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
