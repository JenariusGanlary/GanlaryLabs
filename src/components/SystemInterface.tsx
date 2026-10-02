"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Database,
  Globe2,
  Layers3,
  Link2,
  Play,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/* ============================================================
   SYSTEM SCENARIOS
============================================================ */

const scenarios = [
  {
    id: "web-ai",
    label: "WEB + AI",
    title: "Intelligent customer experience",
    description:
      "A customer enters through the web interface. AI understands the request and moves the workflow forward.",
    stages: [
      {
        label: "INPUT",
        title: "Customer request",
        icon: Globe2,
      },
      {
        label: "CONTEXT",
        title: "Business data connected",
        icon: Database,
      },
      {
        label: "INTELLIGENCE",
        title: "AI understands intent",
        icon: BrainCircuit,
      },
      {
        label: "DECISION",
        title: "Next action selected",
        icon: Sparkles,
      },
      {
        label: "ACTION",
        title: "Workflow executed",
        icon: Zap,
      },
    ],
    stack: ["WEB", "AI", "DATA"],
  },

  {
    id: "automation",
    label: "AUTOMATION",
    title: "Manual work becomes a system",
    description:
      "Repetitive work moves through connected workflows instead of depending on someone to move it manually.",
    stages: [
      {
        label: "EVENT",
        title: "New request received",
        icon: Workflow,
      },
      {
        label: "DATA",
        title: "Information structured",
        icon: Database,
      },
      {
        label: "LOGIC",
        title: "Rules and AI evaluated",
        icon: BrainCircuit,
      },
      {
        label: "INTEGRATION",
        title: "Systems connected",
        icon: Link2,
      },
      {
        label: "ACTION",
        title: "Process completed",
        icon: Zap,
      },
    ],
    stack: ["AUTOMATION", "AI", "API"],
  },

  {
    id: "product",
    label: "AI PRODUCT",
    title: "From idea to working software",
    description:
      "A product layer connects interface, intelligence, data and infrastructure into one working system.",
    stages: [
      {
        label: "PROBLEM",
        title: "Business problem mapped",
        icon: Layers3,
      },
      {
        label: "DESIGN",
        title: "System architecture defined",
        icon: Workflow,
      },
      {
        label: "BUILD",
        title: "Web experience engineered",
        icon: Globe2,
      },
      {
        label: "INTELLIGENCE",
        title: "AI layer connected",
        icon: Bot,
      },
      {
        label: "LAUNCH",
        title: "Working software deployed",
        icon: Play,
      },
    ],
    stack: ["WEB", "AI", "SOFTWARE"],
  },
];

/* ============================================================
   FRAMER MOTION VARIANTS
============================================================ */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.45,

      /*
        `as const` is important here.

        Without it, TypeScript widens the cubic-bezier
        array to number[], which Framer Motion rejects.
      */
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* ============================================================
   COMPONENT
============================================================ */

