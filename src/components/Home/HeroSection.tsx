import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroAnimation from "./HeroAnimation";

// A more interactive, balanced HeroSection wrapper
// - Full-bleed gradient background + subtle pattern
// - Smart grid with column divider (on lg+)
// - Entrance animation/stagger
// - Optional metrics strip and scroll cue
// - Mobile-first ordering (content before animation)

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background gradient + pattern */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Column divider on large screens */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-slate-300/70 to-transparent" aria-hidden />

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[70vh]"
          >
            {/* Left Content */}
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              <HeroContent />
            </motion.div>

            {/* Right Animation */}
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="order-first lg:order-none">
              <HeroAnimation />
            </motion.div>
          </motion.div>
        </div>

        {/* Metrics strip (optional) */}
        <div className="mt-10 md:mt-14">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Members", value: "12k+" },
              { label: "Clubs", value: "340" },
              { label: "Cities", value: "85" },
              { label: "Events / mo", value: "420" },
              { label: "Books shared", value: "58k" },
              { label: "Avg. rating", value: "4.8" },
            ].map((m) => (
              <li key={m.label} className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur px-4 py-3 text-center shadow-sm">
                <div className="text-xl font-bold text-slate-900">{m.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-600">{m.label}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Scroll cue */}
        <div className="mt-10 flex items-center justify-center">
          <a href="#story" className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-900 hover:text-white transition-colors">
            <span>Explore the story</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
