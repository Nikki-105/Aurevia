"use client";

import { motion } from "framer-motion";

const dockItems = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "✨" },
  { id: "services", label: "Services", icon: "⚙️" },
  { id: "portfolio", label: "Work", icon: "🚀" },
  { id: "process", label: "Process", icon: "🛣️" },
  { id: "pricing", label: "Pricing", icon: "💎" },
  { id: "contact", label: "Contact", icon: "💬" },
];

export default function FloatingDock() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9985] hidden md:flex items-center gap-2 px-4 py-2 bg-[#0b0b0b]/80 backdrop-blur-xl border border-white/15 rounded-full shadow-2xl shadow-black/80">
      {dockItems.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.25, y: -6 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo(item.id)}
          className="relative group p-3 rounded-full text-lg hover:bg-white/10 transition-colors"
          title={item.label}
        >
          <span>{item.icon}</span>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#111] text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
            {item.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
