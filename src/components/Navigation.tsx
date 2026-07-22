"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import MagneticButton from "./MagneticButton";

const LINKS = [
  { label: "About",    id: "about"    },
  { label: "Services", id: "services" },
  { label: "Work",     id: "portfolio"},
  { label: "Process",  id: "process"  },
  { label: "Pricing",  id: "pricing"  },
  { label: "Contact",  id: "contact"  },
];

export default function Navigation() {
  const { setCursorType } = useCursor();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > 200 && currentY > lastY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ padding: scrolled ? "10px 0" : "18px 0", transition: "padding 300ms ease, transform 300ms ease" }}
      >
        <div className="container">
          <div
            className="flex items-center justify-between"
            style={{
              height: "72px",
              padding: "0 28px",
              borderRadius: scrolled ? "var(--r-full)" : "var(--r-xl)",
              background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
              backdropFilter: scrolled ? "blur(24px)" : "none",
              border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
              boxShadow: scrolled ? "var(--shadow-md)" : "none",
              transition: "all 350ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* ─── Logo ─── */}
            <button
              onClick={() => scrollTo("hero")}
              className="text-[20px] font-black tracking-tight select-none flex-shrink-0"
              style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              Aurevia<span style={{ color: "var(--cyan)" }}>.</span>
            </button>

            {/* ─── Links (centered) ─── */}
            <nav className="hidden md:flex items-center gap-8">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="t-mono text-[11px] transition-colors duration-200"
                  style={{ color: "var(--text-tertiary)", background: "none", border: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    setCursorType("pointer");
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                    setCursorType("default");
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* ─── CTA + Mobile toggle ─── */}
            <div className="flex items-center gap-4">
              <MagneticButton>
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn btn-primary hidden md:inline-flex"
                  style={{ height: "44px", padding: "0 24px", fontSize: "13px" }}
                  onMouseEnter={() => setCursorType("pointer")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Start Project
                </button>
              </MagneticButton>

              {/* Hamburger */}
              <button
                className="md:hidden flex flex-col gap-[5px] p-2"
                onClick={() => setMobileOpen((v) => !v)}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block w-5 h-[1.5px] rounded-full transition-all"
                    style={{ background: "var(--text-primary)" }}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-6"
          onClick={() => setMobileOpen(false)}>
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="t-section font-bold"
              style={{ color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer" }}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn btn-primary mt-4">Start Project</button>
        </div>
      )}
    </>
  );
}
