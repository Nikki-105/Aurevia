"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Wrapper from "./Wrapper";

export default function CTA() {
  return (
    <section className="bg-white py-20 md:py-[120px]">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 md:px-16 py-20 md:py-32 text-center"
        >
          {/* Subtle glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20 blur-[80px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #4f46e5, #7c3aed)" }}
            aria-hidden="true"
          />

          {/* Tiny star dots (Deterministic for SSR) */}
          {[
            { w: 2.1, h: 2.1, t: 31.8, l: 43.7, d: 0, du: 5 },
            { w: 3.4, h: 3.6, t: 65.6, l: 89.8, d: 0.9, du: 6 },
            { w: 4.0, h: 3.4, t: 47.8, l: 52.0, d: 1.8, du: 7 },
            { w: 2.8, h: 2.1, t: 53.8, l: 31.7, d: 2.7, du: 8 },
            { w: 3.0, h: 1.5, t: 82.0, l: 9.7, d: 3.6, du: 9 },
            { w: 1.9, h: 4.0, t: 30.9, l: 13.9, d: 4.5, du: 10 },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-float"
              style={{
                width: `${star.w}px`,
                height: `${star.h}px`,
                top: `${star.t}%`,
                left: `${star.l}%`,
                animationDelay: `${star.d}s`,
                animationDuration: `${star.du}s`,
              }}
              aria-hidden="true"
            />
          ))}

          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Let&apos;s Work Together
            </p>
            <h2
              className="font-bold tracking-tight text-white mb-6"
              style={{ fontSize: "var(--text-section)", lineHeight: 1.05 }}
            >
              Ready to Build<br />Something Exceptional?
            </h2>
            <p className="text-[17px] text-white/60 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Join over 80 companies who chose Aurevia to lead their most important digital initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-900 text-[15px] font-bold tracking-tight hover:bg-slate-100 transition-colors duration-200 shadow-lg"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white/80 text-[15px] font-semibold border border-white/10 hover:bg-white/5 transition-colors duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
}
