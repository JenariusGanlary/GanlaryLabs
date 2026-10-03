"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DemosHero from "@/components/DemosHero";
import Navbar from "@/components/Navbar";

const demos = [
  {
    number: "01",
    name: "The Hillview",
    type: "Boutique Hotel / Mountain Retreat",
    description:
      "A premium hotel website concept focused on rooms, availability, dining, experiences, and direct bookings.",
    href: "/demos/the-hillview",
    status: "Live Concept",
  },
];

export default function DemosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0c0b] text-[#f3efe7]">
      <Navbar />


      <section className="relative border-b border-white/10 pt-20 sm:pt-24 md:pt-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#c8aa7c]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8aa7c]">
                  Selected Concepts
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]">
                Websites
                <br />
                <span className="font-serif font-normal italic text-[#d8c19b]">
                  built to sell.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end lg:pb-2">
              <p className="text-[15px] leading-7 text-white/45 md:text-base md:leading-8">
                A collection of interface concepts built around real business
                needs — designed to look exceptional, communicate clearly,
                and turn attention into action.
              </p>

              <div className="mt-7 flex items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                <span>Hotels</span>
                <span>Restaurants</span>
                <span>Healthcare</span>
                <span className="hidden sm:inline">Property</span>
              </div>
            </div>
          </div>
        </div>

        <DemosHero />
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c8aa7c]">
                Available concepts
              </div>
              <h2 className="mt-3 text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                Explore the work.
              </h2>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/25">
              {demos.length.toString().padStart(2, "0")} / 06 concepts
            </span>
          </div>

          {demos.map((demo) => (
            <Link
              key={demo.number}
              href={demo.href}
              className="group block border-y border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.025] md:py-12"
            >
              <div className="grid gap-7 lg:grid-cols-[90px_1fr_auto] lg:items-center">
                <div className="text-[10px] font-semibold tracking-[0.2em] text-[#c8aa7c]">
                  {demo.number}
                </div>

                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    {demo.type}
                  </div>

                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                    {demo.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
                    {demo.description}
                  </p>
                </div>

                <div className="flex items-center gap-5 lg:justify-self-end">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                    {demo.status}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-[#c8aa7c] group-hover:bg-[#c8aa7c] group-hover:text-[#171712]">
                    <ArrowUpRight size={16} strokeWidth={1.4} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1500px] flex-col gap-5 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
          Ganlary Labs
        </span>

        <Link
          href="/"
          className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
        >
          Back to Studio
        </Link>
      </footer>
    </main>
  );
}
