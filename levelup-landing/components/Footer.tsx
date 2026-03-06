"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { href: "#products", label: "Products" },
  { href: "#reviews", label: "Reviews" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const socialIcons = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16 bg-levelup-black">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Logo href="#" showWordmark={true} size="md" />
          <p className="text-[14px] text-white/50 max-w-xs">
            Build discipline. Grow influence.
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/50 hover:text-levelup-gold-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/40 hover:text-levelup-gold transition-colors duration-200"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-12 text-[12px] text-white/35">
          © {new Date().getFullYear()} LevelUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
