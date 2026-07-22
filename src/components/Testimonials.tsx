import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const testimonials = [
  {
    quote: "Auravia redefined our digital presence. Absolute perfection.",
    author: "Elena Rostova",
    role: "CMO, Nexus"
  },
  {
    quote: "The attention to detail and interaction design is unmatched in the industry.",
    author: "David Chen",
    role: "Founder, Zenith"
  },
  {
    quote: "They don't just build websites; they engineer digital excellence from the ground up.",
    author: "Sarah Jenkins",
    role: "Director, Vora"
  },
  {
    quote: "Our conversion rates doubled after launching the new platform.",
    author: "Michael Ross",
    role: "VP Product, Shift"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-white border-t border-slate-100">
      <Wrapper>
        
        {/* Unified Section Header */}
        <div className="flex flex-col mb-20 text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">
            04 — Client Feedback
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-[800] text-slate-900 tracking-tight max-w-3xl"
          >
            Trusted by industry leaders.
          </motion.h2>
        </div>

        {/* Flawless Borderless Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col pt-8 border-t border-slate-200"
            >
              <p className="text-xl md:text-2xl font-[500] text-slate-900 leading-relaxed tracking-tight mb-8">
                "{test.quote}"
              </p>
              <div className="flex flex-col mt-auto">
                <span className="text-sm font-bold tracking-wide text-slate-900">{test.author}</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mt-1">{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </Wrapper>
    </section>
  );
}
