"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { hillview, navigation } from "../data";
import { BrandMark } from "@/components/Navbar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#11120f]/92 py-3 backdrop-blur-xl"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center gap-6 px-6 md:px-10 lg:px-14">
          <Link
            href="/"
            aria-label="Ganlary Labs home"
            className="hidden shrink-0 items-center gap-2 text-white/80 transition-colors hover:text-white sm:flex"
          >
            <BrandMark />
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] md:block">
              Ganlary Labs
            </span>
          </Link>

          {/* Demo collection */}
          <Link
            href="/demos"
            className="hidden shrink-0 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 transition-colors duration-300 hover:text-white xl:flex"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Demo Collection
          </Link>

          {/* Divider */}
          <span className="hidden h-7 w-px bg-white/15 xl:block" />

          {/* Hotel identity */}
          <a
            href="#top"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 text-[#f3efe7]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/35 bg-white/[0.03] text-[11px] font-semibold tracking-[0.14em]">
              {hillview.shortName}
            </span>

            <div className="hidden min-w-0 sm:block">
              <div className="text-[13px] font-semibold uppercase tracking-[0.2em]">
                {hillview.name}
              </div>

              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                Boutique Mountain Retreat
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="ml-auto hidden items-center gap-7 lg:flex xl:gap-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Booking CTA */}
          <a
            href="#booking"
            className="ml-auto hidden shrink-0 items-center gap-2 bg-[#c8aa7c] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171712] transition-all duration-300 hover:bg-[#e0c59b] md:flex lg:ml-6"
          >
            Check Availability
            <ArrowUpRight size={15} strokeWidth={1.6} />
          </a>

          {/* Mobile controls */}
          <div className="ml-auto flex items-center gap-3 lg:hidden">
            <Link
              href="/demos"
              className="hidden items-center gap-2 border border-white/20 px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/75 sm:flex"
            >
              <ArrowLeft size={13} strokeWidth={1.5} />
              Demos
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center border border-white/25 bg-white/[0.03] text-white transition-colors hover:bg-white/10"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#11120f] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-7 pb-10 pt-28 sm:px-10">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f3efe7]">
                {hillview.name}
              </div>

              <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                Boutique Mountain Retreat
              </div>
            </div>

            <Link
              href="/demos"
              onClick={closeMenu}
              className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#c8aa7c]"
            >
              <ArrowLeft size={13} strokeWidth={1.5} />
              Demos
            </Link>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col">
            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center border-b border-white/10 py-5 text-[27px] font-medium tracking-[-0.02em] text-[#f3efe7] transition-colors duration-300 hover:text-[#c8aa7c] sm:text-3xl"
              >
                <span className="mr-5 text-[10px] font-medium tracking-[0.1em] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.label}

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>
            ))}
          </nav>

          {/* Mobile booking CTA */}
          <a
            href="#booking"
            onClick={closeMenu}
            className="mt-9 flex w-full items-center justify-center gap-3 bg-[#c8aa7c] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#171712] transition-colors hover:bg-[#e0c59b]"
          >
            Check Availability
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>

          {/* Mobile location */}
          <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-6 text-[10px] font-medium uppercase tracking-[0.14em] text-white/35">
            <span>Arunachal Pradesh</span>
            <span>4,900 ft</span>
          </div>
        </div>
      </div>
    </>
  );
}