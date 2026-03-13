"use client";

import Link from "next/link";

export default function CreatorsLogo() {
  return (
    <Link href="/creators" className="flex items-center gap-2.5 group">
      {/* Stylized gold L - geometric, angular with diagonal cut per brand */}
      <span className="relative flex h-9 w-9 shrink-0">
        <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="goldL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5c558" />
              <stop offset="50%" stopColor="#c9a227" />
              <stop offset="100%" stopColor="#9a7b1a" />
            </linearGradient>
          </defs>
          {/* Stylized L: vertical bar + horizontal base with angled cut */}
          <path d="M8 4h5v18h-5V4z" fill="url(#goldL)" />
          <path d="M13 22h15v5H13v-5z" fill="url(#goldL)" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-white">LevelUp</span>
        <span className="text-[11px] font-medium tracking-wide text-white/70 -mt-0.5">Creators</span>
      </span>
    </Link>
  );
}
