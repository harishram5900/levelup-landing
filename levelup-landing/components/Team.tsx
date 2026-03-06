"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  { name: "Harish", role: "Founder", copy: "Leading the vision for one ecosystem for creators and builders." },
  { name: "LevelUp Creators", role: "Growth intelligence arm", copy: "AI powered content strategy and social growth." },
  { name: "LevelUp Productivity", role: "Execution system arm", copy: "Routines, focus, and momentum for consistent execution." },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 sm:py-36">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/80 mb-4">
            Team
          </p>
          <h2 className="headline-section">Built for a new era of builders</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-full max-w-sm rounded-2xl p-8 glass-card border-white/[0.06] hover:border-levelup-gold/20 transition-all duration-300 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-levelup-gold/10 text-levelup-gold ring-2 ring-levelup-gold/20">
                <User className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">{member.name}</h3>
              <p className="mt-1 text-[14px] text-levelup-gold font-medium">{member.role}</p>
              <p className="mt-4 text-[14px] text-white/55 leading-relaxed">
                {member.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
