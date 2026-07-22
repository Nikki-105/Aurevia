import { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse the digital products built by Aurevia Studio.",
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Wrapper>
        <div className="pt-20 pb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            A showcase of our most recent engineering and design challenges.
          </p>
        </div>
      </Wrapper>
      <Portfolio />
    </div>
  );
}
