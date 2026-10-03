"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Plus,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { DemoConfig } from "./demoData";

const variantFor = (slug: string) => slug as
  | "restaurant"
  | "clinic"
  | "real-estate"
  | "salon"
  | "education"
  | "local-service";

function Label({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: accent }}>
      <span className="h-px w-7" style={{ background: accent }} />
      {children}
    </div>
  );
}

function ImageBlock({ src, className = "", label }: { src: string; className?: string; label?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.035]" />
      {label && (
        <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {label}
        </span>
      )}
    </div>
  );
}

export default function BusinessDemo({ config }: { config: DemoConfig }) {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const variant = variantFor(config.slug);

  const scrollTo = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const accent = config.palette.accent;
  const line = config.palette.line;
  const isDark = ["restaurant", "real-estate"].includes(variant);

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{ background: config.palette.page, color: config.palette.ink }}
    >
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          borderColor: line,
          background: `${config.palette.page}e8`,
        }}
      >
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="/demos" className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-[9px] font-bold"
              style={{ background: accent, color: config.palette.page }}
            >
              {config.brand.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">{config.brand}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {config.nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replaceAll(" ", "-"))}
                className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-50 transition-opacity hover:opacity-100"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <Link href="/demos" className="text-[9px] font-semibold uppercase tracking-[0.16em] opacity-40 hover:opacity-100">
              ← Collection
            </Link>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em]"
              style={{ background: accent, color: config.palette.page }}
            >
              {config.primaryCta}
            </button>
          </div>

          <button
            onClick={() => setMenu((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
            style={{ borderColor: line }}
            aria-label="Toggle navigation"
          >
            {menu ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {menu && (
          <div className="border-t px-4 py-3 md:hidden" style={{ borderColor: line }}>
            {config.nav.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replaceAll(" ", "-"))}
                className="flex w-full items-center justify-between border-b py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ borderColor: line }}
              >
                <span><span className="mr-3 font-mono" style={{ color: accent }}>0{i + 1}</span>{item}</span>
                <ArrowUpRight size={13} />
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 h-12 w-full rounded-full text-[9px] font-semibold uppercase tracking-[0.16em]"
              style={{ background: accent, color: config.palette.page }}
            >
              {config.primaryCta}
            </button>
          </div>
        )}
      </header>

      {variant === "restaurant" && (
        <RestaurantLayout config={config} accent={accent} line={line} scrollTo={scrollTo} selected={selected} setSelected={setSelected} submitted={submitted} setSubmitted={setSubmitted} />
      )}

      {variant === "clinic" && (
        <ClinicLayout config={config} accent={accent} line={line} scrollTo={scrollTo} selected={selected} setSelected={setSelected} submitted={submitted} setSubmitted={setSubmitted} />
      )}

      {variant === "real-estate" && (
        <PropertyLayout config={config} accent={accent} line={line} scrollTo={scrollTo} selected={selected} setSelected={setSelected} submitted={submitted} setSubmitted={setSubmitted} />
      )}

      {variant === "salon" && (
        <SalonLayout config={config} accent={accent} line={line} scrollTo={scrollTo} selected={selected} setSelected={setSelected} submitted={submitted} setSubmitted={setSubmitted} />
      )}

      {variant === "education" && (
        <EducationLayout config={config} accent={accent} line={line} scrollTo={scrollTo} selected={selected} setSelected={setSelected} submitted={submitted} setSubmitted={setSubmitted} />
      )}

      {variant === "local-service" && (
        <ServiceLayout config={config} accent={accent} line={line} scrollTo={scrollTo} selected={selected} setSelected={setSelected} submitted={submitted} setSubmitted={setSubmitted} />
      )}

      <div
        className="fixed bottom-3 left-3 right-3 z-40 flex items-center justify-between rounded-full border p-1.5 shadow-2xl backdrop-blur-xl md:hidden"
        style={{ borderColor: line, background: `${config.palette.page}ee` }}
      >
        <span className="pl-4 text-[8px] font-semibold uppercase tracking-[0.15em] opacity-45">{config.brand}</span>
        <button
          onClick={() => scrollTo("contact")}
          className="rounded-full px-4 py-3 text-[8px] font-semibold uppercase tracking-[0.15em]"
          style={{ background: accent, color: config.palette.page }}
        >
          {config.primaryCta}
        </button>
      </div>

      <footer className="border-t px-4 pb-24 pt-10 sm:px-6 sm:pb-12 lg:px-10" style={{ borderColor: line }}>
        <div className="mx-auto flex max-w-[1500px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xl font-medium tracking-[-0.04em]">{config.brand}</div>
            <p className="mt-2 max-w-md text-[11px] leading-5 opacity-40">{config.footerNote}</p>
          </div>
          <div className="text-[8px] font-semibold uppercase tracking-[0.18em] opacity-35">
            Concept / Ganlary Labs / 2026
          </div>
        </div>
      </footer>
    </main>
  );
}

type LayoutProps = {
  config: DemoConfig;
  accent: string;
  line: string;
  scrollTo: (id: string) => void;
  selected: number;
  setSelected: (n: number) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
};

function RestaurantLayout({ config, accent, line, scrollTo, selected, setSelected, submitted, setSubmitted }: LayoutProps) {
  return (
    <>
      <section className="px-3 pb-8 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[22px] bg-[#241c18] text-[#f5eee5] sm:rounded-[34px]">
          <ImageBlock src={config.heroImage} className="absolute inset-0 opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17110e] via-[#17110e]/45 to-transparent" />
          <div className="relative flex min-h-[680px] flex-col justify-between p-6 sm:min-h-[780px] sm:p-10 lg:min-h-[840px] lg:p-16">
            <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-white/60">
              <span>{config.location}</span><span>Est. 2018 / Modern Dining</span>
            </div>
            <div className="max-w-5xl">
              <Label accent={accent}>Aster & Ash / Kitchen & Table</Label>
              <h1 className="mt-6 max-w-5xl font-serif text-[clamp(4.2rem,12vw,10.5rem)] font-normal leading-[0.76] tracking-[-0.065em]">
                {config.heroTitle}<br /><i style={{ color: accent }}>{config.heroAccent}</i>
              </h1>
              <p className="mt-7 max-w-lg text-sm leading-6 text-white/65 sm:text-base sm:leading-7">{config.heroBody}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo("contact")} className="rounded-full bg-[#f5eee5] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#17110e]">{config.primaryCta} ↗</button>
                <button onClick={() => scrollTo("menu")} className="rounded-full border border-white/30 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">{config.secondaryCta}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y py-4" style={{ borderColor: line }}>
        <div className="flex w-max gap-10 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] opacity-50">
          {[...config.services, ...config.services].map((s, i) => <span key={i}>{s.name} <i className="mx-6" style={{ color: accent }}>✦</i></span>)}
        </div>
      </section>

      <section id="about" className="bg-[#f1e7db] px-5 py-24 text-[#241c18] sm:px-8 sm:py-32 lg:px-14 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.25fr_1fr]">
          <Label accent={accent}>01 / The house</Label>
          <div>
            <h2 className="max-w-6xl font-serif text-[clamp(3.2rem,7vw,7.5rem)] font-normal leading-[.84] tracking-[-.06em]">{config.introTitle}</h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#241c18]/60">{config.introBody}</p>
            <div className="mt-14 grid grid-cols-2 border-y sm:grid-cols-4" style={{ borderColor: line }}>
              {config.stats.map((s) => <div key={s.label} className="border-b p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" style={{ borderColor: line }}><strong className="text-2xl font-normal">{s.value}</strong><div className="mt-2 text-[8px] uppercase tracking-[.17em] opacity-45">{s.label}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#241c18] px-5 py-24 text-[#f5eee5] sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><Label accent={accent}>02 / Menu</Label><h2 className="mt-5 font-serif text-[clamp(3rem,7vw,7rem)] font-normal leading-[.84]">The evening<br /><i style={{ color: accent }}>starts here.</i></h2></div>
            <span className="max-w-xs text-xs leading-6 text-white/40">A seasonal menu designed to move from small plates to long dinners without losing its sense of place.</span>
          </div>
          <div className="mt-14 border-t border-white/15">
            {config.services.map((s, i) => <button key={s.number} onClick={() => setSelected(i)} className="grid w-full grid-cols-[35px_1fr_25px] gap-3 border-b border-white/15 py-7 text-left sm:grid-cols-[70px_1fr_35px] sm:py-9"><span className="font-mono text-[9px] text-white/30">{s.number}</span><span><strong className="font-serif text-2xl font-normal sm:text-4xl">{s.name}</strong>{selected === i && <span className="mt-2 block max-w-xl text-sm leading-6 text-white/45">{s.description}</span>}</span><span className="mt-1">{selected === i ? <X size={14} /> : <Plus size={14} />}</span></button>)}
          </div>
        </div>
      </section>

      <section className="bg-[#d8c0a4] px-5 py-20 text-[#241c18] sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <ImageBlock src={config.featureImage} className="aspect-[1.15] rounded-[24px] sm:rounded-[34px]" label="The dining room" />
          <div className="flex flex-col justify-end p-2 sm:p-6">
            <Label accent={accent}>03 / Private dining</Label>
            <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[.85]">{config.featureTitle}</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 opacity-60">{config.featureBody}</p>
            <button onClick={() => scrollTo("contact")} className="mt-8 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.18em]">Plan an evening <ArrowUpRight size={13} /></button>
          </div>
        </div>
      </section>

      <ContactBlock config={config} accent={accent} line={line} submitted={submitted} setSubmitted={setSubmitted} title="Reserve your table." />
    </>
  );
}

function ClinicLayout({ config, accent, line, scrollTo, selected, setSelected, submitted, setSubmitted }: LayoutProps) {
  return (
    <>
      <section className="bg-[#e8eee9] px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div className="order-2 lg:order-1">
            <Label accent={accent}>Northline Dental / Care, clearly</Label>
            <h1 className="mt-7 max-w-4xl text-[clamp(4rem,10vw,9rem)] font-medium leading-[.8] tracking-[-.075em]">{config.heroTitle}<br /><i className="font-serif font-normal" style={{ color: accent }}>{config.heroAccent}</i></h1>
            <p className="mt-7 max-w-lg text-sm leading-7 opacity-55 sm:text-base">{config.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-3"><button onClick={() => scrollTo("contact")} className="rounded-full px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em]" style={{ background: accent, color: "#f5f3ed" }}>{config.primaryCta} ↗</button><button onClick={() => scrollTo("services")} className="rounded-full border px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em]" style={{ borderColor: line }}>{config.secondaryCta}</button></div>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-4">{config.stats.map((s) => <div key={s.label} className="rounded-2xl bg-white/55 p-4"><div className="text-xl font-medium">{s.value}</div><div className="mt-1 text-[7px] uppercase tracking-[.15em] opacity-45">{s.label}</div></div>)}</div>
          </div>
          <div className="order-1 lg:order-2"><ImageBlock src={config.heroImage} className="aspect-[.88] rounded-[24px] sm:rounded-[34px]" label="A calmer way to care" /></div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
        <div className="mx-auto max-w-[1400px]"><Label accent={accent}>01 / Patient first</Label><h2 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[.86] tracking-[-.07em]">{config.introTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 opacity-55">{config.introBody}</p></div>
      </section>

      <section id="services" className="bg-[#1d2a24] px-5 py-24 text-[#f0f4ed] sm:px-8 sm:py-32 lg:px-14">
        <div className="mx-auto max-w-[1400px]"><Label accent={accent}>02 / Treatments</Label><div className="mt-10 grid gap-3 lg:grid-cols-2">{config.services.map((s, i) => <button key={s.number} onClick={() => setSelected(i)} className="rounded-[24px] border p-6 text-left transition-transform hover:-translate-y-1 sm:p-8" style={{ borderColor: "rgba(255,255,255,.12)", background: selected === i ? "rgba(255,255,255,.06)" : "transparent" }}><div className="flex items-center justify-between"><span className="font-mono text-[9px] opacity-35">{s.number}</span>{selected === i ? <Check size={15} style={{ color: accent }} /> : <Plus size={15} />}</div><h3 className="mt-12 text-2xl font-medium tracking-[-.04em] sm:text-4xl">{s.name}</h3><p className="mt-3 max-w-md text-sm leading-6 opacity-45">{s.description}</p><span className="mt-8 block text-[8px] font-semibold uppercase tracking-[.16em]" style={{ color: accent }}>Learn about treatment ↗</span></button>)}</div></div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.9fr_1.1fr]"><div className="order-2 flex flex-col justify-end lg:order-1"><Label accent={accent}>03 / The experience</Label><h2 className="mt-6 max-w-2xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[.85] tracking-[-.07em]">{config.featureTitle}</h2><p className="mt-7 max-w-xl text-sm leading-7 opacity-55">{config.featureBody}</p><div className="mt-8 space-y-3">{config.featurePoints.map(p => <div key={p} className="flex items-center gap-3 border-b py-3 text-sm" style={{ borderColor: line }}><Check size={14} style={{ color: accent }} />{p}</div>)}</div></div><ImageBlock src={config.featureImage} className="order-1 aspect-[.95] rounded-[24px] lg:order-2 lg:rounded-[34px]" /></div></section>

      <ContactBlock config={config} accent={accent} line={line} submitted={submitted} setSubmitted={setSubmitted} title="Let's make the next visit easier." />
    </>
  );
}

function PropertyLayout({ config, accent, line, scrollTo, selected, setSelected, submitted, setSubmitted }: LayoutProps) {
  return (
    <>
      <section className="px-3 pb-8 pt-3 sm:px-5 sm:pt-5">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[22px] sm:rounded-[34px]">
          <ImageBlock src={config.heroImage} className="aspect-[.88] sm:aspect-[1.55]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171713] via-[#171713]/25 to-transparent" />
          <div className="absolute inset-x-5 bottom-6 text-[#f0ece2] sm:inset-x-10 sm:bottom-10 lg:inset-x-16 lg:bottom-14">
            <div className="mb-5 flex justify-between text-[8px] uppercase tracking-[.2em] text-white/55"><span>{config.location}</span><span>Selected / 2026</span></div>
            <h1 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[.77] tracking-[-.08em]">{config.heroTitle}<br /><i className="font-serif font-normal" style={{ color: accent }}>{config.heroAccent}</i></h1>
            <div className="mt-7 flex flex-wrap gap-3"><button onClick={() => scrollTo("properties")} className="rounded-full bg-[#f0ece2] px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em] text-[#171713]">{config.primaryCta} ↘</button><button onClick={() => scrollTo("contact")} className="rounded-full border border-white/30 px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em] text-white">Private viewing</button></div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.28fr_1fr]"><Label accent={accent}>01 / Point of view</Label><div><h2 className="max-w-5xl font-serif text-[clamp(3.3rem,7vw,7rem)] font-normal leading-[.82] tracking-[-.06em]">{config.introTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 opacity-50">{config.introBody}</p><div className="mt-12 grid grid-cols-2 border-y sm:grid-cols-4" style={{ borderColor: line }}>{config.stats.map(s=><div key={s.label} className="border-b p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" style={{ borderColor: line }}><div className="text-2xl">{s.value}</div><div className="mt-2 text-[8px] uppercase tracking-[.16em] opacity-40">{s.label}</div></div>)}</div></div></div></section>

      <section id="properties" className="bg-[#24241f] px-5 py-24 text-[#f0ece2] sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto max-w-[1400px]"><div className="flex items-end justify-between"><div><Label accent={accent}>02 / The collection</Label><h2 className="mt-5 text-[clamp(3rem,7vw,7rem)] font-medium leading-[.82] tracking-[-.07em]">Places worth<br /><i className="font-serif font-normal" style={{ color: accent }}>seeing.</i></h2></div><span className="hidden text-[8px] uppercase tracking-[.18em] opacity-35 sm:block">04 / 04</span></div><div className="mt-14 grid gap-3 md:grid-cols-2">{config.gallery.slice(0,4).map((img,i)=><button key={img} onClick={() => setSelected(i)} className="group text-left"><ImageBlock src={img} className={`aspect-[1.15] rounded-[20px] ${i === 0 ? "md:aspect-[1.25]" : ""}`} /><div className="flex items-center justify-between border-b py-4" style={{ borderColor: line }}><div><div className="text-[9px] uppercase tracking-[.16em] opacity-35">0{i+1} / Residential</div><div className="mt-1 text-lg">{["Ridge House","The Courtyard","Forest Residence","Hill House"][i]}</div></div><ArrowUpRight size={15} className="opacity-40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></button>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.15fr_.85fr]"><ImageBlock src={config.featureImage} className="aspect-[1.15] rounded-[24px] sm:rounded-[34px]" label="Architecture / context" /><div className="flex flex-col justify-end"><Label accent={accent}>03 / The difference</Label><h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-medium leading-[.84] tracking-[-.07em]">{config.featureTitle}</h2><p className="mt-7 max-w-lg text-sm leading-7 opacity-50">{config.featureBody}</p><button onClick={() => scrollTo("contact")} className="mt-8 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.17em]" style={{ color: accent }}>Request a viewing <ArrowUpRight size={13} /></button></div></div></section>

      <ContactBlock config={config} accent={accent} line={line} submitted={submitted} setSubmitted={setSubmitted} title="Find your next address." />
    </>
  );
}

function SalonLayout({ config, accent, line, scrollTo, selected, setSelected, submitted, setSubmitted }: LayoutProps) {
  return (
    <>
      <section className="bg-[#e8dcd9] px-5 pb-20 pt-8 sm:px-8 sm:pb-28 lg:px-14 lg:pt-12"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.72fr_1.28fr]"><div className="flex flex-col justify-end pb-3"><Label accent={accent}>Morrow / Beauty house</Label><h1 className="mt-7 font-serif text-[clamp(4.5rem,11vw,10.5rem)] font-normal leading-[.72] tracking-[-.07em]">{config.heroTitle}<br /><i style={{ color: accent }}>{config.heroAccent}</i></h1><p className="mt-8 max-w-md text-sm leading-7 opacity-55">{config.heroBody}</p><button onClick={() => scrollTo("services")} className="mt-8 w-fit rounded-full px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em]" style={{ background: accent, color: "#f6efeb" }}>{config.primaryCta} ↗</button></div><ImageBlock src={config.heroImage} className="aspect-[.78] rounded-[24px] sm:aspect-[.85] sm:rounded-[34px]" label="By appointment" /></div></section>

      <section className="overflow-hidden border-y py-4" style={{ borderColor: line }}><div className="flex w-max gap-10 text-[9px] font-semibold uppercase tracking-[.2em] opacity-50">{[...config.services,...config.services].map((s,i)=><span key={i}>{s.name} <span className="mx-5" style={{ color: accent }}>✦</span></span>)}</div></section>

      <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto max-w-[1400px]"><Label accent={accent}>01 / The house</Label><h2 className="mt-5 max-w-6xl font-serif text-[clamp(3.2rem,7vw,7.2rem)] font-normal leading-[.82] tracking-[-.06em]">{config.introTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 opacity-50">{config.introBody}</p></div></section>

      <section id="services" className="bg-[#332b2b] px-5 py-24 text-[#f4ece8] sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto max-w-[1400px]"><div className="flex items-end justify-between"><div><Label accent={accent}>02 / Services</Label><h2 className="mt-5 font-serif text-[clamp(3rem,7vw,7rem)] font-normal leading-[.82]">Choose your<br /><i style={{ color: accent }}>ritual.</i></h2></div><span className="hidden text-[8px] uppercase tracking-[.16em] opacity-35 sm:block">Prices shown in studio</span></div><div className="mt-14 border-t border-white/15">{config.services.map((s,i)=><button key={s.number} onClick={()=>setSelected(i)} className="grid w-full grid-cols-[35px_1fr_24px] gap-3 border-b border-white/15 py-7 text-left sm:grid-cols-[70px_1fr_30px] sm:py-9"><span className="font-mono text-[9px] opacity-30">{s.number}</span><span><strong className="font-serif text-2xl font-normal sm:text-4xl">{s.name}</strong>{selected===i&&<span className="mt-2 block max-w-xl text-sm leading-6 opacity-45">{s.description}</span>}</span>{selected===i?<X size={14}/>:<Plus size={14}/>}</button>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.05fr_.95fr]"><ImageBlock src={config.featureImage} className="aspect-[1.05] rounded-[24px] sm:rounded-[34px]" /><div className="flex flex-col justify-end"><Label accent={accent}>03 / The feeling</Label><h2 className="mt-6 font-serif text-[clamp(3rem,6vw,6rem)] font-normal leading-[.83]">{config.featureTitle}</h2><p className="mt-7 text-sm leading-7 opacity-50">{config.featureBody}</p><div className="mt-8 space-y-2">{config.featurePoints.map(p=><div key={p} className="border-b py-3 text-sm" style={{borderColor:line}}>{p}</div>)}</div></div></div></section>

      <ContactBlock config={config} accent={accent} line={line} submitted={submitted} setSubmitted={setSubmitted} title="Make time for yourself." />
    </>
  );
}

