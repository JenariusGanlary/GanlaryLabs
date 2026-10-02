"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Turn Manual Work Into Systems",
    description:
      "Replace repetitive processes with software, automation, and intelligent workflows that keep work moving.",
    signal: "AUTOMATION",
  },
  {
    number: "02",
    title: "Make Complex Work Simple",
    description:
      "Connect scattered tools, information, and workflows into one clear experience for the people using them.",
    signal: "SYSTEM DESIGN",
  },
  {
    number: "03",
    title: "Turn Information Into Action",
    description:
      "Use AI, structured data, and intelligent interfaces to turn information into useful decisions and actions.",
    signal: "INTELLIGENCE",
  },
  {
    number: "04",
    title: "Build Better Customer Journeys",
    description:
      "Design digital experiences around what customers actually need — from the first interaction to the final action.",
    signal: "EXPERIENCE",
  },
  {
    number: "05",
    title: "Connect The Pieces",
    description:
      "Integrate the tools and systems your business already depends on so information can move where it needs to go.",
    signal: "INTEGRATION",
  },
  {
    number: "06",
    title: "Build What Doesn't Exist",
    description:
      "When off-the-shelf software isn't enough, we design and engineer a system around the problem itself.",
    signal: "CUSTOM SOFTWARE",
  },
];

export default function Industries() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[var(--background)] py-28 lg:py-40"
    >
      {/* Ambient glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[8%] top-[25%] h-[500px] w-[500px] rounded-full opacity-[0.025] blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="site-container relative z-10">
        {/* ==========================================================
            HEADER
        =========================================================== */}

        <div className="mb-24 flex items-end justify-between gap-8 lg:mb-32">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[var(--accent)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                What We Solve / 04
              </span>
            </div>

            <h2 className="max-w-[900px] text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[var(--foreground)]">
              Different problems.
              <br />
              <span className="font-serif italic font-normal text-[var(--accent)]">
                Different systems.
              </span>
            </h2>
          </div>

          <div className="hidden max-w-[280px] pb-2 lg:block">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--accent)]">
              The problem comes first
            </span>

            <p className="mt-4 text-[13px] leading-6 text-[var(--muted)]">
              We don't begin with a predefined package. We begin
              with the problem, then determine what the system
              actually needs.
            </p>
          </div>
        </div>

        {/* Mobile intro */}

        <div className="mb-16 max-w-[500px] lg:hidden">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--accent)]">
            The problem comes first
          </span>

          <p className="mt-4 text-[14px] leading-6 text-[var(--muted)]">
            We don't begin with a predefined package. We begin
            with the problem, then determine what the system
            actually needs.
          </p>
        </div>

        {/* ==========================================================
            PROBLEM INDEX
        =========================================================== */}

        <div className="grid gap-3 md:grid-cols-2">
          {problems.map((problem, index) => (
            <Problem
              key={problem.number}
              problem={problem}
              index={index}
            />
          ))}
        </div>

        {/* ==========================================================
            FOOTER SIGNAL
        =========================================================== */}

        <div className="mt-24 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-32">
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            Ganlary Labs / Problem → System
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            Software · AI · Data · Automation
          </span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PROBLEM ITEM
================================================================ */

function Problem({
  problem,
  index,
}: {
  problem: (typeof problems)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[320px] overflow-hidden rounded-[7px] bg-[var(--surface)] p-7 transition-all duration-500 hover:bg-[var(--surface-light)] sm:p-9 lg:min-h-[360px] lg:p-10"
    >
      {/* Background number */}

      <motion.div
        initial={{ opacity: 0.025 }}
        whileHover={{
          opacity: 0.055,
          scale: 1.05,
        }}
        className="pointer-events-none absolute -right-3 -top-8 select-none font-serif text-[190px] leading-none tracking-[-0.08em] text-[var(--foreground)]"
      >
        {problem.number}
      </motion.div>

      {/* Copper glow */}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.055] blur-[90px]"
      />

      {/* Header */}

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--accent)]">
          {problem.number}
        </span>

        <motion.div
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)] text-[var(--muted-dark)] transition-colors duration-300 group-hover:text-[var(--accent)]"
          whileHover={{
            rotate: 45,
          }}
        >
          <ArrowUpRight
            size={14}
            strokeWidth={1.25}
          />
        </motion.div>
      </div>

      {/* Main */}

      <div className="relative mt-24 max-w-[560px]">
        <div className="mb-4 font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
          {problem.signal}
        </div>

        <h3 className="max-w-[560px] text-[clamp(2rem,3.2vw,3.2rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[var(--foreground)]">
          {problem.title}
        </h3>

        <p className="mt-5 max-w-[500px] text-[13px] leading-6 text-[var(--muted)]">
          {problem.description}
        </p>
      </div>

      {/* Hover indicator */}

      <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between sm:bottom-9 sm:left-9 sm:right-9">
        <motion.div
          initial={{ width: 18 }}
          whileHover={{ width: 52 }}
          className="h-px bg-[var(--accent)] opacity-70 transition-all duration-500 group-hover:opacity-100"
        />

        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--muted-dark)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          System response
        </span>
      </div>
    </motion.article>
  );
}