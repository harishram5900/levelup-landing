import Sidebar from "@/components/creators/Sidebar";

export const metadata = {
  title: "LevelUp Creators | Creator Growth Intelligence",
  description: "Content ideas, platform strategy, and growth insights for creators.",
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-levelup-black text-white">
      <Sidebar />
      <main className="pt-14 pl-0 lg:pt-0 lg:pl-56 min-h-screen">
        {children}
      </main>
    </div>
  );
}
