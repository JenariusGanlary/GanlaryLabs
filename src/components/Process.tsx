"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Understand",
    statement: "We learn how your business actually works.",
    detail:
      "Customers, workflows, bottlenecks, existing tools, and the decisions that matter.",
    signal: "BUSINESS CONTEXT",
  },
  {
    number: "02",
    title: "Design",
    statement: "We define the system before we build it.",
    detail:
      "Information architecture, user journeys, interfaces, data flows, and technical direction.",
    signal: "SYSTEM ARCHITECTURE",
  },
  {
    number: "03",
    title: "Build",
    statement: "We turn the architecture into working software.",
    detail:
      "Modern interfaces, intelligent workflows, integrations, APIs, and production-ready systems.",
    signal: "WORKING SOFTWARE",
  },
  {
    number: "04",
    title: "Launch",
    statement: "We put the system into the real world.",
    detail:
      "Deployment, testing, refinement, measurement, and the next iteration.",
    signal: "LIVE SYSTEM",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[var(--background)]"
    >
      {/* Ambient field */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[12%] top-[20%] h-[420px] w-[420px] rounded-full opacity-[0.035] blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-[5%] right-[10%] h-[360px] w-[360px] rounded-full opacity-[0.025] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #f1ece3 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="site-container relative z-10">
        {/* ==========================================================
            HEADER
        =========================================================== */}

        <div className="flex items-center justify-between py-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[var(--accent)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Process / 03
            </span>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            04 Stages
          </span>
        </div>

        {/* ==========================================================
            INTRO
        =========================================================== */}

        <div className="grid items-end gap-12 py-24 lg:grid-cols-[1.1fr_0.7fr] lg:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[760px] text-[clamp(3.4rem,6vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.065em] text-[var(--foreground)]"
          >
            From business
            <br />
            problem to
            <br />
            <span className="font-serif italic font-normal text-[var(--accent)]">
              digital system.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="max-w-[430px] pb-2 lg:ml-auto"
          >
            <div className="mb-5 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent)]">
              How we work
            </div>

            <p className="text-[15px] leading-7 text-[var(--muted)]">
              Every engagement follows the same principle: understand
              the problem deeply, design the right system, then build
              only what creates meaningful value.
            </p>
          </motion.div>
        </div>

        {/* ==========================================================
            STAGES
        =========================================================== */}

        <div className="relative pb-28 lg:pb-36">
          {/* subtle center axis */}

          <div className="pointer-events-none absolute bottom-0 left-[25%] top-0 hidden w-px bg-gradient-to-b from-transparent via-[rgba(241,236,227,0.07)] to-transparent lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
            {stages.map((stage, index) => (
              <StageCard
                key={stage.number}
                stage={stage}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ==========================================================
            FOOTER SIGNAL
        =========================================================== */}

        <div className="flex flex-col justify-between gap-4 pb-8 sm:flex-row sm:items-center">
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            Ganlary Labs / Process Architecture
          </span>

          <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            Problem → System → Outcome
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   STAGE
================================================================ */

function StageCard({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[310px] overflow-hidden rounded-[6px] bg-[var(--surface)] p-7 transition-colors duration-500 hover:bg-[var(--surface-light)] sm:p-9 lg:min-h-[350px] lg:p-10"
    >
      {/* Hover glow */}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.045] blur-[80px]"
      />

      {/* Number */}

      <div className="relative flex items-start justify-between">
        <motion.span
          className="font-mono text-[11px] tracking-[0.14em] text-[var(--accent)]"
          whileHover={{ x: 4 }}
        >
          {stage.number}
        </motion.span>

        <motion.div
          initial={{ opacity: 0.35 }}
          whileHover={{
            opacity: 1,
            x: 3,
            y: -3,
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-dark)] transition-colors duration-300 group-hover:border-[rgba(201,130,91,0.45)] group-hover:text-[var(--accent)]"
        >
          <ArrowUpRight
            size={13}
            strokeWidth={1.3}
          />
        </motion.div>
      </div>

      {/* Content */}

      <div className="relative mt-20">
        <div className="mb-3 font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
          {stage.signal}
        </div>

        <h3 className="text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[var(--foreground)]">
          {stage.title}
        </h3>

        <p className="mt-5 max-w-[390px] text-[14px] leading-6 text-[var(--foreground)]/75">
          {stage.statement}
        </p>

        <p className="mt-3 max-w-[430px] text-[12px] leading-5 text-[var(--muted-dark)]">
          {stage.detail}
        </p>
      </div>

      {/* Bottom signal */}

      <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between sm:left-9 sm:right-9">
        <div className="h-px w-10 bg-[var(--border)] transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--accent)]" />

        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--muted-dark)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore
        </span>
      </div>
    </motion.article>
  );
}