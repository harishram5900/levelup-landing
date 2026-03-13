import Card from "@/components/creators/Card";
import PlatformIcon from "@/components/creators/PlatformIcon";
import { scheduledPosts } from "@/lib/creators/mockData";
import { Calendar, Plus } from "lucide-react";

export default function PlannerPage() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-levelup-gold" />
          <h1 className="text-2xl font-semibold tracking-tight text-white">Post Planner</h1>
        </div>
        <p className="mt-1 text-sm text-white/60">Weekly content schedule</p>
      </header>

      {/* Week / Month / Year tabs */}
      <div className="flex gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-1 w-fit mb-6">
        {["Week", "Month", "Year"].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === "Week"
                ? "bg-levelup-gold/15 text-levelup-gold"
                : "text-white/70 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scheduled posts */}
      <div className="space-y-4">
        {scheduledPosts.map((post) => (
          <Card key={post.id} className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                <PlatformIcon platform={post.platform} className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-white/50">
                  {post.day}: {post.time} • {post.type}
                </p>
                <p className="mt-0.5 font-medium text-white">{post.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add post FAB */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-levelup-black border border-levelup-gold/40 px-5 py-2.5 text-sm font-medium text-levelup-gold shadow-[0_0_24px_rgba(201,162,39,0.15)] hover:bg-levelup-gold/10 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add post
        </button>
      </div>
    </div>
  );
}
