"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Lightbulb,
  Calendar,
  BarChart3,
  CheckSquare,
  User,
  Menu,
  X,
} from "lucide-react";
import CreatorsLogo from "./CreatorsLogo";

const navItems = [
  { href: "/creators/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/creators/ideas", label: "Ideas", icon: Lightbulb },
  { href: "/creators/planner", label: "Planner", icon: Calendar },
  { href: "/creators/insights", label: "Insights", icon: BarChart3 },
  { href: "/creators/consistency", label: "Consistency", icon: CheckSquare },
  { href: "/creators/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-white/[0.06] bg-levelup-black px-4 lg:hidden">
        <CreatorsLogo />
        <button
          type="button"
          aria-label="Toggle menu"
          className="p-2 text-white/80 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
      {/* Sidebar: drawer on mobile, fixed on desktop */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-56 flex-col border-r border-white/[0.06] bg-levelup-black transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center border-b border-white/[0.06] px-4">
          <CreatorsLogo />
        </div>
        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/[0.06] text-levelup-gold"
                    : "text-white/70 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-levelup-gold" : ""}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/[0.06] p-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/50 hover:bg-white/[0.04] hover:text-white/80 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            ← Back to LevelUp
          </Link>
        </div>
      </aside>
    </>
  );
}
