"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BedDouble,
  Check,
  Maximize2,
  Users,
} from "lucide-react";
import { rooms } from "../data";

export default function Rooms() {
  const [activeRoom, setActiveRoom] = useState(0);

  const room = rooms[activeRoom];

  return (
    <section id="rooms" className="bg-[#e9e4d9] text-[#171713]">
      {/* =========================
          SECTION INTRO
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          {/* Heading */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9b7950]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a6b47] md:text-[11px]">
                Accommodation
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(3.5rem,7vw,6.8rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Rooms
              <br />
              <em className="font-serif font-normal"> & suites.</em>
            </h2>
          </div>

          {/* Intro */}
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[15px] leading-7 text-black/60 md:text-[17px] md:leading-8">
              Choose from three thoughtfully designed spaces, each offering a
              different way to experience the mountains — from intimate rooms
              for two to a private cabin for longer stays.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-black/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/50 md:text-[11px] md:tracking-[0.16em]">
              <span>3 Room Types</span>
              <span>2–4 Guests</span>
              <span>Breakfast Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          ROOM SELECTOR
      ========================== */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            {/* Room list */}
            <div className="border-b border-black/10 lg:border-b-0 lg:border-r">
              <div className="border-b border-black/10 px-6 py-5 md:px-8">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Select your room
                </div>

                <div className="mt-1 text-[13px] text-black/45">
                  Explore accommodation options
                </div>
              </div>

              {rooms.map((item, index) => {
                const isActive = index === activeRoom;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveRoom(index)}
                    className={`group flex w-full items-start gap-4 border-b border-black/10 p-6 text-left transition-all duration-300 md:gap-5 md:p-8 ${
                      isActive
                        ? "bg-[#d9d2c4]"
                        : "bg-transparent hover:bg-[#e1dbcf]"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`pt-1 text-[10px] font-semibold tracking-[0.16em] ${
                        isActive ? "text-[#8a6b47]" : "text-black/30"
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-[10px] font-semibold uppercase tracking-[0.16em] md:text-[11px] ${
                          isActive ? "text-black/55" : "text-black/40"
                        }`}
                      >
                        {item.type}
                      </div>

                      <h3 className="mt-2 text-[22px] font-medium tracking-[-0.025em] md:text-[27px]">
                        {item.name}
                      </h3>

                      <div
                        className={`mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] md:text-[13px] ${
                          isActive ? "text-[#8a6b47]" : "text-black/35"
                        }`}
                      >
                        {item.price}
                        <span className="ml-1 font-normal">/ night</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      className={`mt-1 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#8a6b47]"
                          : "-translate-x-1 translate-y-1 text-black/20 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}

              {/* Includes */}
              <div className="hidden p-8 lg:block">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Every stay includes
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "Daily breakfast",
                    "Housekeeping",
                    "High-speed Wi-Fi",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[14px] leading-6 text-black/60"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/15">
                        <Check size={10} strokeWidth={1.6} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured room */}
            <div className="grid bg-[#d9d2c4] md:grid-cols-[1.12fr_0.88fr]">
              {/* Room image */}
              <div className="relative min-h-[380px] overflow-hidden md:min-h-[680px]">
                <img
                  key={room.image}
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                {/* Image overlay */}
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 md:text-[11px]">
                        {room.type}
                      </div>

                      <div className="mt-2 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[38px]">
                        {room.name}
                      </div>
                    </div>

                    <div className="hidden shrink-0 border border-white/25 bg-black/25 px-4 py-3 backdrop-blur-md sm:block">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                        From
                      </div>

                      <div className="mt-1 text-lg font-medium text-white">
                        {room.price}
                      </div>

                      <div className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-white/45">
                        per night
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                <div>
                  {/* Room label */}
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6b47] md:text-[11px]">
                    <span>{room.number}</span>
                    <span className="h-px w-6 bg-[#9b7950]" />
                    <span>Room Details</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[34px] font-medium leading-[0.95] tracking-[-0.05em] md:mt-6 md:text-[44px]">
                    {room.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-[15px] leading-7 text-black/60 md:mt-6 md:text-[16px] md:leading-8">
                    {room.description}
                  </p>

                  {/* Core specs */}
                  <div className="mt-8 grid grid-cols-2 border-y border-black/10">
                    <div className="border-r border-black/10 py-5 pr-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40 md:text-[11px]">
                        Guests
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-[15px] font-medium text-black/75 md:text-base">
                        <Users size={16} strokeWidth={1.4} />
                        {room.guests}
                      </div>
                    </div>

                    <div className="py-5 pl-5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40 md:text-[11px]">
                        Room size
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-[15px] font-medium text-black/75 md:text-base">
                        <Maximize2 size={15} strokeWidth={1.4} />
                        {room.size}
                      </div>
                    </div>
                  </div>

                  {/* Bed */}
                  <div className="mt-6">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40 md:text-[11px]">
                      Sleeping arrangement
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-[15px] font-medium text-black/75 md:text-base">
                      <BedDouble size={17} strokeWidth={1.4} />
                      {room.bed}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="border border-black/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/55 md:text-[11px]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking */}
                <div className="mt-10 border-t border-black/10 pt-6">
                  <div className="flex flex-col gap-5">
                    {/* Price */}
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40 md:text-[11px]">
                          Nightly rate
                        </div>

                        <div className="mt-1 text-[30px] font-medium tracking-[-0.035em] md:text-[34px]">
                          {room.price}
                        </div>

                        <div className="mt-1 text-[12px] text-black/45 md:text-[13px]">
                          Includes breakfast
                        </div>
                      </div>

                      <div className="hidden text-right sm:block">
                        <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                          Availability
                        </div>

                        <div className="mt-1 text-[11px] font-medium text-black/55">
                          Check your dates
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#booking"
                      className="group inline-flex w-full items-center justify-center gap-3 bg-[#b58b57] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#171713] transition-all duration-300 hover:bg-[#9b7950] hover:text-[#f3efe7] md:py-[18px] md:text-[12px]"
                    >
                      Check availability for this room

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE INCLUDES
      ========================== */}
      <div className="border-t border-black/10 lg:hidden">
        <div className="mx-auto max-w-[1500px] px-6 py-9 md:px-10">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 md:text-[11px]">
            Every stay includes
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              "Daily breakfast",
              "Housekeeping",
              "High-speed Wi-Fi",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[14px] leading-6 text-black/60"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/15">
                  <Check size={10} strokeWidth={1.6} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}