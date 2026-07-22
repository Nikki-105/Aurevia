"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const reviews = [
  { quote: "Aurevia transformed our SaaS platform. Our conversion jumped 340% within 30 days of launch.", author: "Marcus Vance", role: "CEO, Aura Finance" },
  { quote: "The 3D WebGL animations and 100/100 Lighthouse score made our luxury brand look unstoppable.", author: "Elena Rostova", role: "Creative Director, Luxe Atelier" },
  { quote: "Their autonomous AI chatbots handle 90% of our customer intake effortlessly.", author: "David Chen", role: "CTO, Vanguard AI" },
  { quote: "Pixel perfection, mathematically exact design system, and flawless Next.js 15 architecture.", author: "Sarah Jenkins", role: "VP Product, Horizon Group" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full ds-section z-10 bg-[#050505] text-white overflow-hidden">
      <Wrapper>
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading">
            Client Success
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-2xl">
            Trusted by world-class leaders.
          </h2>
        </div>
      </Wrapper>

      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-96 flex-shrink-0 ds-card p-8 border border-white/10 hover:border-[#00F0FF]/40 transition-colors"
            >
              <div className="flex items-center gap-1 text-[#00F0FF] mb-4">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>{star}</span>
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                "{r.quote}"
              </p>
              <div>
                <span className="text-sm font-bold text-white font-heading block">{r.author}</span>
                <span className="text-xs text-slate-500 font-mono">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
