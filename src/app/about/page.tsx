import { Metadata } from "next";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aurevia Studio's engineering philosophy and team.",
};

export default function AboutPage() {
  return (
    <div className="pt-40 pb-20 w-full flex-1">
      <Wrapper>
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Engineering Digital Excellence</h1>
      <p className="text-xl text-slate-500 max-w-2xl mb-12">
        Aurevia Studio was founded on a simple premise: to build digital products that are not just beautiful, but technically flawless.
      </p>
      
      <div className="aspect-video bg-slate-100 rounded-3xl mb-20 flex items-center justify-center border border-slate-200">
        <span className="text-slate-400 font-medium">Team Photo Placeholder</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We believe that great design must be backed by rigorous engineering. We don&apos;t just write code; we architect systems that scale, perform, and endure.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Standard</h2>
          <p className="text-slate-600 leading-relaxed">
            Every pixel, every animation, and every database query is obsessively optimized. We deliver nothing short of absolute perfection.
          </p>
        </div>
      </div>
      </Wrapper>
    </div>
  );
}
