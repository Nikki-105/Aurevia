"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REPLIES: Record<string, string> = {
  pricing: "Our projects start from $25,000 for bespoke web platforms. Enterprise packages start at $50,000. Custom scopes available.",
  services: "We offer 16 core capabilities: Web Dev, AI Automation, SaaS, Mobile, UI/UX, Branding, SEO, CRM, ERP, Dashboards, and more.",
  timeline: "Most projects take 4–8 weeks from discovery to 100/100 Lighthouse launch.",
  ai: "We build autonomous AI Chatbots, Voice Agents, LLM pipelines, and automated business workflows.",
};

function getReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const [key, reply] of Object.entries(REPLIES)) {
    if (lower.includes(key)) return reply;
  }
  return "Great question. Our team specializes in high-performance digital engineering, AI automation, and WebGL experiences. Would you like to schedule a strategy call?";
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { from: "ai", text: "Hi — I'm the WebAura AI. I can tell you about our services, pricing, or timelines. What can I help with?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMsgs((p) => [...p, { from: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMsgs((p) => [...p, { from: "ai", text: getReply(userMsg) }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9985] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 md:w-96 glass rounded-[var(--r-xl)] overflow-hidden shadow-[var(--shadow-lg)]"
            style={{ border: "1px solid var(--border-strong)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
                <span className="t-sm font-semibold" style={{ color: "var(--text-primary)" }}>WebAura AI</span>
              </div>
              <button onClick={() => setOpen(false)} className="t-sm" style={{ color: "var(--text-tertiary)" }}>✕</button>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-4 max-h-64 overflow-y-auto">
              {msgs.map((m, i) => (
                <div key={i} className={`t-sm leading-relaxed rounded-[var(--r-md)] px-4 py-3 max-w-[85%] ${m.from === "user" ? "self-end" : "self-start"}`}
                  style={{
                    background:   m.from === "user" ? "var(--blue)" : "rgba(255,255,255,0.06)",
                    color:        "var(--text-primary)",
                    borderRadius: m.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 p-3" style={{ borderTop: "1px solid var(--border)" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-xs outline-none placeholder-[var(--text-muted)]"
                style={{ color: "var(--text-primary)" }}
              />
              <button
                onClick={send}
                className="h-8 px-3.5 rounded-full text-xs font-bold transition-all"
                style={{ background: "var(--cyan)", color: "#000" }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.93 }}
        className="w-13 h-13 rounded-full flex items-center justify-center shadow-[var(--shadow-cyan)] transition-all"
        style={{
          width: 52, height: 52,
          background: open ? "var(--cyan)" : "var(--surface-2)",
          border: "1px solid var(--border-hover)",
          color: open ? "#000" : "var(--cyan)",
        }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>
    </div>
  );
}
