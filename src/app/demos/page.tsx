import Link from "next/link";

const demos = [
  {
    number: "01",
    name: "The Hillview",
    type: "Boutique Hotel / Mountain Retreat",
    description:
      "A premium hotel website concept focused on rooms, availability, dining, experiences, and direct bookings.",
    href: "/demos/the-hillview",
    status: "In Development",
  },
];

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-[#11120f] text-[#f3efe7]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
          >
            Ganlary Labs
          </Link>

          <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
            Demo Collection
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c8aa7c]" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c8aa7c]">
              Selected Concepts
            </span>
          </div>

          <h1 className="text-[clamp(4rem,9vw,9rem)] font-light leading-[0.85] tracking-[-0.065em]">
            Websites
            <br />
            <em className="font-serif text-[#d8c19b]">
              built to sell.
            </em>
          </h1>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            A collection of website concepts built by Ganlary Labs for
            different business categories. Each demo explores how thoughtful
            design, interaction, and conversion-focused systems can work
            together.
          </p>
        </div>
      </section>

      {/* Demo list */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
          {demos.map((demo) => (
            <Link
              key={demo.number}
              href={demo.href}
              className="group block border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.025] md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[100px_1fr_auto] lg:items-center">
                {/* Number */}
                <div className="text-[9px] tracking-[0.2em] text-[#c8aa7c]">
                  {demo.number}
                </div>

                {/* Content */}
                <div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                    {demo.type}
                  </div>

                  <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                    {demo.name}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
                    {demo.description}
                  </p>
                </div>

                {/* Status / CTA */}
                <div className="flex items-center gap-5 lg:justify-self-end">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    {demo.status}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-[#c8aa7c] group-hover:bg-[#c8aa7c] group-hover:text-[#171712]">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
          Ganlary Labs
        </span>

        <Link
          href="/"
          className="text-[9px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
        >
          Back to Studio
        </Link>
      </footer>
    </main>
  );
}