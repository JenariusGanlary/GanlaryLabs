"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "../data";

export default function Gallery() {
  const featured = galleryImages[0];
  const secondary = galleryImages.slice(1, 5);
  const remaining = galleryImages.slice(5);

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#11120f] text-[#f3efe7]"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c8aa7c]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c8aa7c]">
                Gallery / 07
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.055em]">
              See the
              <br />
              <em className="font-serif text-[#d8c19b]">
                place.
              </em>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-white/50 md:text-base md:leading-8">
              A glimpse into the rooms, spaces, meals, and landscapes that
              make a stay at The Hillview feel different.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa7c]" />
              The Hillview / Arunachal Pradesh
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="group relative aspect-[16/8] min-h-[420px] overflow-hidden md:min-h-[560px]"
        >
          <img
            src={featured.src}
            alt={featured.alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/5" />

          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between md:bottom-9 md:left-9 md:right-9">
            <div>
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                {featured.category}
              </div>

              <h3 className="mt-2 max-w-xl text-2xl font-light tracking-[-0.03em] text-white md:text-4xl">
                A place designed around the landscape.
              </h3>
            </div>

            <div className="hidden border border-white/20 bg-black/15 px-4 py-3 backdrop-blur-sm md:block">
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                01 / {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          EDITORIAL GRID
      ====================================================== */}
      <div className="mx-auto max-w-[1500px] px-6 py-5 md:px-10 md:py-6 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2">
          {secondary.map((image, index) => (
            <motion.article
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className={`group relative overflow-hidden ${
                index === 0 || index === 3
                  ? "aspect-[4/3]"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.22em] text-white/50">
                    {image.category}
                  </div>

                  <div className="mt-1 text-sm text-white/80">
                    {image.alt}
                  </div>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 bg-black/10 text-white/70 backdrop-blur-sm transition-all duration-300 group-hover:border-[#c8aa7c] group-hover:bg-[#c8aa7c] group-hover:text-[#171712]">
                  <ArrowUpRight size={14} strokeWidth={1.3} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =====================================================
          LOWER FEATURE STRIP
      ====================================================== */}
      {remaining.length > 0 && (
        <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-5 md:px-10 md:pb-32 lg:px-14">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {remaining.map((image, index) => (
              <motion.article
                key={`${image.src}-remaining-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden ${
                  index === 0
                    ? "aspect-[16/10] lg:aspect-[1.35/1]"
                    : "aspect-[16/10] lg:aspect-[0.95/1]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <div className="text-[8px] uppercase tracking-[0.22em] text-white/50">
                    {image.category}
                  </div>

                  <div className="mt-2 max-w-md text-lg font-light text-white md:text-2xl">
                    {image.alt}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================
          CLOSING
      ====================================================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div className="text-[8px] uppercase tracking-[0.25em] text-white/30">
            The Hillview / A mountain retreat
          </div>

          <a
            href="#booking"
            className="group flex w-fit items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#d8c19b]"
          >
            Plan your stay

            <span className="flex h-8 w-8 items-center justify-center border border-[#c8aa7c]/40 transition-all duration-300 group-hover:bg-[#c8aa7c] group-hover:text-[#171712]">
              <ArrowUpRight size={13} strokeWidth={1.3} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}