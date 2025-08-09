import HeroSection from "./HeroSection";

// HomeSection – cohesive shell for the landing page
// - Aligns visual language with Hero/ComingSoon (soft gradient + micro-pattern)
// - Proper landmarks (<main>) + anchor-friendly spacing
// - Consistent max width + vertical rhythm
// - Optional props to thread data down (e.g., launchDate/progress)

export default function HomeSection() {
  return (
    <>
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
        <section className="scroll-mt-24 md:pt-24">
          <HeroSection />
        </section>
      </div>

      {/* Ambient corner glows to keep edges from feeling empty */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-3xl"
      />
    </>
  );
}
