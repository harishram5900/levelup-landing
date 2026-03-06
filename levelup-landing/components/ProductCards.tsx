"use client";

import { motion } from "framer-motion";
import {
  Layout,
  MessageSquare,
  BarChart3,
  Calendar,
  Crosshair,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const creatorsFeatures = [
  { icon: Layout, text: "Platform specific content strategy" },
  { icon: MessageSquare, text: "Hooks, scripts, and monetization fit" },
  { icon: BarChart3, text: "Growth intelligence before posting" },
];

const productivityFeatures = [
  { icon: Calendar, text: "Three move daily system" },
  { icon: Crosshair, text: "Focus mode and routine engine" },
  { icon: TrendingUp, text: "Execution and momentum tracking" },
];

export default function ProductCards() {
  return (
    <section id="products" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-levelup-navy/20 pointer-events-none" />
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/80 mb-4">
            Products
          </p>
          <h2 className="headline-section">One ecosystem, two surfaces</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <Link href="#waitlist" className="block h-full">
              <div className="relative h-full rounded-2xl overflow-hidden glass-panel border-levelup-blue/25 hover:border-levelup-blue/40 shadow-panel hover:shadow-panel-hover transition-all duration-300 p-8 lg:p-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-levelup-blue/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-levelup-blue/20 text-levelup-blue ring-1 ring-levelup-blue/30">
                    <Layout className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">LevelUp Creators</h3>
                </div>
                <p className="mt-6 text-white/60 leading-relaxed">
                  AI powered creator growth intelligence: content ideas, platform strategy,
                  monetization alignment, and audience fit scoring.
                </p>
                <ul className="mt-8 space-y-4">
                  {creatorsFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-white/80 text-[15px]">
                      <f.icon className="h-4 w-4 shrink-0 text-levelup-gold/90" />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-levelup-gold group-hover:gap-2 transition-all">
                  Get early access
                  <span className="text-levelup-gold-light">→</span>
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <Link href="#waitlist" className="block h-full">
              <div className="relative h-full rounded-2xl overflow-hidden glass-panel border-levelup-purple/25 hover:border-levelup-purple/40 shadow-panel hover:shadow-panel-hover transition-all duration-300 p-8 lg:p-10">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-levelup-purple/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-levelup-purple/20 text-levelup-purple ring-1 ring-levelup-purple/30">
                    <Crosshair className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">LevelUp Productivity</h3>
                </div>
                <p className="mt-6 text-white/60 leading-relaxed">
                  A calm execution layer: routines, daily priorities, calendar intelligence,
                  and momentum systems that help you follow through.
                </p>
                <ul className="mt-8 space-y-4">
                  {productivityFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-white/80 text-[15px]">
                      <f.icon className="h-4 w-4 shrink-0 text-levelup-gold/90" />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-levelup-gold group-hover:gap-2 transition-all">
                  Get early access
                  <span className="text-levelup-gold-light">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
