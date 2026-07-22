"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import { useCursor } from "@/context/CursorContext";
import Button from "./Button";

const projects = [
  {
    title: "Aura Finance",
    category: "Fintech App",
    image: "/portfolio-1.png",
    chips: ["React Native", "WebGL", "Figma"]
  },
  {
    title: "Luxe Atelier",
    category: "E-Commerce",
    image: "/portfolio-2.png",
    chips: ["Next.js", "Stripe", "GSAP"]
  },
  {
    title: "Vanguard",
    category: "Brand Identity",
    image: "/portfolio-3.png",
    chips: ["Art Direction", "Motion", "C4D"]
  }
];

export default function Portfolio() {
  const { setCursorType, setCursorLabel } = useCursor();

  return (
    <section id="work" className="relative w-full ds-section z-10 bg-[var(--color-bg-secondary)]">
      <Wrapper>
        
        <div className="flex flex-col text-left ds-mb-heading">
          <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] ds-mb-heading flex items-center gap-[16px]">
            <div className="w-[32px] h-[1px] bg-[var(--color-text-tertiary)]" />
            Selected Works
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="ds-section-title text-[var(--color-text-primary)] font-heading max-w-[960px]"
          >
            Digital experiences that define industry standards.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-[96px] mt-[64px]">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] overflow-hidden cursor-none"
              onMouseEnter={() => {
                setCursorType("text");
                setCursorLabel("EXPLORE");
              }}
              onMouseLeave={() => {
                setCursorType("default");
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
              
              <div className="absolute inset-0 p-[32px] md:p-[64px] flex flex-col justify-end">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px] translate-y-[32px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-[0.16,1,0.3,1]">
                  
                  <div className="flex flex-col">
                    <span className="text-white/70 ds-small tracking-[0.1em] uppercase ds-mb-heading">
                      {project.category}
                    </span>
                    <h3 className="text-[48px] md:text-[64px] font-[800] tracking-[-0.03em] text-white ds-mb-heading font-heading leading-[1.1]">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-[12px]">
                      {project.chips.map(chip => (
                        <span key={chip} className="glass-panel text-white text-[12px] px-[16px] py-[8px] rounded-full font-[700] tracking-[0.05em] uppercase border-white/20">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="bg-white text-slate-900 rounded-full h-[52px] px-[28px] font-[600] tracking-[-0.02em] text-[16px] transition-transform duration-300 hover:scale-[1.02]">
                    View Case Study
                  </button>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </Wrapper>
    </section>
  );
}
