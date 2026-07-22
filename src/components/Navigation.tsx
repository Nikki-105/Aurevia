"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import MagneticButton from "./MagneticButton";
import Wrapper from "./Wrapper";

const LINKS = ["About", "Services", "Work", "Process", "Pricing", "Contact"];

export default function Navigation() {
  const { setCursorType } = useCursor();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ paddingTop: scrolled ? "12px" : "20px", transition: "padding 300ms ease" }}
    >
      <Wrapper className="px-0">
        <nav
          className="flex items-center justify-between h-[72px] px-8 transition-all"
          style={{
            background:    scrolled ? "rgba(8,8,12,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            border:        scrolled ? "1px solid var(--border)" : "1px solid transparent",
            borderRadius:  scrolled ? "var(--r-full)" : "var(--r-xl)",
            boxShadow:     scrolled ? "var(--shadow-md)" : "none",
            transition:    "all 350ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="text-[18px] font-black tracking-tight select-none"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
            onClick={(e) => { e.preventDefault(); document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            WebAura<span style={{ color: "var(--cyan)" }}>.</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-9">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="t-mono text-[11px] transition-colors"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  setCursorType("pointer");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                  setCursorType("default");
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full text-xs font-bold transition-all"
              style={{
                background: "var(--cyan)",
                color: "#000",
                boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(0,229,255,0.55)";
                setCursorType("pointer");
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,229,255,0.3)";
                setCursorType("default");
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Project
            </a>
          </MagneticButton>
        </nav>
      </Wrapper>
    </motion.header>
  );
}
