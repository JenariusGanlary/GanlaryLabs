"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(241,236,227,0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(241,236,227,0.025) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--border)]" />
      </div>

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] py-5">
          <div className="flex items-center gap-3">
            <Terminal
              size={14}
              strokeWidth={1.2}
              className="text-[var(--accent)]"
            />

            <span className="technical-label">SYSTEM / READY</span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
            05 / CONTACT
          </span>
        </div>

        {/* CTA body */}
        <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:py-24">
          <div>
            <span className="technical-label">START WITH THE PROBLEM</span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="
                mt-7
                max-w-4xl
                font-editorial
                text-[clamp(3.5rem,7.5vw,8rem)]
                leading-[0.83]
                tracking-[-0.065em]
              "
            >
              Have a problem
              <br />
              worth
              <br />
              <span className="italic text-[var(--accent-soft)]">
                building around?
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-9"
            >
              <a
                href="mailto:hello@ganlarylabs.com"
                className="btn-primary"
              >
                Start a Project
                <ArrowUpRight size={15} strokeWidth={1.2} />
              </a>
            </motion.div>
          </div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:justify-self-end"
          >
            <div className="w-full max-w-sm border border-[var(--border)] bg-[var(--background)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <span className="technical-label">PROJECT / INPUT</span>

                <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-[var(--muted-dark)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Online
                </span>
              </div>

              <div className="p-5">
                <div className="space-y-4">
                  {[
                    ["INPUT", "68%"],
                    ["ARCHITECTURE", "42%"],
                    ["SYSTEM", "18%"],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <span className="text-[8px] uppercase tracking-[0.14em] text-[var(--muted-dark)]">
                        {label}
                      </span>

                      <div className="mt-2 h-px bg-[var(--border)]">
                        <div
                          className="h-px bg-[var(--accent)]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-[var(--border)] pt-5">
                  <span className="technical-label">STATUS</span>

                  <p className="mt-2 font-editorial text-lg italic">
                    Ready for input
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-5 text-[var(--muted-dark)]">
              Tell us what you're trying to solve. We'll figure out what the
              right system looks like.
            </p>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <div className="flex flex-col justify-between gap-4 border-t border-[var(--border)] py-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

            <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]">
              Intelligent systems · Digital products · Automation
            </span>
          </div>

          <span className="technical-label">
            GANLARY LABS / END OF SYSTEM
          </span>
        </div>
      </div>
    </section>
  );
}