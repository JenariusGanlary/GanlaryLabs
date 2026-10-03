"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Utensils,
} from "lucide-react";
import { dining } from "../data";

export default function Dining() {
  return (
    <section
      id="dining"
      className="overflow-hidden bg-[#e9e4d9] text-[#171713]"
    >
      {/* =========================
          INTRO
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9b7950]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6b47]">
                {dining.eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.055em]">
              {dining.title}
              <br />
              <em className="font-serif text-[#9b7950]">
                {dining.titleAccent}
              </em>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-black/55 md:text-base md:leading-8">
              {dining.description}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-black/40">
              <Utensils size={14} strokeWidth={1.2} />
              Dining at The Hillview
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FEATURED DINING IMAGE
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        <div className="grid overflow-hidden lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main image */}
          <div className="relative aspect-[4/3] min-h-[340px] overflow-hidden sm:min-h-[420px] md:aspect-auto md:min-h-[580px]">
            <motion.img
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              src={dining.image}
              alt="Dining at The Hillview"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 md:bottom-9 md:left-9">
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/55">
                The Hillview Kitchen
              </div>

              <div className="mt-2 text-2xl font-light text-white md:text-3xl">
                Meals worth staying in for.
              </div>
            </div>
          </div>

          {/* Secondary image */}
          <div className="relative hidden min-h-[580px] overflow-hidden lg:block">
            <motion.img
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              src={dining.secondaryImage}
              alt="A meal prepared at The Hillview"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="border border-white/20 bg-black/20 p-5 backdrop-blur-sm">
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Private Dining
                </div>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  A table prepared especially for your stay, indoors or under
                  the evening sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          DINING DETAILS
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Highlights */}
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-black/35">
              What we serve
            </div>

            <div className="mt-6 border-t border-black/10">
              {dining.highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-black/10 py-5"
                >
                  <span className="text-[9px] tracking-[0.2em] text-[#9b7950]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-black/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="lg:pl-10">
            <div className="text-[9px] uppercase tracking-[0.25em] text-black/35">
              Dining hours
            </div>

            <div className="mt-6 grid border-t border-black/10 sm:grid-cols-3">
              {dining.hours.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-black/10 py-5 sm:border-r sm:px-6 sm:py-6 sm:first:pl-0 sm:last:border-r-0"
                >
                  <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-black/35">
                    <Clock3 size={13} strokeWidth={1.2} />
                    {item.label}
                  </div>

                  <div className="mt-3 text-lg font-light">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 max-w-lg text-xs leading-6 text-black/45">
              Dinner and private dining experiences can be arranged in
              advance. Let our team know your preferences when making your
              reservation.
            </p>

            <a
              href="#booking"
              className="mt-7 flex w-full sm:w-fit items-center gap-3 bg-[#171713] justify-center px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#f3efe7] transition-all duration-300 hover:bg-[#8a6b47]"
            >
              Arrange Dining
              <ArrowUpRight size={14} strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          CLOSING STRIP
      ========================== */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <span className="text-[8px] uppercase tracking-[0.25em] text-black/35">
            Seasonal menu · Local produce · Private dining
          </span>

          <span className="text-[8px] uppercase tracking-[0.2em] text-black/30">
            Breakfast included with every stay
          </span>
        </div>
      </div>
    </section>
  );
}