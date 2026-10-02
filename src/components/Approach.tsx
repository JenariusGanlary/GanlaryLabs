"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "We map the people, workflows, customers, constraints, and systems before deciding what to build.",
  },
  {
    number: "02",
    title: "Find the leverage",
    description:
      "We identify where software, automation, data, or AI can remove friction and create meaningful leverage.",
  },
  {
    number: "03",
    title: "Build the system",
    description:
      "We turn the opportunity into a focused digital system designed around the business, not a template.",
  },
];

export default function Approach() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden border-y border-[var(--border)]"
    >
      {/* =====================================================
          FULL-WIDTH BACKGROUND
      ===================================================== */}

      <div className="site-container">
        {/* ===================================================
            SHARED SITE GRID

            This is the important fix.

            Hero / Systems / Process / What We Solve all use
            the same horizontal container. Approach now does too.
        =================================================== */}

        <div className="grid lg:grid-cols-2">
          {/* =================================================
              LEFT — EDITORIAL APPROACH
          ================================================= */}

          <div className="relative bg-[#e9e3d9] text-[#11110f]">
            <div
              className="
                flex
                min-h-[420px]
                flex-col
                justify-between
                px-6
                py-12
                sm:min-h-[440px]
                sm:px-10
                sm:py-14
                lg:min-h-[450px]
                lg:px-12
                lg:py-14
                xl:px-16
              "
            >
              {/* Top */}

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--accent)]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#716d66]">
                    OUR APPROACH
                  </span>
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="
                    mt-7
                    max-w-[620px]
                    font-editorial
                    text-[clamp(3rem,4.5vw,5.4rem)]
                    leading-[0.84]
                    tracking-[-0.06em]
                  "
                >
                  We don't start
                  <br />
                  with a
                  <br />
                  template.
                  <br />

                  <span className="italic text-[var(--accent)]">
                    We start with
                    <br />
                    the business.
                  </span>
                </motion.h2>
              </div>

              {/* Bottom */}

              <div className="mt-8 flex items-end justify-between gap-8">
                <p className="max-w-sm text-[11px] leading-5 text-[#716d66]">
                  Technology should adapt to the problem — not force the
                  problem into a predefined package.
                </p>

                <span className="shrink-0 font-editorial text-lg text-[#c9a68e]">
                  01
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — SYSTEM THINKING
          ================================================= */}

          <div className="relative bg-[var(--background)]">
            <div
              className="
                flex
                min-h-[420px]
                flex-col
                justify-center
                px-6
                py-12
                sm:min-h-[440px]
                sm:px-10
                sm:py-14
                lg:min-h-[450px]
                lg:px-12
                lg:py-14
                xl:px-16
              "
            >
              {/* Intro */}

              <div>
                <span className="technical-label">
                  SYSTEM THINKING
                </span>

                <p className="mt-4 max-w-2xl text-[12px] leading-5 text-[var(--muted)] sm:text-sm sm:leading-6">
                  Every project begins with a deeper understanding of the
                  problem, the identity, the opportunities, and the right
                  system to build around them.
                </p>
              </div>

              {/* Steps */}

              <div className="mt-7 border-y border-[var(--border)]">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="
                      group
                      relative
                      border-b
                      border-[var(--border)]
                      last:border-b-0
                    "
                  >
                    <div
                      className="
                        grid
                        grid-cols-[34px_1fr_auto]
                        items-start
                        gap-4
                        py-5
                        sm:grid-cols-[42px_1fr_auto]
                        sm:gap-5
                        sm:py-5
                      "
                    >
                      {/* Number */}

                      <span className="font-editorial text-sm text-[var(--accent)]">
                        {step.number}
                      </span>

                      {/* Content */}

                      <div>
                        <h3
                          className="
                            font-editorial
                            text-lg
                            tracking-[-0.03em]
                            sm:text-xl
                          "
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-1.5
                            max-w-2xl
                            text-[11px]
                            leading-5
                            text-[var(--muted-dark)]
                            sm:text-xs
                          "
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow */}

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1}
                        className="
                          mt-1
                          text-[var(--muted-dark)]
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-[var(--accent)]
                        "
                      />
                    </div>

                    {/* Hover rail */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-[var(--accent)]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}