function EducationLayout({ config, accent, line, scrollTo, selected, setSelected, submitted, setSubmitted }: LayoutProps) {
  return (
    <>
      <section className="bg-[#e5e9df] px-5 pb-16 pt-8 sm:px-8 sm:pb-24 lg:px-14"><div className="mx-auto max-w-[1400px]"><div className="flex items-center justify-between text-[8px] uppercase tracking-[.2em] opacity-45"><span>Northstar Academy</span><span>New cohort / 2026</span></div><div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end"><div><Label accent={accent}>Career / Learning</Label><h1 className="mt-7 max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[.77] tracking-[-.08em]">{config.heroTitle}<br /><i className="font-serif font-normal" style={{color:accent}}>{config.heroAccent}</i></h1><p className="mt-7 max-w-xl text-sm leading-7 opacity-55">{config.heroBody}</p><button onClick={()=>scrollTo("programs")} className="mt-8 rounded-full px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em]" style={{background:accent,color:"#f3f0e8"}}>{config.primaryCta} ↗</button></div><ImageBlock src={config.heroImage} className="aspect-[1.05] rounded-[24px] sm:rounded-[34px]" label="Learn by doing" /></div></div></section>

      <section id="about" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto max-w-[1400px]"><Label accent={accent}>01 / The idea</Label><h2 className="mt-5 max-w-6xl text-[clamp(3.1rem,7vw,7.2rem)] font-medium leading-[.84] tracking-[-.07em]">{config.introTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 opacity-50">{config.introBody}</p><div className="mt-12 grid grid-cols-2 border-y sm:grid-cols-4" style={{borderColor:line}}>{config.stats.map(s=><div key={s.label} className="border-b p-5 sm:border-b-0 sm:border-r sm:last:border-r-0" style={{borderColor:line}}><div className="text-2xl">{s.value}</div><div className="mt-2 text-[8px] uppercase tracking-[.16em] opacity-40">{s.label}</div></div>)}</div></div></section>

      <section id="programs" className="bg-[#1f3a2e] px-5 py-24 text-[#f2f1e8] sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto max-w-[1400px]"><Label accent="#a5c19a">02 / Programs</Label><div className="mt-10 grid gap-3 lg:grid-cols-2">{config.services.map((s,i)=><button key={s.number} onClick={()=>setSelected(i)} className="rounded-[22px] border p-6 text-left sm:p-8" style={{borderColor:"rgba(255,255,255,.12)",background:selected===i?"rgba(255,255,255,.07)":"rgba(255,255,255,.025)"}}><div className="flex justify-between"><span className="font-mono text-[9px] opacity-30">{s.number}</span><ArrowUpRight size={14}/></div><h3 className="mt-14 text-2xl font-medium tracking-[-.04em] sm:text-4xl">{s.name}</h3><p className="mt-3 max-w-md text-sm leading-6 opacity-45">{s.description}</p><div className="mt-7 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[.16em]" style={{color:"#a5c19a"}}>{selected===i?<Check size={12}/>:<Clock3 size={12}/>} Explore program</div></button>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[.9fr_1.1fr]"><div className="flex flex-col justify-end"><Label accent={accent}>03 / Proof of work</Label><h2 className="mt-6 max-w-2xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[.84] tracking-[-.07em]">{config.featureTitle}</h2><p className="mt-7 max-w-lg text-sm leading-7 opacity-50">{config.featureBody}</p>{config.featurePoints.map(p=><div key={p} className="mt-3 flex items-center gap-3 text-sm"><Check size={14} style={{color:accent}} />{p}</div>)}</div><ImageBlock src={config.featureImage} className="aspect-[1.15] rounded-[24px] sm:rounded-[34px]" /></div></section>

      <ContactBlock config={config} accent={accent} line={line} submitted={submitted} setSubmitted={setSubmitted} title="Build your next chapter." />
    </>
  );
}

function ServiceLayout({ config, accent, line, scrollTo, selected, setSelected, submitted, setSubmitted }: LayoutProps) {
  return (
    <>
      <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-24 lg:px-14"><div className="mx-auto max-w-[1400px]"><div className="grid gap-8 lg:grid-cols-[1fr_.78fr] lg:items-end"><div><Label accent={accent}>Field & Form / Property care</Label><h1 className="mt-7 max-w-5xl text-[clamp(4rem,10vw,10rem)] font-medium leading-[.77] tracking-[-.08em]">{config.heroTitle}<br /><i className="font-serif font-normal" style={{color:accent}}>{config.heroAccent}</i></h1><p className="mt-7 max-w-xl text-sm leading-7 opacity-55">{config.heroBody}</p><div className="mt-8 flex flex-wrap gap-3"><button onClick={()=>scrollTo("contact")} className="rounded-full px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em]" style={{background:accent,color:"#fff9f1"}}>{config.primaryCta} ↗</button><button onClick={()=>scrollTo("services")} className="rounded-full border px-5 py-3 text-[9px] font-semibold uppercase tracking-[.16em]" style={{borderColor:line}}>{config.secondaryCta}</button></div></div><div className="relative"><ImageBlock src={config.heroImage} className="aspect-[.92] rounded-[24px] sm:rounded-[34px]" /><div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/25 bg-black/20 p-4 text-white backdrop-blur-md"><div><div className="text-[8px] uppercase tracking-[.15em] opacity-55">Response</div><div className="mt-1 text-sm">Usually within 60 min</div></div><Phone size={17}/></div></div></div></div></section>

      <section id="about" className="bg-[#252c27] px-5 py-24 text-[#f1eee6] sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.3fr_1fr]"><Label accent={accent}>01 / Why us</Label><div><h2 className="max-w-5xl text-[clamp(3.2rem,7vw,7.2rem)] font-medium leading-[.84] tracking-[-.07em]">{config.introTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 opacity-50">{config.introBody}</p><div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">{config.stats.map(s=><div key={s.label} className="rounded-2xl border p-5" style={{borderColor:"rgba(255,255,255,.1)"}}><div className="text-2xl">{s.value}</div><div className="mt-2 text-[8px] uppercase tracking-[.16em] opacity-40">{s.label}</div></div>)}</div></div></div></section>

      <section id="services" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14"><div className="mx-auto max-w-[1400px]"><Label accent={accent}>02 / Services</Label><h2 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[.84] tracking-[-.07em]">Tell us what<br /><i className="font-serif font-normal" style={{color:accent}}>needs doing.</i></h2><div className="mt-14 border-t" style={{borderColor:line}}>{config.services.map((s,i)=><button key={s.number} onClick={()=>setSelected(i)} className="grid w-full grid-cols-[35px_1fr_24px] gap-3 border-b py-7 text-left sm:grid-cols-[70px_1fr_30px] sm:py-9" style={{borderColor:line}}><span className="font-mono text-[9px] opacity-30">{s.number}</span><span><strong className="text-2xl font-medium tracking-[-.04em] sm:text-4xl">{s.name}</strong>{selected===i&&<span className="mt-2 block max-w-xl text-sm leading-6 opacity-50">{s.description}</span>}</span>{selected===i?<X size={14}/>:<Plus size={14}/>}</button>)}</div></div></section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.1fr_.9fr]"><ImageBlock src={config.featureImage} className="aspect-[1.15] rounded-[24px] sm:rounded-[34px]" /><div className="flex flex-col justify-end"><Label accent={accent}>03 / The standard</Label><h2 className="mt-6 text-[clamp(3rem,6vw,6rem)] font-medium leading-[.84] tracking-[-.07em]">{config.featureTitle}</h2><p className="mt-7 text-sm leading-7 opacity-50">{config.featureBody}</p>{config.featurePoints.map(p=><div key={p} className="mt-4 flex items-center gap-3 text-sm"><Check size={14} style={{color:accent}}/>{p}</div>)}</div></div></section>

      <ContactBlock config={config} accent={accent} line={line} submitted={submitted} setSubmitted={setSubmitted} title="Tell us what needs doing." />
    </>
  );
}

