"use client";

import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const CLIENTS = [
  "Stripe", "Vercel", "Notion", "Linear", "Figma",
  "Shopify", "Atlassian", "GitHub", "Framer", "Retool",
];

export default function ClientBar() {
  return (
    <section className="py-16" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        <div className="flex flex-col items-center gap-10">
          <p className="t-label" style={{ color: "var(--text-muted)" }}>Trusted by teams at</p>
          <div className="w-full overflow-hidden relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, var(--surface-0), transparent)" }} />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, var(--surface-0), transparent)" }} />

            <div className="flex marquee-fwd">
              {[...CLIENTS, ...CLIENTS].map((name, i) => (
                <div
                  key={i}
                  className="shrink-0 mx-8 flex items-center"
                >
                  <span
                    className="text-xl font-black tracking-tight whitespace-nowrap select-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-muted)",
                      transition: "color 200ms",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
