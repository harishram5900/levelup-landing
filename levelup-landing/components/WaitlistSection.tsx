import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative px-6 py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-levelup-gold/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,162,39,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-levelup-navy/80 p-8 backdrop-blur-2xl sm:p-10 md:p-12 shadow-panel">
          {/* Subtle light sweep */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-levelup-gold/10 via-transparent to-transparent w-full h-full" />
          </div>

          <div className="relative">
            <span className="inline-block mb-4 rounded-full border border-levelup-gold/30 bg-levelup-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-levelup-gold">
              Early access
            </span>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the waitlist
            </h2>
            <p className="mb-8 max-w-md text-base text-white/70 sm:text-lg">
              Get early access to LevelUp. Be first to build discipline and grow your influence.
            </p>

            <WaitlistForm />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
