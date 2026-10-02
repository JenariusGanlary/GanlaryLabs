import Amenities from "./components/Amenities";
import BookingCTA from "./components/BookingCTA";
import Dining from "./components/Dining";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";

export default function TheHillviewPage() {
  return (
    <main className="bg-[#11120f]">
      <Navbar />

      <Hero />

      <Intro />

      <Rooms />

      <Amenities />

      <Experience />

      <Dining />

      <Gallery />

      <Location />

      <BookingCTA />

      <Footer />
    </main>
  );
}