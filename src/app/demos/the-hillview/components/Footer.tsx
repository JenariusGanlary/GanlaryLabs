"use client";

import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

import {
  contact,
  footerNavigation,
  hillview,
  socialLinks,
} from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#0c0d0b] text-[#f3efe7]">
      {/* =====================================================
          FINAL RESERVATION CTA
      ====================================================== */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c8aa7c]" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#c8aa7c]">
                  Your stay / The Hillview
                </span>
              </div>

              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.84] tracking-[-0.065em]">
                Come for the
                <br />
                <em className="font-serif text-[#d8c19b]">
                  mountains.
                </em>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base">
                Stay for the quiet mornings, the food, the fire, and the
                feeling of having nowhere else to be.
              </p>
            </div>

            <a
              href="#booking"
              className="group flex w-fit items-center gap-4 bg-[#c8aa7c] px-7 py-5 text-[9px] uppercase tracking-[0.2em] text-[#171712] transition-all duration-300 hover:bg-[#e0c59b]"
            >
              Check Availability

              <span className="flex h-8 w-8 items-center justify-center border border-black/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={14} strokeWidth={1.3} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="flex w-fit items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-white/25 text-[10px] tracking-[0.18em]">
                {hillview.shortName}
              </span>

              <div>
                <div className="text-[12px] uppercase tracking-[0.3em]">
                  {hillview.name}
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/30">
                  Mountain Retreat
                </div>
              </div>
            </a>

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/35">
              {hillview.description}
            </p>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 min-w-9 items-center justify-center border border-white/10 px-2.5 text-[8px] uppercase tracking-[0.12em] text-white/40 transition-all duration-300 hover:border-[#c8aa7c]/50 hover:text-[#c8aa7c]"
                >
                  {social.label === "Instagram" ? "IG" : "FB"}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                {group.title}
              </div>

              <nav className="mt-6 flex flex-col items-start">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              Contact
            </div>

            <div className="mt-6 space-y-5">
              <a
                href={`tel:${contact.phone}`}
                className="group flex items-start gap-3"
              >
                <Phone
                  size={14}
                  strokeWidth={1.2}
                  className="mt-1 shrink-0 text-[#c8aa7c]"
                />

                <span className="text-sm text-white/50 transition-colors group-hover:text-white">
                  {contact.phone}
                </span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start gap-3"
              >
                <Mail
                  size={14}
                  strokeWidth={1.2}
                  className="mt-1 shrink-0 text-[#c8aa7c]"
                />

                <span className="break-all text-sm text-white/50 transition-colors group-hover:text-white">
                  {contact.email}
                </span>
              </a>

              <div className="border-t border-white/10 pt-5">
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Address
                </div>

                <div className="mt-2 text-xs leading-6 text-white/40">
                  {contact.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          HOTEL DETAILS
      ====================================================== */}
      <div className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-3">
          <div className="border-b border-white/10 px-6 py-6 md:border-b-0 md:border-r md:px-10 lg:px-14">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              Check-in
            </div>

            <div className="mt-2 text-sm text-white/55">
              From {contact.checkIn}
            </div>
          </div>

          <div className="border-b border-white/10 px-6 py-6 md:border-b-0 md:border-r md:px-10 lg:px-14">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              Check-out
            </div>

            <div className="mt-2 text-sm text-white/55">
              By {contact.checkOut}
            </div>
          </div>

          <div className="px-6 py-6 md:px-10 lg:px-14">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              Location
            </div>

            <div className="mt-2 text-sm text-white/55">
              {hillview.location}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[8px] uppercase tracking-[0.2em] text-white/20">
          <span>
            © {new Date().getFullYear()} {hillview.name}
          </span>

          <span>Privacy</span>
          <span>Terms</span>
        </div>

        <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-white/20">
          <span>Website concept</span>
          <span className="h-px w-5 bg-white/15" />
          <span>Ganlary Labs</span>
        </div>
      </div>
    </footer>
  );
}