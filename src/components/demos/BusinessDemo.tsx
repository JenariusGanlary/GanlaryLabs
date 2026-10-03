"use client";

import { ArrowDownRight, ArrowUpRight, Check, Menu, Plus, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type DemoConfig = {
  slug: string; brand: string; eyebrow: string; heroTitle: string; heroAccent: string;
  heroBody: string; primaryCta: string; secondaryCta: string; location: string;
  palette: { page:string; ink:string; muted:string; accent:string; accentSoft:string; panel:string; line:string };
  heroImage:string; introKicker:string; introTitle:string; introBody:string;
  stats:{value:string;label:string}[]; services:{number:string;name:string;description:string}[];
  featureTitle:string; featureBody:string; featureImage:string; featurePoints:string[];
  gallery:string[]; closingTitle:string; closingBody:string; nav:string[]; footerNote:string;
};

export default function BusinessDemo({ config }:{config:DemoConfig}) {
  const [menu,setMenu]=useState(false); const [selected,setSelected]=useState(0);
  const scrollTo=(id:string)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"});};
  const navId=(item:string)=>item.toLowerCase().replaceAll(" ","-");

  return (
    <main style={{background:config.palette.page,color:config.palette.ink}} className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{borderColor:config.palette.line,background:config.palette.page+"e8"}}>
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="/demos" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold" style={{background:config.palette.accent,color:config.palette.page}}>{config.brand.slice(0,2).toUpperCase()}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.17em]">{config.brand}</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {config.nav.map(item=><button key={item} onClick={()=>scrollTo(navId(item))} className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-55 transition-opacity hover:opacity-100">{item}</button>)}
          </nav>
          <Link href="/demos" className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] opacity-45 transition-opacity hover:opacity-100 md:block">← Demo Collection</Link>
          <button onClick={()=>setMenu(v=>!v)} className="flex h-10 w-10 items-center justify-center rounded-full border md:hidden" style={{borderColor:config.palette.line}} aria-label="Toggle menu">{menu?<X size={18}/>:<Menu size={18}/>}</button>
        </div>
        {menu&&<div className="border-t px-4 py-4 md:hidden" style={{borderColor:config.palette.line}}>
          {config.nav.map((item,i)=><button key={item} onClick={()=>scrollTo(navId(item))} className="flex w-full items-center justify-between border-b py-4 text-left text-[10px] font-semibold uppercase tracking-[0.16em]" style={{borderColor:config.palette.line}}>
            <span><span style={{color:config.palette.accent}} className="mr-3 font-mono">0{i+1}</span>{item}</span><ArrowUpRight size={13}/>
          </button>)}
          <button onClick={()=>scrollTo("contact")} className="mt-4 h-12 w-full rounded-full text-[10px] font-semibold uppercase tracking-[0.16em]" style={{background:config.palette.accent,color:config.palette.page}}>{config.primaryCta}</button>
        </div>}
      </header>

      <section className="relative px-4 pb-10 pt-7 sm:px-6 sm:pt-10 lg:px-10 lg:pt-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-5 flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.2em] opacity-45 sm:text-[9px]"><span>{config.eyebrow}</span><span>{config.location}</span></div>
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]" style={{background:config.palette.panel}}>
            <img src={config.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.82]"/>
            <div className="absolute inset-0" style={{background:"linear-gradient(90deg,"+config.palette.page+" 0%,"+config.palette.page+"c7 38%,transparent 78%)"}}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/>
            <div className="relative grid min-h-[620px] items-end p-6 sm:min-h-[680px] sm:p-10 lg:min-h-[760px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-16">
              <div className="max-w-[680px]">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm" style={{borderColor:config.palette.accent+"55",color:config.palette.accent,background:config.palette.page+"66"}}><Sparkles size={11}/>{config.eyebrow}</div>
                <h1 className="text-[clamp(3.3rem,11vw,8.8rem)] font-medium leading-[0.83] tracking-[-0.075em]">{config.heroTitle}<br/><span className="font-serif font-normal italic" style={{color:config.palette.accent}}>{config.heroAccent}</span></h1>
                <p className="mt-6 max-w-md text-sm leading-6 opacity-65 sm:text-base sm:leading-7">{config.heroBody}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button onClick={()=>scrollTo("contact")} className="inline-flex h-12 items-center gap-3 rounded-full px-5 text-[9px] font-semibold uppercase tracking-[0.16em]" style={{background:config.palette.ink,color:config.palette.page}}>{config.primaryCta}<ArrowUpRight size={13}/></button>
                  <button onClick={()=>scrollTo("services")} className="inline-flex h-12 items-center gap-3 rounded-full border px-5 text-[9px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm" style={{borderColor:config.palette.ink+"30"}}>{config.secondaryCta}<ArrowDownRight size={13}/></button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-auto max-w-[440px] translate-y-10">
                  <div className="rounded-[28px] border p-5 shadow-2xl backdrop-blur-xl" style={{borderColor:config.palette.page+"45",background:config.palette.page+"b8"}}>
                    <div className="flex items-center justify-between border-b pb-4" style={{borderColor:config.palette.line}}><span className="text-[9px] font-semibold uppercase tracking-[0.18em] opacity-50">Live interface</span><span className="flex items-center gap-2 text-[9px] font-semibold" style={{color:config.palette.accent}}><span className="h-1.5 w-1.5 rounded-full" style={{background:config.palette.accent}}/> Available</span></div>
                    <div className="py-7"><div className="text-[9px] uppercase tracking-[0.18em] opacity-40">Designed around</div><div className="mt-2 text-2xl font-medium tracking-[-0.04em]">{config.introKicker}</div></div>
                    <div className="grid grid-cols-2 gap-2">{config.stats.slice(0,2).map(s=><div key={s.label} className="rounded-2xl border p-4" style={{borderColor:config.palette.line}}><div className="text-xl font-medium">{s.value}</div><div className="mt-1 text-[8px] uppercase tracking-[0.16em] opacity-40">{s.label}</div></div>)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 overflow-hidden border-y py-4" style={{borderColor:config.palette.line}}>
            <div className="flex w-max gap-7 text-[8px] font-semibold uppercase tracking-[0.2em] opacity-50 sm:gap-10 sm:text-[9px]">{[...config.services,...config.services].map((item,i)=><span key={i} className="flex items-center gap-7 whitespace-nowrap">{item.name}<span style={{color:config.palette.accent}}>✦</span></span>)}</div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
          <div><div className="text-[9px] font-semibold uppercase tracking-[0.22em]" style={{color:config.palette.accent}}>01 / About</div></div>
          <div><h2 className="max-w-5xl text-[clamp(2.7rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.07em]">{config.introTitle}</h2><p className="mt-8 max-w-2xl text-base leading-7 opacity-55 sm:text-lg sm:leading-8">{config.introBody}</p>
            <div className="mt-12 grid grid-cols-2 border-y sm:grid-cols-4" style={{borderColor:config.palette.line}}>{config.stats.map(s=><div key={s.label} className="border-b p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0" style={{borderColor:config.palette.line}}><div className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">{s.value}</div><div className="mt-2 text-[8px] uppercase tracking-[0.17em] opacity-40">{s.label}</div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-end justify-between"><div><div className="text-[9px] font-semibold uppercase tracking-[0.22em]" style={{color:config.palette.accent}}>02 / What we do</div><h2 className="mt-3 text-4xl font-medium tracking-[-0.06em] sm:text-6xl">Designed around <span className="font-serif italic">need.</span></h2></div><span className="hidden text-[9px] uppercase tracking-[0.16em] opacity-35 sm:block">Scroll to explore</span></div>
          <div className="border-t" style={{borderColor:config.palette.line}}>{config.services.map((service,index)=><button key={service.number} onClick={()=>setSelected(index)} className="group grid w-full grid-cols-[34px_1fr_24px] items-start gap-4 border-b py-6 text-left transition-all sm:grid-cols-[70px_1fr_30px] sm:py-8" style={{borderColor:config.palette.line}}>
            <span className="pt-1 text-[9px] font-mono opacity-35">{service.number}</span><span><span className="block text-xl font-medium tracking-[-0.035em] sm:text-3xl">{service.name}</span><span className="mt-2 block max-w-2xl text-sm leading-6 opacity-45">{service.description}</span>{selected===index&&<span className="mt-5 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.17em]" style={{color:config.palette.accent}}><Check size={12}/> Built into the experience</span>}</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border opacity-40 transition-transform group-hover:rotate-45" style={{borderColor:config.palette.line}}>{selected===index?<X size={11}/>:<Plus size={11}/>}</span>
          </button>)}</div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-10 lg:pb-36">
        <div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-[28px] sm:rounded-[36px] lg:grid-cols-[1.05fr_0.95fr]" style={{background:config.palette.panel}}>
          <div className="relative min-h-[480px] sm:min-h-[620px]"><img src={config.featureImage} alt="" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/><div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8"><span className="text-[9px] uppercase tracking-[0.2em] opacity-70">Featured experience</span><ArrowUpRight size={18}/></div></div>
          <div className="p-7 sm:p-10 lg:p-14"><div className="text-[9px] font-semibold uppercase tracking-[0.22em]" style={{color:config.palette.accent}}>03 / The difference</div><h2 className="mt-6 text-[clamp(2.7rem,6vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">{config.featureTitle}</h2><p className="mt-7 text-sm leading-7 opacity-55 sm:text-base sm:leading-8">{config.featureBody}</p>
            <div className="mt-8 space-y-4 border-t pt-6" style={{borderColor:config.palette.line}}>{config.featurePoints.map(point=><div key={point} className="flex gap-3 text-sm opacity-70"><span style={{color:config.palette.accent}}>✦</span>{point}</div>)}</div>
            <button onClick={()=>scrollTo("contact")} className="mt-9 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em]" style={{color:config.palette.accent}}>Start a conversation <ArrowUpRight size={13}/></button>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-[1500px]"><div className="mb-8 flex items-end justify-between"><div><div className="text-[9px] font-semibold uppercase tracking-[0.22em]" style={{color:config.palette.accent}}>04 / Atmosphere</div><h2 className="mt-3 text-4xl font-medium tracking-[-0.06em] sm:text-6xl">A visual <span className="font-serif italic">language.</span></h2></div><span className="text-[9px] uppercase tracking-[0.15em] opacity-35">{String(config.gallery.length).padStart(2,"0")} frames</span></div>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">{config.gallery.map((image,i)=><div key={image} className={"relative overflow-hidden rounded-2xl "+(i===0?"col-span-2 row-span-2 aspect-square":"aspect-[0.82]")}><img src={image} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"/><div className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/20 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">0{i+1}</div></div>)}</div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36"><div className="mx-auto max-w-[1500px] overflow-hidden rounded-[28px] p-7 sm:rounded-[36px] sm:p-12 lg:p-20" style={{background:config.palette.accent,color:config.palette.page}}><div className="max-w-4xl"><div className="text-[9px] font-semibold uppercase tracking-[0.22em] opacity-65">05 / Next step</div><h2 className="mt-6 text-[clamp(3.3rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]">{config.closingTitle}</h2><p className="mt-7 max-w-xl text-sm leading-7 opacity-70 sm:text-base">{config.closingBody}</p><div className="mt-8 flex flex-wrap gap-3"><button className="inline-flex h-12 items-center gap-3 rounded-full px-5 text-[9px] font-semibold uppercase tracking-[0.16em]" style={{background:config.palette.page,color:config.palette.ink}}>{config.primaryCta}<ArrowUpRight size={13}/></button><button className="inline-flex h-12 items-center gap-3 rounded-full border border-black/15 px-5 text-[9px] font-semibold uppercase tracking-[0.16em]">{config.secondaryCta}</button></div></div></div></section>

      <footer className="border-t px-4 py-10 sm:px-6 lg:px-10" style={{borderColor:config.palette.line}}><div className="mx-auto flex max-w-[1500px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><Link href="/demos" className="text-[11px] font-semibold uppercase tracking-[0.18em]">{config.brand}</Link><p className="mt-3 max-w-sm text-xs leading-5 opacity-40">{config.footerNote}</p></div><div className="text-left sm:text-right"><div className="text-[8px] uppercase tracking-[0.18em] opacity-30">Concept website by</div><Link href="/" className="mt-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Ganlary Labs <ArrowUpRight size={11}/></Link></div></div></footer>
    </main>
  );
}
