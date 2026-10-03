"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Menu, X } from "lucide-react";

const dishes = [
  ["01","Charred Peach & Stracciatella","black garlic · basil oil","₹1,050"],
  ["02","Coal-Roasted Cauliflower","tahini · smoked chilli · lime","₹820"],
  ["03","Miso Butter Prawn","coconut · curry leaf · sourdough","₹1,480"],
  ["04","Burnt Milk Panna Cotta","sea salt · plum · olive oil","₹680"],
];

const gallery = [
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
];

export default function RestaurantDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [date, setDate] = useState("");
  const [party, setParty] = useState("2 guests");
  return (
    <main className="min-h-screen bg-[#eee9df] text-[#1b1a17]">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/15 text-white">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/demos" className="text-[9px] uppercase tracking-[0.2em] text-white/55 hover:text-white">← Demo collection</Link>
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <div className="font-serif text-2xl italic">Aster & Ash</div>
            <div className="mt-0.5 text-[7px] uppercase tracking-[0.3em] text-white/55">Modern dining · Guwahati</div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em]">{menuOpen ? <X size={17}/> : <Menu size={17}/>} <span className="hidden sm:inline">Menu</span></button>
        </div>
        {menuOpen && <nav className="absolute right-4 top-[68px] w-64 border border-white/15 bg-[#171613]/95 p-5 backdrop-blur-xl">
          {["Menu","The Kitchen","Private Dining","Journal","Reserve"].map(x=><a key={x} href={"#"+x.toLowerCase().replaceAll(" ","-")} onClick={()=>setMenuOpen(false)} className="block border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.18em] text-white/70 last:border-0 hover:text-white">{x}</a>)}
        </nav>}
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-[#191814] text-white sm:min-h-[850px]">
        <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90" className="absolute inset-0 h-full w-full object-cover opacity-70" alt="Aster and Ash dining room"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-black/15 to-black/45"/>
        <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-end px-5 pb-12 sm:min-h-[850px] sm:px-8 sm:pb-16 lg:px-12">
          <div className="mb-8 max-w-4xl">
            <div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-[#d8b88d]"><span className="h-px w-8 bg-[#d8b88d]"/> Open nightly · 5 pm — late</div>
            <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[.78] tracking-[-.065em]">Come hungry.<br/><span className="italic text-[#d8b88d]">Leave curious.</span></h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/65">Aster & Ash is a modern dining room built around fire, fermentation, bright produce and the pleasure of lingering at the table.</p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-[1fr_1fr_.7fr_auto]">
            <label className="bg-black/45 p-4 backdrop-blur-md"><span className="block text-[8px] uppercase tracking-[.2em] text-white/40">Date</span><input type="date" value={date} onChange={e=>setDate(e.target.value)} className="mt-2 w-full bg-transparent text-sm text-white outline-none"/></label>
            <label className="bg-black/45 p-4 backdrop-blur-md"><span className="block text-[8px] uppercase tracking-[.2em] text-white/40">Party</span><select value={party} onChange={e=>setParty(e.target.value)} className="mt-2 w-full bg-transparent text-sm text-white outline-none"><option className="bg-[#191814]">2 guests</option><option className="bg-[#191814]">4 guests</option><option className="bg-[#191814]">6 guests</option><option className="bg-[#191814]">8 guests</option></select></label>
            <div className="bg-black/45 p-4 backdrop-blur-md"><span className="block text-[8px] uppercase tracking-[.2em] text-white/40">Seating</span><span className="mt-2 block text-sm">Dining room</span></div>
            <button className="bg-[#d8b88d] px-7 py-5 text-[9px] font-semibold uppercase tracking-[.2em] text-[#1a1814]">Find a table ↗</button>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#1b1a17]/15 bg-[#d8b88d] py-3">
        <div className="flex min-w-max gap-10 text-[9px] font-semibold uppercase tracking-[.28em]"><span>Fire / Ferment / Forage</span><span>Seasonal menu</span><span>Walk-ins welcome at the bar</span><span>Private dining available</span><span>Fire / Ferment / Forage</span></div>
      </div>

      <section id="the-kitchen" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div><span className="text-[9px] uppercase tracking-[.25em] text-black/40">01 / The kitchen</span><h2 className="mt-5 font-serif text-5xl leading-[.9] tracking-[-.05em] sm:text-7xl">Good food<br/><i>needs a point of view.</i></h2></div>
          <div className="grid gap-8 sm:grid-cols-2">
            <p className="max-w-md text-base leading-8 text-black/60">Our menu changes with the market. The kitchen takes familiar ingredients somewhere less expected, using flame, smoke, acidity and fermentation to keep every plate alive.</p>
            <div className="border-l border-black/15 pl-6 text-[10px] uppercase tracking-[.18em] text-black/45"><span className="block text-4xl font-serif text-black">34</span> seats · intimate room<br/><span className="mt-5 block text-4xl font-serif text-black">5–late</span> dinner service</div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#1b1a17] px-5 py-24 text-[#eee9df] sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><span className="text-[9px] uppercase tracking-[.25em] text-[#d8b88d]">02 / Tonight</span><h2 className="mt-4 font-serif text-6xl leading-[.8] tracking-[-.06em] sm:text-8xl">The menu.</h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A short menu, written daily. Ask your server about off-menu plates and the wine pairing.</p></div>
          <div className="mt-16 border-t border-white/15">{dishes.map(([n,name,desc,price])=><div key={n} className="group grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[50px_1fr_auto] sm:items-baseline"><span className="text-[9px] tracking-[.2em] text-white/25">{n}</span><div><h3 className="font-serif text-2xl transition-colors group-hover:text-[#d8b88d] sm:text-3xl">{name}</h3><p className="mt-2 text-[9px] uppercase tracking-[.16em] text-white/35">{desc}</p></div><span className="text-sm text-[#d8b88d]">{price}</span></div>)}</div>
          <a href="#" className="mt-8 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.2em] text-white/55 hover:text-white">View full menu <ArrowUpRight size={14}/></a>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[500px] bg-[#c5b39a] p-8 sm:p-12 lg:p-20"><span className="text-[9px] uppercase tracking-[.25em] text-black/45">03 / The room</span><h2 className="mt-10 max-w-lg font-serif text-6xl leading-[.84] tracking-[-.06em] sm:text-8xl">Stay for<br/><i>one more.</i></h2><p className="mt-10 max-w-md text-sm leading-7 text-black/55">Low light, open kitchen, vinyl after dinner. The kind of room where the last course becomes the first round of drinks.</p></div>
        <div className="min-h-[500px] bg-cover bg-center" style={{backgroundImage:"url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85)"}}/>
      </section>

      <section id="private-dining" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-end"><div><span className="text-[9px] uppercase tracking-[.25em] text-black/40">04 / Private dining</span><h2 className="mt-5 max-w-2xl font-serif text-6xl leading-[.82] tracking-[-.06em] sm:text-8xl">Make the table<br/><i>your own.</i></h2></div><div><p className="max-w-xl text-base leading-8 text-black/60">For birthdays, launches, long lunches and nights worth keeping. Our private room seats up to 14 and can be arranged as a chef-led tasting or family-style dinner.</p><button className="mt-8 border border-black/20 px-6 py-4 text-[9px] font-semibold uppercase tracking-[.2em] hover:bg-black hover:text-white">Enquire about a private table ↗</button></div></div>
      </section>

      <section className="grid grid-cols-2 gap-2 bg-[#1b1a17] p-2 sm:grid-cols-3">{gallery.map((src,i)=><div key={src} className={"relative overflow-hidden "+(i===0?"col-span-2 aspect-[1.6] sm:col-span-1 sm:aspect-[.78]":"aspect-[.78]")}><img src={src} alt="" className="h-full w-full object-cover transition duration-700 hover:scale-105"/></div>)}</section>

      <footer className="bg-[#1b1a17] px-5 pb-8 pt-20 text-[#eee9df] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]"><div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row"><div><div className="font-serif text-4xl italic">Aster & Ash</div><p className="mt-3 text-[9px] uppercase tracking-[.2em] text-white/35">Modern dining · Guwahati</p></div><div className="grid grid-cols-2 gap-x-14 gap-y-3 text-[9px] uppercase tracking-[.18em] text-white/45"><a href="#menu">Menu</a><a href="#private-dining">Private dining</a><a href="#">Journal</a><a href="#">Instagram</a></div></div><div className="flex flex-col gap-3 pt-6 text-[8px] uppercase tracking-[.2em] text-white/25 sm:flex-row sm:justify-between"><span>Fictional concept by Ganlary Labs</span><Link href="/demos">← All demos</Link></div></div>
      </footer>
    </main>
  );
}
