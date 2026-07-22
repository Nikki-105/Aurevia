"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  const [team, setTeam] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/team")
      .then(res => res.json())
      .then(data => {
        if (data.team) setTeam(data.team);
      })
      .catch(err => console.error("Failed to load team:", err));
  }, []);

  if (team.length === 0) return null;

  return (
    <section className="section-pad relative overflow-hidden bg-surface-0 border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="t-label text-cyan mb-4 block">Our Team</span>
          <h2 className="t-section mb-6">The Minds Behind Aurevia</h2>
          <p className="t-body text-text-secondary">
            Meet the visionaries, designers, and engineers dedicated to crafting your next digital masterpiece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:shadow-cyan transition-shadow cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                <img src={member.image_url} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{member.name}</h3>
              <p className="text-cyan font-semibold text-sm mb-4 tracking-wide uppercase">{member.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
