"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { id: "hero",      icon: "◆",  label: "Home"     },
  { id: "about",     icon: "∞",  label: "About"    },
  { id: "services",  icon: "⊙",  label: "Services" },
  { id: "portfolio", icon: "◈",  label: "Work"     },
  { id: "process",   icon: "→",  label: "Process"  },
  { id: "pricing",   icon: "◇",  label: "Pricing"  },
  { id: "contact",   icon: "✦",  label: "Contact"  },
];

export default function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9980] hidden md:flex items-center gap-1.5 px-4 py-2.5 glass rounded-full shadow-[var(--shadow-md)]" style={{ border: "1px solid var(--border)" }}>
      {ITEMS.map((item) => (
        <motion.a
          key={item.id}
          href={`#${item.id}`}
          title={item.label}
          whileHover={{ scale: 1.3, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
          className="relative group w-9 h-9 flex items-center justify-center rounded-full text-sm transition-colors"
          style={{ color: "var(--text-tertiary)" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--cyan)"}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)"}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {item.icon}
          <span
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-xs font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ background: "var(--surface-3)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
          >
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
