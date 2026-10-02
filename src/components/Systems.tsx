"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Workflow,
  Layers3,
  Zap,
} from "lucide-react";

const systems = [
  {
    number: "01",
    title: "AI Products",
    description:
      "AI-powered products and interfaces that turn models into useful experiences.",
    signal: "INTELLIGENCE",
    flow: ["Data", "Context", "Model", "Action"],
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Business Systems",
    description:
      "Connected software that brings fragmented business workflows into one system.",
    signal: "INFRASTRUCTURE",
    flow: ["Input", "Logic", "System", "Output"],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Customer Experiences",
    description:
      "Digital experiences designed around the moments that move customers to action.",
    signal: "EXPERIENCE",
    flow: ["Discover", "Explore", "Decide", "Act"],
    icon: Workflow,
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Intelligent workflows that reduce repetitive work and keep operations moving.",
    signal: "EFFICIENCY",
    flow: ["Trigger", "Process", "Decision", "Result"],
    icon: Zap,
  },
];

export default function Systems() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="site-container">
        {/* Intro */}
        <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="technical-label">SYSTEMS / 02</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-7 max-w-2xl font-editorial text-[clamp(3.2rem,5.7vw,6.5rem)] leading-[0.84] tracking-[-0.06em]"
            >
              Digital systems
              <br />
              built for real
              <br />
              <span className="italic text-[var(--accent-soft)]">
                business goals.
              </span>
            </motion.h2>
          </div>

          <div className="max-w-md lg:pb-2 lg:justify-self-end">
            <span className="technical-label">WHAT WE BUILD</span>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              From intelligent products to operational infrastructure, we
              design systems around the outcome — not the technology alone.
            </p>

            <div className="mt-5 text-[9px] uppercase tracking-[0.15em] text-[var(--muted-dark)]">
              SOFTWARE · AI · DATA · AUTOMATION
            </div>
          </div>
        </div>

        {/* System matrix */}
        <div className="border-y border-[var(--border)]">
          {systems.map((system, index) => {
            const Icon = system.icon;

            return (
              <motion.div
                key={system.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group relative border-b border-[var(--border)] last:border-b-0"
              >
                <div className="grid gap-5 py-7 sm:py-8 lg:grid-cols-[70px_1.1fr_1.3fr_1fr_44px] lg:items-center lg:gap-7">
                  {/* Number */}
                  <span className="font-editorial text-xl text-[var(--accent)]">
                    {system.number}
                  </span>

                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <Icon
                      size={17}
                      strokeWidth={1}
                      className="text-[var(--muted-dark)] transition-colors duration-300 group-hover:text-[var(--accent)]"
                    />

                    <div>
                      <span className="technical-label">
                        {system.signal}
                      </span>

                      <h3 className="mt-1 font-editorial text-2xl tracking-[-0.035em] sm:text-3xl">
                        {system.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="max-w-md text-xs leading-5 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
                    {system.description}
                  </p>

                  {/* Flow */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {system.flow.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-1.5">
                        <span className="border border-[var(--border-strong)] px-2 py-1 text-[8px] uppercase tracking-[0.1em] text-[var(--muted)]">
                          {step}
                        </span>

                        {stepIndex < system.flow.length - 1 && (
                          <span className="text-[var(--muted-dark)]">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="flex justify-start lg:justify-end">
                    <div className="flex h-9 w-9 items-center justify-center border border-[var(--border-strong)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--background)]">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.2}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-between gap-5 py-7">
          <span className="technical-label">
            GANLARY LABS / SYSTEMS ARCHITECTURE
          </span>

          <span className="text-[9px] uppercase tracking-[0.14em] text-[var(--muted-dark)]">
            04 CAPABILITIES
          </span>
        </div>
      </div>
    </section>
  );
}