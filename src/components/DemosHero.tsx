"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Home,
  MapPin,
  Play,
  Search,
  Sparkles,
  Star,
  Stethoscope,
  Utensils,
  Users,
} from "lucide-react";

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

const palette: Record<
  string,
  { surface: string; text: string; accent: string; media: string }
> = {
  light: {
    surface: "#e8e1d5",
    text: "#191814",
    accent: "#a47b4d",
    media: "linear-gradient(135deg,#687565,#a5a187 52%,#d5c8a8)",
  },
  dark: {
    surface: "#181512",
    text: "#f2e9dd",
    accent: "#d29a69",
    media: "linear-gradient(135deg,#382a23,#765742 50%,#b78961)",
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

function MiniWindow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[6px] border border-black/10 bg-white/55 shadow-[0_14px_30px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

function HotelMockup({ accent }: { accent: string }) {
  return (
    <div className="h-full rounded-[5px] bg-[#f4efe7] p-3 text-[#1e1b17]">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <div className="text-[6px] font-bold uppercase tracking-[0.2em]">
          THE HILLVIEW
        </div>
        <div className="flex gap-2 text-[5px] uppercase tracking-[0.12em] text-black/40">
          Rooms <span>Stay</span> <span>Explore</span>
        </div>
      </div>

      <div
        className="relative mt-2 h-[66px] overflow-hidden rounded-[4px]"
        style={{ background: "linear-gradient(135deg,#66715f,#b7ad8e 48%,#e1d5bc)" }}
      >
        <div className="absolute inset-x-3 bottom-3">
          <div className="text-[13px] font-medium leading-[0.82] tracking-[-0.05em]">
            Stay above
            <br />
            <span className="font-serif italic" style={{ color: accent }}>
              the clouds.
            </span>
          </div>
        </div>
      </div>

      <MiniWindow className="relative -mt-1.5 mx-2">
        <div className="grid grid-cols-3 divide-x divide-black/10 p-1.5">
          {[
            ["CHECK IN", "12 OCT"],
            ["CHECK OUT", "15 OCT"],
            ["GUESTS", "2 ADULTS"],
          ].map(([label, value]) => (
            <div key={label} className="px-1.5">
              <div className="text-[4px] font-bold uppercase tracking-[0.14em] text-black/35">
                {label}
              </div>
              <div className="mt-1 text-[6px] font-semibold">{value}</div>
            </div>
          ))}
        </div>
      </MiniWindow>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="text-[5px] uppercase tracking-[0.14em] text-black/35">
            Forest Room
          </div>
          <div className="mt-0.5 text-[8px] font-semibold">₹18,500 / night</div>
        </div>
        <div
          className="flex h-6 items-center gap-1 rounded-[3px] px-2 text-[5px] font-bold uppercase tracking-[0.08em] text-white"
          style={{ backgroundColor: accent }}
        >
          BOOK <ArrowUpRight size={7} />
        </div>
      </div>
    </div>
  );
}

function RestaurantMockup({ accent }: { accent: string }) {
  return (
    <div className="h-full rounded-[5px] bg-[#211b17] p-3 text-[#f5eee4]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[7px] font-semibold tracking-[0.18em]">EMBER HOUSE</div>
          <div className="mt-0.5 text-[5px] uppercase tracking-[0.16em] text-white/35">
            Fire / Wine / Seasonal
          </div>
        </div>
        <div
          className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15"
          style={{ color: accent }}
        >
          <Utensils size={9} strokeWidth={1.4} />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1.05fr_0.95fr] gap-2">
        <div
          className="relative min-h-[92px] overflow-hidden rounded-[4px]"
          style={{ background: "linear-gradient(145deg,#5e3828,#a96742 48%,#2d201b)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-2 left-2">
            <div className="text-[5px] uppercase tracking-[0.15em] text-white/55">Chef's table</div>
            <div className="mt-1 text-[11px] font-serif italic text-white">The Ember Menu</div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="mb-1 flex gap-2 border-b border-white/10 pb-1.5 text-[5px] font-semibold uppercase tracking-[0.12em]">
            <span style={{ color: accent }}>Tonight</span>
            <span className="text-white/30">Menu</span>
          </div>
          {[
            ["Coal-roasted beet", "₹640"],
            ["Charred river fish", "₹1,180"],
            ["Ember chocolate", "₹520"],
          ].map(([name, price]) => (
            <div key={name} className="border-b border-white/8 pb-1.5">
              <div className="flex justify-between gap-2 text-[6px]">
                <span className="text-white/75">{name}</span>
                <span className="text-white/35">{price}</span>
              </div>
              <div className="mt-1 h-1 w-8 rounded-full" style={{ backgroundColor: accent }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">
        <div className="flex items-center gap-1 text-[5px] uppercase tracking-[0.12em] text-white/35">
          <Clock3 size={7} /> 7:00 — 10:30
        </div>
        <div
          className="rounded-[3px] px-2 py-1 text-[5px] font-bold uppercase tracking-[0.08em] text-[#211b17]"
          style={{ backgroundColor: accent }}
        >
          Reserve table
        </div>
      </div>
    </div>
  );
}

function ClinicMockup({ accent }: { accent: string }) {
  return (
    <div className="h-full rounded-[5px] bg-[#f1f6f3] p-3 text-[#17302b]">
      <div className="flex items-center justify-between border-b border-[#17302b]/10 pb-2">
        <div className="flex items-center gap-1.5">
          <div
            className="flex h-5 w-5 items-center justify-center rounded-full"
            style={{ backgroundColor: accent }}
          >
            <Stethoscope size={9} className="text-white" />
          </div>
          <div>
            <div className="text-[6px] font-bold uppercase tracking-[0.12em]">NORTHLINE</div>
            <div className="text-[4px] uppercase tracking-[0.14em] text-[#17302b]/35">Health clinic</div>
          </div>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#17302b]/5 text-[5px]">
          NG
        </div>
      </div>

      <div className="mt-2 grid grid-cols-[1.15fr_0.85fr] gap-2">
        <MiniWindow className="bg-white/70 p-2">
          <div className="flex items-center justify-between">
            <div className="text-[5px] font-bold uppercase tracking-[0.1em] text-[#17302b]/40">
              Today's appointment
            </div>
            <span className="rounded-full bg-[#5b8d7d]/10 px-1.5 py-0.5 text-[4px] font-semibold text-[#5b8d7d]">
              CONFIRMED
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div
              className="h-9 w-9 rounded-full"
              style={{ background: "linear-gradient(145deg,#d8e7e1,#91b4a8)" }}
            />
            <div>
              <div className="text-[8px] font-semibold">Dr. Maya Chen</div>
              <div className="mt-0.5 text-[5px] text-[#17302b]/40">General Medicine</div>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[5px] text-[#17302b]/45">
            <CalendarDays size={7} /> 10:30 AM · Room 04
          </div>
        </MiniWindow>

        <div className="rounded-[6px] bg-[#17302b] p-2 text-white">
          <div className="text-[5px] uppercase tracking-[0.12em] text-white/40">Vitals</div>
          <div className="mt-2 space-y-2">
            {[
              ["BP", "118 / 76"],
              ["HR", "72 bpm"],
              ["Temp", "98.4°"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-[4px] uppercase tracking-[0.1em] text-white/35">{label}</div>
                <div className="mt-0.5 text-[7px] font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-[5px] border border-[#17302b]/10 bg-white/60 p-2">
        <div>
          <div className="text-[5px] uppercase tracking-[0.1em] text-[#17302b]/35">Next available</div>
          <div className="mt-1 text-[7px] font-semibold">Today · 4:20 PM</div>
        </div>
        <div
          className="flex items-center gap-1 rounded-[3px] px-2 py-1.5 text-[5px] font-bold uppercase tracking-[0.08em] text-white"
          style={{ backgroundColor: accent }}
        >
          Book visit <ArrowUpRight size={7} />
        </div>
      </div>
    </div>
  );
}

function RealEstateMockup({ accent }: { accent: string }) {
  return (
    <div className="h-full rounded-[5px] bg-[#1b1c1a] p-3 text-[#f3f3ef]">
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <div className="text-[6px] font-bold tracking-[0.18em]">ARC HOUSE</div>
        <div className="ml-auto flex gap-2 text-[4px] uppercase tracking-[0.14em] text-white/35">
          Buy <span>Rent</span> <span>Projects</span>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-[1.3fr_0.7fr] gap-2">
        <div className="relative h-[98px] overflow-hidden rounded-[4px]" style={{ background: "linear-gradient(145deg,#8e8f84,#5a5d58 50%,#282a29)" }}>
          <div className="absolute left-2 top-2 rounded-full bg-black/35 px-2 py-1 text-[4px] uppercase tracking-[0.12em] backdrop-blur">
            Featured residence
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <div className="text-[12px] font-medium tracking-[-0.04em]">House No. 07</div>
            <div className="mt-1 flex gap-1.5 text-[5px] text-white/55">
              4 bed · 3 bath · 3,280 sq ft
            </div>
          </div>
        </div>

        <div className="rounded-[4px] border border-white/10 bg-white/[0.03] p-2">
          <div className="flex items-center gap-1 text-[5px] uppercase tracking-[0.12em] text-white/35">
            <MapPin size={7} /> North District
          </div>
          <div className="mt-2 text-[14px] font-medium tracking-[-0.05em]">₹4.8 Cr</div>
          <div className="mt-1 text-[5px] text-white/35">Private viewings available</div>
          <div className="mt-3 h-px bg-white/10" />
          <div className="mt-2 grid grid-cols-2 gap-1">
            {["Garden", "Pool", "Studio", "Garage"].map((item) => (
              <div key={item} className="rounded-[2px] bg-white/[0.05] px-1.5 py-1 text-[4px] text-white/45">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[5px] text-white/35">
          <Search size={7} /> 24 matching properties
        </div>
        <div
          className="flex items-center gap-1 rounded-[3px] px-2 py-1.5 text-[5px] font-bold uppercase tracking-[0.08em] text-[#1b1c1a]"
          style={{ backgroundColor: accent }}
        >
          View property <ArrowUpRight size={7} />
        </div>
      </div>
    </div>
  );
}

function SalonMockup({ accent }: { accent: string }) {
  return (
    <div className="h-full rounded-[5px] bg-[#f4ebe5] p-3 text-[#342b27]">
      <div className="flex items-center justify-between border-b border-[#342b27]/10 pb-2">
        <div>
          <div className="text-[7px] font-semibold tracking-[0.18em]">MORROW</div>
          <div className="mt-0.5 text-[4px] uppercase tracking-[0.15em] text-[#342b27]/35">
            Beauty / Ritual / Care
          </div>
        </div>
        <Sparkles size={10} strokeWidth={1.3} style={{ color: accent }} />
      </div>

      <div className="mt-2 grid grid-cols-[0.72fr_1.28fr] gap-2">
        <div
          className="relative min-h-[96px] overflow-hidden rounded-[4px]"
          style={{ background: "linear-gradient(145deg,#b99889,#e0c8bb 48%,#9a7667)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          <div className="absolute bottom-2 left-2 text-white">
            <div className="text-[5px] uppercase tracking-[0.14em] text-white/55">The ritual</div>
            <div className="mt-1 text-[10px] font-serif italic">Take your time.</div>
          </div>
        </div>

        <div className="rounded-[4px] border border-[#342b27]/10 bg-white/45 p-2">
          <div className="text-[5px] font-semibold uppercase tracking-[0.13em] text-[#342b27]/45">
            Book an appointment
          </div>
          <div className="mt-2 flex gap-1.5">
            {["09", "10", "11", "12"].map((day, index) => (
              <div
                key={day}
                className="flex h-7 flex-1 flex-col items-center justify-center rounded-[3px]"
                style={{
                  backgroundColor: index === 1 ? accent : "rgba(52,43,39,.05)",
                  color: index === 1 ? "#fff" : "#342b27",
                }}
              >
                <span className="text-[6px] font-semibold">{day}</span>
                <span className="text-[4px] uppercase opacity-60">Oct</span>
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1">
            {[
              ["Signature Cut", "₹1,800"],
              ["Skin Ritual", "₹2,400"],
              ["Color Studio", "₹3,900"],
            ].map(([service, price]) => (
              <div key={service} className="flex items-center justify-between rounded-[3px] bg-white/45 px-2 py-1.5">
                <span className="text-[5px] font-medium">{service}</span>
                <span className="text-[5px] text-[#342b27]/45">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-[#342b27]/10 pt-2">
        <div className="flex items-center gap-1 text-[5px] text-[#342b27]/40">
          <Star size={7} fill="currentColor" /> 4.9 · 218 appointments
        </div>
        <div
          className="rounded-[3px] px-2 py-1.5 text-[5px] font-bold uppercase tracking-[0.08em] text-white"
          style={{ backgroundColor: accent }}
        >
          Find a time
        </div>
      </div>
    </div>
  );
}

function EducationMockup({ accent }: { accent: string }) {
  return (
    <div className="h-full rounded-[5px] bg-[#182132] p-3 text-[#edf2f8]">
      <div className="flex gap-2">
        <div className="w-7 shrink-0 rounded-[4px] bg-white/[0.05] p-1.5">
          <div className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: accent }} />
          <div className="mt-4 space-y-2">
            <div className="h-1 rounded bg-white/20" />
            <div className="h-1 rounded bg-white/10" />
            <div className="h-1 rounded bg-white/10" />
            <div className="h-1 rounded bg-white/10" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[6px] font-bold tracking-[0.16em]">NORTHSTAR</div>
              <div className="mt-0.5 text-[4px] uppercase tracking-[0.13em] text-white/30">
                Learning platform
              </div>
            </div>
            <div className="h-5 w-5 rounded-full bg-white/10 text-center text-[5px] leading-5">JG</div>
          </div>

          <div className="mt-2 rounded-[4px] border border-white/10 bg-white/[0.04] p-2">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[5px] uppercase tracking-[0.12em] text-white/35">Your progress</div>
                <div className="mt-1 text-[16px] font-medium tracking-[-0.05em]">68%</div>
              </div>
              <div className="relative h-9 w-9 rounded-full border-[3px] border-white/10">
                <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-current" style={{ color: accent }} />
              </div>
            </div>
            <div className="mt-2 h-1 rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full" style={{ backgroundColor: accent }} />
            </div>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {[
              ["AI Systems", "12 / 18"],
              ["Product Design", "08 / 12"],
            ].map(([name, progress]) => (
              <div key={name} className="rounded-[4px] bg-white/[0.04] p-1.5">
                <div className="flex items-center justify-between text-[5px]">
                  <span className="text-white/65">{name}</span>
                  <span className="text-white/25">{progress}</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full" style={{ backgroundColor: accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-[4px] bg-white/[0.04] px-2 py-1.5">
        <div className="flex items-center gap-1.5">
          <Play size={7} fill="currentColor" style={{ color: accent }} />
          <span className="text-[5px] font-medium">Continue: Building AI Products</span>
        </div>
        <span className="text-[5px] text-white/30">42 min</span>
      </div>
    </div>
  );
}

function Mockup({ card }: { card: (typeof cards)[number] }) {
  const colors = palette[card.theme];

  switch (card.type) {
    case "Hotel":
      return <HotelMockup accent={colors.accent} />;
    case "Restaurant":
      return <RestaurantMockup accent={colors.accent} />;
    case "Clinic":
      return <ClinicMockup accent={colors.accent} />;
    case "Real Estate":
      return <RealEstateMockup accent={colors.accent} />;
    case "Salon":
      return <SalonMockup accent={colors.accent} />;
    default:
      return <EducationMockup accent={colors.accent} />;
  }
}

function DesignCard({ card }: { card: (typeof cards)[number] }) {
  const colors = palette[card.theme];

  return (
    <Link
      href={card.href}
      className="group block w-[285px] shrink-0 sm:w-[330px] lg:w-[360px]"
    >
      <div
        className="relative aspect-[1.32/1] overflow-hidden border border-white/10 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover:-translate-y-2"
        style={{ backgroundColor: colors.surface }}
      >
        <div
          className="relative h-full overflow-hidden rounded-[3px]"
          style={{ color: colors.text }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: colors.media }}
          />

          <div className="relative z-10 flex h-full flex-col p-3 sm:p-4">
            <div className="flex items-center justify-between border-b border-current/10 pb-2.5">
              <span className="text-[6px] font-bold uppercase tracking-[0.2em]">
                {card.name}
              </span>

              <span className="text-[5px] font-semibold uppercase tracking-[0.16em] opacity-45">
                {card.type}
              </span>
            </div>

            <div className="min-h-0 flex-1 py-2">
              <Mockup card={card} />
            </div>

            <div className="flex items-end justify-between gap-3 border-t border-current/10 pt-2.5">
              <div className="min-w-0">
                <div className="text-[13px] font-medium leading-[0.9] tracking-[-0.045em] sm:text-[15px]">
                  {card.title}{" "}
                  <span
                    className="font-serif italic"
                    style={{ color: colors.accent }}
                  >
                    {card.accent}
                  </span>
                </div>

                <div className="mt-2 flex gap-1">
                  <span
                    className="h-1 w-9 rounded-full"
                    style={{ backgroundColor: colors.accent }}
                  />
                  <span className="h-1 w-5 rounded-full bg-current/15" />
                  <span className="h-1 w-6 rounded-full bg-current/15" />
                </div>
              </div>

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/15 bg-black/5 backdrop-blur-sm transition-all duration-300 group-hover:border-current/30">
                <ArrowUpRight size={11} strokeWidth={1.4} />
              </div>
            </div>
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
