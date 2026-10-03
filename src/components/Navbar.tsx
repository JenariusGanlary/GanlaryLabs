"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Our Processes", href: "process", type: "section" as const },
  { label: "About", href: "/about", type: "page" as const },
  { label: "Demos", href: "demos", type: "section" as const },
  { label: "Contact", href: "/contact", type: "page" as const },
];

const PENDING_SCROLL_KEY = "ganlary-pending-scroll";

const navLinkClass =
  "group relative py-2 text-[11px] leading-none font-medium uppercase tracking-[0.13em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]";

export function BrandMark() {
  return (
    <svg viewBox="0 0 42 42" aria-hidden="true" className="h-9 w-9 shrink-0" fill="none">
      <path d="M21 4.5 34.8 12v18L21 38.5 7.2 30V12L21 4.5Z" stroke="currentColor" strokeWidth="1.5" opacity=".9" />
      <path d="m21 11 8.2 4.5v10.9L21 31l-8.2-4.6V15.5L21 11Z" stroke="currentColor" strokeWidth="1.5" opacity=".72" />
      <path d="m16.2 18.1 4.8-2.7 4.8 2.7v5.8L21 26.6l-4.8-2.7v-5.8Z" stroke="var(--accent)" strokeWidth="1.6" />
    </svg>
  );
}

function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <BrandMark />
      <span className="leading-none">
        <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] sm:text-[13px]">Ganlary</span>
        <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">Labs</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    setOpen(false);

    if (pathname !== "/") {
      window.sessionStorage.setItem(PENDING_SCROLL_KEY, id);
      window.location.assign("/");
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const id = window.sessionStorage.getItem(PENDING_SCROLL_KEY);
    if (!id) return;

    window.sessionStorage.removeItem(PENDING_SCROLL_KEY);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, [pathname]);

  return (
    <header className="relative z-50 border-b border-[var(--border)] bg-[rgba(13,13,12,0.9)] backdrop-blur-xl">
      <div className="site-container relative flex h-[74px] items-center justify-between sm:h-[78px]">
        <Link href="/" aria-label="Ganlary Labs home" className="group"><Brand /></Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex xl:gap-10">
          {links.map((link) =>
            link.type === "section" ? (
              <Link
                key={link.label}
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
                className={navLinkClass}
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <Link key={link.label} href={link.href} className={navLinkClass}>
                {link.label}
                <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        <Link href="/contact" className="hidden h-11 items-center gap-3 rounded-full bg-[var(--accent)] px-5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#17130f] shadow-[0_10px_30px_rgba(201,130,91,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-soft)] hover:shadow-[0_14px_40px_rgba(201,130,91,0.2)] lg:inline-flex">
          Start a Project
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10"><ArrowUpRight size={12} strokeWidth={1.7} /></span>
        </Link>

        <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/[0.02] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(201,130,91,0.06)] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[rgba(13,13,12,0.98)] lg:hidden">
          <nav className="site-container flex flex-col py-4">
            {links.map((link, index) =>
              link.type === "section" ? (
                <Link
                  key={link.label}
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="flex items-center justify-between border-b border-[var(--border)] py-4 text-left text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[8px] text-[var(--accent)]">0{index + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight size={13} strokeWidth={1.4} />
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[var(--border)] py-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[8px] text-[var(--accent)]">0{index + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight size={13} strokeWidth={1.4} />
                </Link>
              )
            )}

            <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--accent)] text-xs font-semibold uppercase tracking-[0.1em] text-[#17130f]">
              Start a Project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10"><ArrowUpRight size={13} /></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
