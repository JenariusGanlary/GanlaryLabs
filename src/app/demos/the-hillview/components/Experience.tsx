"use client";

import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="overflow-hidden bg-[#11120f] text-[#f3efe7]"
    >
      {/* =========================
          SECTION INTRO
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c8aa7c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c8aa7c]">
                Experiences / 05
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.055em]">
              Days at
              <br />
              <em className="font-serif text-[#d8c19b]">
                The Hillview.
              </em>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-white/55 md:text-base">
              Your stay doesn't need an itinerary. Choose a few things you
              would like to experience, and let the rest of the day unfold
              naturally.
            </p>

            <div className="mt-8 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/35">
              Curated by the house
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          EXPERIENCE LIST
      ========================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
          {experiences.map((experience, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={experience.number}
                className="grid border-b border-white/10 lg:grid-cols-2"
              >
                {/* IMAGE */}
                <div
                  className={`relative aspect-[4/3] min-h-[300px] overflow-hidden sm:min-h-[380px] md:aspect-auto md:min-h-[500px] ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <div className="absolute left-6 top-6 md:left-8 md:top-8">
                    <span className="border border-white/25 bg-black/15 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                      Experience {experience.number}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <div className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                      The Hillview
                    </div>

                    <h3 className="mt-2 text-2xl font-light tracking-[-0.03em] text-white md:text-3xl">
                      {experience.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`flex flex-col justify-between bg-[#171814] p-6 sm:p-7 md:p-10 lg:p-14 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#c8aa7c]">
                      <span>Experience {experience.number}</span>
                      <span className="h-px w-7 bg-[#c8aa7c]" />
                      <span>Guest Activity</span>
                    </div>

                    <h3 className="mt-6 max-w-lg sm:mt-8 text-[clamp(2.5rem,4vw,4.5rem)] font-light leading-[0.9] tracking-[-0.05em]">
                      {experience.title}
                    </h3>

                    <p className="mt-5 max-w-lg sm:mt-7 text-sm leading-7 text-white/50 md:text-base">
                      {experience.description}
                    </p>

                    {/* EXPERIENCE META */}
                    <div className="mt-8 grid max-w-lg grid-cols-1 border-y border-white/10 sm:grid-cols-2 border-y border-white/10">
                      <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r">
                        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
                          <Clock3 size={13} strokeWidth={1.2} />
                          Duration
                        </div>

                        <div className="mt-2 text-sm text-white/70">
                          2–3 Hours
                        </div>
                      </div>

                      <div className="py-5 sm:pl-5">
                        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/30">
                          <MapPin size={13} strokeWidth={1.2} />
                          Location
                        </div>

                        <div className="mt-2 text-sm text-white/70">
                          Around The Property
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-9 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                          Availability
                        </div>

                        <div className="mt-2 text-xs text-white/60">
                          Arrange with our team
                        </div>
                      </div>

                      <a
                        href="#booking"
                        className="flex w-full items-center justify-center gap-3 border border-[#c8aa7c]/60 px-5 py-3.5 sm:w-fit text-[9px] uppercase tracking-[0.18em] text-[#d8c19b] transition-all duration-300 hover:bg-[#c8aa7c] hover:text-[#171712]"
                      >
                        Arrange Experience
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.3}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* =========================
          CLOSING NOTE
      ========================== */}
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-6 md:px-10 md:py-20 lg:px-14">
        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-[9px] uppercase tracking-[0.25em] text-white/35">
            Nothing is scheduled
          </div>

          <p className="max-w-lg text-xs leading-6 text-white/35 md:text-right">
            These are invitations, not itineraries. Tell us what interests
            you and we'll take care of the details.
          </p>
        </div>
      </div>
    </section>
  );
}