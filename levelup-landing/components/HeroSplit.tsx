"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSplit() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 900),
      setTimeout(() => setStage(2), 2200),
      setTimeout(() => setStage(3), 3800),
      setTimeout(() => setStage(4), 5400),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.10),transparent_22%),radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_36%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300 md:text-sm"
        >
          One ecosystem for creators and builders
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl"
        >
          <span className="block text-white">Build discipline.</span>
          <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Grow influence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-xl md:leading-8"
        >
          LevelUp helps creators and builders stay consistent by combining
          creator growth intelligence with personal execution systems.
        </motion.p>

        <div className="relative mt-16 flex h-44 w-full items-center justify-center md:mt-20 md:h-56">
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{
              opacity: 1,
              scale: stage >= 1 ? 1.05 : 1,
              boxShadow:
                stage >= 1
                  ? "0 0 70px rgba(251,191,36,0.18)"
                  : "0 0 0px rgba(251,191,36,0)",
            }}
            transition={{ duration: 1.1 }}
            className="absolute h-40 w-40 rounded-[34px] border border-white/10 bg-black/60 backdrop-blur-xl md:h-52 md:w-52"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: stage >= 1 ? 1 : 0.2,
              scale: stage >= 1 ? 1.18 : 0.8,
            }}
            transition={{ duration: 1.2 }}
            className="absolute h-56 w-56 rounded-full bg-amber-300/10 blur-3xl md:h-72 md:w-72"
          />

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: stage >= 2 ? 1.04 : 1,
            }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            <div className="rounded-2xl border border-white/10 bg-black/45 px-8 py-5 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-10 md:py-6">
            <span className="bg-gradient-to-r from-[#fff1b5] via-[#d9ad40] to-[#7b5812] bg-clip-text text-4xl font-bold tracking-wide text-transparent md:text-6xl">

                LevelUp
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{
            opacity: stage >= 3 ? 1 : 0,
            y: stage >= 3 ? 0 : 36,
            scale: stage >= 3 ? 1 : 0.97,
          }}
          transition={{ duration: 0.9 }}
          className="mt-20 grid w-full max-w-5xl gap-6 md:mt-24 md:grid-cols-2"
        >
          <div className="rounded-[28px] border border-cyan-400/15 bg-slate-900/55 p-6 text-left shadow-[0_20px_60px_rgba(6,10,20,0.6)] backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-semibold text-cyan-300">
                LevelUp Creators
              </div>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                Momentum Engine
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80">
                Platform specific content ideas
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80">
                Hooks, genre fit, monetization signals
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80">
                Daily creator missions to stop inconsistency
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-fuchsia-400/15 bg-slate-900/55 p-6 text-left shadow-[0_20px_60px_rgba(6,10,20,0.6)] backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-semibold text-fuchsia-300">
                LevelUp Productivity
              </div>
              <span className="rounded-full bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
                Execution Layer
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80">
                Daily priorities and focus system
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80">
                Routine engine and calendar intelligence
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/80">
                Momentum tracking for real follow through
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: stage >= 4 ? 1 : 0, y: stage >= 4 ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.25)] transition hover:scale-[1.02]"
          >
            Explore Creators
          </a>

          <a
            href="https://levelupinnovations.tech"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-xl transition hover:scale-[1.02] hover:border-white/30"
          >
            Explore Productivity
          </a>
        </motion.div>
      </div>
    </section>
  );
}
