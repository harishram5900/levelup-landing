"use client";

import { motion } from "framer-motion";
import { TrendingUp, Gauge, Link2 } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Social growth",
    copy: "Get seen. Platform-specific strategy, content hooks, and growth intelligence so your work reaches the right people.",
  },
  {
    icon: Gauge,
    title: "Execution engine",
    copy: "Stay consistent. Plans into routines, priorities into focus blocks, momentum into lasting discipline.",
  },
  {
    icon: Link2,
    title: "Shared identity",
    copy: "One account, one ecosystem. Creator profile and productivity system together—Nova connects both.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Subtle gradient band */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-levelup-navy/30 to-transparent pointer-events-none" />
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/80 mb-4">
            The system
          </p>
          <h2 className="headline-section">
            Two categories. One system.
          </h2>
          <p className="mt-6 text-lg text-white/55 leading-relaxed">
            Most people either struggle to stay consistent or struggle to get seen.
            LevelUp solves both in one connected ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-8 glass-card border-white/[0.06] hover:border-levelup-gold/25 transition-all duration-300 hover:shadow-glow-gold-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-levelup-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-levelup-gold/10 text-levelup-gold ring-1 ring-levelup-gold/20">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">{card.title}</h3>
              <p className="mt-3 text-white/55 leading-relaxed">{card.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
