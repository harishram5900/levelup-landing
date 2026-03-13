"use client";

import { useState } from "react";
import Card from "@/components/creators/Card";
import { platforms, topics, generatedIdeas, hookSuggestions } from "@/lib/creators/mockData";
import { Rocket, ChevronDown, ArrowRight, X } from "lucide-react";

export default function IdeasPage() {
  const [platform, setPlatform] = useState("TikTok");
  const [topic, setTopic] = useState("Educational");
  const [niche, setNiche] = useState("Productivity Tips");

  return (
    <div className="p-8">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-levelup-gold" />
          <h1 className="text-2xl font-semibold tracking-tight text-white">Content Idea Generator</h1>
        </div>
        <p className="mt-1 text-sm text-white/60">Generate ideas by platform and topic</p>
      </header>

      {/* Filters */}
      <Card className="p-6 mb-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Platform</label>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full appearance-none rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 pr-9 text-sm text-white focus:border-levelup-gold/50 focus:outline-none focus:ring-1 focus:ring-levelup-gold/30"
              >
                {platforms.map((p) => (
                  <option key={p} value={p} className="bg-levelup-navy text-white">
                    {p}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Topic</label>
            <div className="relative">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full appearance-none rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 pr-9 text-sm text-white focus:border-levelup-gold/50 focus:outline-none focus:ring-1 focus:ring-levelup-gold/30"
              >
                {topics.map((t) => (
                  <option key={t} value={t} className="bg-levelup-navy text-white">
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">Niche / Category</label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g. Productivity Tips"
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-levelup-gold/50 focus:outline-none focus:ring-1 focus:ring-levelup-gold/30"
            />
          </div>
        </div>
      </Card>

      {/* Generated ideas */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-white/70 mb-4">Generated Ideas</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {generatedIdeas.map((idea) => (
            <Card key={idea.id} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{idea.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{idea.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-levelup-gold">
                    {idea.tag}
                    <X className="h-3 w-3 cursor-pointer text-white/50 hover:text-white" />
                  </span>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-full p-2 text-levelup-gold hover:bg-levelup-gold/15 transition-colors"
                  aria-label="Play"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-lg border border-levelup-gold/40 py-2 text-sm font-medium text-levelup-gold hover:bg-levelup-gold/10 transition-colors"
              >
                Save idea
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Hook suggestions */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-white/70">Hook Suggestions</h2>
          <ArrowRight className="h-4 w-4 text-levelup-gold" />
        </div>
        <ul className="mt-4 space-y-2">
          {hookSuggestions.map((hook, i) => (
            <li
              key={i}
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/90 cursor-pointer hover:border-levelup-gold/20 transition-colors"
            >
              {hook}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
