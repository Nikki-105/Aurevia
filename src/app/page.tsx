"use client";

import { useState } from "react";
import CinematicLoader from "@/components/CinematicLoader";
import Hero from "@/components/Hero";
import ClientBar from "@/components/ClientBar";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalWebGL from "@/components/GlobalWebGL";
import TeamSection from "@/components/TeamSection";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CinematicLoader onComplete={() => setLoaded(true)} />
      {loaded && (
        <div className="relative w-full">
          <GlobalWebGL />
          <Hero />
          <ClientBar />
          <AboutSection />
          <Services />
          <Portfolio />
          <Process />
          <TechStack />
          <Testimonials />
          <TeamSection />
          <PricingSection />
          <FAQSection />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}