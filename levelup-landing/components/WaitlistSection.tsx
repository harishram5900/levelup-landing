import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-4 text-3xl font-semibold text-white">
          Join the waitlist
        </h2>
        <p className="mb-8 text-white/70">
          Get early access to LevelUp.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
