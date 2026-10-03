import Link from "next/link";
import { ArrowUpRight, Check, Code2, Layers3, Sparkles } from "lucide-react";

export const metadata = {
  title: "About — Ganlary Labs",
  description:
    "Learn about Ganlary Labs, an independent AI engineering and software studio run by Jenarius Ganlary.",
};

const principles = [
  {
    title: "Understand before building",
    description:
      "We start with the business problem, the people involved, the existing workflow, and the outcome that actually matters.",
  },
  {
    title: "Use AI where it creates leverage",
    description:
      "AI is a component of the system, not the product strategy. We use it where it can remove friction, accelerate decisions, or create a capability that was previously impractical.",
  },
  {
    title: "Ship software people can own",
    description:
      "The goal is not a flashy prototype. We build maintainable products, workflows, and digital experiences that can keep working after launch.",
  },
];

const capabilities = [
  "Websites & digital experiences",
  "AI-powered applications",
  "SaaS MVPs & product builds",
  "Business workflow systems",
  "Automation & integrations",
  "Data-driven internal tools",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)]">
        <div className="site-container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-xs font-semibold tracking-[-0.08em]">
              GL
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              Ganlary Labs
            </span>
          </Link>
          <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            Back to studio
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="hero-dot-field" />
        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="max-w-5xl">
            <div className="technical-label">ABOUT / GANLARY LABS</div>
            <h1 className="mt-7 font-editorial text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
              Built from
              <br />
              <span className="italic text-[var(--accent-soft)]">the work.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              Ganlary Labs is an independent development studio run by
              Jenarius Ganlary. We build websites, software, AI-powered
              products, automation, and digital systems for businesses that
              need something more specific than a template.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="site-container grid lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-[var(--border)] py-16 lg:border-b-0 lg:border-r lg:pr-16 lg:py-24">
            <div className="technical-label">THE PERSON BEHIND THE STUDIO</div>
            <h2 className="mt-6 font-editorial text-4xl leading-none tracking-[-0.05em] sm:text-5xl">
              Jenarius
              <br />
              <span className="italic text-[var(--accent)]">Ganlary.</span>
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)]">
              Jenarius is a full-stack developer and builder based in India.
              His path into software moved through formal computer science
              education, software development, an internship with the National
              Informatics Centre, teaching, and hands-on product and client
              work.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
              Alongside his professional work, he builds products in public
              and uses Ganlary Labs to take on SaaS MVPs, AI feature
              integration, and small-business websites.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://www.jenariusganlary.com"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Personal site <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/jenarius-ganlary/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="py-16 lg:pl-16 lg:py-24">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[
                [Code2, "Engineering", "Full-stack product development and production-minded implementation."],
                [Sparkles, "AI", "Practical AI features, workflows, and intelligent product experiences."],
                [Layers3, "Systems", "Connected websites, automations, internal tools, and business workflows."],
              ].map(([Icon, title, description]) => (
                <div key={title as string} className="border border-[var(--border)] bg-[var(--surface)] p-6">
                  <Icon size={18} strokeWidth={1.2} className="text-[var(--accent)]" />
                  <h3 className="mt-10 text-lg font-medium">{title as string}</h3>
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{description as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="site-container py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="technical-label">HOW WE THINK</div>
              <h2 className="mt-6 max-w-md font-editorial text-4xl leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                Software is useful when it changes the{" "}
                <span className="italic text-[var(--accent-soft)]">work.</span>
              </h2>
            </div>
            <div className="grid gap-px border border-[var(--border)] bg-[var(--border)]">
              {principles.map((item, index) => (
                <article key={item.title} className="bg-[var(--background)] p-7 sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-editorial text-xl text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <Check size={17} strokeWidth={1.2} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="site-container py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-8 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end">
            <div>
              <div className="technical-label">CAPABILITIES</div>
              <h2 className="mt-5 font-editorial text-4xl tracking-[-0.05em] sm:text-6xl">
                What we build.
              </h2>
            </div>
            <span className="technical-label">01 — 06</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div key={item} className="border-b border-r border-[var(--border)] px-5 py-7 sm:px-7">
                <span className="font-mono text-[9px] text-[var(--accent)]">0{index + 1}</span>
                <h3 className="mt-7 text-sm font-medium">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-8 border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10 lg:flex-row lg:items-end lg:p-14">
          <div>
            <div className="technical-label">NEXT</div>
            <h2 className="mt-5 max-w-2xl font-editorial text-4xl leading-[0.9] tracking-[-0.05em] sm:text-6xl">
              Have something
              <br />
              worth <span className="italic text-[var(--accent-soft)]">building?</span>
            </h2>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start a project <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
