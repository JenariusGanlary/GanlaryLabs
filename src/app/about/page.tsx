import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About — Ganlary Labs",
  description:
    "Meet the founder, talent, and thinking behind Ganlary Labs — an AI engineering and software studio.",
};

const principles = [
  {
    number: "01",
    title: "Understand the problem first.",
    text: "We start with the business, the people, the existing workflow, and the outcome. Technology comes after the problem is clear.",
  },
  {
    number: "02",
    title: "Use AI where it earns its place.",
    text: "AI should reduce friction, improve decisions, or unlock a capability — not exist on a page because it is fashionable.",
  },
  {
    number: "03",
    title: "Build for the work after launch.",
    text: "A polished prototype is only the beginning. We care about maintainability, ownership, integrations, and what happens when real people use the system.",
  },
];

const capabilities = [
  ["01", "Web & digital experiences", "High-conviction websites and interfaces built around a clear business goal."],
  ["02", "AI products & features", "AI-powered workflows, assistants, automations, and product capabilities."],
  ["03", "SaaS & MVP engineering", "From product model to a production-ready first version."],
  ["04", "Business systems", "Internal tools, dashboards, data flows, and connected workflows."],
  ["05", "Automation & integrations", "Remove repetitive handoffs and connect the tools already in the business."],
  ["06", "Data-driven tools", "Turn operational information into systems people can actually act on."],
];

