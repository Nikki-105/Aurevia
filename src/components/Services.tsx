"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Wrapper from "./Wrapper";
import {
  Code2, Cpu, Bot, Database, Smartphone, Palette,
  TrendingUp, Zap, Globe, GitMerge, ShieldCheck,
  Cloud, Briefcase, BarChart3, Settings
} from "lucide-react";

const services = [
  { icon: Code2, title: "Premium Websites", desc: "Pixel-perfect, award-winning websites that captivate visitors and convert at every touchpoint.", color: "#4f46e5" },
  { icon: Cpu, title: "AI Automation", desc: "Custom AI workflows that eliminate repetitive tasks and unlock exponential operational efficiency.", color: "#7c3aed" },
  { icon: Bot, title: "AI Agents", desc: "Intelligent agents that handle support, sales qualification, and complex queries autonomously.", color: "#2563eb" },
  { icon: Globe, title: "CRM Systems", desc: "Custom CRM on HubSpot, Salesforce, or fully bespoke — ensuring your pipeline never leaks.", color: "#4f46e5" },
  { icon: Settings, title: "Custom Software", desc: "Mission-critical software precisely tailored to your business processes and existing stack.", color: "#7c3aed" },
  { icon: Database, title: "SaaS Development", desc: "Scalable cloud platforms with multi-tenancy, billing, and real-time collaboration built in.", color: "#2563eb" },
  { icon: Palette, title: "UI/UX Design", desc: "Design systems and interfaces that position your product as the benchmark in your category.", color: "#4f46e5" },
  { icon: Briefcase, title: "Brand Identity", desc: "Comprehensive brand strategy, identity, and visual language that earns immediate recognition.", color: "#7c3aed" },
  { icon: TrendingUp, title: "SEO & Technical SEO", desc: "Data-driven optimization targeting Core Web Vitals and long-term organic growth.", color: "#2563eb" },
  { icon: ShieldCheck, title: "ERP Systems", desc: "Enterprise resource planning built to your exact workflows, integrating all business operations.", color: "#4f46e5" },
  { icon: BarChart3, title: "Dashboards", desc: "Beautiful, interactive analytics dashboards turning raw data into actionable business intelligence.", color: "#7c3aed" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Resilient, scalable cloud architecture on AWS, GCP, or Azure with zero-downtime deployments.", color: "#2563eb" },
  { icon: GitMerge, title: "API Development", desc: "High-performance REST and GraphQL APIs built for security, speed, and long-term scalability.", color: "#4f46e5" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS and Android apps delivering 60fps experiences with intuitive, delightful UX.", color: "#7c3aed" },
  { icon: Zap, title: "Business Automation", desc: "End-to-end automation using custom APIs and no-code tools saving hundreds of hours monthly.", color: "#2563eb" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Services() {
  return (
    <section id="services" className="bg-[#F6F7FB] py-20 md:py-[120px]">
      <Wrapper>
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4"
            >
              What We Build
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-bold tracking-tight text-slate-900"
              style={{ fontSize: "var(--text-section)", lineHeight: 1.1 }}
            >
              Every Layer of Your<br />Digital Presence
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[17px] text-slate-500 leading-relaxed md:text-right"
          >
            From first pixel to production infrastructure — one team with full ownership of your digital outcomes.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group relative bg-white border border-black/[0.06] rounded-2xl p-7 hover:border-black/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}12` }}
                >
                  <Icon size={18} style={{ color: s.color }} strokeWidth={2} />
                </div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{s.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-[14px] font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
          >
            Explore All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </Wrapper>
    </section>
  );
}
