"use client";

import {
  ArrowUpRight,
  Car,
  Coffee,
  Flame,
  House,
  Mountain,
  Sparkles,
  Utensils,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import { amenities } from "../data";

const icons = [
  Mountain,
  Coffee,
  Utensils,
  Flame,
  Wifi,
  Sparkles,
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="overflow-hidden bg-[#11120f] text-[#f3efe7]"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c8aa7c]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c8aa7c]">
                Hotel Amenities
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-[clamp(3.8rem,7.5vw,8rem)] font-medium leading-[0.82] tracking-[-0.07em]"
            >
              Stay
              <br />
              <span className="font-serif font-normal italic text-[#d8c19b]">
                comfortably.
              </span>
            </motion.h2>
          </div>

          <div className="max-w-md md:pb-2">
            <p className="text-[15px] leading-7 text-white/55 md:text-[17px] md:leading-8">
              Everything around you has been considered — from the first
              coffee of the morning to evenings beside the fire.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO AMENITY
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        <div className="relative overflow-hidden">
          <div className="relative aspect-[16/9] min-h-[520px] md:aspect-[16/8] lg:min-h-[680px]">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90"
              alt="Mountain landscape surrounding The Hillview"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            {/* Top label */}
            <div className="absolute left-6 top-6 md:left-9 md:top-9">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d8c19b]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 md:text-[11px]">
                  Signature amenity
                </span>
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute inset-x-6 bottom-7 md:inset-x-9 md:bottom-9 lg:inset-x-12 lg:bottom-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8c19b]">
                    <Mountain size={16} strokeWidth={1.3} />
                    01 / Mountain Views
                  </div>

                  <h3 className="max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.84] tracking-[-0.065em] text-white">
                    The mountains
                    <br />
                    <span className="font-serif font-normal italic text-[#e2cca7]">
                      are part of the stay.
                    </span>
                  </h3>
                </div>

                <div className="max-w-xs border-l border-white/30 pl-5">
                  <p className="text-[13px] leading-6 text-white/65 md:text-sm">
                    Open views across the surrounding hills from your room,
                    terrace, and shared spaces throughout the property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ESSENTIAL AMENITIES
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c8aa7c]">
              The essentials
            </div>

            <h3 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
              Everything
              <br />
              <span className="font-serif font-normal italic text-[#d8c19b]">
                within reach.
              </span>
            </h3>
          </div>

          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-white/25 md:block">
            02 — 05
          </span>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {amenities.slice(1, 5).map((item, index) => {
            const Icon = icons[index + 1] ?? Coffee;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                }}
                className="group relative min-h-[310px] bg-[#151612] p-7 transition-colors duration-500 hover:bg-[#1b1c18] md:min-h-[350px] md:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#c8aa7c]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#c8aa7c]/60 group-hover:bg-[#c8aa7c]/10">
                    <Icon
                      size={19}
                      strokeWidth={1.2}
                      className="text-white/50 transition-colors duration-500 group-hover:text-[#c8aa7c]"
                    />
                  </div>
                </div>

                <div className="mt-20 md:mt-24">
                  <h4 className="text-[27px] font-medium tracking-[-0.04em] md:text-[32px]">
                    {item.title}
                  </h4>

                  <p className="mt-4 max-w-md text-[14px] leading-7 text-white/45 md:text-[15px]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-7 right-7 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:bottom-10 md:right-10">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                    className="text-[#c8aa7c]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          EXPERIENCE STRIP
      ====================================================== */}
      <div className="border-y border-white/10 bg-[#0d0e0c]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            {/* Image */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1800&q=90"
                alt="Evening fire experience at The Hillview"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

              <div className="absolute bottom-7 left-7 md:bottom-9 md:left-9">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8c19b]">
                  <Flame size={16} strokeWidth={1.3} />
                  Evenings at The Hillview
                </div>

                <div className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
                  Around the fire.
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-7 md:p-10 lg:p-14">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8aa7c]">
                  More than the room
                </div>

                <h3 className="mt-5 max-w-xl text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                  Slow down.
                  <br />
                  <span className="font-serif font-normal italic text-[#d8c19b]">
                    Stay awhile.
                  </span>
                </h3>

                <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/45 md:text-base md:leading-8">
                  Private dining, bonfire evenings, reliable Wi-Fi, daily
                  housekeeping, and a team available throughout your stay.
                  Everything you need, without unnecessary fuss.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 border-y border-white/10">
                <div className="border-r border-white/10 py-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Service
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-[15px] text-white/70">
                    <House size={16} strokeWidth={1.2} />
                    Thoughtful hospitality
                  </div>
                </div>

                <div className="py-6 pl-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Practical
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-[15px] text-white/70">
                    <Wifi size={16} strokeWidth={1.2} />
                    High-speed Wi-Fi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Parking */}
          <div className="group border border-white/10 p-7 transition-colors duration-500 hover:bg-[#171814] md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
                <Car
                  size={19}
                  strokeWidth={1.2}
                  className="text-[#c8aa7c]"
                />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                08
              </span>
            </div>

            <h4 className="mt-14 text-[25px] font-medium tracking-[-0.035em] md:text-[30px]">
              Private Parking
            </h4>

            <p className="mt-4 max-w-lg text-[14px] leading-7 text-white/40 md:text-[15px]">
              Convenient on-property parking keeps arrival and departure
              simple from the moment you reach the hills.
            </p>
          </div>

          {/* Dining */}
          <div className="group border border-white/10 p-7 transition-colors duration-500 hover:bg-[#171814] md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
                <Utensils
                  size={19}
                  strokeWidth={1.2}
                  className="text-[#c8aa7c]"
                />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                09
              </span>
            </div>

            <h4 className="mt-14 text-[25px] font-medium tracking-[-0.035em] md:text-[30px]">
              Thoughtful Service
            </h4>

            <p className="mt-4 max-w-lg text-[14px] leading-7 text-white/40 md:text-[15px]">
              Our team is available throughout your stay to help arrange
              meals, experiences, transport, and the details around your
              visit.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          INCLUDED STRIP
      ====================================================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 lg:px-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Sparkles
                size={14}
                strokeWidth={1.2}
                className="text-[#c8aa7c]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Included with your stay
              </span>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">
              <span>Breakfast</span>
              <span>Housekeeping</span>
              <span>Wi-Fi</span>
              <span>Parking</span>
              <span>Common Areas</span>
            </div>

            <a
              href="#rooms"
              className="group flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
            >
              Explore rooms

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}