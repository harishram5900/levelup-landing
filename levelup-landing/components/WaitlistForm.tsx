"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("LevelUp Creators");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("waitlist").insert([
      {
        full_name: fullName,
        email,
        interest,
        notes: notes || null,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("You are on the waitlist.");
    setFullName("");
    setEmail("");
    setInterest("LevelUp Creators");
    setNotes("");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
      />

      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
      >
        <option value="LevelUp Creators">LevelUp Creators</option>
        <option value="LevelUp Productivity">LevelUp Productivity</option>
        <option value="Both">Both</option>
      </select>

      <textarea
        placeholder="What are you building or trying to improve?"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={4}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-3 font-semibold text-black disabled:opacity-70"
      >
        {loading ? "Joining..." : "Join the waitlist"}
      </button>

      {message ? <p className="text-sm text-white/80">{message}</p> : null}
    </form>
  );
}
