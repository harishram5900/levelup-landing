import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-levelup-black flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <Logo href="/" showWordmark={true} className="mb-10" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-levelup-gold px-6 py-3 text-base font-semibold text-levelup-black hover:bg-levelup-gold-light transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
