"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    number: "01",
    type: "Hotel",
    name: "The Hillview",
    href: "/demos/the-hillview",
    theme: "light",
    title: "Stay above",
    accent: "the clouds.",
  },
  {
    number: "02",
    type: "Restaurant",
    name: "Ember House",
    href: "#",
    theme: "dark",
    title: "Good food.",
    accent: "Good company.",
  },
  {
    number: "03",
    type: "Clinic",
    name: "Northline Health",
    href: "#",
    theme: "green",
    title: "Healthcare",
    accent: "made human.",
  },
  {
    number: "04",
    type: "Real Estate",
    name: "Arc House",
    href: "#",
    theme: "black",
    title: "Spaces",
    accent: "worth living in.",
  },
  {
    number: "05",
    type: "Salon",
    name: "Morrow",
    href: "#",
    theme: "rose",
    title: "A slower",
    accent: "kind of beauty.",
  },
  {
    number: "06",
    type: "Education",
    name: "Northstar",
    href: "#",
    theme: "blue",
    title: "Build what",
    accent: "comes next.",
  },
];

const palette: Record<string, { surface: string; text: string; accent: string; media: string }> = {
  light: {
    surface: "#e8e1d5",
    text: "#191814",
    accent: "#a47b4d",
    media: "linear-gradient(135deg,#677263,#9b9a7c 52%,#d0c3a1)",
  },
  dark: {
    surface: "#181512",
    text: "#f2e9dd",
    accent: "#d29a69",
    media: "linear-gradient(135deg,#3b2e26,#765842 50%,#b48760)",
  },
  green: {
    surface: "#e6ece9",
    text: "#17302b",
    accent: "#5b8d7d",
    media: "linear-gradient(135deg,#9db6ad,#d0ddd7 55%,#71988d)",
  },
  black: {
    surface: "#181818",
    text: "#f3f3ef",
    accent: "#aaa79c",
    media: "linear-gradient(135deg,#85847c,#4e504d 50%,#242524)",
  },
  rose: {
    surface: "#eee6df",
    text: "#2c2724",
    accent: "#9b7460",
    media: "linear-gradient(135deg,#b99989,#d5beb1 52%,#927365)",
  },
  blue: {
    surface: "#151a24",
    text: "#edf2f8",
    accent: "#8da7d2",
    media: "linear-gradient(135deg,#26334b,#637da9 55%,#17202f)",
  },
};

function DesignCard({ card }: { card: (typeof cards)[number] }) {
  const colors = palette[card.theme];

  return (
    <Link
      href={card.href}
      className="group block w-[260px] shrink-0 sm:w-[310px] lg:w-[340px]"
    >
      <div
        className="relative aspect-[1.28/1] overflow-hidden border border-white/10 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
        style={{ backgroundColor: colors.surface }}
      >
        <div className="relative h-full overflow-hidden" style={{ color: colors.text }}>
          <div className="absolute inset-0 opacity-70" style={{ background: colors.media }} />

          <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-current/10 pb-3">
              <span className="text-[7px] font-bold uppercase tracking-[0.2em]">
                {card.name}
              </span>
              <span className="text-[6px] font-semibold uppercase tracking-[0.16em] opacity-45">
                {card.type}
              </span>
            </div>

            <div className="mt-auto">
              <div
                className="mb-3 h-20 w-full opacity-70 sm:h-24"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,.18), rgba(0,0,0,.15))",
                  backdropFilter: "blur(2px)",
                }}
              />

              <div className="text-[25px] font-medium leading-[0.8] tracking-[-0.065em] sm:text-[29px]">
                {card.title}
                <br />
                <span className="font-serif italic" style={{ color: colors.accent }}>
                  {card.accent}
                </span>
              </div>

              <div className="mt-4 flex gap-1">
                <span className="h-1 w-12 rounded-full" style={{ backgroundColor: colors.accent }} />
                <span className="h-1 w-6 rounded-full bg-current/15" />
                <span className="h-1 w-8 rounded-full bg-current/15" />
              </div>
            </div>
          </div>

          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-current/15 bg-black/5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight size={13} strokeWidth={1.4} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pt-3">
        <div>
          <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#c8aa7c]">
            {card.number} / {card.type}
          </div>
          <div className="mt-1 text-[14px] font-medium tracking-[-0.02em] text-white/75">
            {card.name}
          </div>
        </div>

        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/20">
          Concept
        </span>
      </div>
    </Link>
  );
}

const topRow = [...cards, ...cards];
const bottomRow = [...cards.slice().reverse(), ...cards.slice().reverse()];

export default function DemosHero() {
  return (
    <div className="mt-16 pb-20 md:mt-20 md:pb-28">
      <div className="space-y-9">
        <div className="demo-marquee">
          <div className="demo-marquee-track demo-marquee-left">
            {topRow.map((card, index) => (
              <DesignCard key={`top-${card.number}-${index}`} card={card} />
            ))}
          </div>
        </div>

        <div className="demo-marquee">
          <div className="demo-marquee-track demo-marquee-right">
            {bottomRow.map((card, index) => (
              <DesignCard key={`bottom-${card.number}-${index}`} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1500px] items-center justify-between px-5 sm:px-6 md:px-10 lg:px-14">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
          Scroll / Explore concepts
        </span>

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
          06 categories
        </span>
      </div>
    </div>
  );
}
