"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Wrapper from "./Wrapper";

const projects = [
  {
    id: 1,
    client: "Linear",
    title: "The new standard for modern software development.",
    category: "Web & App Design",
    color: "#E5E7EB",
    image: "linear-mockup.webp"
  },
  {
    id: 2,
    client: "Vercel",
    title: "Developing the infrastructure for the frontend web.",
    category: "Platform Engineering",
    color: "#000000",
    image: "vercel-mockup.webp"
  },
  {
    id: 3,
    client: "Stripe",
    title: "Financial infrastructure platform for the internet.",
    category: "Financial Systems",
    color: "#635BFF",
    image: "stripe-mockup.webp"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-20 md:py-[120px]">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-bold tracking-tight text-slate-900"
              style={{ fontSize: "var(--text-section)", lineHeight: 1.1 }}
            >
              Proof of Quality.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-[14px] font-semibold hover:bg-slate-800 transition-colors"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-12 md:gap-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative block"
            >
              <div
                className="w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden mb-8 relative bg-slate-100 flex items-center justify-center"
              >
                {/* Fallback pattern since we don't have images locally */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <h3 className="text-4xl md:text-6xl font-black text-slate-300 relative z-10">{project.client}</h3>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-20" />
              </div>
              
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 px-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.client}</h3>
                  <p className="text-[17px] text-slate-500 max-w-xl">{project.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider">{project.category}</span>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
