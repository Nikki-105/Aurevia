import { Metadata } from "next";
import ServicesComponent from "@/components/Services";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the engineering and design services offered by Aurevia Studio.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Wrapper>
        <div className="pt-20 pb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Comprehensive digital solutions built on modern tech stacks.
          </p>
        </div>
      </Wrapper>
      <ServicesComponent />
    </div>
  );
}
