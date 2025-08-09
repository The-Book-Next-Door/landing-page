import HeroSection from "./HeroSection";
import ComingSoon from "./ComingSoon";

// HomeSection – cohesive shell for the landing page
// - Aligns visual language with Hero/ComingSoon (soft gradient + micro-pattern)
// - Proper landmarks (<main>) + anchor-friendly spacing
// - Consistent max width + vertical rhythm
// - Optional props to thread data down (e.g., launchDate/progress)

export default function HomeSection() {
  return (
    <main id="home" className="relative isolate overflow-hidden">
      {/* Background: gentle gradient + masked dot pattern */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      {/* Skip link for a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Content wrapper with consistent horizontal padding */}
      <div id="main-content" className="">
        {/* Hero */}
        <section className="scroll-mt-24 pt-20 md:pt-24">
          <HeroSection />
        </section>

        {/* Divider ribbon */}
        <div
          aria-hidden
          className="my-12 md:my-16 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent"
        />

        {/* Coming soon */}
        <section className="scroll-mt-24 pb-16 md:pb-24">
          <ComingSoon
            // Example props you can wire up later:
            // launchDate="2025-09-01T09:00:00Z"
            // progress={62}
            // onNotifySubmit={(email) => console.log("notify:", email)}
          />
        </section>
      </div>

      {/* Ambient corner glows to keep edges from feeling empty */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-3xl" />
    </main>
  );
}
