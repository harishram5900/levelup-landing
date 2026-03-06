"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap, BarChart3, Crosshair, Activity } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background: layered orbs + gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[32rem] h-[32rem] rounded-full bg-levelup-blue/25 blur-[140px] glow-orb animate-float" />
        <div className="absolute bottom-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-levelup-purple/20 blur-[140px] glow-orb animate-float-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-80 rounded-full bg-levelup-gold/8 blur-[120px] animate-glow-pulse-slow" />
        <div className="absolute inset-0 bg-mesh-dark" />
      </div>

      {/* Light sweep over hero */}
      <div className="absolute inset-0 pointer-events-none light-sweep overflow-hidden" />

      <div className="relative section-inner w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/90 mb-6"
            >
              One ecosystem for creators & builders
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="headline-hero"
            >
              Build discipline.{" "}
              <span className="bg-gradient-to-r from-levelup-gold via-levelup-gold-light to-levelup-gold bg-clip-text text-transparent">
                Grow influence.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Creator growth intelligence and personal productivity in one connected
              experience. Plan, create, and execute from a single command center.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              <Link href="#products" className="btn-primary">
                <Zap className="h-4 w-4" />
                Explore Creators
              </Link>
              <Link href="#products" className="btn-secondary">
                <Target className="h-4 w-4" />
                Explore Productivity
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-10 text-[13px] text-white/40"
            >
              900+ users across 25+ countries
            </motion.p>
          </div>

          {/* Right: floating OS-style product scene */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Orbit particles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-48 h-48">
                <div className="absolute left-1/2 top-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 animate-orbit">
                  <span className="orbit-dot absolute left-20 top-0 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="absolute left-1/2 top-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse" style={{ animationDelay: "-5s" }}>
                  <span className="orbit-dot absolute left-24 top-0 -translate-x-1/2 -translate-y-1/2 bg-levelup-blue/30 w-2 h-2" />
                </div>
              </div>
            </div>

            {/* Glow behind panels */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] rounded-full bg-levelup-gold/5 blur-[80px] pointer-events-none" />

            <div className="relative flex flex-col gap-6">
              {/* Creators Intelligence panel */}
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-panel rounded-2xl overflow-hidden border-levelup-blue/20 shadow-panel hover:shadow-panel-hover hover:border-levelup-blue/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-levelup-blue/90 ml-2">
                    Creators Intelligence
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-levelup-gold/80" />
                    <span className="text-xs text-white/50">Growth score · Platform strategy</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-levelup-blue/60 to-levelup-blue"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Content fit", "Audience match", "Monetization", "Hooks"].map((label, i) => (
                      <div key={label} className="rounded-lg bg-white/[0.03] px-3 py-2 border border-white/[0.04]">
                        <span className="text-[11px] text-white/60">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connecting bridge */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-levelup-gold/40 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-levelup-black/90 border border-levelup-gold/20">
                  <Sparkles className="h-3 w-3 text-levelup-gold" />
                </div>
              </div>

              {/* Productivity Control panel */}
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-panel rounded-2xl overflow-hidden border-levelup-purple/20 shadow-panel hover:shadow-panel-hover hover:border-levelup-purple/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-levelup-purple/90 ml-2">
                    Productivity Control
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-levelup-gold/80" />
                    <span className="text-xs text-white/50">Three moves · Focus · Momentum</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.2, delay: 0.7 }}
                      className="h-full rounded-full bg-gradient-to-r from-levelup-purple/60 to-levelup-purple"
                    />
                  </div>
                  <div className="flex gap-2">
                    {["Routine", "Focus", "Ship"].map((label) => (
                      <div key={label} className="flex-1 rounded-lg bg-white/[0.03] px-3 py-2 border border-white/[0.04] text-center">
                        <span className="text-[11px] text-white/60">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
