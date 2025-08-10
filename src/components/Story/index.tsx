import { motion } from "framer-motion";
import StoryGrid from "./StoryGrid";
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
      {/* Decorative background SVG */}
      <svg
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vw] w-[120vw] -translate-x-1/2 opacity-20 blur-2xl"
        viewBox="0 0 1024 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="512" cy="256" rx="480" ry="180" fill="url(#story-gradient)" />
        <defs>
          <linearGradient id="story-gradient" x1="0" y1="0" x2="1024" y2="512" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

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

        {/* Call-to-action card */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-white/90 to-sky-50/80 p-7 text-center shadow-md flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-3 shadow-sm">
            <svg className="h-7 w-7 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
              <path d="M16 6l-4-4-4 4" />
              <path d="M12 2v14" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-emerald-700 mb-1">Share Your Story</h3>
          <p className="text-base text-slate-700 mb-4 max-w-md mx-auto">Have a book, memory, or moment you want to share? We’d love to hear how stories have shaped your life. Your story could inspire others!</p>
          <a href="#share-story" className="inline-block rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600 transition">Submit your story</a>
        </div>

        <StoryGrid items={items} />

        <p className="mx-auto mt-10 max-w-3xl text-center text-slate-600">
          Whether you’re a reader, a gifter, or a swapper—there’s a place for
          you here. Let’s keep stories moving.
        </p>
      </div>
    </section>
  );
}
