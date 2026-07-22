import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full relative z-10">
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
