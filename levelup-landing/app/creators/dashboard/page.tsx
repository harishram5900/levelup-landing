import Card from "@/components/creators/Card";
import PlatformIcon from "@/components/creators/PlatformIcon";
import {
  todayTask,
  currentStreak,
  nextPost,
  growthChartData,
  upcomingSchedule,
  quickStats,
} from "@/lib/creators/mockData";
import { Check, Flame } from "lucide-react";

const maxChartValue = Math.max(...growthChartData.map((d) => d.value));

export default function DashboardPage() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-white/60">Your creator overview</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Task */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-levelup-gold/15 text-levelup-gold">
              <Check className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-white">Today&apos;s Task</h2>
              <p className="mt-1 text-lg font-medium text-white">{todayTask.title}</p>
              <p className="mt-1 text-sm text-white/60">Idea: {todayTask.idea}</p>
              <p className="mt-0.5 text-sm text-white/50">Concept: {todayTask.concept}</p>
            </div>
            <PlatformIcon platform={todayTask.platform} className="h-5 w-5 shrink-0 text-white/70" />
          </div>
        </Card>

        {/* Current Streak */}
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-levelup-gold/15 text-levelup-gold">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/60">{currentStreak.label}</p>
              <p className="text-2xl font-semibold text-levelup-gold">{currentStreak.days} days</p>
            </div>
          </div>
        </Card>

        {/* Next Post */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-sm font-medium text-white/70">Next Post</h2>
          <div className="mt-3 flex items-center gap-3">
            <PlatformIcon platform={nextPost.platform} className="h-5 w-5" />
            <div className="min-w-0 flex-1">
              <p className="font-medium text-white">{nextPost.title}</p>
              <p className="text-sm text-white/60">{nextPost.when}</p>
              <p className="mt-1 text-sm text-white/80">{nextPost.idea}</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-levelup-gold/80"
                  style={{ width: "60%" }}
                />
              </div>
              <p className="mt-1 text-xs text-white/50">{nextPost.progressLabel}</p>
            </div>
          </div>
        </Card>

        {/* Growth Analytics preview */}
        <Card className="p-6">
          <h2 className="text-sm font-medium text-white/70">Growth Analytics</h2>
          <div className="mt-4 flex items-end gap-1.5 h-24">
            {growthChartData.map((d, i) => (
              <div
                key={d.label}
                className="flex-1 min-w-0 rounded-t bg-levelup-gold/30 hover:bg-levelup-gold/50 transition-colors"
                style={{ height: `${(d.value / maxChartValue) * 80}%` }}
                title={`${d.label}: ${d.value}K`}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-white/50">
            {growthChartData.map((d) => (
              <span key={d.label}>{d.label}</span>
            ))}
          </div>
        </Card>

        {/* Quick stats row */}
        <div className="lg:col-span-3 flex gap-4">
          {quickStats.map((stat) => (
            <Card key={stat.label} className="flex-1 p-4">
              <p className="text-xs font-medium text-white/50 uppercase tracking-wider">{stat.label}</p>
              <p className="mt-1 text-xl font-semibold text-levelup-gold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Upcoming Schedule */}
        <Card className="p-6 lg:col-span-3">
          <h2 className="text-base font-semibold text-white">Upcoming Schedule</h2>
          <ul className="mt-4 space-y-3">
            {upcomingSchedule.map((item, i) => (
              <li key={i} className="flex items-center gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <PlatformIcon platform={item.platform} className="h-4 w-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-sm text-white/50">
                    {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)} • {item.day}: {item.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
