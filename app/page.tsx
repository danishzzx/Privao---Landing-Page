import Header from "./components/header";
import Hero from "./components/hero";
import WhyUs from "./components/why-us";
import FleetPreview from "./components/fleet-preview";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black">
        <Hero />
        <WhyUs />
        <FleetPreview />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
