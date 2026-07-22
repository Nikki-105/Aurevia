"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Button from "./Button";

const services = [
  {
    title: "Digital Products",
    description: "End-to-end product engineering, from architectural concept to scalable, high-performance deployment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    tags: ["Web Apps", "Mobile", "SaaS"]
  },
  {
    title: "Brand Strategy",
    description: "Timeless visual identities and strategic brand positioning designed specifically for modern tech enterprises.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    tags: ["Identity", "Art Direction", "Systems"]
  },
  {
    title: "AI Integration",
    description: "Custom AI automation, conversational agents, and machine learning solutions to optimize complex workflows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    tags: ["LLMs", "Automation", "Data"]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full ds-section z-10">
      <Wrapper>
        
        <div className="flex flex-col md:flex-row gap-[64px] md:gap-[32px] justify-between items-end mb-[96px]">
          <div className="flex flex-col">
            <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] ds-mb-heading flex items-center gap-[16px]">
              <div className="w-[32px] h-[1px] bg-[var(--color-text-tertiary)]" />
              Capabilities
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="ds-section-title text-[var(--color-text-primary)] max-w-[800px] font-heading"
            >
              We engineer solutions that elevate brands.
            </motion.h2>
          </div>
          <Button variant="secondary" className="whitespace-nowrap">
            View All Services
          </Button>
        </div>

        <div className="ds-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="ds-card col-span-4 lg:col-span-4 flex flex-col group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-[56px] h-[56px] rounded-[16px] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] ds-mb-paragraph group-hover:text-[var(--color-accent)] group-hover:scale-[1.1] transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="ds-card-title text-[var(--color-text-primary)] ds-mb-heading font-heading">
                  {service.title}
                </h3>
                
                <p className="ds-body ds-mb-button">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-[8px] mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[12px] font-[600] tracking-[0.05em] uppercase text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-[12px] py-[6px] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </Wrapper>
    </section>
  );
}
