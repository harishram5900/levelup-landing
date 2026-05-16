import type { Metadata } from "next";

/**
 * Full v8 HTML shell (auth, onboarding, app) — must load as a document so inline
 * scripts run; see `public/levelup-creators-app.html`.
 */
export const metadata: Metadata = {
  title: "LevelUp Creators — App",
  description:
    "Creator intelligence platform: sign in, onboard, and use the LevelUp Creators experience.",
};

export default function LevelupCreatorsPage() {
  return (
    <iframe
      src="/levelup-creators-app.html"
      title="LevelUp Creators"
      className="fixed inset-0 z-0 h-[100dvh] w-full border-0 bg-black"
    />
  );
}