function ContactBlock({ config, accent, line, submitted, setSubmitted, title }: { config: DemoConfig; accent: string; line: string; submitted: boolean; setSubmitted: (v:boolean)=>void; title: string }) {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[26px] sm:rounded-[36px] lg:grid-cols-[1fr_.8fr]" style={{ background: accent, color: config.palette.page }}>
        <div className="p-7 sm:p-12 lg:p-16">
          <div className="text-[9px] font-semibold uppercase tracking-[.22em] opacity-60">05 / Next step</div>
          <h2 className="mt-6 max-w-4xl font-serif text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[.78] tracking-[-.065em]">{title}</h2>
          <p className="mt-7 max-w-lg text-sm leading-7 opacity-65">{config.closingBody}</p>
          <div className="mt-9 flex flex-wrap gap-3 text-[8px] font-semibold uppercase tracking-[.16em] opacity-60"><span className="flex items-center gap-2"><CalendarDays size={12}/> Easy booking</span><span className="flex items-center gap-2"><MapPin size={12}/> {config.location}</span></div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col justify-end gap-3 p-5 sm:p-8 lg:p-10" style={{ background: `${config.palette.page}22` }}>
          {submitted ? (
            <div className="rounded-[22px] border p-7" style={{ borderColor: `${config.palette.page}44` }}>
              <Check size={20} />
              <h3 className="mt-5 text-2xl font-medium tracking-[-.04em]">Request received.</h3>
              <p className="mt-2 text-sm leading-6 opacity-65">This is a front-end demo flow. A real implementation can connect this form to email, CRM, booking or WhatsApp.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-[9px] font-semibold uppercase tracking-[.16em] underline underline-offset-4">Send another request</button>
            </div>
          ) : (
            <>
              <input required placeholder="Your name" className="h-14 rounded-2xl border bg-transparent px-4 text-sm outline-none placeholder:opacity-45" style={{ borderColor: `${config.palette.page}44` }} />
              <input required type="email" placeholder="Email address" className="h-14 rounded-2xl border bg-transparent px-4 text-sm outline-none placeholder:opacity-45" style={{ borderColor: `${config.palette.page}44` }} />
              <textarea required placeholder="What would you like to book / ask about?" rows={4} className="rounded-2xl border bg-transparent p-4 text-sm outline-none placeholder:opacity-45" style={{ borderColor: `${config.palette.page}44` }} />
              <button type="submit" className="mt-1 flex h-14 items-center justify-between rounded-2xl px-5 text-[9px] font-semibold uppercase tracking-[.16em]" style={{ background: config.palette.page, color: accent }}>
                Send request <ArrowUpRight size={15} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
