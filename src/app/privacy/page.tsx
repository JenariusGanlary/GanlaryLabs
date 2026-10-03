import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Ganlary Labs",
  description: "Privacy policy for Ganlary Labs.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />


      <article className="site-container max-w-4xl py-20 sm:py-28">
        <div className="technical-label">LEGAL / PRIVACY</div>
        <h1 className="mt-6 font-editorial text-5xl tracking-[-0.05em] sm:text-7xl">Privacy Policy.</h1>
        <p className="mt-5 text-sm text-[var(--muted)]">Last updated: October 2026</p>

        <div className="mt-14 space-y-10 text-sm leading-7 text-[var(--muted)]">
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">1. What we collect</h2><p className="mt-3">When you contact Ganlary Labs, we may receive information you choose to provide, such as your name, email address, company, project details, and other information included in your message.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">2. How we use information</h2><p className="mt-3">We use information you provide to respond to enquiries, discuss and scope projects, communicate about active work, and operate or improve this website.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">3. Cookies and analytics</h2><p className="mt-3">This website may use essential technologies and, if analytics are enabled, analytics services to understand website usage. Specific third-party services will be disclosed or configured through the relevant site implementation.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">4. Third parties</h2><p className="mt-3">We may use third-party infrastructure, hosting, communication, analytics, or project tools where necessary to operate the website or deliver services. We do not sell personal information.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">5. Retention</h2><p className="mt-3">We retain information only for as long as reasonably necessary for the purpose for which it was provided, legitimate business records, or legal obligations.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">6. Your choices</h2><p className="mt-3">You can contact us to ask about personal information you have provided to Ganlary Labs or to request correction or deletion where applicable.</p></section>
          <section><h2 className="text-lg font-medium text-[var(--foreground)]">7. Contact</h2><p className="mt-3">For privacy questions, email <a className="text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4" href="mailto:hello@ganlarylabs.com">hello@ganlarylabs.com</a>.</p></section>
        </div>
      </article>
    </main>
  );
}
