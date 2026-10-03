"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Users,
} from "lucide-react";
import { bookingDefaults, bookingOptions, rooms } from "../data";

export default function BookingCTA() {
  const [checkIn, setCheckIn] = useState("2026-10-12");
  const [checkOut, setCheckOut] = useState("2026-10-15");
  const [guests, setGuests] = useState(bookingDefaults.guests);
  const [roomName, setRoomName] = useState(bookingDefaults.room);
  const [submitted, setSubmitted] = useState(false);

  const selectedRoom =
    rooms.find((room) => room.name === roomName) ?? rooms[0];

  const nights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference =
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    return difference > 0 ? Math.round(difference) : 0;
  }, [checkIn, checkOut]);

  const total = nights * Number(selectedRoom.price.replace(/[₹,]/g, ""));

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="overflow-hidden bg-[#171814] text-[#f3efe7]"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c8aa7c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c8aa7c]">
                Reservations / 09
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(3.2rem,6.5vw,7rem)] font-light leading-[0.86] tracking-[-0.06em]">
              Your room
              <br />
              <em className="font-serif text-[#d8c19b]">
                is waiting.
              </em>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-white/50 md:text-base md:leading-8">
              Choose your dates, select your room, and send us a reservation
              request. Our team will confirm availability and take care of the
              details before your arrival.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/30">
              <span>Direct Reservation</span>
              <span>Breakfast Included</span>
              <span>Personalised Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOOKING PANEL
      ====================================================== */}
      <div className="border-y border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* FORM */}
            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              <div className="grid md:grid-cols-2">
                {/* Check in */}
                <label className="border-b border-white/10 p-5 sm:p-6 md:border-r md:p-8">
                  <span className="mb-4 flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                    <CalendarDays
                      size={14}
                      strokeWidth={1.2}
                      className="text-[#c8aa7c]"
                    />
                    Check-in
                  </span>

                  <input
                    type="date"
                    value={checkIn}
                    onChange={(event) => {
                      setCheckIn(event.target.value);
                      setSubmitted(false);
                    }}
                    className="w-full bg-transparent min-w-0 w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]"
                  />
                </label>

                {/* Check out */}
                <label className="border-b border-white/10 p-5 sm:p-6 md:p-8">
                  <span className="mb-4 flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                    <CalendarDays
                      size={14}
                      strokeWidth={1.2}
                      className="text-[#c8aa7c]"
                    />
                    Check-out
                  </span>

                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(event) => {
                      setCheckOut(event.target.value);
                      setSubmitted(false);
                    }}
                    className="w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]"
                  />
                </label>

                {/* Guests */}
                <label className="relative border-b border-white/10 p-6 md:border-r md:p-8">
                  <span className="mb-4 flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-white/30">
                    <Users
                      size={14}
                      strokeWidth={1.2}
                      className="text-[#c8aa7c]"
                    />
                    Guests
                  </span>

                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(event) => {
                        setGuests(event.target.value);
                        setSubmitted(false);
                      }}
                      className="w-full appearance-none bg-transparent pr-8 text-sm text-white outline-none"
                    >
                      {bookingOptions.guestOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-[#171814] text-white"
                        >
                          {option}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={14}
                      strokeWidth={1.2}
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/30"
                    />
                  </div>
                </label>

                {/* Room */}
                <label className="relative border-b border-white/10 p-6 md:p-8">
                  <span className="mb-4 block text-[8px] uppercase tracking-[0.22em] text-white/30">
                    Room
                  </span>

                  <div className="relative">
                    <select
                      value={roomName}
                      onChange={(event) => {
                        setRoomName(event.target.value);
                        setSubmitted(false);
                      }}
                      className="w-full appearance-none bg-transparent pr-8 text-sm text-white outline-none"
                    >
                      {bookingOptions.roomOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-[#171814] text-white"
                        >
                          {option}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={14}
                      strokeWidth={1.2}
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/30"
                    />
                  </div>
                </label>
              </div>

              {/* Submit */}
              <div className="p-6 md:p-8">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={nights <= 0}
                  className="flex w-full items-center justify-between gap-5 bg-[#c8aa7c] px-5 py-5 text-left sm:px-6 text-[#171712] transition-all duration-300 hover:bg-[#e0c59b] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span>
                    <span className="block text-[9px] uppercase tracking-[0.2em]">
                      {nights > 0
                        ? "Request to book"
                        : "Select valid dates"}
                    </span>

                    <span className="mt-1 block text-xs text-black/55">
                      {nights > 0
                        ? `${nights} ${
                            nights === 1 ? "night" : "nights"
                          } · ${selectedRoom.name}`
                        : "Check-out must be after check-in"}
                    </span>
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center border border-black/20">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.3}
                    />
                  </span>
                </button>

                {submitted && nights > 0 && (
                  <div className="mt-4 flex items-start gap-3 border border-[#c8aa7c]/30 bg-[#c8aa7c]/5 p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8aa7c] text-[#171712]">
                      <Check size={13} strokeWidth={1.7} />
                    </span>

                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[#d8c19b]">
                        Request received
                      </div>

                      <p className="mt-2 text-xs leading-5 text-white/45">
                        This is a front-end booking demonstration. A
                        production version would connect this request to the
                        hotel's reservation system or booking platform.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SUMMARY */}
            <div className="bg-[#1d1e19] p-6 sm:p-7 md:p-10 lg:p-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                  Stay Summary
                </span>

                <span className="text-[8px] uppercase tracking-[0.18em] text-[#c8aa7c]">
                  Direct Booking
                </span>
              </div>

              <div className="mt-8">
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Selected Room
                </div>

                <div className="mt-2 text-2xl font-light tracking-[-0.03em]">
                  {selectedRoom.name}
                </div>

                <div className="mt-1 text-xs text-white/35">
                  {selectedRoom.type}
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 border-y border-white/10">
                <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r">
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    Guests
                  </div>

                  <div className="mt-2 text-sm text-white/70">
                    {guests}
                  </div>
                </div>

                <div className="py-5 sm:pl-5">
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    Stay
                  </div>

                  <div className="mt-2 text-sm text-white/70">
                    {nights > 0
                      ? `${nights} ${
                          nights === 1 ? "Night" : "Nights"
                        }`
                      : "—"}
                  </div>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/35">
                    {selectedRoom.price} × {nights || 0}{" "}
                    {nights === 1 ? "night" : "nights"}
                  </span>

                  <span className="text-white/65">
                    {nights > 0
                      ? formatCurrency(total)
                      : "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/35">
                    Breakfast
                  </span>

                  <span className="text-[#c8aa7c]">
                    Included
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    Estimated stay
                  </div>

                  <div className="mt-2 text-3xl font-light tracking-[-0.04em]">
                    {nights > 0
                      ? formatCurrency(total)
                      : "—"}
                  </div>
                </div>

                <div className="text-right text-[8px] uppercase leading-5 tracking-[0.18em] text-white/25">
                  Taxes may apply
                  <br />
                  Final confirmation required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          HOTEL INFORMATION
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:px-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border-t border-white/10 pt-5">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Check-in
            </div>

            <div className="mt-2 text-sm text-white/65">
              From 14:00
            </div>
          </div>

          <div className="border-t border-white/10 pt-5">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Check-out
            </div>

            <div className="mt-2 text-sm text-white/65">
              By 11:00
            </div>
          </div>

          <div className="border-t border-white/10 pt-5">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Reservation support
            </div>

            <div className="mt-2 text-sm text-white/65">
              Available before your stay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}