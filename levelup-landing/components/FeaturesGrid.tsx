"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Sparkles,
  TrendingUp,
  Wind,
  Shield,
  Users,
} from "lucide-react";

const items = [
  { icon: Link2, title: "One ecosystem", copy: "Creators and Productivity in one account. Switch context, not tools." },
  { icon: Sparkles, title: "Nova intelligence", copy: "AI assistant for plans, content, and execution in one place." },
  { icon: TrendingUp, title: "Social growth", copy: "Platform strategy, hooks, and growth scoring before you post." },
  { icon: Wind, title: "Calm execution", copy: "Routines, focus mode, and momentum so you actually ship." },
  { icon: Shield, title: "Credibility layer", copy: "Built for founders and creators who care about reputation." },
  { icon: Users, title: "Community future", copy: "Join the first wave. Early access and input on the roadmap." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function FeaturesGrid() {
  return (
    <section id="why-levelup" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-levelup-navy/20 via-transparent to-levelup-navy/20 pointer-events-none" />
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/80 mb-4">
            Why LevelUp
          </p>
          <h2 className="headline-section">Why LevelUp wins</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group rounded-xl p-6 glass-card border-white/[0.06] hover:border-levelup-gold/20 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-levelup-gold/10 text-levelup-gold ring-1 ring-levelup-gold/15">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white tracking-tight">{card.title}</h3>
              <p className="mt-2 text-[14px] text-white/55 leading-relaxed">{card.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
