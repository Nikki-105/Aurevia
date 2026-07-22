"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Button from "./Button";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full ds-section bg-[var(--color-bg-primary)] z-10 border-t border-[var(--color-border)]">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[96px] items-center">
          
          {/* Left: Info Panel */}
          <div className="flex flex-col">
            <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] ds-mb-heading flex items-center gap-[16px]">
              <div className="w-[32px] h-[1px] bg-[var(--color-text-tertiary)]" />
              Start a Project
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="ds-section-title text-[var(--color-text-primary)] font-heading ds-mb-heading"
            >
              Let's engineer your <br className="hidden md:block" /> next masterpiece.
            </motion.h2>
            <p className="ds-body max-w-[480px] ds-mb-button">
              We selectively partner with ambitious brands ready to push the boundaries of what's possible on the web.
            </p>

            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col">
                <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] mb-[8px]">Email</span>
                <a href="mailto:hello@aurevia.com" className="text-[20px] font-[700] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">hello@aurevia.com</a>
              </div>
              <div className="flex flex-col">
                <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] mb-[8px]">Location</span>
                <span className="text-[20px] font-[700] text-[var(--color-text-primary)]">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            {/* Ambient Background Glow behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)] to-[#8b5cf6] rounded-[32px] blur-[80px] opacity-10 animate-pulse pointer-events-none" />
            
            <form className="relative ds-card flex flex-col gap-[24px]">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-[700] tracking-[0.05em] uppercase text-[var(--color-text-secondary)] pl-[16px]">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="ds-input"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] font-[700] tracking-[0.05em] uppercase text-[var(--color-text-secondary)] pl-[16px]">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="ds-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-[700] tracking-[0.05em] uppercase text-[var(--color-text-secondary)] pl-[16px]">Budget</label>
                <select className="ds-input appearance-none cursor-pointer">
                  <option>$50k - $100k</option>
                  <option>$100k - $250k</option>
                  <option>$250k+</option>
                </select>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-[700] tracking-[0.05em] uppercase text-[var(--color-text-secondary)] pl-[16px]">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your vision..." 
                  className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[16px] px-[20px] py-[16px] text-[var(--color-text-primary)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-bg-primary)] transition-all resize-none shadow-[0_0_0_0_rgba(37,99,235,0)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                />
              </div>

              <Button type="button" variant="primary" className="mt-[16px] w-full">
                Submit Inquiry
              </Button>

            </form>
          </motion.div>

        </div>
      </Wrapper>
    </section>
  );
}
