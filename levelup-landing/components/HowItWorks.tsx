"use client";

import { motion } from "framer-motion";
import { Route, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Choose your path",
    copy: "Creators or Productivity—or both. Start where you need the most impact.",
    icon: Route,
  },
  {
    num: "02",
    title: "Nova helps you plan, create, and execute",
    copy: "One AI assistant for content strategy and daily execution. Plan once, ship consistently.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Grow influence and consistency together",
    copy: "Your audience grows as your discipline does. One ecosystem, one identity.",
    icon: ArrowRight,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/80 mb-4">
            How it works
          </p>
          <h2 className="headline-section">Three steps to level up</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-levelup-gold/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl p-8 h-full glass-card border-white/[0.06] hover:border-levelup-gold/25 transition-all duration-300"
                >
                  <div className="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-levelup-gold/50 to-transparent md:hidden" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-levelup-gold/10 text-levelup-gold ring-1 ring-levelup-gold/20">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="mt-6 block text-[12px] font-medium tracking-wider text-levelup-gold/90">
                    Step {step.num}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white tracking-tight">{step.title}</h3>
                  <p className="mt-4 text-[15px] text-white/55 leading-relaxed">{step.copy}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
