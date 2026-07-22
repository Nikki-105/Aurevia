"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const posts = [
  {
    title: "Engineering 100/100 Lighthouse Next.js 15 Architectures",
    category: "Engineering",
    date: "July 2026",
    readTime: "5 min read",
  },
  {
    title: "The Future of WebGL & Autonomous AI Agents in Enterprise SaaS",
    category: "AI & 3D",
    date: "July 2026",
    readTime: "7 min read",
  },
  {
    title: "Why High-Fashion Editorial Typography Increases Lead Conversion",
    category: "UI/UX Design",
    date: "June 2026",
    readTime: "4 min read",
  },
];

export default function BlogPreview() {
  return (
    <section className="relative w-full ds-section z-10 bg-[#0b0b0b] text-white border-t border-white/10">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#00F0FF]" />
              Editorial Insights
            </span>
            <h2 className="ds-section-title text-white font-heading">
              Perspectives on engineering & design.
            </h2>
          </div>
          <button className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-widest hover:underline mt-4 md:mt-0">
            View All Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glow-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#00F0FF] transition-colors leading-snug mb-4">
                  {post.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 mt-8">{post.date}</span>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