const talent = [
  ["01", "Product thinking", "We care about what the software needs to accomplish commercially, not just how it looks or runs."],
  ["02", "Engineering", "Full-stack engineering across modern web applications, APIs, databases, integrations, and production systems."],
  ["03", "AI & automation", "AI-assisted workflows, intelligent interfaces, structured data flows, and automation where they create measurable leverage."],
  ["04", "Design", "Editorial interfaces and conversion-focused digital experiences designed to make complex products easier to understand."],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)]">
        <div className="site-container flex h-[74px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-[10px] font-semibold tracking-[0.08em]">
              GL
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Ganlary Labs
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Back to studio <ArrowRight size={13} />
          </Link>
        </div>
      </header>

      <section className="relative border-b border-[var(--border)]">
        <div className="hero-dot-field" />
        <div className="site-container relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <div>
              <div className="technical-label">ABOUT / GANLARY LABS</div>
              <h1 className="mt-7 max-w-5xl font-editorial text-[clamp(4rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.075em]">
                Built from
                <br />
                <span className="italic text-[var(--accent-soft)]">the work.</span>
              </h1>
            </div>

            <div className="max-w-md pb-2">
              <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Ganlary Labs is an independent engineering studio founded by
                Jenarius Ganlary — building websites, software, AI-powered
                products, automation, and digital systems around real business
                problems.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
              >
                Start a conversation
                <ArrowUpRight size={14} className="text-[var(--accent)]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="site-container grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[560px] overflow-hidden border-b border-[var(--border)] lg:border-b-0 lg:border-r">
            <img
              src="/images/jenarius-ganlary.jpg"
              alt="Jenarius Ganlary, founder of Ganlary Labs"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between sm:inset-x-8 sm:bottom-8">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Founder / Builder
                </div>
                <div className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white">
                  Jenarius Ganlary
                </div>
              </div>
              <span className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-white/65 backdrop-blur-md">
                India
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <div className="technical-label">THE PERSON BEHIND THE STUDIO</div>
              <h2 className="mt-6 max-w-2xl font-editorial text-4xl leading-[0.88] tracking-[-0.06em] sm:text-6xl">
                A builder who
                <br />
                <span className="italic text-[var(--accent-soft)]">
                  works close to the problem.
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                Jenarius is a full-stack developer and builder whose path has
                moved through software development, the National Informatics
                Centre, teaching, data and MIS work, product experiments, and
                independent client work.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                That mix shapes how Ganlary Labs works: understand the
                operational reality, simplify the system, then build the
                software around it.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 border-y border-[var(--border)] sm:grid-cols-3">
              <div className="border-r border-[var(--border)] py-5 pr-5">
                <Code2 size={17} className="text-[var(--accent)]" strokeWidth={1.2} />
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-dark)]">Focus</div>
                <div className="mt-1 text-sm">Software</div>
              </div>
              <div className="border-r border-[var(--border)] px-5 py-5">
                <BrainCircuit size={17} className="text-[var(--accent)]" strokeWidth={1.2} />
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-dark)]">Layer</div>
                <div className="mt-1 text-sm">AI</div>
              </div>
              <div className="col-span-2 py-5 sm:col-span-1 sm:pl-5">
                <Layers3 size={17} className="text-[var(--accent)]" strokeWidth={1.2} />
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted-dark)]">Approach</div>
                <div className="mt-1 text-sm">Systems</div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.jenariusganlary.com" target="_blank" rel="noreferrer" className="btn-secondary">
                Personal site <ArrowUpRight size={14} />
              </a>
              <a href="https://www.linkedin.com/in/jenarius-ganlary/" target="_blank" rel="noreferrer" className="btn-secondary">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="site-container py-20 sm:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="technical-label">THE TALENT</div>
              <h2 className="mt-6 max-w-md font-editorial text-4xl leading-[0.88] tracking-[-0.06em] sm:text-5xl">
                Small team.
                <br />
                <span className="italic text-[var(--accent-soft)]">Deep talent.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                Ganlary Labs is designed around a focused studio model:
                strong technical ownership, a small core, and specialist
                talent brought in when a project needs it.
              </p>
            </div>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {talent.map(([number, title, text]) => (
                <article key={number} className="grid gap-5 py-7 sm:grid-cols-[70px_0.75fr_1.25fr] sm:items-start sm:py-9">
                  <span className="font-mono text-[10px] text-[var(--accent)]">{number}</span>
                  <h3 className="text-lg font-medium tracking-[-0.03em] sm:text-xl">{title}</h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="site-container py-20 sm:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="technical-label">ARTIFICIAL INTELLIGENCE</div>
              <h2 className="mt-6 max-w-md font-editorial text-4xl leading-[0.88] tracking-[-0.06em] sm:text-5xl">
                AI should become
                <br />
                <span className="italic text-[var(--accent-soft)]">useful infrastructure.</span>
              </h2>
            </div>

            <div>
              <div className="rounded-[24px] border border-[var(--border-strong)] bg-[var(--background)] p-7 sm:p-10">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)]">
                      <BrainCircuit size={18} className="text-[var(--accent)]" strokeWidth={1.2} />
                    </span>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em]">AI / SYSTEM LAYER</div>
                      <div className="mt-1 text-xs text-[var(--muted-dark)]">Intelligence connected to the work</div>
                    </div>
                  </div>
                  <Sparkles size={16} className="text-[var(--accent)]" strokeWidth={1.2} />
                </div>

                <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  We see artificial intelligence as a capability that belongs
                  inside useful products and business systems. That can mean
                  understanding documents, routing requests, summarising
                  information, assisting decisions, generating content,
                  powering natural-language interfaces, or automating a
                  workflow.
                </p>

                <div className="mt-9 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
                  {[
                    ["UNDERSTAND", "Extract meaning from information."],
                    ["DECIDE", "Turn signals into useful next actions."],
                    ["ACT", "Move work through the system automatically."],
                  ].map(([title, text]) => (
                    <div key={title} className="bg-[var(--surface)] p-5">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{title}</div>
                      <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4 rounded-2xl border border-[var(--border)] p-6">
                <Sparkles size={17} className="mt-0.5 shrink-0 text-[var(--accent)]" strokeWidth={1.2} />
                <p className="text-sm leading-7 text-[var(--muted)]">
                  The goal is not to add an AI label to a project. The goal is
                  to make the system more capable, more responsive, and more
                  useful to the people using it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="site-container py-20 sm:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="technical-label">HOW WE THINK</div>
              <h2 className="mt-6 max-w-md font-editorial text-4xl leading-[0.88] tracking-[-0.06em] sm:text-5xl">
                Make the
                <br />
                <span className="italic text-[var(--accent-soft)]">work better.</span>
              </h2>
            </div>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {principles.map((item) => (
                <article key={item.number} className="grid gap-5 py-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-start sm:py-9">
                  <span className="font-mono text-[10px] text-[var(--accent)]">{item.number}</span>
                  <h3 className="text-lg font-medium tracking-[-0.03em] sm:text-xl">{item.title}</h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="site-container py-20 sm:py-28">
          <div className="flex flex-col gap-5 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="technical-label">CAPABILITIES</div>
              <h2 className="mt-5 font-editorial text-4xl tracking-[-0.06em] sm:text-6xl">What we build.</h2>
            </div>
            <span className="technical-label">01 — 06</span>
          </div>

          <div className="grid border-l border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([number, title, text]) => (
              <article key={number} className="group border-b border-r border-[var(--border)] p-7 transition-colors hover:bg-[var(--background)] sm:min-h-[260px] sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[var(--accent)]">{number}</span>
                  <ArrowUpRight size={15} className="text-[var(--muted-dark)] transition-colors group-hover:text-[var(--accent)]" />
                </div>
                <h3 className="mt-14 text-xl font-medium tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[var(--surface)] p-7 sm:p-10 lg:p-14">
          <div className="absolute right-[-10%] top-[-45%] h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.08] blur-3xl" />
          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <div className="technical-label">NEXT</div>
              <h2 className="mt-5 max-w-3xl font-editorial text-4xl leading-[0.88] tracking-[-0.06em] sm:text-6xl">
                Have something
                <br />
                worth <span className="italic text-[var(--accent-soft)]">building?</span>
              </h2>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 rounded-full">
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
