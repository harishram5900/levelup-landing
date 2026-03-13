import Card from "@/components/creators/Card";
import {
  growthOverview,
  bestTimeToPostData,
  trendingContent,
} from "@/lib/creators/mockData";
import { BarChart3 } from "lucide-react";

const maxBarValue = Math.max(...bestTimeToPostData.map((d) => d.value));

export default function InsightsPage() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-levelup-gold" />
          <h1 className="text-2xl font-semibold tracking-tight text-white">Creator Growth Insights</h1>
        </div>
        <p className="mt-1 text-sm text-white/60">Performance and engagement metrics</p>
      </header>

      {/* Growth overview */}
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        {growthOverview.map((stat) => (
          <Card key={stat.label} className="p-6">
            <p className="text-sm text-white/60">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold text-levelup-gold">{stat.value}</p>
            <p className="mt-0.5 text-xs text-white/50">{stat.sub}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Best time to post */}
        <Card className="p-6">
          <h2 className="text-base font-semibold text-white">Best Time to Post</h2>
          <div className="mt-6 flex items-end gap-2 h-40">
            {bestTimeToPostData.map((d) => (
              <div key={d.hour} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full max-w-[32px] rounded-t bg-levelup-gold/40 hover:bg-levelup-gold/60 transition-colors"
                  style={{ height: `${(d.value / maxBarValue) * 120}px` }}
                />
                <span className="text-[10px] text-white/50">{d.hour}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Trending content */}
        <Card className="p-6">
          <h2 className="text-base font-semibold text-white">Trending Content</h2>
          <ul className="mt-4 space-y-3">
            {trendingContent.map((item, i) => (
              <li key={i} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="text-sm text-white/90">{item.title}</p>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-lg font-semibold text-levelup-gold">{item.views}</span>
                  <span className="text-sm text-white/50">{item.growth} views</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Engagement note */}
      <Card className="mt-6 p-6">
        <h2 className="text-base font-semibold text-white">Engagement Insights</h2>
        <p className="mt-2 text-sm text-white/70">
          Your audience is most active between 6–9 PM. Posting during this window has driven 2.3x more engagement than morning posts. Short-form content (under 60s) on TikTok and Reels performs best.
        </p>
      </Card>
    </div>
  );
}
