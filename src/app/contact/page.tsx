import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export const metadata = {
  title: "Contact — Ganlary Labs",
  description:
    "Start a project with Ganlary Labs. Tell us what you are trying to build, improve, automate, or solve.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)]">
        <div className="site-container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] text-xs font-semibold tracking-[-0.08em]">GL</span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">Ganlary Labs</span>
          </Link>
          <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--foreground)]">Back to studio</Link>
        </div>
      </header>

      <section className="site-container py-24 sm:py-32 lg:py-40">
        <div className="max-w-5xl">
          <div className="technical-label">CONTACT / START A PROJECT</div>
          <h1 className="mt-7 font-editorial text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.07em]">
            Tell us what
            <br />
            needs to <span className="italic text-[var(--accent-soft)]">work.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Tell us what you are building, what is not working, or what you
            want to automate. A short, honest brief is enough to start.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-[var(--border)] bg-[var(--border)] lg:grid-cols-2">
          <a href="mailto:hello@ganlarylabs.com?subject=Ganlary%20Labs%20Project%20Inquiry" className="group bg-[var(--background)] p-8 sm:p-10">
            <Mail size={20} strokeWidth={1.2} className="text-[var(--accent)]" />
            <div className="mt-16 technical-label">EMAIL</div>
            <div className="mt-3 flex items-center gap-3 font-editorial text-2xl tracking-[-0.03em] sm:text-3xl">
              hello@ganlarylabs.com
              <ArrowUpRight size={18} strokeWidth={1.2} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </a>
          <div className="bg-[var(--surface)] p-8 sm:p-10">
            <div className="technical-label">INCLUDE IF YOU CAN</div>
            <ul className="mt-7 space-y-4 text-sm text-[var(--muted)]">
              {[
                "What the business does",
                "What you want to build or improve",
                "Who the system is for",
                "Your target timeline",
                "Anything already built",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-7 max-w-2xl text-xs leading-6 text-[var(--muted-dark)]">
          Ganlary Labs is an independent development studio. Project scope,
          timelines, pricing, and technical approach are agreed before work
          begins.
        </p>
      </section>
    </main>
  );
}
