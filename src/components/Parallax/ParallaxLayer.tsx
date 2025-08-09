import { useEffect, useRef } from "react";

type ParallaxLayerProps = {
  /** How fast to move relative to scroll (0.0–1.0). 0.15–0.35 feels nice. */
  speed?: number;
  /** Optional clamp (in px) so layers don't drift too far */
  translateMax?: number;
  /** Additional classes (positioning, sizing, bg, etc.) */
  className?: string;
  /** Layer contents (SVG, gradients, images, etc.) */
  children?: React.ReactNode;
  /** Use "fixed" for background layers; "local" ties motion to element position */
  mode?: "fixed" | "local";
};

/**
 * Minimal, performant parallax:
 * - rAF-throttled scroll handler
 * - honors prefers-reduced-motion
 * - transform: translate3d for GPU compositing
 */
export default function ParallaxLayer({
  speed = 0.25,
  translateMax = 240,
  className = "",
  children,
  mode = "fixed",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      let y = 0;

      if (mode === "fixed") {
        // Based purely on document scroll; perfect for background layers
        const s = window.scrollY || window.pageYOffset || 0;
        y = s * speed;
      } else {
        // Based on element position in the viewport; nice for foreground blocks
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight || document.documentElement.clientHeight;
        // Distance of the element's center from viewport center (negative above, positive below)
        const centerOffset = rect.top + rect.height / 2 - viewH / 2;
        // Move opposite to centerOffset for subtle counter-scroll feel
        y = -centerOffset * speed;
      }

      // Clamp so it never drifts too far (optional but keeps things tasteful)
      if (translateMax > 0) {
        y = Math.max(-translateMax, Math.min(translateMax, y));
      }

      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    // Initial paint
    onScrollOrResize();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [mode, speed, translateMax]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
