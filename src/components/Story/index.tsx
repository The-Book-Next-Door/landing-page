import { motion } from "framer-motion";
import StoryGrid from "./StoryGrid";
import StoryCarousel from "./StoryCarousel";
import { defaultItems } from "./data";
import type { StoryBehindProps } from "./types";

export default function StoryBehind({
  id = "story",
  title = "The Story Behind",
  subtitle = "Where it started, what we’re building, and why it stays small and calm.",
  items = defaultItems,
  className = "",
}: Readonly<StoryBehindProps>) {
  return (
    <section
      id={id}
      className={[
        "relative isolate overflow-hidden pb-16 md:py-24",
        className,
      ].join(" ")}
    >

      <div className="mx-auto w-full max-w-[100rem] px-6">
        <header className="mx-auto max-w-4xl text-center">
         {/* Title with animated highlight */}
            <div className="relative inline-block">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                {title}
              </motion.h2>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"
              />
            </div>
          <p className="mt-3 text-lg font-medium text-olive" style={{ color: "var(--color-olive)" }}>{subtitle}</p>
        </header>

        <StoryGrid items={items} />
        <StoryCarousel items={items} />

        <p className="mx-auto mt-10 max-w-3xl text-center text-slate-600">
          Whether you’re a reader, a gifter, or a swapper—there’s a place for
          you here. Let’s keep stories moving.
        </p>
      </div>
    </section>
  );
}
