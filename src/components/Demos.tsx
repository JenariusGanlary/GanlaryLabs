"use client";

import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    number: "01",
    type: "Boutique Hotel",
    name: "The Hillview",
    href: "/demos/the-hillview",
    active: true,
    visual: "hotel",
  },
  {
    number: "02",
    type: "Restaurant",
    name: "Ember House",
    href: "/demos",
    active: false,
    visual: "restaurant",
  },
  {
    number: "03",
    type: "Private Clinic",
    name: "Northline Health",
    href: "/demos",
    active: false,
    visual: "clinic",
  },
  {
    number: "04",
    type: "Real Estate",
    name: "Arc House",
    href: "/demos",
    active: false,
    visual: "estate",
  },
  {
    number: "05",
    type: "Salon & Spa",
    name: "Morrow",
    href: "/demos",
    active: false,
    visual: "salon",
  },
  {
    number: "06",
    type: "Education",
    name: "Northstar",
    href: "/demos",
    active: false,
    visual: "education",
  },
];

function Preview({ type }: { type: string }) {
  if (type === "hotel") {
    return (
      <div className="h-full bg-[#e9e3d7] p-4 text-[#171713]">
        <div className="flex items-center justify-between border-b border-black/10 pb-3">
          <span className="text-[6px] font-bold tracking-[0.2em]">THE HILLVIEW</span>
          <span className="text-[5px] uppercase tracking-[0.15em] text-black/40">BOOK</span>
        </div>
        <div className="mt-5">
          <div className="h-24 bg-gradient-to-br from-[#6f786b] via-[#9c9b7e] to-[#d1c5a4]" />
          <div className="mt-3 text-[13px] font-medium leading-none tracking-[-0.05em]">
            Stay above
            <br />
            <span className="font-serif italic">the clouds.</span>
          </div>
          <div className="mt-3 flex gap-1">
            <span className="h-1 w-10 bg-[#b58b57]" />
            <span className="h-1 w-5 bg-black/10" />
            <span className="h-1 w-7 bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "restaurant") {
    return (
      <div className="h-full bg-[#181511] p-4 text-[#f1e8dc]">
        <div className="flex justify-between text-[6px] uppercase tracking-[0.2em] text-white/50">
          <span>EMBER HOUSE</span>
          <span>MENU</span>
        </div>
        <div className="mt-7">
          <div className="text-[22px] leading-[0.8] tracking-[-0.06em]">
            Good food.
            <br />
            <span className="font-serif italic text-[#d39a69]">Good company.</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="h-16 bg-[#6c5543]" />
            <div className="h-16 bg-[#8a6b4f]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "clinic") {
    return (
      <div className="h-full bg-[#e7ece9] p-4 text-[#17302b]">
        <div className="flex items-center justify-between border-b border-[#17302b]/10 pb-3">
          <span className="text-[6px] font-bold tracking-[0.16em]">NORTHLINE HEALTH</span>
          <span className="h-4 w-4 rounded-full bg-[#5b8d7d]" />
        </div>
        <div className="mt-6">
          <div className="text-[19px] font-medium leading-[0.9] tracking-[-0.05em]">
            Healthcare
            <br />
            <span className="text-[#5b8d7d]">made human.</span>
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-6 bg-white/70" />
            <div className="h-6 bg-white/70" />
            <div className="h-6 w-2/3 bg-[#b6ccc3]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "estate") {
    return (
      <div className="h-full bg-[#161616] p-4 text-white">
        <div className="flex justify-between text-[6px] tracking-[0.18em] text-white/45">
          <span>ARC HOUSE</span>
          <span>PROPERTIES</span>
        </div>
        <div className="mt-5 h-24 bg-gradient-to-br from-[#77766d] via-[#4f514d] to-[#252625]" />
        <div className="mt-4 text-[18px] leading-[0.85] tracking-[-0.06em]">
          Spaces
          <br />
          <span className="text-white/45">worth living in.</span>
        </div>
      </div>
    );
  }

  if (type === "salon") {
    return (
      <div className="h-full bg-[#eee7e1] p-4 text-[#2a2522]">
        <div className="flex justify-between text-[6px] tracking-[0.2em]">
          <span>MORROW</span>
          <span>APPOINTMENTS</span>
        </div>
        <div className="mt-7 text-[24px] font-light leading-[0.82] tracking-[-0.06em]">
          A slower
          <br />
          <span className="font-serif italic text-[#9b7460]">kind of beauty.</span>
        </div>
        <div className="mt-6 flex gap-2">
          <div className="h-12 flex-1 bg-[#c4a99b]" />
          <div className="h-12 w-12 rounded-full bg-[#d8c6bb]" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#151a24] p-4 text-[#eef2f7]">
      <div className="flex justify-between text-[6px] tracking-[0.2em] text-white/45">
        <span>NORTHSTAR</span>
        <span>LEARN</span>
      </div>
      <div className="mt-7 text-[21px] font-medium leading-[0.84] tracking-[-0.06em]">
        Build what
        <br />
        <span className="text-[#8da7d2]">comes next.</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-1">
        <div className="h-8 bg-white/10" />
        <div className="h-8 bg-[#637da9]/60" />
        <div className="h-8 bg-white/10" />
      </div>
    </div>
  );
}

function DemoCard({
  card,
  reverse = false,
}: {
  card: (typeof cards)[number];
  reverse?: boolean;
}) {
  return (
    <div className="group w-[360px] shrink-0 sm:w-[480px] lg:w-[560px] xl:w-[620px]">
      <div className="relative aspect-[1.55/1] overflow-hidden rounded-[14px] border border-white/10 bg-[#151513] p-1.5 shadow-[0_30px_90px_rgba(0,0,0,0.42)] sm:rounded-[16px]">
        <div className="relative h-full overflow-hidden rounded-[10px] sm:rounded-[11px]">
          <Preview type={card.visual} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />

          {card.active && (
            <div className="absolute right-3 top-3 border border-white/30 bg-black/35 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              Live concept
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 px-1 pt-4">
        <div>
          <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#c8aa7c]">
            {card.number} / {card.type}
          </div>
          <div className="mt-1 text-[15px] font-medium tracking-[-0.02em] text-white/85">
            {card.name}
          </div>
        </div>

        <span
          className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-300 group-hover:border-[#c8aa7c] group-hover:text-[#c8aa7c] ${reverse ? "rotate-0" : ""}`}
        >
          <ArrowUpRight size={13} strokeWidth={1.4} />
        </span>
      </div>
    </div>
  );
}

const rowOne = [...cards, ...cards];
const rowTwo = [...cards.slice().reverse(), ...cards.slice().reverse()];

export default function Demos() {
  return (
    <section id="demos" className="overflow-hidden border-y border-white/10 bg-[#0c0c0b] py-24 text-[#f3efe7] md:py-32">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-soft)]">
                Demo Collection
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(3.3rem,7vw,7rem)] font-medium leading-[0.84] tracking-[-0.07em]">
              See what we
              <br />
              <span className="font-serif font-normal italic text-[#d8c19b]">
                can build.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <p className="max-w-xl text-[15px] leading-7 text-white/45 md:text-base md:leading-8 lg:text-right">
              Explore interface concepts built for hotels, restaurants,
              clinics, property brands, and modern service businesses.
            </p>

            <a
              href="/demos"
              className="group flex w-fit items-center gap-3 border border-white/15 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#17120f]"
            >
              View all demos
              <ArrowUpRight size={15} strokeWidth={1.4} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-14 md:mt-20 md:space-y-16">
        <div className="demo-marquee overflow-visible">
          <div className="demo-marquee-track demo-marquee-left">
            {rowOne.map((card, index) => (
              <DemoCard key={`one-${card.number}-${index}`} card={card} />
            ))}
          </div>
        </div>

        <div className="demo-marquee overflow-visible">
          <div className="demo-marquee-track demo-marquee-right">
            {rowTwo.map((card, index) => (
              <DemoCard key={`two-${card.number}-${index}`} card={card} reverse />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
