"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#why-levelup", label: "Why LevelUp" },
  { href: "#reviews", label: "Reviews" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-levelup-black/70 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <nav className="section-inner flex items-center justify-between h-14 lg:h-16">
          <Logo href="#" />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/[0.04]"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-1 left-4 right-4 h-px bg-levelup-gold/60 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-200" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="#login"
              className="btn-secondary py-2 px-4 text-[13px]"
            >
              Log in
            </Link>
            <Link
              href="#waitlist"
              className="btn-primary"
            >
              Join waitlist
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-levelup-black/90 backdrop-blur-xl md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="pt-20 px-4 pb-8 border-b border-white/[0.06]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3.5 text-[15px] font-medium text-white/90 hover:text-levelup-gold-light transition-colors border-b border-white/[0.04]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href="#login"
                  className="btn-secondary w-full justify-center py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="#waitlist"
                  className="btn-primary w-full justify-center py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Join waitlist
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
