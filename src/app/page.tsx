"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CinematicLoader from "@/components/CinematicLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}
      
      <div className="flex min-h-screen flex-col w-full relative z-10 bg-[#050505] text-white">
        <Hero />
        <AboutSection />
        <WhyChooseUs />
        <Services />
        <Industries />
        <Portfolio />
        <Process />
        <TechStack />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </>
  );
}