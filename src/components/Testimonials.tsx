"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const testimonials = [
  {
    quote: "Aurevia didn't just build our platform; they completely transformed how we think about our digital product. The engineering quality is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, Linear"
  },
  {
    quote: "Working with this team feels like having a world-class internal engineering department. They ship faster and better than anyone we've ever hired.",
    author: "Michael Chen",
    role: "VP Engineering, Stripe"
  },
  {
    quote: "The AI automation systems Aurevia implemented saved us literally thousands of hours in the first quarter alone. Absolutely transformative.",
    author: "Elena Rodriguez",
    role: "Operations Director, Scale"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#F6F7FB] py-20 md:py-[120px] border-y border-slate-200">
      <Wrapper>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-16 text-center"
        >
          Client Endorsements
        </motion.p>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between"
            >
              <div className="mb-8">
                {/* SVG Quote Icon */}
                <svg className="w-8 h-8 text-blue-600/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.667 12h-4c0-3.682 2.985-6.667 6.667-6.667v-2.667c-5.155 0-9.333 4.178-9.333 9.333v12h9.333v-12zm17.333 0h-4c0-3.682 2.985-6.667 6.667-6.667v-2.667c-5.155 0-9.333 4.178-9.333 9.333v12h9.333v-12z" />
                </svg>
                <p className="text-[17px] text-slate-700 leading-relaxed font-medium">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{t.author}</h4>
                <p className="text-[14px] text-slate-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
