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
      <div className="px-6 lg:px-8">
        {/* Column divider on large screens */}
        <div className="relative">
          <div
            className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-slate-300/70 to-transparent"
            aria-hidden
          />

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
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              <HeroContent />
            </motion.div>

            {/* Right Animation */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              className="order-first lg:order-none"
            >
              <HeroAnimation />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
