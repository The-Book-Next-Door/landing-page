import { useCallback } from "react";
import { motion } from "framer-motion";

// ————————————————————————————————————————————————
// Professional Hero content block
// - Neutral palette + emerald accent
// - Accessible focus states and semantic buttons
// - Subtle entrance motion
// - Props allow reuse across pages/brands
// ————————————————————————————————————————————————

type HeroContentProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  /** DOM id to scroll to when a CTA is clicked */
  scrollTargetId?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  /** Optional handlers override the default smooth-scroll */
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

export default function HeroContent({
  title = "Find Your",
  highlight = "Book People",
  subtitle =
    "Connect with fellow book lovers in your neighborhood. Share stories, swap favorites, and build a community around the books you love.",
  scrollTargetId = "story",
  primaryCtaLabel = "Join the Community",
  secondaryCtaLabel = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: HeroContentProps) {
  const scrollToTarget = useCallback(() => {
    const el = document.getElementById(scrollTargetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [scrollTargetId]);

  const handlePrimary = onPrimaryClick ?? scrollToTarget;
  const handleSecondary = onSecondaryClick ?? scrollToTarget;

  return (
    <section
      className={
        "relative isolate max-w-2xl lg:max-w-3xl " +
        "space-y-8 md:space-y-10 " +
        "text-slate-900 " +
        className
      }
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_40%_20%,#000_30%,transparent_80%)]"
      >
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full opacity-20 blur-2xl bg-emerald-400" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-2xl bg-sky-400" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-5 md:space-y-6"
      >
        <h1 className="text-balance font-extrabold tracking-tight leading-tight text-4xl md:text-5xl lg:text-6xl">
          <span className="block text-slate-900">{title}</span>{" "}
          <span className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>

        <p className="text-pretty max-w-xl text-base md:text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      </motion.header>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <button
          onClick={handlePrimary}
          className={[
            "group inline-flex items-center justify-center gap-2",
            "rounded-full px-6 sm:px-7 py-3 sm:py-3.5",
            "font-semibold",
            "bg-emerald-600 text-white shadow-sm",
            "hover:bg-emerald-700 hover:shadow",
            "active:bg-emerald-800",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2",
            "transition-all duration-200",
          ].join(" ")}
          aria-label={primaryCtaLabel}
        >
          {primaryCtaLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={handleSecondary}
          className={[
            "inline-flex items-center justify-center",
            "rounded-full px-6 sm:px-7 py-3 sm:py-3.5",
            "font-semibold",
            "border border-slate-300 text-slate-800",
            "hover:bg-slate-900 hover:text-white",
            "active:bg-slate-800",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
            "transition-colors duration-200",
          ].join(" ")}
          aria-label={secondaryCtaLabel}
        >
          {secondaryCtaLabel}
        </button>
      </motion.div>
    </section>
  );
}
