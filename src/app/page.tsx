import Approach from "@/components/Approach";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Systems from "@/components/Systems";

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <Hero />

      <Approach />

      <Systems />

      <Process />

      <Industries />

      <CTA />

      <Footer />
    </main>
  );
}