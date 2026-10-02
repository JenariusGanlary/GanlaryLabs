"use client";

import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Users,
} from "lucide-react";
import { hillview } from "../data";

const heroImage =
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2400&q=90";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#11120f] text-[#f3efe7]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={`${hillview.name} — ${hillview.category}`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11120f] via-black/5 to-black/35" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-7 pt-32 md:px-10 md:pb-10 lg:px-14 lg:pb-12">
        {/* Property introduction */}
        <div className="max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="h-px w-10 bg-[#c8aa7c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7c19c] sm:text-[11px]">
              {hillview.category}
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-[11px]">
              {hillview.location}
            </span>
          </div>

          {/* Hotel identity */}
          <div className="mb-4 flex items-center gap-4">
            <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white md:text-[15px]">
              {hillview.name}
            </span>

            <span className="h-px w-12 bg-white/25" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
              Est. Mountain Retreat
            </span>
          </div>

          {/* Main headline */}
          <h1 className="max-w-6xl text-[clamp(3.7rem,8vw,8.2rem)] font-medium leading-[0.86] tracking-[-0.065em]">
            Stay above
            <br />
            <em className="font-serif font-normal text-[#e1c9a2]">
              the clouds.
            </em>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-[14px] font-medium leading-6 text-white/75 sm:text-[15px] sm:leading-7 md:mt-8 md:text-[17px] md:leading-8">
            {hillview.description}
          </p>
        </div>

        {/* Availability / Booking panel */}
        <div
          id="booking"
          className="mt-9 w-full max-w-6xl border border-white/20 bg-[#171814]/95 p-1.5 shadow-2xl backdrop-blur-xl md:mt-11"
        >
          {/* Booking heading */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8aa7c]">
                Plan your stay
              </div>

              <div className="mt-1 text-[12px] font-medium text-white/60 md:text-[13px]">
                Select your dates and check room availability.
              </div>
            </div>

            <div className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-white/30 sm:block">
              Direct booking
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr_0.8fr_auto]">
            {/* Check-in */}
            <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r md:p-6">
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 md:text-[11px]">
                Check-in
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={18}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#c8aa7c]"
                />

                <span className="text-[14px] font-medium text-white/90 md:text-[15px]">
                  12 October 2026
                </span>
              </div>
            </div>

            {/* Check-out */}
            <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r md:p-6">
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 md:text-[11px]">
                Check-out
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={18}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#c8aa7c]"
                />

                <span className="text-[14px] font-medium text-white/90 md:text-[15px]">
                  15 October 2026
                </span>
              </div>
            </div>

            {/* Guests */}
            <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r md:p-6">
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 md:text-[11px]">
                Guests
              </div>

              <div className="flex items-center gap-3">
                <Users
                  size={18}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#c8aa7c]"
                />

                <span className="text-[14px] font-medium text-white/90 md:text-[15px]">
                  2 Adults
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#rooms"
              className="flex min-h-[76px] items-center justify-center gap-3 bg-[#c8aa7c] px-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#171712] transition-all duration-300 hover:bg-[#e0c59b] md:min-w-[220px] md:px-8 md:text-xs"
            >
              Check Availability
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/55 md:text-[11px]">
            <span>Arunachal Pradesh</span>
            <span>Elevation / 4,900 ft</span>
            <span className="hidden md:inline">Check-in / 14:00</span>
            <span className="hidden md:inline">Check-out / 11:00</span>
          </div>

          <a
            href="#rooms"
            className="group flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white md:text-[11px]"
          >
            Explore rooms

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#c8aa7c] group-hover:bg-[#c8aa7c] group-hover:text-[#171712]">
              <ArrowDown size={13} strokeWidth={1.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}