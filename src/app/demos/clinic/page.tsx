"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, ChevronDown, Menu, X } from "lucide-react";

const treatments = [
  ["01","Smile design","A considered approach to shape, colour and balance.","From ₹18,000"],
  ["02","Clear aligners","A quieter way to straighten your smile.","From ₹65,000"],
  ["03","Implant dentistry","Restorative care planned around you.","From ₹42,000"],
  ["04","Preventive care","Thoughtful dentistry for long-term health.","From ₹1,200"],
];

export default function ClinicDemo() {
  const [open, setOpen] = useState<number | null>(0);
  const [menu, setMenu] = useState(false);
  return (
    <main className="min-h-screen bg-[#f3f5ef] text-[#16322d]">
      <header className="relative z-40 border-b border-[#16322d]/10 bg-[#f3f5ef]">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/demos" className="text-[8px] uppercase tracking-[.2em] text-[#16322d]/45">← Demos</Link>
          <Link href="#" className="text-center"><span className="block font-serif text-xl tracking-[-.03em]">Northline</span><span className="block text-[7px] uppercase tracking-[.28em] text-[#16322d]/45">Dental Studio</span></Link>
          <button onClick={()=>setMenu(!menu)} className="flex items-center gap-2 text-[9px] uppercase tracking-[.18em]">{menu?<X size={17}/>:<Menu size={17}/>}<span className="hidden sm:inline">Menu</span></button>
        </div>
        {menu && <div className="absolute inset-x-4 top-[68px] border border-[#16322d]/10 bg-[#f3f5ef] p-5 shadow-2xl"><div className="grid sm:grid-cols-2">{["Treatments","Our clinicians","The studio","Patient notes","Book a consultation"].map((x)=><a key={x} href={"#"+x.toLowerCase().replaceAll(" ","-")} onClick={()=>setMenu(false)} className="border-b border-[#16322d]/10 py-4 text-[10px] uppercase tracking-[.16em]">{x}</a>)}</div></div>}
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-6 sm:px-8 md:py-8 lg:grid-cols-[1.1fr_.9fr] lg:px-12">
        <div className="relative min-h-[620px] overflow-hidden bg-[#dce6de] sm:min-h-[760px]">
          <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=88" alt="Calm dental studio" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#102d28]/55 to-transparent"/>
          <div className="absolute left-5 top-5 border border-white/30 px-3 py-2 text-[7px] uppercase tracking-[.18em] text-white">Private dental studio · 2026</div>
          <div className="absolute inset-x-5 bottom-5 text-white sm:bottom-8 sm:left-8"><p className="max-w-xl font-serif text-[clamp(3.6rem,8vw,7.4rem)] leading-[.78] tracking-[-.06em]">Dentistry,<br/><i>rethought.</i></p></div>
        </div>
        <div className="flex flex-col justify-between bg-[#e3e9e1] p-6 sm:p-10 lg:p-12">
          <div><div className="flex items-center justify-between text-[8px] uppercase tracking-[.2em] text-[#16322d]/45"><span>01 / Northline</span><span>Guwahati</span></div><p className="mt-20 max-w-md text-[clamp(1.45rem,3vw,2.3rem)] leading-[1.2] tracking-[-.03em]">A private dental studio for people who want care that feels as considered as the result.</p></div>
          <div className="mt-16 border-t border-[#16322d]/15 pt-6"><div className="grid grid-cols-2 gap-5"><div><span className="font-serif text-4xl">12+</span><p className="mt-1 text-[8px] uppercase tracking-[.15em] text-[#16322d]/45">Years clinical practice</p></div><div><span className="font-serif text-4xl">4.9</span><p className="mt-1 text-[8px] uppercase tracking-[.15em] text-[#16322d]/45">Patient rating</p></div></div><a href="#booking" className="mt-8 flex items-center justify-between border border-[#16322d] px-5 py-4 text-[9px] font-semibold uppercase tracking-[.18em]">Book a consultation <ArrowRight size={15}/></a></div>
        </div>
      </section>

      <div className="border-y border-[#16322d]/10 bg-[#d7e1d8] py-3"><div className="flex min-w-max gap-12 px-5 text-[8px] font-semibold uppercase tracking-[.26em] text-[#16322d]/55"><span>Cosmetic dentistry</span><span>Implants</span><span>Clear aligners</span><span>Preventive care</span><span>Gentle appointments</span><span>Cosmetic dentistry</span></div></div>

      <section id="treatments" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><span className="text-[8px] uppercase tracking-[.24em] text-[#16322d]/45">02 / Treatments</span><h2 className="mt-5 max-w-md font-serif text-6xl leading-[.84] tracking-[-.06em] sm:text-8xl">Care that<br/><i>looks ahead.</i></h2></div><div className="border-t border-[#16322d]/15">{treatments.map(([n,name,desc,price],i)=><div key={name} className="border-b border-[#16322d]/15"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-5 py-7 text-left"><span className="text-[8px] tracking-[.2em] text-[#16322d]/35">{n}</span><span className="flex-1 font-serif text-2xl sm:text-3xl">{name}</span>{open===i?<ChevronDown size={17}/>:<ChevronDown size={17} className="-rotate-90" />}</button>{open===i&&<div className="grid gap-5 pb-7 pl-7 sm:grid-cols-[1fr_auto]"><p className="max-w-md text-sm leading-7 text-[#16322d]/55">{desc}</p><span className="text-[9px] uppercase tracking-[.15em] text-[#16322d]/45">{price}</span></div>}</div>)}</div></div>
      </section>

      <section id="our-clinicians" className="bg-[#16322d] px-5 py-24 text-[#edf1e9] sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><span className="text-[8px] uppercase tracking-[.24em] text-[#a9c0ae]">03 / The people</span><h2 className="mt-5 font-serif text-6xl leading-[.82] tracking-[-.06em] sm:text-8xl">Meet the<br/><i>clinicians.</i></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">Experienced hands, conservative treatment plans and enough time to explain what happens next.</p></div>
          <div className="mt-16 grid gap-3 md:grid-cols-2"><div className="group relative min-h-[480px] overflow-hidden bg-[#29463f]"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85" alt="Clinician" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#102a25] to-transparent"/><div className="absolute inset-x-6 bottom-6"><div className="font-serif text-3xl">Dr. Mira Das</div><div className="mt-1 text-[8px] uppercase tracking-[.18em] text-white/55">Prosthodontics · Smile design</div></div></div><div className="group relative min-h-[480px] overflow-hidden bg-[#29463f]"><img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=85" alt="Dental consultation" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#102a25] to-transparent"/><div className="absolute inset-x-6 bottom-6"><div className="font-serif text-3xl">Dr. Arjun Mehta</div><div className="mt-1 text-[8px] uppercase tracking-[.18em] text-white/55">Implantology · Restorative care</div></div></div></div>
        </div>
      </section>

      <section id="patient-notes" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="grid gap-12 lg:grid-cols-[1fr_1fr]"><div><span className="text-[8px] uppercase tracking-[.24em] text-[#16322d]/45">04 / Patient notes</span><blockquote className="mt-8 max-w-2xl font-serif text-5xl leading-[.9] tracking-[-.05em] sm:text-7xl">“The whole appointment felt calm, private and completely unhurried.”</blockquote><p className="mt-7 text-[9px] uppercase tracking-[.18em] text-[#16322d]/40">— A patient, after smile design</p></div><div className="self-end border-l border-[#16322d]/15 pl-6 text-sm leading-7 text-[#16322d]/55">We believe trust is built in the details: a clear plan, honest options, comfortable rooms and a clinician who listens before they recommend.</div></div></section>

      <section id="booking" className="bg-[#d1ddd2] px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-[1440px]"><div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><span className="text-[8px] uppercase tracking-[.24em] text-[#16322d]/45">05 / Consultation</span><h2 className="mt-5 max-w-3xl font-serif text-6xl leading-[.82] tracking-[-.06em] sm:text-8xl">Start with<br/><i>a conversation.</i></h2></div><div className="bg-[#f3f5ef] p-6 sm:p-8"><div className="grid gap-3 sm:grid-cols-2"><input placeholder="Your name" className="border-b border-[#16322d]/15 bg-transparent px-0 py-4 text-sm outline-none"/><input placeholder="Phone / email" className="border-b border-[#16322d]/15 bg-transparent px-0 py-4 text-sm outline-none"/><select className="border-b border-[#16322d]/15 bg-transparent py-4 text-sm outline-none sm:col-span-2"><option>What would you like to discuss?</option><option>Smile design</option><option>Aligners</option><option>Implants</option><option>General care</option></select></div><button className="mt-7 flex w-full items-center justify-between bg-[#16322d] px-5 py-4 text-[9px] font-semibold uppercase tracking-[.18em] text-white">Request consultation <ArrowRight size={15}/></button><p className="mt-4 flex items-center gap-2 text-[8px] uppercase tracking-[.15em] text-[#16322d]/40"><Check size={12}/> We&apos;ll reply within one working day.</p></div></div></div></section>

      <footer className="bg-[#102823] px-5 py-10 text-[#edf1e9] sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><div className="font-serif text-3xl">Northline</div><div className="mt-1 text-[7px] uppercase tracking-[.25em] text-white/35">Dental Studio · Guwahati</div></div><div className="flex flex-wrap gap-5 text-[8px] uppercase tracking-[.17em] text-white/45"><a href="#treatments">Treatments</a><a href="#our-clinicians">Clinicians</a><a href="#booking">Book</a><Link href="/demos">All demos</Link></div><span className="text-[8px] text-white/25">Fictional concept · Ganlary Labs</span></div></footer>
    </main>
  );
}
