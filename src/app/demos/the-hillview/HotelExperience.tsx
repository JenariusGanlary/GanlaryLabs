"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import {
  bookingOptions,
  dining,
  experiences,
  galleryImages,
  hillview,
  rooms,
} from "./data";

const navItems = [
  ["Rooms", "#rooms"],
  ["Dining", "#dining"],
  ["Experiences", "#experiences"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
];

export default function HotelExperience() {
  const [menu, setMenu] = useState(false);
  const [guests, setGuests] = useState("2 Adults");
  const [activeRoom, setActiveRoom] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f0e7] text-[#16241d]">
      <header className="absolute inset-x-0 top-0 z-50 text-white">
        <a
          href="/demos"
          className="fixed left-3 top-3 z-[80] inline-flex items-center gap-2 border border-white/25 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[.16em] backdrop-blur-md transition hover:bg-white hover:text-[#142b23] sm:left-5 sm:top-5"
        >
          <span aria-hidden="true">←</span> Back to demos
        </a>

        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-serif text-[18px] tracking-[-.04em] sm:text-[22px]">
            THE HILLVIEW
          </a>

          <nav className="hidden items-center gap-8 text-[8px] font-semibold uppercase tracking-[.15em] lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition-opacity hover:opacity-60">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#booking"
              className="hidden bg-white px-5 py-3 text-[8px] font-bold uppercase tracking-[.14em] text-[#142b23] sm:block"
            >
              Book a stay
            </a>
            <button
              onClick={() => setMenu(!menu)}
              className="flex h-9 w-9 items-center justify-center border border-white/30 bg-black/15 backdrop-blur-md lg:hidden"
              aria-label="Open menu"
            >
              {menu ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-[70] bg-[#f4f0e7] px-6 pt-24 text-[#16241d] transition duration-300 lg:hidden ${menu ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
        >
          <div className="flex items-end justify-between border-b border-black/10 pb-5">
            <span className="font-serif text-4xl">THE HILLVIEW</span>
            <span className="text-[8px] uppercase tracking-[.15em] text-black/40">Menu</span>
          </div>
          <div>
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenu(false)}
                className="flex items-center justify-between border-b border-black/10 py-5 font-serif text-2xl"
              >
                {label}
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="relative min-h-[700px] overflow-hidden bg-[#172019] text-white sm:min-h-[760px] lg:min-h-[820px]">
        <img
          src={hillview.heroImage}
          alt="Mountain landscape surrounding The Hillview"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/65 to-transparent" />

        <div className="relative mx-auto flex min-h-[700px] max-w-[1440px] flex-col justify-end px-5 pb-5 pt-32 sm:min-h-[760px] sm:px-8 sm:pb-8 lg:min-h-[820px] lg:px-12">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[.2em] text-white/75">
              <span className="h-px w-7 bg-white/70" />
              Arunachal Pradesh · 4,900 ft
            </div>
            <h1 className="mt-5 max-w-[700px] font-serif text-[clamp(3.8rem,8vw,7.7rem)] leading-[.8] tracking-[-.065em]">
              A More
              <br />
              <em className="font-normal">Considered Escape.</em>
            </h1>
            <p className="mt-6 max-w-[390px] text-[11px] leading-5 text-white/75 sm:text-[13px]">
              A private mountain retreat surrounded by pine forests, quiet valleys, and the slower rhythm of the hills.
            </p>
          </div>

          <div className="mt-8 w-full max-w-[900px] bg-[#f8f5ee] text-[#16241d] shadow-[0_18px_50px_rgba(0,0,0,.25)]">
            <div className="grid sm:grid-cols-[1fr_1fr_.75fr_auto]">
              <label className="border-b border-black/10 p-4 sm:border-b-0 sm:border-r">
                <span className="block text-[7px] font-semibold uppercase tracking-[.15em] text-black/40">Check in</span>
                <input type="date" defaultValue="2026-10-12" className="mt-2 w-full bg-transparent text-[11px] outline-none" />
              </label>
              <label className="border-b border-black/10 p-4 sm:border-b-0 sm:border-r">
                <span className="block text-[7px] font-semibold uppercase tracking-[.15em] text-black/40">Check out</span>
                <input type="date" defaultValue="2026-10-15" className="mt-2 w-full bg-transparent text-[11px] outline-none" />
              </label>
              <label className="border-b border-black/10 p-4 sm:border-b-0 sm:border-r">
                <span className="block text-[7px] font-semibold uppercase tracking-[.15em] text-black/40">Guests</span>
                <span className="relative block">
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="mt-2 w-full appearance-none bg-transparent text-[11px] outline-none"
                  >
                    {bookingOptions.guestOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                  <ChevronDown size={11} className="pointer-events-none absolute right-0 top-2 text-black/40" />
                </span>
              </label>
              <a
                href="#rooms"
                className="flex min-h-[58px] items-center justify-center bg-[#142b23] px-6 text-[8px] font-bold uppercase tracking-[.14em] text-white transition hover:bg-[#244438]"
              >
                Check availability
              </a>
            </div>
          </div>

          <div className="mt-4 flex max-w-[900px] justify-between text-[7px] uppercase tracking-[.16em] text-white/55">
            <span>Upper Hills · Arunachal Pradesh</span>
            <span className="hidden sm:block">Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-[#f4f0e7] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between border-b border-black/10 pb-4">
            <div>
              <div className="text-[8px] uppercase tracking-[.18em] text-black/40">The Hillview / 01</div>
              <h2 className="mt-2 font-serif text-[2.3rem] leading-none tracking-[-.045em] sm:text-5xl lg:text-6xl">Featured Rooms</h2>
            </div>
            <a href="#booking" className="hidden text-[8px] font-semibold uppercase tracking-[.14em] text-black/50 sm:block">
              View all rooms →
            </a>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {rooms.map((room, index) => (
              <button
                key={room.name}
                onClick={() => setActiveRoom(index)}
                className="group text-left"
                aria-label={`View ${room.name}`}
              >
                <div className={`relative aspect-[1.25] overflow-hidden bg-black ${activeRoom === index ? "ring-2 ring-[#c7ad7f] ring-offset-2 ring-offset-[#f4f0e7]" : ""}`}>
                  <img src={room.image} alt={room.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[7px] font-semibold uppercase tracking-[.15em] text-white/80">{room.number}</span>
                </div>
                <div className="mt-2.5 flex justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-[19px] leading-none">{room.name.replace("The ", "")}</h3>
                    <p className="mt-1 text-[8px] uppercase tracking-[.08em] text-black/45">{room.type} · {room.guests}</p>
                  </div>
                  <span className="whitespace-nowrap text-[8px] text-black/45">from {room.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ded8cc] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 lg:grid-cols-[.48fr_.52fr] lg:items-end">
            <div>
              <div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">A place to slow down / 02</div>
              <h2 className="mt-3 font-serif text-[clamp(3.1rem,6vw,6.3rem)] leading-[.82] tracking-[-.06em]">
                Quiet rooms.
                <br />
                <em className="font-normal text-[#536c5d]">Long mornings.</em>
              </h2>
            </div>
            <p className="max-w-[360px] text-[10px] leading-5 text-black/50 lg:pb-1">
              Designed around the landscape, The Hillview gives you space to disconnect, breathe, and spend a little longer outside.
            </p>
          </div>
          <div className="mt-7 overflow-hidden">
            <img src={galleryImages[0].src} alt="The Hillview in the mountains" className="aspect-[1.65] w-full object-cover sm:aspect-[2.15]" />
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-[#102a21] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[8px] uppercase tracking-[.18em] text-[#c8aa7c]">Experiences / 03</div>
              <h2 className="mt-3 font-serif text-[3.1rem] leading-[.84] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                The hills,
                <br />
                <em className="font-normal text-[#d8c39e]">your way.</em>
              </h2>
            </div>
            <span className="hidden text-[7px] uppercase tracking-[.16em] text-white/35 sm:block">Slow days / Open skies</span>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-4">
            {experiences.map((experience) => (
              <article key={experience.title}>
                <div className="aspect-[.72] overflow-hidden">
                  <img src={experience.image} alt={experience.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="mt-2 text-[6px] uppercase tracking-[.13em] text-white/40 sm:text-[7px]">
                  {experience.number} · {experience.duration}
                </div>
                <h3 className="mt-1 font-serif text-[15px] leading-none sm:text-2xl">{experience.title}</h3>
                <p className="mt-1.5 hidden text-[9px] leading-4 text-white/40 sm:block">{experience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dining" className="bg-[#f4f0e7] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 lg:grid-cols-[.4fr_.6fr] lg:items-center">
            <div>
              <div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">Dining / 04</div>
              <h2 className="mt-3 font-serif text-[clamp(3.1rem,6vw,6.3rem)] leading-[.82] tracking-[-.06em]">
                Food that
                <br />
                <em className="font-normal text-[#536c5d]">belongs here.</em>
              </h2>
              <p className="mt-5 max-w-[360px] text-[10px] leading-5 text-black/50">{dining.description}</p>
              <div className="mt-5 border-t border-black/10">
                {dining.hours.map((hour) => (
                  <div key={hour.label} className="flex justify-between border-b border-black/10 py-2.5 text-[8px] uppercase tracking-[.1em]">
                    <span>{hour.label}</span>
                    <span className="text-black/40">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={dining.image} alt="Dining at The Hillview" className="aspect-[1.25] w-full object-cover sm:aspect-[1.45]" />
              <div className="absolute bottom-3 left-3 bg-[#f4f0e7] px-3 py-2.5 sm:bottom-5 sm:left-5">
                <div className="text-[6px] uppercase tracking-[.15em] text-black/40">At the table</div>
                <div className="mt-1 font-serif text-base sm:text-xl">Slow food. Long evenings.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#d9d2c5] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">Inside / 05</div>
              <h2 className="mt-3 font-serif text-[3.1rem] leading-[.82] tracking-[-.055em] sm:text-6xl">
                Inside
                <br />
                <em className="font-normal text-[#536c5d]">& around.</em>
              </h2>
            </div>
            <span className="hidden text-[7px] uppercase tracking-[.15em] text-black/35 sm:block">A visual record of the stay</span>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-1.5 sm:grid-cols-6 sm:gap-2">
            {galleryImages.slice(0, 8).map((image, index) => (
              <img
                key={image.src + index}
                src={image.src}
                alt={image.alt}
                className={`h-full min-h-[90px] w-full object-cover ${index === 0 || index === 4 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="bg-[#f4f0e7] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[.5fr_.5fr] lg:items-center">
          <div>
            <div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">Location / 06</div>
            <h2 className="mt-3 font-serif text-[clamp(3.2rem,6vw,6.3rem)] leading-[.82] tracking-[-.06em]">
              Far enough
              <br />
              <em className="font-normal text-[#536c5d]">to feel away.</em>
            </h2>
            <p className="mt-5 max-w-[370px] text-[10px] leading-5 text-black/50">{hillview.description} Set in the hills of Arunachal Pradesh, the retreat is a quieter base for forests, valleys, villages and long drives.</p>
            <div className="mt-5 grid grid-cols-3 border-y border-black/10 py-3 text-[7px] uppercase tracking-[.1em] text-black/45">
              <span>4,900 ft</span>
              <span>Private hills</span>
              <span>Sagalee</span>
            </div>
          </div>
          <img src={galleryImages[5].src} alt="Mountain landscape near The Hillview" className="aspect-[1.15] w-full object-cover" />
        </div>
      </section>

      <section id="booking" className="bg-[#102a21] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 lg:grid-cols-[.6fr_.4fr] lg:items-end">
            <div>
              <div className="text-[8px] uppercase tracking-[.18em] text-[#c8aa7c]">Reservations / 07</div>
              <h2 className="mt-3 font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[.8] tracking-[-.06em]">
                Stay a little
                <br />
                <em className="font-normal text-[#d8c39e]">longer.</em>
              </h2>
              <p className="mt-5 max-w-[350px] text-[10px] leading-5 text-white/40">A considered stay in the hills, designed around slower mornings and longer evenings.</p>
            </div>

            <div className="border border-white/15 bg-white/[.04] p-3">
              <div className="grid grid-cols-2 gap-2">
                <select className="min-w-0 bg-white/[.06] px-3 py-3 text-[8px] text-white outline-none">
                  {rooms.map((room) => <option key={room.name} className="bg-[#102a21]">{room.name}</option>)}
                </select>
                <select className="min-w-0 bg-white/[.06] px-3 py-3 text-[8px] text-white outline-none">
                  {bookingOptions.guestOptions.map((option) => <option key={option} className="bg-[#102a21]">{option}</option>)}
                </select>
              </div>
              <button
                onClick={() => setSubmitted(true)}
                className="mt-2 flex w-full items-center justify-between bg-[#e4d5b8] px-4 py-4 text-[8px] font-bold uppercase tracking-[.13em] text-[#16241d]"
              >
                Request a stay <ArrowUpRight size={14} />
              </button>
              {submitted && <div className="px-1 pt-2 text-[8px] text-white/40">Request received — demo interaction complete.</div>}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1712] px-5 py-9 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-serif text-4xl tracking-[-.05em] sm:text-5xl">THE HILLVIEW</div>
              <div className="mt-1.5 text-[7px] uppercase tracking-[.16em] text-white/30">Luxury stay in the heart of nature</div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-[7px] uppercase tracking-[.14em] text-white/40">
              {navItems.slice(0, 4).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </div>
          </div>
          <div className="mt-7 border-t border-white/10 pt-3 text-[7px] uppercase tracking-[.14em] text-white/20">
            Concept website / Built by Ganlary Labs · 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
