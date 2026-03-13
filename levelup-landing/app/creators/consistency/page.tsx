import Card from "@/components/creators/Card";
import { dailyChecklist, streakTips, weeklyStreakDays } from "@/lib/creators/mockData";
import { CheckSquare, Flame } from "lucide-react";

export default function ConsistencyPage() {
  const doneCount = dailyChecklist.filter((c) => c.done).length;
  const totalCount = dailyChecklist.length;
  const progressPct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
  const activeStreakDays = weeklyStreakDays.filter((d) => d.active).length;

  return (
    <div className="p-8">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-levelup-gold" />
          <h1 className="text-2xl font-semibold tracking-tight text-white">Consistency Tracker</h1>
        </div>
        <p className="mt-1 text-sm text-white/60">Daily habits and streak</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Daily checklist */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-white">Today&apos;s Checklist</h2>
          <ul className="mt-4 space-y-3">
            {dailyChecklist.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                    item.done
                      ? "border-levelup-gold bg-levelup-gold/20 text-levelup-gold"
                      : "border-white/20 text-transparent"
                  }`}
                >
                  {item.done && <span className="text-levelup-gold">✓</span>}
                </span>
                <span className={item.done ? "text-white/80 line-through" : "text-white"}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Progress & streak */}
        <Card className="p-6">
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="rgba(201,162,39,0.6)"
                  strokeWidth="2"
                  strokeDasharray={`${progressPct} 100`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-levelup-gold">
                {progressPct}
              </span>
            </div>
            <p className="mt-2 text-sm text-white/60">Today&apos;s progress</p>
            <p className="mt-4 flex items-center gap-2 text-levelup-gold">
              <Flame className="h-4 w-4" />
              <span className="font-medium">{activeStreakDays}/7 Days</span>
            </p>
            <p className="text-xs text-white/50">This week</p>
          </div>
        </Card>

        {/* Streak tips */}
        <Card className="p-6 lg:col-span-3">
          <h2 className="text-base font-semibold text-white">Streak Tips</h2>
          <p className="mt-2 text-sm text-white/70">{streakTips}</p>
          <div className="mt-4 flex items-center gap-2">
            {weeklyStreakDays.map((d, i) => (
              <span
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                  d.active ? "bg-levelup-gold/20 text-levelup-gold" : "bg-white/[0.06] text-white/40"
                }`}
              >
                {d.day}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
