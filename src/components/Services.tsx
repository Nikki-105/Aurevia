"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const services = [
  { title: "Premium Website Development", desc: "Bespoke Next.js 15 architectures with WebGL 3D physics.", icon: "🌐" },
  { title: "AI Automation", desc: "Custom LLM agents, automated lead workflows, and smart integrations.", icon: "🤖" },
  { title: "CRM Systems", desc: "Enterprise CRM platforms built for high-touch sales pipelines.", icon: "📈" },
  { title: "SaaS Development", desc: "Scalable multi-tenant cloud software with automated billing.", icon: "☁️" },
  { title: "Mobile Apps", desc: "Native iOS & Android experiences using React Native.", icon: "📱" },
  { title: "UI/UX Design", desc: "High-fashion editorial interfaces designed for maximum conversion.", icon: "🎨" },
  { title: "Branding & Identity", desc: "Timeless visual design systems and 3D brand guidelines.", icon: "✨" },
  { title: "SEO & Growth", desc: "Data-driven organic search strategies and technical indexation.", icon: "🔍" },
  { title: "Technical SEO", desc: "Core Web Vitals optimization and automated schema generation.", icon: "⚙️" },
  { title: "AI Chatbots", desc: "Autonomous conversational agents for 24/7 client onboarding.", icon: "💬" },
  { title: "AI Voice Agents", desc: "Realistic voice synthesis agents for automated booking and phone sales.", icon: "🎙️" },
  { title: "Business Automation", desc: "End-to-end operational automation eliminating manual data entry.", icon: "⚡" },
  { title: "ERP Solutions", desc: "Custom enterprise resource planning built for modern logistics.", icon: "🏢" },
  { title: "Custom Software", desc: "High-throughput backend microservices and bespoke logic.", icon: "💻" },
  { title: "Analytics Dashboards", desc: "Real-time telemetry and executive data visualizers.", icon: "📊" },
  { title: "API Development", desc: "High-speed GraphQL and RESTful APIs with 99.99% uptime.", icon: "🔌" },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full ds-section z-10 bg-[#0b0b0b] text-white border-t border-white/10">
      <Wrapper>
        <div className="flex flex-col mb-16 text-left">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[#00F0FF]" />
            16 Core Capabilities
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="ds-section-title text-white font-heading max-w-3xl"
          >
            Engineering solutions that dominate markets.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="glow-card p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="text-3xl mb-4 p-3 rounded-xl bg-white/5 w-fit border border-white/10 group-hover:scale-110 group-hover:bg-[#00F0FF]/10 transition-all">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <span className="mt-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                Explore Service →
              </span>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
