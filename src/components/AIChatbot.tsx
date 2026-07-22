"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Welcome to WebAura. I am your AI project consultant. How can we help engineer your digital experience today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      let reply = "Our team specializes in high-performance web development, AI automation, and custom SaaS platforms. Would you like to schedule a strategy call?";
      if (userMsg.toLowerCase().includes("pricing") || userMsg.toLowerCase().includes("cost")) {
        reply = "Our projects start at $50,000 for bespoke web platforms. We also offer custom AI automation and SaaS scope calculators!";
      } else if (userMsg.toLowerCase().includes("services") || userMsg.toLowerCase().includes("ai")) {
        reply = "We offer 16 core capabilities including AI Chatbots, Voice Agents, WebGL, Next.js 15 architectures, and Enterprise ERPs.";
      }
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 md:w-96 h-96 mb-4 bg-[#0b0b0b] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00F0FF] animate-pulse" />
                <span className="text-sm font-bold text-white">WebAura AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#0066FF] text-white self-end"
                      : "bg-white/10 text-slate-200 self-start"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask AI assistant..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF]"
              />
              <button
                onClick={handleSend}
                className="bg-[#00F0FF] text-black font-bold px-3 py-2 rounded-xl text-xs hover:bg-white transition-colors"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-slate-900 border border-[#00F0FF]/50 text-[#00F0FF] flex items-center justify-center shadow-lg shadow-[#0066FF]/20 hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}
