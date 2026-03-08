"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Harish Ramasubramanian",
    role: "Founder",
    copy: "Leading the vision for one ecosystem for creators and builders.",
    image: "/founder-harish.png",
    imagePosition: undefined,
  },
  {
    name: "LevelUp Creators",
    role: "Growth intelligence arm",
    copy: "AI powered content strategy and social growth.",
    image: "/levelup-creators-productivity.png",
    imagePosition: "left" as const,
  },
  {
    name: "LevelUp Productivity",
    role: "Execution system arm",
    copy: "Routines, focus, and momentum for consistent execution.",
    image: "/levelup-creators-productivity.png",
    imagePosition: "right" as const,
  },
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
              className="w-full max-w-sm rounded-2xl overflow-hidden glass-card border-white/[0.06] hover:border-levelup-gold/20 transition-all duration-300 text-center"
            >
              <div className="relative aspect-square w-full bg-levelup-navy/80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover ${member.imagePosition === "left" ? "object-left" : member.imagePosition === "right" ? "object-right" : "object-top"}`}
                  sizes="(max-width: 640px) 100vw, 24rem"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-[14px] text-levelup-gold font-medium">
                  {member.role}
                </p>
                <p className="mt-4 text-[14px] text-white/55 leading-relaxed">
                  {member.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
