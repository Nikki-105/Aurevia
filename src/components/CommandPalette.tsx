"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { id: "hero", label: "Jump to Hero Section", category: "Navigation" },
  { id: "about", label: "About WebAura Studio", category: "Navigation" },
  { id: "services", label: "Explore Our 16 Services", category: "Navigation" },
  { id: "portfolio", label: "View Selected Case Studies", category: "Navigation" },
  { id: "process", label: "Our Story & Roadmap", category: "Navigation" },
  { id: "pricing", label: "Interactive Scope Estimator", category: "Tools" },
  { id: "contact", label: "Schedule Calendar Consultation", category: "Action" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#0b0b0b] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Header */}
            <div className="flex items-center px-6 py-4 border-b border-white/10">
              <svg className="w-5 h-5 text-[#00F0FF] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
                autoFocus
              />
              <span className="text-[10px] font-mono bg-white/10 text-slate-400 px-2 py-1 rounded">ESC</span>
            </div>

            {/* Command List */}
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-colors text-sm group"
                  >
                    <span className="font-medium group-hover:text-[#00F0FF] transition-colors">{cmd.label}</span>
                    <span className="text-xs text-slate-500 font-mono">{cmd.category}</span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-slate-500 text-sm">No results found.</div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
