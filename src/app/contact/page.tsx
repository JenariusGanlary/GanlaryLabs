import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MessageSquare, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact — Ganlary Labs",
  description:
    "Start a project with Ganlary Labs. Tell us what you are building, improving, or automating.",
};

const brief = [
  "What your business does",
  "The problem you want solved",
  "Who the system is for",
  "Your target timeline",
  "What already exists",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />



      <section className="relative border-b border-[var(--border)]">
        <div className="hero-dot-field" />
        <div className="site-container relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
            <div>
              <div className="technical-label">CONTACT / START A PROJECT</div>
              <h1 className="mt-7 max-w-5xl font-editorial text-[clamp(4rem,9vw,9.5rem)] leading-[0.8] tracking-[-0.075em]">
                Tell us what
                <br />
                needs to <span className="italic text-[var(--accent-soft)]">work.</span>
              </h1>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              No elaborate brief required. Tell us what is happening in the
              business, what you want to change, and what a useful outcome
              looks like.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="site-container grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-[var(--border)] py-14 sm:py-20 lg:border-b-0 lg:border-r lg:pr-16 lg:py-24">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)]">
                <Mail size={18} strokeWidth={1.2} className="text-[var(--accent)]" />
              </span>
              <div className="technical-label">DIRECT / EMAIL</div>
            </div>

            <h2 className="mt-10 max-w-2xl font-editorial text-4xl leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              Start with a
              <br />
              <span className="italic text-[var(--accent-soft)]">conversation.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              Send a short description of the business problem, the product
              you have in mind, or the workflow that is costing your team too
              much time.
            </p>

            <a
              href="mailto:hello@ganlarylabs.com?subject=Ganlary%20Labs%20Project%20Inquiry"
              className="group mt-10 flex w-full items-center justify-between rounded-2xl border border-[var(--border-strong)] bg-[var(--background)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] sm:p-6"
            >
              <span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-dark)]">Project enquiries</span>
                <span className="mt-2 block text-lg font-medium tracking-[-0.03em] sm:text-xl">hello@ganlarylabs.com</span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[#17130f] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>

          <div className="py-14 sm:py-20 lg:py-24 lg:pl-16">
            <div className="technical-label">A GOOD FIRST BRIEF</div>
            <h2 className="mt-6 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              Give us enough context to think with you.
            </h2>
            <div className="mt-9 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {brief.map((item, index) => (
                <div key={item} className="flex items-center gap-5 py-5">
                  <span className="font-mono text-[9px] text-[var(--accent)]">0{index + 1}</span>
                  <span className="text-sm text-[var(--muted)]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 text-xs leading-6 text-[var(--muted-dark)]">
              If you do not know all of these yet, that is fine. The first
              conversation can help define the problem.
            </p>
          </div>
        </div>
      </section>

      <section className="site-container py-20 sm:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [MessageSquare, "01", "Explain the problem", "Start with the business reality, not a list of technologies."],
            [Sparkles, "02", "Shape the system", "We can work through the product, workflow, AI layer, and experience."],
            [ArrowUpRight, "03", "Build what matters", "Scope, timeline, and technical approach are agreed before work begins."],
          ].map(([Icon, number, title, text]) => {
            const I = Icon as typeof MessageSquare;
            return (
              <article key={number as string} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] sm:p-8">
                <div className="flex items-center justify-between">
                  <I size={18} strokeWidth={1.2} className="text-[var(--accent)]" />
                  <span className="font-mono text-[9px] text-[var(--muted-dark)]">{number as string}</span>
                </div>
                <h3 className="mt-14 text-xl font-medium tracking-[-0.035em]">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-container pb-20 sm:pb-28">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--border-strong)] bg-[var(--surface)] p-7 sm:p-10 lg:p-14">
          <div className="absolute right-[-8%] top-[-70%] h-[620px] w-[620px] rounded-full bg-[var(--accent)]/[0.09] blur-3xl" />
          <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="technical-label">GANLARY LABS / INDIA → WORLDWIDE</div>
              <h2 className="mt-5 max-w-3xl font-editorial text-4xl leading-[0.88] tracking-[-0.06em] sm:text-6xl">
                Bring us the
                <br />
                <span className="italic text-[var(--accent-soft)]">messy problem.</span>
              </h2>
            </div>
            <Link href="/demos" className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[var(--border-strong)] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
              See the demos <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