export default function SystemInterface() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  const scenario = scenarios[scenarioIndex];

  /* ==========================================================
     AUTOMATIC WORKFLOW PROGRESSION
  ========================================================== */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStage((current) => {
        if (current >= scenario.stages.length - 1) {
          setScenarioIndex((index) => (index + 1) % scenarios.length);

          return 0;
        }

        return current + 1;
      });
    }, 1900);

    return () => window.clearInterval(timer);
  }, [scenarioIndex]);

  /* ==========================================================
     PROGRESS
  ========================================================== */

  const stageProgress = useMemo(() => {
    if (scenario.stages.length <= 1) {
      return 0;
    }

    return activeStage / (scenario.stages.length - 1);
  }, [activeStage, scenario.stages.length]);

  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      {/* ======================================================
          AMBIENT GLOW
      ======================================================= */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.035] blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.025, 0.045, 0.025],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================
          FLOATING SYSTEM TAGS
      ======================================================= */}

      <FloatingTag
        className="left-[-4%] top-[17%] hidden sm:flex"
        icon={Globe2}
        label="EXPERIENCE"
        value="WEB"
        delay={0}
      />

      <FloatingTag
        className="right-[-2%] top-[20%] hidden sm:flex"
        icon={BrainCircuit}
        label="INTELLIGENCE"
        value="AI"
        delay={0.4}
      />

      <FloatingTag
        className="left-[-7%] bottom-[22%] hidden sm:flex"
        icon={Database}
        label="CONTEXT"
        value="DATA"
        delay={0.8}
      />

      <FloatingTag
        className="right-[-4%] bottom-[15%] hidden sm:flex"
        icon={Zap}
        label="WORKFLOW"
        value="AUTOMATION"
        delay={1.2}
      />

      {/* ======================================================
          MAIN INTERFACE
      ======================================================= */}

      <motion.div
        layout
        className="relative overflow-hidden rounded-[14px] border border-[rgba(241,236,227,0.16)] bg-[rgba(15,15,13,0.92)] shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        {/* ====================================================
            HEADER
        ===================================================== */}

        <div className="flex h-12 items-center justify-between border-b border-[var(--border)] px-4 sm:px-5">
          <div className="flex items-center gap-2.5">
            <motion.span
              className="h-2 w-2 rounded-full bg-[var(--accent)]"
              animate={{
                opacity: [0.45, 1, 0.45],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Ganlary / Build System
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
              Live
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </div>
        </div>

        {/* ====================================================
            SCENARIO SELECTOR
        ===================================================== */}

        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3 sm:px-5">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
              Current system
            </p>

            <AnimatePresence mode="wait">
              <motion.p
                key={scenario.id}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--accent)]"
              >
                {scenario.label}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-1">
            {scenarios.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.label}`}
                onClick={() => {
                  setScenarioIndex(index);
                  setActiveStage(0);
                }}
                className="group flex h-5 items-center px-1"
              >
                <span
                  className={[
                    "h-1 rounded-full transition-all duration-300",
                    index === scenarioIndex
                      ? "w-5 bg-[var(--accent)]"
                      : "w-2 bg-[rgba(241,236,227,0.16)] group-hover:bg-[rgba(241,236,227,0.3)]",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ====================================================
            SYSTEM CONTENT
        ===================================================== */}

        <div className="p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={scenario.id}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {/* ==================================================
                  CURRENT ACTION
              =================================================== */}

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                    Current process
                  </span>

                  <motion.span
                    className="h-px flex-1 bg-[var(--border)]"
                    animate={{
                      opacity: [0.35, 0.8, 0.35],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                    }}
                  />
                </div>

                <h3 className="mt-3 max-w-[520px] text-[18px] font-normal tracking-[-0.035em] text-[var(--foreground)] sm:text-[22px]">
                  {scenario.stages[activeStage]?.title}
                </h3>

                <p className="mt-1.5 max-w-[560px] text-[10px] leading-5 text-[var(--muted-dark)] sm:text-[11px]">
                  {scenario.description}
                </p>
              </div>

              {/* ==================================================
                  WORKFLOW
              =================================================== */}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {/* Base connection */}

                <div className="absolute bottom-7 left-[13px] top-7 w-px bg-[rgba(241,236,227,0.08)]" />

                {/* Animated progress */}

                <motion.div
                  className="absolute left-[13px] top-7 w-px origin-top bg-[var(--accent)]"
                  animate={{
                    height: `${stageProgress * 100}%`,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  style={{
                    maxHeight: "calc(100% - 56px)",
                  }}
                />

                <div className="space-y-1">
                  {scenario.stages.map((stage, index) => {
                    const Icon = stage.icon;

                    const active = index === activeStage;
                    const completed = index < activeStage;

                    return (
                      <motion.button
                        key={`${scenario.id}-${stage.label}-${index}`}
                        type="button"
                        variants={itemVariants}
                        onClick={() => setActiveStage(index)}
                        className="group relative flex w-full items-center gap-4 rounded-lg px-1 py-2 text-left transition-colors duration-300 hover:bg-[rgba(241,236,227,0.025)]"
                      >
                        {/* Node */}

                        <motion.div
                          animate={{
                            borderColor: active
                              ? "rgba(201,130,91,0.75)"
                              : completed
                                ? "rgba(201,130,91,0.32)"
                                : "rgba(241,236,227,0.1)",

                            backgroundColor: active
                              ? "rgba(201,130,91,0.09)"
                              : "rgba(17,17,15,0.9)",

                            scale: active ? 1.06 : 1,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border"
                        >
                          <Icon
                            size={12}
                            strokeWidth={1.35}
                            className={
                              active
                                ? "text-[var(--accent)]"
                                : completed
                                  ? "text-[var(--accent-soft)]"
                                  : "text-[var(--muted-dark)]"
                            }
                          />

                          {active && (
                            <motion.span
                              className="absolute inset-[-4px] rounded-md border border-[var(--accent)]"
                              initial={{
                                opacity: 0,
                                scale: 0.8,
                              }}
                              animate={{
                                opacity: [0, 0.45, 0],
                                scale: [0.8, 1.15, 1.25],
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </motion.div>

                        {/* Stage content */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <span
                              className={[
                                "font-mono text-[7px] uppercase tracking-[0.18em] transition-colors duration-300",
                                active
                                  ? "text-[var(--accent)]"
                                  : "text-[var(--muted-dark)]",
                              ].join(" ")}
                            >
                              {stage.label}
                            </span>

                            <span className="font-mono text-[6px] text-[var(--muted-dark)]">
                              0{index + 1}
                            </span>
                          </div>

                          <p
                            className={[
                              "mt-1 text-[10px] transition-colors duration-300 sm:text-[11px]",
                              active
                                ? "text-[var(--foreground)]"
                                : "text-[var(--muted-dark)]",
                            ].join(" ")}
                          >
                            {stage.title}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* ==================================================
                  SYSTEM DATA
              =================================================== */}

              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <div className="grid grid-cols-3 gap-3">
                  <SystemMetric
                    label="Stack"
                    value={scenario.stack.join(" + ")}
                  />

                  <SystemMetric
                    label="Stage"
                    value={`0${activeStage + 1} / 0${scenario.stages.length}`}
                  />

                  <SystemMetric
                    label="Status"
                    value="BUILDING"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ====================================================
            BOTTOM STATUS BAR
        ===================================================== */}

        <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--muted-dark)]">
              System running
            </span>
          </div>

          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--muted-dark)]">
            GL / 001
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   FLOATING TAG
============================================================ */

function FloatingTag({
  className,
  icon: Icon,
  label,
  value,
  delay,
}: {
  className: string;
  icon: typeof Globe2;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute z-20 items-center gap-2 rounded-md border border-[rgba(241,236,227,0.14)] bg-[rgba(15,15,13,0.88)] px-2.5 py-2 backdrop-blur-md ${className}`}
      animate={{
        y: [0, -7, 0],
        rotate: [0, 0.7, 0],
      }}
      transition={{
        duration: 4.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded border border-[rgba(201,130,91,0.22)] bg-[rgba(201,130,91,0.06)]">
          <Icon
            size={11}
            strokeWidth={1.25}
            className="text-[var(--accent)]"
          />
        </span>

        <div>
          <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-[var(--muted-dark)]">
            {label}
          </p>

          <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--foreground)]">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   SYSTEM METRIC
============================================================ */

function SystemMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
        {label}
      </p>

      <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-[0.08em] text-[var(--foreground)]">
        {value}
      </p>
    </div>
  );
}