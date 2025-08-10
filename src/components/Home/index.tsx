import HeroSection from "./HeroSection";

// HomeSection – cohesive shell for the landing page
// - Aligns visual language with Hero/ComingSoon (soft gradient + micro-pattern)
// - Proper landmarks (<main>) + anchor-friendly spacing
// - Consistent max width + vertical rhythm
// - Optional props to thread data down (e.g., launchDate/progress)

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen pb-8 pt-6 md:pt-24"
    >
      {/* Content wrapper with consistent horizontal padding */}
      <div id="main-content" className="">
        {/* Hero */}
        <HeroSection />
      </div>
    </section>
  );
}
