"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

const interestOptions = [
  "LevelUp Creators",
  "LevelUp Productivity",
  "Both",
];

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    interest: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name,
          email: form.email,
          interest: form.interest,
          notes: form.notes || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setForm({ full_name: "", email: "", interest: "", notes: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-[15px] text-white placeholder-white/35 focus:border-levelup-gold/50 focus:outline-none focus:ring-1 focus:ring-levelup-gold/30 transition-all duration-200";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-xl mx-auto rounded-2xl overflow-hidden border border-levelup-gold/30 bg-levelup-navy/80 backdrop-blur-2xl shadow-glow-gold p-10 sm:p-12 text-center"
      >
        <div className="absolute inset-0 bg-levelup-gold/5 pointer-events-none" />
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-levelup-gold/20 text-levelup-gold ring-2 ring-levelup-gold/30">
          <CheckCircle className="h-9 w-9" />
        </div>
        <h3 className="mt-8 text-2xl font-bold text-white tracking-tight">You&apos;re on the list.</h3>
        <p className="mt-4 text-white/60 text-[15px]">
          We&apos;ll reach out when we open early access. Build something great.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="relative max-w-xl mx-auto rounded-2xl overflow-hidden border border-levelup-gold/25 bg-levelup-navy/70 backdrop-blur-2xl shadow-glow-gold-sm p-8 sm:p-10"
    >
      <div className="absolute inset-0 bg-levelup-gold/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-levelup-gold/30 to-transparent" />

      <div className="relative space-y-6">
        <div>
          <label htmlFor="full_name" className="block text-[13px] font-medium text-white/80 mb-2 tracking-wide">
            Full name
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={form.full_name}
            onChange={(e) => setForm((p) => ({ ...p, full_name: e.target.value }))}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] font-medium text-white/80 mb-2 tracking-wide">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-[13px] font-medium text-white/80 mb-2 tracking-wide">
            What are you most interested in?
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={form.interest}
            onChange={(e) => setForm((p) => ({ ...p, interest: e.target.value }))}
            className={`${inputClass} [&>option]:bg-levelup-navy [&>option]:text-white`}
          >
            <option value="">Select one</option>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="notes" className="block text-[13px] font-medium text-white/80 mb-2 tracking-wide">
            What are you building or trying to improve? <span className="text-white/40">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={form.notes}
            onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
            className={`${inputClass} resize-none`}
            placeholder="Side project, audience growth, daily routine..."
          />
        </div>
        {errorMessage && (
          <p className="text-[14px] text-red-400/90">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-3.5 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Securing your spot...
            </>
          ) : (
            "Join the waitlist"
          )}
        </button>
      </div>
    </motion.form>
  );
}
