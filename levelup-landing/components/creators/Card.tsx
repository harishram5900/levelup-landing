import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-white/[0.06] bg-levelup-navy/40 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
