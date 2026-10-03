import Link from "next/link";

export const metadata = {
  title: "Cookie Policy — Ganlary Labs",
  description: "Cookie and similar technology policy for Ganlary Labs.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-[var(--border)]">
        <div className="site-container flex h-20 items-center justify-between">
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.16em]">Ganlary Labs</Link>
          <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Back to studio</Link>
        </div>
      </header>
      <article className="site-container max-w-4xl py-20 sm:py-28">
        <div className="technical-label">LEGAL / COOKIES</div>
        <h1 className="mt-6 font-editorial text-5xl tracking-[-0.05em] sm:text-7xl">Cookie Policy.</h1>
        <p className="mt-5 text-sm text-[var(--muted)]">Last updated: October 2026</p>
        <div className="mt-14 space-y-10 text-sm leading-7 text-[var(--muted)]">
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">1. What cookies are</h2><p className="mt-3">Cookies and similar technologies are small pieces of information stored by a browser or device. They can help a website remember preferences, maintain functionality, and understand how a site is used.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">2. How Ganlary Labs may use them</h2><p className="mt-3">Ganlary Labs may use strictly necessary technologies for website functionality and may use analytics technologies if analytics are enabled. We will not treat this page as confirmation that a particular analytics provider is active; the actual production implementation determines which services are used.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">3. Managing cookies</h2><p className="mt-3">Most browsers allow you to view, block, or delete cookies through their settings. Blocking some technologies can affect website functionality.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">4. Changes</h2><p className="mt-3">This policy may be updated when the website's technology or analytics setup changes.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">5. Contact</h2><p className="mt-3">Questions can be sent to <a className="text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4" href="mailto:hello@ganlarylabs.com">hello@ganlarylabs.com</a>.</p></section>
        </div>
      </article>
    </main>
  );
}
