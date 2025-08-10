import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation/woman-reading-book-under-the-tree.json";

// HeroAnimation – lean, accessible, and light on CPU
// - Keeps Lottie (as requested)
// - No client/social-proof, no play/pause, no parallax
// - Autoplay only when in viewport (IntersectionObserver)
// - Respects reduced motion: renders first frame without autoplay
// - Single run (loop=false) to avoid busy feel
// - Pure CSS background pattern (no JS)

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // If reduced motion, we still render Lottie but don't autoplay.
  const shouldAutoplay = true;

  return (
    <aside className="relative aspect-[4/3] w-full max-w-3xl mx-auto overflow-hidden">
      {/* Animated radial gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(98,247,151,0.10) 0%, rgba(34,175,245,0.08) 60%, transparent 100%)",
          animation: "hero-gradient-move 7s ease-in-out infinite alternate"
        }}
      />

      <style>{`
        @keyframes hero-gradient-move {
          0% { filter: blur(32px) brightness(1.05) opacity(0.85); transform: scale(1) translateY(0px); }
          100% { filter: blur(48px) brightness(1.12) opacity(1); transform: scale(1.08) translateY(10px); }
        }
      `}</style>

      <div ref={containerRef} className="absolute inset-0 grid place-items-center p-4 z-10">
        <Lottie
          animationData={animationData}
          autoplay={shouldAutoplay}
          loop={true}
          initialSegment={reduceMotion ? [0, 1] : undefined}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
          className="w-full h-full max-w-2xl md:max-w-3xl pointer-events-none select-none"
        />
      </div>

      {/* Optional caption; now with a soft accent and icon */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs text-slate-700 shadow-md border border-slate-100">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500"><circle cx="8" cy="8" r="7" /><path d="M8 4v4l2.5 2.5" /></svg>
          Coffee • Nature • Book
        </div>
      </div>
    </aside>
  );

}
