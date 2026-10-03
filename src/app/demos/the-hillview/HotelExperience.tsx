"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown, Mountain } from "lucide-react";
import { rooms, experiences, dining, galleryImages, hillview, bookingOptions } from "./data";

function PhonePreview() {
  return (
    <div className="absolute right-[6%] top-[23%] z-20 hidden w-[178px] lg:block rotate-[2deg] rounded-[24px] border-[6px] border-[#20211e] bg-[#f4f0e7] p-[5px] shadow-[0_30px_70px_rgba(0,0,0,.45)] lg:w-[205px]">
      <div className="overflow-hidden rounded-[17px] bg-[#f4f0e7]">
        <div className="flex items-center justify-between px-3 py-3 text-[6px] font-semibold uppercase tracking-[.12em]"><span>THE HILLVIEW</span><Menu size={10}/></div>
        <div className="relative aspect-[.72] overflow-hidden">
          <img src={hillview.heroImage} alt="" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"/>
          <div className="absolute bottom-4 left-3 right-3 text-white"><div className="text-[5px] uppercase tracking-[.15em] text-white/60">Luxury stay in the heart of nature</div><div className="mt-1 font-serif text-[18px] leading-[.9]">A More<br/>Considered<br/>Escape.</div></div>
        </div>
        <div className="p-3"><div className="text-[6px] uppercase tracking-[.13em] text-black/40">Featured rooms</div><div className="mt-2 grid grid-cols-2 gap-1.5">{rooms.slice(0,2).map((r) => <img key={r.name} src={r.image} alt="" className="aspect-square w-full rounded-sm object-cover"/>)}</div><button className="mt-3 w-full bg-[#142b23] py-2 text-[6px] font-semibold uppercase tracking-[.1em] text-white">Check availability</button></div>
      </div>
    </div>
  );
}

