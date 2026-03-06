"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Student Founder",
    role: "Building in public",
    content:
      "I was posting randomly and missing deadlines. LevelUp gave me a system—Nova helps me plan content that actually fits each platform, and the productivity side keeps me shipping. Finally one place for both.",
  },
  {
    name: "Early Creator User",
    role: "Content creator",
    content:
      "The growth intelligence before you post is a game changer. I stopped guessing what would perform and started using real strategy. Plus having my calendar and content in one ecosystem saves me hours.",
  },
  {
    name: "Startup Community Member",
    role: "Founder",
    content:
      "LevelUp feels like the missing layer between hustle and system. I get discipline without the overwhelm, and my social presence actually grows because it's connected to how I execute. This is the next generation growth system.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-levelup-navy/30 pointer-events-none" />
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-medium tracking-widest uppercase text-levelup-gold/80 mb-4">
            Testimonials
          </p>
          <h2 className="headline-section">The next generation growth system.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-8 glass-card border-white/[0.06] hover:border-levelup-gold/20 transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-levelup-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Quote className="h-9 w-9 text-levelup-gold/40" />
              <p className="mt-6 text-white/80 leading-relaxed flex-1 text-[15px]">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="font-semibold text-white text-[15px]">{t.name}</p>
                <p className="text-[13px] text-white/45 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
