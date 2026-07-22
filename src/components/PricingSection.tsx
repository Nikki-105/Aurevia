"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import MagneticButton from "./MagneticButton";

const PLANS = [
  {
    name:     "Starter",
    subtitle: "For growing businesses",
    price:    "$9,500",
    period:   "per project",
    features: [
      "Up to 8-page Next.js website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form & lead capture",
      "2 revision rounds",
      "2-week delivery",
      "30-day support",
    ],
    cta:      "Get Started",
    featured: false,
  },
  {
    name:     "Enterprise",
    subtitle: "Our most popular package",
    price:    "$24,500",
    period:   "per project",
    features: [
      "Unlimited pages & complexity",
      "Custom design system",
      "Advanced animations & WebGL",
      "CMS / Headless integration",
      "AI chatbot included",
      "Full SEO & Core Web Vitals",
      "4 revision rounds",
      "6-week delivery",
      "90-day priority support",
    ],
    cta:      "Start Enterprise",
    featured: true,
  },
  {
    name:     "Custom",
    subtitle: "For complex bespoke builds",
    price:    "Let's Talk",
    period:   "scoped to your needs",
    features: [
      "SaaS / Mobile / ERP / AI systems",
      "Full product strategy",
      "Dedicated engineering team",
      "Multi-year roadmap capability",
      "Ongoing retainer options",
      "White-label available",
      "Executive access",
    ],
    cta:      "Book a Call",
    featured: false,
  },
];

export default function PricingSection() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>

        {/* Header — centred */}
        <div className="flex flex-col items-center text-center gap-4 mb-20 max-w-2xl mx-auto">
          <p className="t-label" style={{ color: "var(--cyan)" }}>Transparent Pricing</p>
          <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
            Investment that pays for itself.
          </h2>
          <p className="t-body" style={{ color: "var(--text-tertiary)", maxWidth: "440px" }}>
            No retainers. No surprises. Fixed-scope pricing so you know exactly what you're getting.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`${plan.featured ? "card-featured" : "card"} flex flex-col items-center text-center`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="flex justify-center mb-8">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full t-label text-[9px]"
                    style={{ background: "var(--cyan-dim)", color: "var(--cyan)", border: "1px solid rgba(0,229,255,0.38)" }}
                  >
                    ✦ Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <p className="t-label text-[10px] mb-2" style={{ color: plan.featured ? "var(--cyan)" : "var(--text-muted)" }}>
                  {plan.name.toUpperCase()}
                </p>
                <p className="t-sm" style={{ color: "var(--text-tertiary)" }}>{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="pb-8 mb-8 flex flex-col items-center w-full" style={{ borderBottom: "1px solid var(--border)" }}>
                <p
                  className="font-black tracking-tight leading-none"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: plan.price === "Let's Talk" ? "34px" : "46px",
                    color: plan.featured ? "var(--cyan)" : "var(--text-primary)",
                  }}
                >
                  {plan.price}
                </p>
                <p className="t-xs mt-2" style={{ color: "var(--text-muted)" }}>{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3.5 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-[2px] shrink-0" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7"
                        stroke={plan.featured ? "var(--cyan)" : "var(--border-strong)"}
                        strokeWidth="1" />
                      <path d="M5 8l2 2 4-4"
                        stroke={plan.featured ? "var(--cyan)" : "var(--text-tertiary)"}
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="t-sm" style={{ color: plan.featured ? "var(--text-secondary)" : "var(--text-tertiary)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`btn w-full justify-center ${plan.featured ? "btn-primary" : "btn-secondary"}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center t-xs mt-10" style={{ color: "var(--text-muted)" }}>
          All plans include IP ownership transfer, source code delivery, and written SLA agreements.{" "}
          <button onClick={scrollToContact} className="underline" style={{ color: "var(--text-tertiary)", background: "none", border: "none", cursor: "pointer" }}>
            Custom scope? Let's talk.
          </button>
        </p>
      </Wrapper>
    </section>
  );
}
