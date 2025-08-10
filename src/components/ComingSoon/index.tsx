import { motion } from "framer-motion";
import type { ComingSoonProps } from "./types";
import BackgroundDecor from "./parts/BackgroundDecor";
import StatsRow from "./parts/StatsRow";
import FeatureCards from "./parts/FeatureCards";
import Roadmap from "./parts/Roadmap";
import NotifyForm from "./parts/NotifyForm";
import Supporters from "./parts/Supporters";
import FeatureCarousel from "./parts/FeatureCarousel";
import RoadmapAccordion from "./parts/RoadmapAccordion";
import CountdownCard from "./parts/CountdownCard";

export default function ComingSoon({
  title = "COMING SOON…",
  launchDate,
  progress,
  onNotifySubmit,
  className = "",
  stats,
  features,
  roadmap,
  supporters,
  successMessage = "You're on the list. We’ll email you when we open invites!",
  showBackgroundDecor = true,
}: Readonly<ComingSoonProps>) {
  return (
    <div
      className={["relative pt-10 isolate", className].join(
        " "
      )}
    >
      {/* Decorative background SVG for Coming Soon */}
      <svg
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[65vw] w-[130vw] -translate-x-1/2 opacity-25 blur-3xl"
        viewBox="0 0 1024 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="512"
          cy="256"
          rx="500"
          ry="190"
          fill="url(#coming-soon-gradient)"
        />
        <defs>
          <linearGradient
            id="coming-soon-gradient"
            x1="0"
            y1="0"
            x2="1024"
            y2="512"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f472b6" /> {/* Pink */}
            <stop offset="0.5" stopColor="#a78bfa" /> {/* Purple */}
            <stop offset="1" stopColor="#38bdf8" /> {/* Sky Blue */}
          </linearGradient>
        </defs>
      </svg>

      {showBackgroundDecor && <BackgroundDecor />}

      {/* Responsive rails layout */}
      <div className="mx-auto w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-3 lg:gap-24">
          {/* LEFT RAIL — Countdown card */}
          <aside className="order-2 lg:order-1 lg:sticky top-24 self-start mb-10 lg:mb-0">
            <CountdownCard launchDate={launchDate} progress={progress} />
          </aside>

          {/* CENTER — Main content */}
          <div className="order-1 lg:order-2 text-center">
            {/* Title with animated highlight and subtitle */}
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
            {/* Subtitle */}
            <div className="mt-3 mb-6">
              <p className="text-base md:text-lg text-slate-600 font-medium">
                A new way to read, connect, and share books—together.
              </p>
            </div>

            {/* Stats (inline, compact) */}
            {stats?.length ? <StatsRow stats={stats} /> : null}

            {/* INTERACTIVE FEATURES */}
            {features?.length ? (
              <>
                {/* Desktop grid */}
                <div className="hidden md:block">
                  <FeatureCards features={features} />
                </div>
                {/* Mobile/Tablet carousel */}
                <div className="md:hidden mt-10">
                  <FeatureCarousel features={features} />
                </div>
              </>
            ) : null}

            {/* INTERACTIVE ROADMAP (accordion) or static list on wide */}
            {roadmap?.length ? (
              <>
                <div className="md:hidden">
                  <RoadmapAccordion items={roadmap} />
                </div>
                <div className="hidden md:block">
                  <Roadmap items={roadmap} />
                </div>
              </>
            ) : null}

            {/* Notify + supporters */}
            <NotifyForm
              onSubmit={onNotifySubmit}
              successMessage={successMessage}
            />
            {supporters?.length ? <Supporters initials={supporters} /> : null}
          </div>

          {/* RIGHT RAIL — Helpful links / principles / engagement */}
          <aside className="order-3 mt-10 lg:mt-0 lg:sticky top-24 self-start space-y-4">
            <a
              href="#principles"
              className="block rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-slate-900">
                Principles
              </div>
              <p className="mt-1 text-xs text-slate-600">
                No feeds. No ads. Local-first. Reader-owned.
              </p>
            </a>
            <a
              href="#clubs"
              className="block rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-slate-900">Clubs</div>
              <p className="mt-1 text-xs text-slate-600">
                Small reading circles in libraries and cafés.
              </p>
            </a>
            {/* Get Involved card */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="h-4 w-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3" />
                </svg>
                <span className="text-sm font-semibold text-emerald-700">
                  Get Involved
                </span>
              </div>
              <p className="text-xs text-emerald-900 mb-2">
                Want to help shape the future of reading? Join our beta, suggest
                features, or become a community host.
              </p>
              <a
                href="#get-involved"
                className="inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-600 transition"
              >
                Learn more
              </a>
            </div>
            {/* FAQ card */}
            <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="h-4 w-4 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4m0-4h.01" />
                </svg>
                <span className="text-sm font-semibold text-sky-700">FAQ</span>
              </div>
              <ul className="text-xs text-sky-900 space-y-1">
                <li>
                  <span className="font-semibold">Is this free?</span> Yes, the
                  core experience is free for readers.
                </li>
                <li>
                  <span className="font-semibold">How do I join a club?</span>{" "}
                  Clubs open at launch—sign up to get notified!
                </li>
                <li>
                  <span className="font-semibold">
                    Can I suggest a feature?
                  </span>{" "}
                  Absolutely! We welcome your ideas.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
