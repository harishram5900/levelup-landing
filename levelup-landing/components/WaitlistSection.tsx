"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[32rem] h-80 rounded-full bg-levelup-gold/15 blur-[100px] animate-glow-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-levelup-black to-levelup-black" />
      </div>

      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold mb-4">
            Early access
          </p>
          <h2 className="headline-section">
            Reserve your place in the first wave.
          </h2>
          <p className="mt-6 text-lg text-white/55 leading-relaxed">
            Join the founding cohort. Get early access to LevelUp Creators and LevelUp Productivity before public launch—and shape what we build next.
          </p>
        </motion.div>
        <WaitlistForm />
      </div>
    </section>
  );
}
