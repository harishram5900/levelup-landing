"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type LogoProps = {
  href?: string;
  showWordmark?: boolean;
  className?: string;
  size?: "sm" | "md";
};

export default function Logo({ href = "#", showWordmark = true, className = "", size = "md" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const dim = size === "sm" ? 28 : 36;
  const content = (
    <motion.span
      className={`group inline-flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="relative inline-flex shrink-0 overflow-hidden rounded bg-levelup-black ring-1 ring-white/5"
        style={{ width: dim, height: dim }}
        whileHover={{
          boxShadow: "0 0 24px rgba(201, 162, 39, 0.4), 0 0 48px rgba(201, 162, 39, 0.12)",
          transition: { duration: 0.25 },
        }}
      >
        {!imgError ? (
          <>
            <Image
              src="/levelup-logo.png"
              alt="LevelUp"
              width={dim}
              height={dim}
              className="object-contain p-0.5"
              priority
              sizes="36px"
              onError={() => setImgError(true)}
            />
            <span
              className="absolute inset-0 rounded bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out pointer-events-none"
              aria-hidden
            />
          </>
        ) : (
          <span className="flex h-full w-full items-center justify-center text-levelup-gold text-lg font-bold tracking-tighter">
            L
          </span>
        )}
      </motion.span>
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight text-white hidden sm:inline">
          LevelUp
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
