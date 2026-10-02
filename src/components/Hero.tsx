"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import SystemInterface from "./SystemInterface";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="hero-shell">
      {/* ========================================================
          BACKGROUND
      ========================================================= */}

      <div className="hero-dot-field" />
      <div className="hero-vignette" />

      {/* Very subtle ambient copper glow */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[42%] top-[35%] h-[500px] w-[500px] rounded-full bg-[var(--accent)] opacity-[0.025] blur-[150px]"
        animate={{
          x: [0, 25, 0],
          y: [0, -18, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="site-container relative z-10 flex min-h-[inherit] items-center">
        <div className="grid w-full items-center gap-16 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
          {/* ====================================================
              LEFT
          ===================================================== */}

          <div className="relative z-20">
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[var(--accent)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Ganlary Labs / AI Engineering Studio
              </span>
            </motion.div>

            {/* ==================================================
                HEADLINE
            =================================================== */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.08,
                ease,
              }}
              className="max-w-[720px] text-[clamp(4rem,7vw,7.7rem)] font-medium leading-[0.84] tracking-[-0.075em] text-[var(--foreground)]"
            >
              We build
              <br />

              <span className="font-serif italic font-normal text-[var(--accent)]">
                intelligent
              </span>
              <br />

              systems.
            </motion.h1>

            {/* ==================================================
                DESCRIPTION
            =================================================== */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease,
              }}
              className="mt-8 max-w-[610px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px]"
            >
              We design and engineer websites, AI-powered software,
              automation, and digital systems that turn complex
              business problems into something that works.
            </motion.p>

            {/* ==================================================
                ACTIONS
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease,
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {/* START A PROJECT */}

              <a
                href="#contact"
                className="group inline-flex h-14 items-center gap-5 rounded-full bg-[var(--foreground)] px-7 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--background)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_12px_45px_rgba(201,130,91,0.16)]"
              >
                <span>Start a Project</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--background)]/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                  />
                </span>
              </a>

              {/* EXPLORE SYSTEMS */}

              <a
                href="#systems"
                className="group inline-flex h-14 items-center gap-4 rounded-full border border-[var(--border)] px-7 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground)] transition-all duration-300 hover:border-[rgba(201,130,91,0.45)] hover:bg-[rgba(201,130,91,0.045)]"
              >
                <span>Explore Systems</span>

                <ArrowDownRight
                  size={14}
                  strokeWidth={1.35}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

            {/* ==================================================
                METADATA
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease,
              }}
              className="mt-12 flex max-w-[650px] flex-wrap items-center gap-x-10 gap-y-5"
            >
              <HeroMeta
                label="Focus"
                value="AI + Web"
              />

              <HeroMeta
                label="Method"
                value="Systems Thinking"
              />

              <HeroMeta
                label="Output"
                value="Working Software"
              />
            </motion.div>
          </div>

          {/* ====================================================
              RIGHT — SYSTEM INTERFACE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.18,
              ease,
            }}
            className="relative z-10"
          >
            <SystemInterface />
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM TECHNICAL MARKER
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        className="absolute bottom-7 left-0 right-0 z-20"
      >
        <div className="site-container flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            Ganlary Labs / System 001
          </span>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
              Scroll to explore
            </span>

            <span className="h-5 w-px bg-[var(--border)]" />

            <ArrowDownRight
              size={12}
              strokeWidth={1.2}
              className="text-[var(--accent)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================
   HERO META
================================================================ */

function HeroMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="group">
      <div className="flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-[var(--accent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
          {label}
        </span>
      </div>

      <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--foreground)]">
        {value}
      </div>
    </div>
  );
}