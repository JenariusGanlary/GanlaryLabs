"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  Clock3,
  MapPin,
  Mountain,
} from "lucide-react";
import { location } from "../data";

const arrivalDetails = [
  {
    label: "Nearest Town",
    value: location.surroundings[0]?.value ?? "Sagalee",
    icon: MapPin,
  },
  {
    label: "Setting",
    value: location.surroundings[1]?.value ?? "Mountain Hills",
    icon: Mountain,
  },
  {
    label: "Elevation",
    value: location.surroundings[2]?.value ?? "4,900 ft",
    icon: Mountain,
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="overflow-hidden bg-[#e9e4d9] text-[#171713]"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9b7950]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8a6b47]">
                {location.eyebrow}
              </span>
            </div>

            <h2 className="max-w-2xl text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.87] tracking-[-0.06em]">
              {location.title}
              <br />
              <em className="font-serif text-[#9b7950]">
                {location.titleAccent}
              </em>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-black/55 md:text-base md:leading-8">
              {location.description}
            </p>

            <div className="mt-8 flex items-start gap-3 border-t border-black/10 pt-5">
              <MapPin
                size={15}
                strokeWidth={1.2}
                className="mt-0.5 shrink-0 text-[#9b7950]"
              />

              <div>
                <div className="text-[8px] uppercase tracking-[0.22em] text-black/35">
                  Property Address
                </div>

                <div className="mt-2 text-sm text-black/65">
                  {location.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURED LOCATION IMAGE
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, scale: 1.025 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1 }}
          className="group relative min-h-[460px] overflow-hidden md:min-h-[620px]"
        >
          <img
            src={location.image}
            alt="Mountain landscape surrounding The Hillview"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-7 left-7 right-7 flex flex-col gap-6 md:bottom-9 md:left-9 md:right-9 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl text-white">
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                Arunachal Pradesh
              </div>

              <h3 className="mt-3 text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
                Close to the landscape.
                <br />
                Away from the noise.
              </h3>
            </div>

            <div className="w-fit border border-white/20 bg-black/20 px-5 py-4 backdrop-blur-sm">
              <div className="text-[8px] uppercase tracking-[0.2em] text-white/45">
                Elevation
              </div>

              <div className="mt-1 text-lg font-light text-white">
                {location.elevation}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          ARRIVAL INFORMATION
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          {/* Arrival intro */}
          <div>
            <div className="flex items-center gap-3">
              <Car
                size={15}
                strokeWidth={1.2}
                className="text-[#9b7950]"
              />

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8a6b47]">
                Getting here
              </span>
            </div>

            <h3 className="mt-7 max-w-sm text-3xl font-light leading-tight tracking-[-0.04em] md:text-4xl">
              The journey is
              <br />
              part of the stay.
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
              The Hillview is intentionally removed from the pace of the
              city. Our team can help arrange directions, local transport,
              and arrival assistance before your stay.
            </p>

            <a
              href="#booking"
              className="mt-7 flex w-fit items-center gap-3 bg-[#171713] px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-[#f3efe7] transition-all duration-300 hover:bg-[#8a6b47]"
            >
              Plan your arrival
              <ArrowUpRight size={14} strokeWidth={1.3} />
            </a>
          </div>

          {/* Details */}
          <div>
            <div className="grid border-t border-black/10 sm:grid-cols-3">
              {arrivalDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border-b border-black/10 py-7 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tracking-[0.2em] text-[#9b7950]">
                        0{index + 1}
                      </span>

                      <Icon
                        size={15}
                        strokeWidth={1.2}
                        className="text-black/25"
                      />
                    </div>

                    <div className="mt-8">
                      <div className="text-[8px] uppercase tracking-[0.22em] text-black/35">
                        {item.label}
                      </div>

                      <div className="mt-2 text-sm text-black/65">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Travel note */}
            <div className="mt-8 border border-black/10 bg-[#dfd8cb] p-6 md:p-7">
              <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-black/35">
                <Clock3 size={14} strokeWidth={1.2} />
                Arrival information
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">
                Exact driving directions and recommended arrival routes are
                shared with guests before check-in. If you are travelling
                from outside the region, our team can also help coordinate
                the final part of your journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ADDRESS STRIP
      ====================================================== */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div>
            <div className="text-[8px] uppercase tracking-[0.25em] text-black/30">
              The Hillview
            </div>

            <div className="mt-1 text-xs text-black/55">
              {location.address}
            </div>
          </div>

          <a
            href="#booking"
            className="group flex w-fit items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#8a6b47]"
          >
            Reserve your stay

            <span className="flex h-8 w-8 items-center justify-center border border-[#9b7950]/40 transition-all duration-300 group-hover:bg-[#9b7950] group-hover:text-white">
              <ArrowUpRight size={13} strokeWidth={1.3} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}