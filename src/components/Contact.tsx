"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Button from "./Button";
import MagneticButton from "./MagneticButton";

const SERVICES_OPTS = [
  "Premium Web Development", "AI Automation", "SaaS Development",
  "Mobile Application", "UI/UX Design", "Branding", "SEO / Technical SEO",
  "AI Chatbot / Voice Agent", "CRM / ERP", "Custom Software",
];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* ─── Left Info ─── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="t-label" style={{ color: "var(--cyan)" }}>Get in Touch</p>
              <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
                Let's engineer something unforgettable.
              </h2>
              <p className="t-body leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                Tell us about your project. We review every submission personally and reply within 2 business hours.
              </p>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full self-start"
              style={{ background: "rgba(0,229,255,0.07)", border: "1px solid rgba(0,229,255,0.2)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
              <span className="t-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                Accepting new projects — <span style={{ color: "var(--cyan)" }}>Q3 2025</span>
              </span>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { label: "Email", value: "hello@webaura.studio" },
                { label: "Response Time", value: "Within 2 business hours" },
                { label: "Timezone", value: "Available globally" },
              ].map((d) => (
                <div key={d.label} className="flex flex-col gap-1">
                  <span className="t-label" style={{ color: "var(--text-muted)" }}>{d.label}</span>
                  <span className="t-body font-medium" style={{ color: "var(--text-secondary)" }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Form ─── */}
          <div className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center gap-6 h-full min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--cyan-dim)", border: "1px solid rgba(0,229,255,0.4)" }}>
                  <svg className="w-7 h-7" style={{ color: "var(--cyan)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="t-subtitle font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>Message Received</h3>
                  <p className="t-body" style={{ color: "var(--text-tertiary)" }}>We'll be in touch within 2 business hours.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="t-label" style={{ color: "var(--text-muted)" }}>Full Name *</label>
                    <input
                      required
                      className="input"
                      placeholder="Marcus Theil"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="t-label" style={{ color: "var(--text-muted)" }}>Email Address *</label>
                    <input
                      required
                      type="email"
                      className="input"
                      placeholder="marcus@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className="t-label" style={{ color: "var(--text-muted)" }}>Company / Project Name</label>
                  <input
                    className="input"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3">
                  <label className="t-label" style={{ color: "var(--text-muted)" }}>Services Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_OPTS.map((s) => {
                      const active = selected.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          className="px-3.5 py-2 rounded-full t-label text-[9px] transition-all"
                          style={{
                            background:   active ? "var(--cyan-dim)" : "rgba(255,255,255,0.04)",
                            border:       `1px solid ${active ? "rgba(0,229,255,0.5)" : "var(--border)"}`,
                            color:        active ? "var(--cyan)" : "var(--text-tertiary)",
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="t-label" style={{ color: "var(--text-muted)" }}>Project Details *</label>
                  <textarea
                    required
                    rows={5}
                    className="input"
                    style={{ height: "auto", padding: "14px 20px", resize: "none" }}
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <MagneticButton>
                  <Button variant="primary" type="submit" className="w-full justify-center">
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