export default function HotelExperience() {
  const [menu, setMenu] = useState(false);
  const [guests, setGuests] = useState("2 Adults");
  const [activeRoom, setActiveRoom] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="overflow-x-hidden bg-[#f5f1e8] text-[#172019]">
      <header className="absolute inset-x-0 top-0 z-50">
        <a href="/demos" className="fixed left-4 top-4 z-[80] flex items-center gap-2 border border-black/15 bg-[#f5f1e8]/85 px-3 py-2 text-[8px] font-semibold uppercase tracking-[.16em] text-[#172019] backdrop-blur-md transition hover:bg-[#111814] hover:text-white sm:left-6 sm:top-6" aria-label="Back to demos"><span aria-hidden="true">←</span><span>Back to demos</span></a>
        
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-6">
          <a href="#top" className="font-serif text-[18px] tracking-[-.04em] sm:text-[21px]">THE HILLVIEW</a>
          <nav className="hidden items-center gap-7 text-[8px] font-medium uppercase tracking-[.1em] lg:flex"><a href="#rooms">Rooms</a><a href="#dining">Dining</a><a href="#experiences">Experiences</a><a href="#gallery">Gallery</a><a href="#location">About</a></nav>
          <div className="flex items-center gap-2"><a href="#booking" className="hidden bg-[#111814] px-5 py-3 text-[8px] font-semibold uppercase tracking-[.12em] text-white sm:block">Book Now</a><button onClick={() => setMenu(!menu)} className="flex h-9 w-9 items-center justify-center rounded-sm border border-black/10 bg-white/60 lg:hidden" aria-label="Menu">{menu ? <X size={15}/> : <Menu size={15}/>}</button></div>
        </div>
        <div className={`fixed inset-0 bg-[#f5f1e8] px-6 pt-24 transition-opacity lg:hidden ${menu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
          <div className="font-serif text-4xl">THE HILLVIEW</div><div className="mt-7 border-t border-black/10">{["Rooms","Dining","Experiences","Gallery","Location"].map((x)=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setMenu(false)} className="flex border-b border-black/10 py-5 text-xl">{x}<ArrowUpRight className="ml-auto" size={16}/></a>)}</div>
        </div>
      </header>

      <section id="top" className="relative min-h-[760px] overflow-hidden sm:min-h-[850px] lg:min-h-[900px]">
        <img src={hillview.heroImage} alt="The Hillview mountain retreat" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/5"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"/>
        <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-end px-5 pb-7 pt-32 text-white sm:min-h-[850px] sm:px-8 lg:min-h-[900px] lg:px-12 lg:pb-10">
          <div className="max-w-[650px]"><div className="flex items-center gap-2 text-[8px] uppercase tracking-[.18em] text-white/65"><span className="h-px w-6 bg-white/60"/>Luxury stay in the heart of nature</div><h1 className="mt-5 max-w-[620px] font-serif text-[clamp(4rem,8vw,7.6rem)] leading-[.82] tracking-[-.065em]">A More<br/><em className="font-normal">Considered Escape.</em></h1><p className="mt-6 max-w-md text-[11px] leading-5 text-white/70 sm:text-[13px]">A private mountain retreat surrounded by pine forests, quiet valleys, and the slower rhythm of the hills.</p></div>
          <div className="relative z-30 mt-8 max-w-[760px] overflow-hidden rounded-[3px] bg-white text-[#172019] shadow-2xl sm:mt-10"><div className="grid sm:grid-cols-[1fr_1fr_.8fr_auto]">
            <label className="border-b border-black/10 p-4 sm:border-b-0 sm:border-r"><span className="block text-[7px] uppercase tracking-[.15em] text-black/40">Check In</span><input type="date" defaultValue="2026-10-12" className="mt-2 w-full bg-transparent text-[11px] outline-none"/></label>
            <label className="border-b border-black/10 p-4 sm:border-b-0 sm:border-r"><span className="block text-[7px] uppercase tracking-[.15em] text-black/40">Check Out</span><input type="date" defaultValue="2026-10-15" className="mt-2 w-full bg-transparent text-[11px] outline-none"/></label>
            <label className="border-b border-black/10 p-4 sm:border-b-0 sm:border-r"><span className="block text-[7px] uppercase tracking-[.15em] text-black/40">Guests</span><span className="relative block"><select value={guests} onChange={(e)=>setGuests(e.target.value)} className="mt-2 w-full appearance-none bg-transparent text-[11px] outline-none">{bookingOptions.guestOptions.map(x=><option key={x}>{x}</option>)}</select><ChevronDown size={11} className="pointer-events-none absolute right-0 top-2 text-black/40"/></span></label>
            <a href="#rooms" className="flex min-h-[58px] items-center justify-center bg-[#111814] px-6 text-[8px] font-semibold uppercase tracking-[.12em] text-white hover:bg-[#244438]">Check Availability</a>
          </div></div>
          <div className="mt-5 flex max-w-[760px] justify-between text-[7px] uppercase tracking-[.16em] text-white/55"><span>Arunachal Pradesh / 4,900 ft</span><span>Scroll to explore ↓</span></div>
          <PhonePreview/>
        </div>
      </section>

      <section id="rooms" className="bg-[#f5f1e8] px-5 py-16 sm:px-8 md:py-24 lg:px-12"><div className="mx-auto max-w-[1500px]">
        <div className="flex items-end justify-between border-b border-black/10 pb-5"><div><div className="text-[8px] uppercase tracking-[.18em] text-black/40">The Hillview / 01</div><h2 className="mt-3 font-serif text-4xl tracking-[-.045em] sm:text-6xl">Featured Rooms</h2></div><a href="#booking" className="hidden text-[8px] uppercase tracking-[.13em] text-black/55 sm:block">View All Rooms →</a></div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">{rooms.map((r,i)=><button key={r.name} onClick={()=>setActiveRoom(i)} className="group text-left"><div className="relative aspect-[1.42] overflow-hidden rounded-[3px] bg-black"><img src={r.image} alt={r.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/><span className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[.15em] text-white/75">{r.number}</span></div><div className="mt-3 flex justify-between gap-3"><div><h3 className="font-serif text-[20px]">{r.name.replace("The ","")}</h3><p className="mt-1 text-[8px] text-black/45">{r.type} · {r.guests}</p></div><span className="text-[8px] text-black/50">from {r.price} / night</span></div></button>)}</div>
      </div></section>

      <section className="bg-[#e6e0d5] px-5 py-16 sm:px-8 md:py-24 lg:px-12"><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[.72fr_.28fr] lg:items-end"><div><div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">A place to slow down / 02</div><h2 className="mt-4 max-w-4xl font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[.84] tracking-[-.06em]">Quiet rooms.<br/><em className="font-normal text-[#536c5d]">Long mornings.</em></h2></div><p className="max-w-xs text-[11px] leading-5 text-black/50">Designed around the landscape, The Hillview gives you space to disconnect, breathe, and spend a little longer outside.</p></div><div className="mx-auto mt-10 max-w-[1500px] overflow-hidden rounded-[3px]"><img src={galleryImages[4].src} alt="The Hillview" className="aspect-[16/7] w-full object-cover"/></div></section>

      <section id="experiences" className="bg-[#142b23] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="flex items-end justify-between"><div><div className="text-[8px] uppercase tracking-[.18em] text-[#c8aa7c]">Experiences / 03</div><h2 className="mt-4 font-serif text-5xl tracking-[-.05em] sm:text-7xl">The hills,<br/><em className="font-normal text-[#d9c6a4]">your way.</em></h2></div><Mountain className="hidden text-[#c8aa7c] sm:block" size={38} strokeWidth={1}/></div><div className="mt-10 grid gap-4 md:grid-cols-3">{experiences.map(x=><article key={x.title}><div className="aspect-[.82] overflow-hidden rounded-[2px]"><img src={x.image} alt={x.title} className="h-full w-full object-cover transition duration-700 hover:scale-105"/></div><div className="mt-4 flex justify-between text-[7px] uppercase tracking-[.14em] text-white/40"><span>{x.number} / {x.duration}</span><span>{x.availability}</span></div><h3 className="mt-2 font-serif text-2xl">{x.title}</h3><p className="mt-2 text-[10px] leading-5 text-white/45">{x.description}</p></article>)}</div></div></section>

      <section id="dining" className="bg-[#f5f1e8] px-5 py-16 sm:px-8 md:py-24 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="grid gap-10 lg:grid-cols-[.38fr_.62fr] lg:items-center"><div><div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">Dining / 04</div><h2 className="mt-4 font-serif text-[clamp(3.2rem,6vw,6.5rem)] leading-[.84] tracking-[-.06em]">{dining.title}<br/><em className="font-normal text-[#536c5d]">{dining.titleAccent}</em></h2><p className="mt-5 max-w-md text-[11px] leading-6 text-black/50">{dining.description}</p><div className="mt-7 space-y-2 border-t border-black/10 pt-4">{dining.hours.map(x=><div key={x.label} className="flex justify-between border-b border-black/10 py-2 text-[8px] uppercase tracking-[.12em]"><span>{x.label}</span><span className="text-black/40">{x.time}</span></div>)}</div></div><div className="relative"><img src={dining.image} alt="Dining" className="aspect-[1.2] w-full object-cover rounded-[3px]"/><div className="absolute bottom-4 left-4 bg-[#f5f1e8] px-4 py-3"><div className="text-[7px] uppercase tracking-[.15em] text-black/40">At the table</div><div className="mt-1 font-serif text-lg">Slow food. Long evenings.</div></div></div></div></div></section>

      <section id="gallery" className="bg-[#ddd6c9] px-5 py-16 sm:px-8 md:py-24 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">Gallery / 05</div><div className="mt-4 flex items-end justify-between"><h2 className="font-serif text-5xl tracking-[-.05em] sm:text-7xl">Inside<br/><em className="font-normal text-[#536c5d]">& around.</em></h2><span className="hidden text-[8px] uppercase tracking-[.14em] text-black/40 sm:block">A visual record of the stay</span></div><div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">{galleryImages.slice(0,8).map((x,i)=><img key={i} src={x.src} alt={x.alt} className={`w-full object-cover ${i===0||i===5?"aspect-[.8]":"aspect-square"}`}/>)}</div></div></section>

      <section id="location" className="bg-[#f5f1e8] px-5 py-16 sm:px-8 md:py-24 lg:px-12"><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-2 lg:items-center"><div><div className="text-[8px] uppercase tracking-[.18em] text-[#536c5d]">Location / 06</div><h2 className="mt-4 font-serif text-[clamp(3.3rem,6vw,6.5rem)] leading-[.84] tracking-[-.06em]">Far enough<br/><em className="font-normal text-[#536c5d]">to feel away.</em></h2><p className="mt-6 max-w-md text-[11px] leading-6 text-black/50">{hillview.description} Set in the hills of Arunachal Pradesh, the retreat is a quieter base for forests, valleys, villages and long drives.</p><div className="mt-7 grid grid-cols-3 border-y border-black/10 py-4 text-[8px] uppercase tracking-[.1em] text-black/45"><span>4,900 ft</span><span>Private hills</span><span>Sagalee</span></div></div><img src={galleryImages[7].src} alt="Mountain landscape" className="aspect-[1.2] w-full object-cover rounded-[3px]"/></div></section>

      <section id="booking" className="bg-[#142b23] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="grid gap-10 lg:grid-cols-[.65fr_.35fr] lg:items-end"><div><div className="text-[8px] uppercase tracking-[.18em] text-[#c8aa7c]">Reservations / 07</div><h2 className="mt-4 font-serif text-[clamp(3.8rem,7vw,7rem)] leading-[.82] tracking-[-.06em]">Stay a little<br/><em className="font-normal text-[#d9c6a4]">longer.</em></h2><p className="mt-6 max-w-md text-[11px] leading-6 text-white/45">This concept is ready to connect to a hotel PMS or booking engine.</p></div><div className="rounded-[3px] border border-white/10 bg-white/[.03] p-4"><div className="grid grid-cols-2 gap-2"><select className="bg-white/5 p-3 text-[9px] text-white outline-none"><option className="bg-[#142b23]">The Forest Room</option>{rooms.slice(1).map(x=><option key={x.name} className="bg-[#142b23]">{x.name}</option>)}</select><select className="bg-white/5 p-3 text-[9px] text-white outline-none">{bookingOptions.guestOptions.map(x=><option key={x} className="bg-[#142b23]">{x}</option>)}</select></div><button onClick={()=>setSubmitted(true)} className="mt-2 flex w-full items-center justify-between bg-[#e5d7be] px-4 py-4 text-[8px] font-semibold uppercase tracking-[.12em] text-[#172019]">Request a stay <ArrowUpRight size={14}/></button>{submitted&&<div className="mt-3 text-[9px] text-white/45">Request received — demo interaction complete.</div>}</div></div></div></section>

      <footer className="bg-[#0e1713] px-5 py-12 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><div className="font-serif text-4xl sm:text-5xl">THE HILLVIEW</div><div className="mt-2 text-[8px] uppercase tracking-[.15em] text-white/30">Luxury stay in the heart of nature</div></div><div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[8px] uppercase tracking-[.12em] text-white/45"><a href="#rooms">Rooms</a><a href="#dining">Dining</a><a href="#experiences">Experiences</a><a href="#gallery">Gallery</a></div></div><div className="mt-10 border-t border-white/10 pt-4 text-[7px] uppercase tracking-[.15em] text-white/25">Concept website / Built by Ganlary Labs · 2026</div></div></footer>
    </main>
  );
}
