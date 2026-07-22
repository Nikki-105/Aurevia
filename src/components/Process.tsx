"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "./Wrapper";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We don't just build; we interrogate. We dive deep into your business model, target audience, and market landscape to define a strategic roadmap that guarantees measurable ROI and long-term brand equity.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "02",
    title: "Editorial Design",
    description: "Our design philosophy bridges the gap between high-fashion editorial and conversion-optimized digital products. We craft wireframes and high-fidelity prototypes that feel native to luxury brands.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "03",
    title: "Creative Engineering",
    description: "We build scalable, high-performance architectures using bleeding-edge WebGL, React, and serverless technologies. The result is a frictionless, cinematic experience across all devices.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    num: "04",
    title: "Launch & Iterate",
    description: "Deployment is just the beginning. We rigorously test, analyze user behavior, and iterate to ensure your digital presence remains at the absolute cutting edge of your industry.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function Process() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative w-full ds-section z-10">
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-[96px] relative" ref={containerRef}>
          
          {/* Sticky Header Side */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="lg:sticky lg:top-[128px]">
              <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] ds-mb-heading flex items-center gap-[16px]">
                <div className="w-[32px] h-[1px] bg-[var(--color-text-tertiary)]" />
                The Story
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="ds-section-title text-[var(--color-text-primary)] ds-mb-heading font-heading"
              >
                A rigorous approach to digital perfection.
              </motion.h2>
              <p className="ds-body">
                We believe that true luxury lies in the details. Our process is a carefully choreographed dance between raw creative intuition and deep technical expertise.
              </p>
            </div>
          </div>

          {/* Scrolling Timeline */}
          <div className="lg:w-2/3 relative flex flex-col pt-[48px] lg:pt-0">
            
            {/* Ambient progress line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[var(--color-bg-secondary)] hidden md:block" />
            
            {/* Animated Fill Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-[27px] top-0 w-[2px] bg-[var(--color-accent)] origin-top hidden md:block z-10"
            />

            <div className="flex flex-col gap-[128px]">
              {steps.map((step, i) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col md:flex-row gap-[48px] md:gap-[80px] items-start group"
                >
                  {/* Timeline Dot (Hidden on mobile) */}
                  <div className="hidden md:flex absolute left-[22px] top-[16px] w-[12px] h-[12px] bg-white border-[2px] border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:scale-[1.5] rounded-full z-20 transition-all duration-500" />
                  
                  {/* Step Number */}
                  <div className="md:w-[128px] flex-shrink-0 md:text-right pt-[8px] md:pl-[64px]">
                    <span className="text-[64px] font-[800] tracking-[-0.04em] text-[var(--color-border-hover)] group-hover:text-[var(--color-accent)] transition-colors duration-500 font-heading leading-[1]">
                      {step.num}
                    </span>
                  </div>
                  
                  {/* Content Box */}
                  <div className="flex-1 flex flex-col ds-card group-hover:bg-[var(--color-bg-secondary)]">
                    <h3 className="ds-card-title text-[var(--color-text-primary)] ds-mb-heading font-heading">
                      {step.title}
                    </h3>
                    <p className="ds-body ds-mb-button">
                      {step.description}
                    </p>
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[24px]">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-1000" />
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  );
}
