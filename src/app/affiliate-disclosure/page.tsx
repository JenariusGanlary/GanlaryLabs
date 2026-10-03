import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure — Ganlary Labs",
  description: "Affiliate disclosure for Ganlary Labs.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)]">
        <div className="site-container flex h-20 items-center justify-between">
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.16em]">Ganlary Labs</Link>
          <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Back to studio</Link>
        </div>
      </header>
      <article className="site-container max-w-4xl py-20 sm:py-28">
        <div className="technical-label">DISCLOSURE / AFFILIATES</div>
        <h1 className="mt-6 font-editorial text-5xl tracking-[-0.05em] sm:text-7xl">Affiliate Disclosure.</h1>
        <div className="mt-14 space-y-8 text-sm leading-7 text-[var(--muted)]">
          <p>Ganlary Labs may publish articles, resources, tools, or recommendations that include affiliate links. If you follow an affiliate link and make a qualifying purchase, Ganlary Labs may receive a commission at no additional cost to you.</p>
          <p>Affiliate relationships do not guarantee positive coverage. Opinions, comparisons, and recommendations should be based on the stated criteria and the author's experience or research.</p>
          <p>Not every external link is an affiliate link. Where a disclosure is required, it will be presented in or near the relevant content.</p>
          <p>For questions about a particular relationship, contact <a className="text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4" href="mailto:hello@ganlarylabs.com">hello@ganlarylabs.com</a>.</p>
        </div>
      </article>
    </main>
  );
}
