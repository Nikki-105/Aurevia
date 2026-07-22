"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left — Large editorial number + label */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="text-[120px] sm:text-[160px] lg:text-[200px] font-black leading-none tracking-tighter select-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                20+
              </div>
              <p className="t-label mt-2" style={{ color: "var(--text-muted)" }}>Years of combined expertise</p>
            </motion.div>

            {/* Vertical stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 mt-10 pt-10"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { n: "127", label: "Projects delivered" },
                { n: "99%", label: "On-time delivery rate" },
                { n: "38",  label: "Countries served" },
              ].map((s) => (
                <div key={s.n} className="flex items-baseline gap-3">
                  <span className="text-3xl font-black" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>{s.n}</span>
                  <span className="t-sm" style={{ color: "var(--text-tertiary)" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Editorial copy */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="t-label"
              style={{ color: "var(--cyan)" }}
            >
              About Aurevia
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="t-section"
              style={{ color: "var(--text-primary)" }}
            >
              Not an agency.
              <br />
              A precision engineering studio.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="t-body-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              We operate at the intersection of strategic design and technical excellence.
              Every project we take on is scoped, engineered, and launched with the same
              obsessive precision you expect from the world's leading product teams.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-6 py-1"
              style={{ borderLeft: "2px solid var(--cyan)" }}
            >
              <p className="t-subtitle font-semibold leading-snug" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                "We don't just build websites. We build revenue-generating digital assets."
              </p>
              <p className="t-xs mt-3" style={{ color: "var(--text-muted)" }}>— Aurevia Founding Principle</p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="t-body leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              Our team includes senior engineers, motion designers, brand strategists, and
              AI architects who've shipped products for Fortune 500 companies, YC-backed
              startups, and category-defining global brands.
            </motion.p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
