"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  MapPin,
  Mountain,
  Sparkles,
} from "lucide-react";

const propertyDetails = [
  {
    label: "Location",
    value: "Arunachal Pradesh",
    icon: MapPin,
  },
  {
    label: "Elevation",
    value: "4,900 ft",
    icon: Mountain,
  },
  {
    label: "Accommodation",
    value: "3 Room Categories",
    icon: BedDouble,
  },
  {
    label: "Setting",
    value: "Private Mountain Retreat",
    icon: Sparkles,
  },
];

export default function Intro() {
  return (
    <section
      id="property"
      className="overflow-hidden bg-[#11120f] text-[#f1eee6]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
          {/* Section label */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c8aa7c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8aa7c]">
                The Property / 02
              </span>
            </div>

            <div className="mt-8 hidden max-w-xs lg:block">
              <p className="text-[11px] font-medium uppercase leading-6 tracking-[0.14em] text-white/35">
                A boutique mountain retreat with thoughtfully designed rooms,
                local dining, and views across the surrounding hills.
              </p>
            </div>
          </div>

          {/* Main introduction */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-[clamp(2.9rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]"
            >
              A mountain retreat
              <br />
              <span className="font-serif font-normal italic text-[#d8c4a8]">
                made for staying.
              </span>
            </motion.h2>

            <div className="mt-9 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
              <p className="max-w-2xl text-[15px] leading-7 text-white/60 md:text-base md:leading-8">
                Set among the hills of Arunachal Pradesh, The Hillview is a
                small boutique retreat where comfortable rooms, mountain
                views, local food, and thoughtful hospitality come together in
                one place.
              </p>

              <div className="border-l border-white/10 pl-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8aa7c]">
                  Stay at The Hillview
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                  Choose from our rooms and private cabin, then make your stay
                  your own with dining and experiences arranged at the
                  property.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Property image */}
        <div className="mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.025 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="group relative aspect-[16/8] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=90"
              alt="The Hillview mountain cabin surrounded by forest"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10" />

            {/* Image information */}
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between md:inset-x-8 md:bottom-8">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d8c4a8]">
                  The Hillview
                </div>

                <div className="mt-2 text-xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                  Your mountain stay starts here.
                </div>
              </div>

              <div className="hidden items-center gap-3 border border-white/20 bg-black/20 px-4 py-3 backdrop-blur-md md:flex">
                <Mountain
                  size={15}
                  strokeWidth={1.3}
                  className="text-[#c8aa7c]"
                />

                <div>
                  <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Elevation
                  </div>

                  <div className="mt-1 text-xs font-medium text-white/80">
                    4,900 ft
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Property details */}
        <div className="grid border-x border-b border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {propertyDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`group p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:p-7 lg:border-r ${
                  index === propertyDetails.length - 1
                    ? "lg:border-r-0"
                    : "border-white/10"
                } ${
                  index < 2 ? "border-b border-white/10 sm:border-b-0" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.16em] text-[#c8aa7c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    size={17}
                    strokeWidth={1.3}
                    className="text-white/25 transition-colors duration-300 group-hover:text-[#c8aa7c]"
                  />
                </div>

                <div className="mt-7">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    {item.label}
                  </div>

                  <div className="mt-2 text-[15px] font-medium text-white/75">
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stay proposition */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa7c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Everything you need for your stay
              </span>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
              Rooms, dining, experiences, and the essentials — thoughtfully
              arranged so you can spend more time enjoying the hills.
            </p>
          </div>

          <a
            href="#rooms"
            className="group flex w-fit shrink-0 items-center gap-3 border border-white/15 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-all duration-300 hover:border-[#c8aa7c] hover:bg-[#c8aa7c] hover:text-[#171712]"
          >
            View Rooms

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}