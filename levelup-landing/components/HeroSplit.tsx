"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSplit() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1400),
      setTimeout(() => setStage(3), 2400),
      setTimeout(() => setStage(4), 3300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.10),transparent_22%),radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_36%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-5 pt-24 pb-20 text-center md:px-6 md:pt-32 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 max-w-[330px] text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300 md:max-w-none md:text-sm"
        >
          One ecosystem for creators and builders
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl"
        >
          <span className="block text-white">Build discipline.</span>
          <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Grow influence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base md:mt-6 md:text-xl md:leading-8"
        >
          LevelUp helps creators and builders stay consistent by combining creator
          growth intelligence with personal execution systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href="/creators"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(251,191,36,0.22)] transition hover:brightness-105 md:text-base"
          >
            Open LevelUp Creators
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/30 md:text-base"
          >
            Join the Waitlist
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/30 md:text-base"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-4 text-xs text-white/45 md:text-sm"
        >
          Early access for creators, student founders, and ambitious builders
        </motion.p>

        <div className="relative mt-14 flex h-40 w-full items-center justify-center md:mt-16 md:h-52">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{
              opacity: 1,
              scale: stage >= 1 ? 1.02 : 1,
            }}
            transition={{ duration: 0.7 }}
            className="absolute h-36 w-36 rounded-[30px] border border-white/10 bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:h-44 md:w-44"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: stage >= 1 ? 1 : 0.15,
              scale: stage >= 1 ? 1.08 : 0.8,
            }}
            transition={{ duration: 0.8 }}
            className="absolute h-48 w-48 rounded-full bg-amber-300/10 blur-3xl md:h-64 md:w-64"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              filter:
                stage >= 2
                  ? "drop-shadow(0 0 24px rgba(251,191,36,0.35))"
                  : "drop-shadow(0 0 0px rgba(251,191,36,0))",
            }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <div className="rounded-2xl border border-white/8 bg-black/40 px-7 py-4 shadow-[0_0_24px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-10 md:py-5">
              <span
                className="bg-gradient-to-r from-[#fff1b5] via-[#d9ad40] to-[#7b5812] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl"
                style={{
                  fontFamily:
                    "Georgia, Times New Roman, Times, serif",
                  fontStyle: "italic",
                }}
              >
                LevelUp
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{
            opacity: stage >= 3 ? 1 : 0,
            y: stage >= 3 ? 0 : 28,
            scale: stage >= 3 ? 1 : 0.98,
          }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid w-full max-w-5xl gap-4 md:mt-16 md:grid-cols-2 md:gap-6"
          id="products"
        >
          <div className="rounded-[24px] border border-cyan-400/15 bg-slate-900/55 p-5 text-left shadow-[0_20px_60px_rgba(6,10,20,0.55)] backdrop-blur-2xl md:rounded-[28px] md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="text-xl font-semibold text-cyan-300">
                LevelUp Creators
              </div>
              <span className="whitespace-nowrap rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200 md:text-xs">
                Momentum Engine
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/82">
                Platform specific content ideas
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/82">
                Hooks, genre fit, monetization signals
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/82">
                Daily creator missions to stop inconsistency
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-fuchsia-400/15 bg-slate-900/55 p-5 text-left shadow-[0_20px_60px_rgba(6,10,20,0.55)] backdrop-blur-2xl md:rounded-[28px] md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="text-xl font-semibold text-fuchsia-300">
                LevelUp Productivity
              </div>
              <span className="whitespace-nowrap rounded-full bg-fuchsia-400/10 px-3 py-1 text-[11px] text-fuchsia-200 md:text-xs">
                Execution Layer
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/82">
                Daily priorities and focus system
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/82">
                Routine engine and calendar intelligence
              </div>
              <div className="rounded-2xl bg-white/5 p-3 text-sm text-white/82">
                Momentum tracking for real follow through
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: stage >= 4 ? 1 : 0, y: stage >= 4 ? 0 : 18 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(251,191,36,0.24)] transition hover:brightness-105 md:text-base"
          >
            Join the Waitlist
          </a>

          <a
            href="https://levelupinnovations.tech"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/30 md:text-base"
          >
            Explore Productivity
          </a>
        </motion.div>
      </div>
    </section>
  );
}
