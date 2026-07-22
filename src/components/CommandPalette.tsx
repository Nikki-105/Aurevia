"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "hero",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "services",   label: "Services" },
  { id: "portfolio",  label: "Work" },
  { id: "process",    label: "Process" },
  { id: "pricing",    label: "Pricing" },
  { id: "contact",    label: "Contact" },
];

const COMMANDS = [
  ...NAV_ITEMS.map((n) => ({ id: n.id, label: `Navigate → ${n.label}`, category: "Navigation" })),
  { id: "contact",  label: "Get a Project Quote",  category: "Action" },
  { id: "pricing",  label: "View Pricing",          category: "Action" },
  { id: "portfolio",label: "Explore Case Studies",  category: "Action" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const close = useCallback(() => { setOpen(false); setQ(""); }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(q.toLowerCase())
  );

  const select = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-[14vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/70"
            style={{ backdropFilter: "blur(12px)" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[560px] glass rounded-[var(--r-xl)] shadow-[var(--shadow-lg)] overflow-hidden z-10"
            style={{ border: "1px solid var(--border-strong)" }}
          >
            <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <svg className="w-4 h-4 shrink-0" style={{ color: "var(--cyan)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: "var(--text-primary)" }}
              />
              <kbd className="t-mono text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--surface-3)", color: "var(--text-tertiary)", border: "1px solid var(--border)" }}>ESC</kbd>
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((cmd, i) => (
                  <button
                    key={i}
                    onClick={() => select(cmd.id)}
                    className="w-full text-left flex items-center justify-between px-4 py-3 rounded-[var(--r-md)] text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    <span>{cmd.label}</span>
                    <span className="t-label" style={{ color: "var(--text-muted)" }}>{cmd.category}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center t-sm" style={{ color: "var(--text-muted)" }}>No results found</div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
