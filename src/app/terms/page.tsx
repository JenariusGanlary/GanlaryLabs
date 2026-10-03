import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Ganlary Labs",
  description: "Terms and conditions for using the Ganlary Labs website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />


      <article className="site-container max-w-4xl py-20 sm:py-28">
        <div className="technical-label">LEGAL / TERMS</div>
        <h1 className="mt-6 font-editorial text-5xl tracking-[-0.05em] sm:text-7xl">Terms & Conditions.</h1>
        <p className="mt-5 text-sm text-[var(--muted)]">Last updated: October 2026</p>

        <div className="mt-14 space-y-10 text-sm leading-7 text-[var(--muted)]">
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">1. Website use</h2><p className="mt-3">This website presents Ganlary Labs, its capabilities, demonstrations, and information about its services. You may use the website for lawful purposes only.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">2. Demonstration work</h2><p className="mt-3">Unless explicitly identified as client work, items shown in the Demos section are concepts or demonstration projects created to illustrate possible design and engineering work. They should not be interpreted as endorsements, client relationships, or performance claims.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">3. Services</h2><p className="mt-3">Project scope, deliverables, timelines, fees, intellectual-property terms, hosting responsibilities, support, and other commercial terms are agreed separately for each engagement.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">4. Intellectual property</h2><p className="mt-3">Unless otherwise agreed in writing, website content, branding, source code, concepts, and other materials remain the property of their respective owners. A client’s ownership or licence of project deliverables will be governed by the applicable project agreement.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">5. No guarantee</h2><p className="mt-3">Information on this website is provided for general informational purposes. Examples, demonstrations, or capabilities shown do not guarantee a particular business result, revenue outcome, ranking, conversion rate, or technical result.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">6. External services</h2><p className="mt-3">The website may link to third-party services or websites. Ganlary Labs is not responsible for the content, availability, security, or policies of external services.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">7. Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4" href="mailto:hello@ganlarylabs.com">hello@ganlarylabs.com</a>.</p></section>
        </div>
        <p className="mt-12 border-t border-[var(--border)] pt-6 text-xs leading-6 text-[var(--muted-dark)]">
          These terms are a website-level starting point, not a substitute for legal advice or a signed client services agreement.
        </p>
      </article>
    </main>
  );
}
