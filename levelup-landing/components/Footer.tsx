"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { href: "#products", label: "Products" },
  { href: "#reviews", label: "Reviews" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.77 0 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 100 12.68 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
    </svg>
  );
}

const socialIcons = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/levelup102009?igsh=MTEwajc2bnpxdWhpaA==",
    label: "Instagram",
  },
  { icon: TikTokIcon, href: "https://tiktok.com/@levelup.ur.life", label: "TikTok" },
  { icon: Youtube, href: "https://www.youtube.com/@LevelUp-ur-life", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/levelup-innovations/", label: "LinkedIn" },
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
                target="_blank"
                rel="noreferrer"
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
