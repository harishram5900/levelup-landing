import Card from "@/components/creators/Card";
import { creatorProfile, goals, milestones } from "@/lib/creators/mockData";
import { User, Star, Award } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-levelup-gold" />
          <h1 className="text-2xl font-semibold tracking-tight text-white">Creator Profile</h1>
        </div>
        <p className="mt-1 text-sm text-white/60">Identity and progress</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile card */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 shrink-0 rounded-full bg-white/[0.08] border border-white/[0.06] flex items-center justify-center">
              <User className="h-10 w-10 text-white/40" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{creatorProfile.name}</h2>
              <p className="text-sm text-white/60">{creatorProfile.tagline}</p>
              <div className="mt-3 flex gap-6">
                <span>
                  <span className="text-levelup-gold font-semibold">{creatorProfile.followers}</span>
                  <span className="text-white/50 text-sm ml-1">Followers</span>
                </span>
                <span>
                  <span className="text-levelup-gold font-semibold">{creatorProfile.views}</span>
                  <span className="text-white/50 text-sm ml-1">Views</span>
                </span>
                <span>
                  <span className="text-levelup-gold font-semibold">{creatorProfile.videos}</span>
                  <span className="text-white/50 text-sm ml-1">Videos</span>
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Goals */}
        <Card className="p-6">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Star className="h-4 w-4 text-levelup-gold" />
            Goals
          </h2>
          <ul className="mt-4 space-y-2">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                <Star className="h-3.5 w-3.5 shrink-0 text-levelup-gold" />
                {goal}
              </li>
            ))}
          </ul>
        </Card>

        {/* Milestones */}
        <Card className="p-6 lg:col-span-3">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Award className="h-4 w-4 text-levelup-gold" />
            Milestones
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {milestones.map((m, i) => (
              <li
                key={i}
                className="flex items-center gap-2 rounded-lg border border-levelup-gold/20 bg-levelup-gold/5 px-4 py-2 text-sm text-white"
              >
                <Award className="h-3.5 w-3.5 text-levelup-gold" />
                {m}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
