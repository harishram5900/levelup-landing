"use client";

import { useState } from "react";

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-levelup-gold/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-levelup-gold/20";

export default function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("LevelUp Creators");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          interest,
          notes: notes || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setMessage("You're on the waitlist! We'll be in touch.");
      setFullName("");
      setEmail("");
      setInterest("LevelUp Creators");
      setNotes("");
    } catch (err) {
      setIsError(true);
      setMessage("Network error. Please check your connection and try again.");
      console.error("[WaitlistForm] submit error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="sr-only">
            Full name
          </label>
          <input
            id="full_name"
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="sr-only">
          I&apos;m interested in
        </label>
        <select id="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className={inputBase}>
          <option value="LevelUp Creators">LevelUp Creators</option>
          <option value="LevelUp Productivity">LevelUp Productivity</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="sr-only">
          What are you building?
        </label>
        <textarea
          id="notes"
          placeholder="What are you building or trying to improve? (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-4 font-semibold text-slate-950 shadow-[0_0_24px_rgba(251,191,36,0.25)] transition-all duration-200 hover:brightness-105 hover:shadow-[0_0_32px_rgba(251,191,36,0.35)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:brightness-100"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
            Joining...
          </span>
        ) : (
          "Join the waitlist"
        )}
      </button>

      {message && (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${isError ? "bg-red-500/10 text-red-400" : "bg-emerald-500/10 text-emerald-400"}`}
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  );
}
