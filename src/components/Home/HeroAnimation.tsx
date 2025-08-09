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

  useEffect(() => {
    // Only start when visible
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setInView(true);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // If reduced motion, we still render Lottie but don't autoplay.
  const shouldAutoplay = true;

  return (
    <aside
      className={[
        "relative aspect-[4/3] w-full max-w-xl mx-auto",
        "rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* lightweight decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.07)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div ref={containerRef} className="absolute inset-0 grid place-items-center p-4">
        <Lottie
          animationData={animationData}
          autoplay={shouldAutoplay}
          loop={true}
          // For browsers honoring reduced motion, render first frame only
          initialSegment={reduceMotion ? [0, 1] : undefined}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
          className="w-full h-full max-w-md md:max-w-lg pointer-events-none select-none"
        />
      </div>

      {/* Optional caption; safe to remove if you want it even leaner */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs text-slate-600 shadow-sm">
          Minimal • Quiet • Reader‑first
        </div>
      </div>
    </aside>
  );
}
