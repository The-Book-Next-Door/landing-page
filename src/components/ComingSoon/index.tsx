import { useState } from "react";
import { motion } from "framer-motion";
import type { ComingSoonProps } from "./types";
import { useCountdown } from "./hooks/useCountdown";
import BackgroundDecor from "./parts/BackgroundDecor";
import ProgramChip from "./parts/ProgramChip";
import Countdown from "./parts/Countdown";
import Progress from "./parts/Progress";
import StatsRow from "./parts/StatsRow";
import FeatureCards from "./parts/FeatureCards";
import Roadmap from "./parts/Roadmap";
import NotifyForm from "./parts/NotifyForm";
import Supporters from "./parts/Supporters";

// NEW
import FeatureCarousel from "./parts/FeatureCarousel";
import RoadmapAccordion from "./parts/RoadmapAccordion";

export default function ComingSoon({
  title = "COMING SOON…",
  programLabel = "Reader-to-Reader Exchange",
  programBlurb = "Swap once-loved books, join nearby meetups, and keep stories moving.",
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
  const { remaining, launchLine } = useCountdown(launchDate);
  const [showUTC, setShowUTC] = useState(false);

  const launchText = (() => {
    if (!launchDate) return null;
    try {
      if (showUTC) {
        const d = new Date(launchDate);
        return d.toUTCString().replace("GMT", "UTC");
      }
      return launchLine;
    } catch {
      return String(launchDate);
    }
  })();

  return (
    <section className={["relative pt-10 isolate overflow-hidden", className].join(" ")}>
      {/* top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500" />
      {showBackgroundDecor && <BackgroundDecor />}

      {/* Responsive rails layout */}
      <div className="mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)_300px] gap-6">
          {/* LEFT RAIL — Countdown card */}
          <aside className="min-w-fit order-2 lg:order-1 lg:sticky top-24 self-start">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Launch</h3>
              {launchText && (
                <p className="mt-1 text-xs text-slate-600">
                  {showUTC ? "UTC:" : "Local:"}{" "}
                  <span className="font-medium text-slate-900">{launchText}</span>
                </p>
              )}
              <button
                type="button"
                onClick={() => setShowUTC((v) => !v)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                {showUTC ? "Show Local Time" : "Show UTC"}
              </button>

              {remaining && (
                <div className="mt-4">
                  <Countdown remaining={remaining} />
                </div>
              )}
            </div>

            {typeof progress === "number" && (
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <Progress value={progress} />
              </div>
            )}
          </aside>

          {/* CENTER — Main content */}
          <div className="order-1 lg:order-2 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              {title}
            </motion.h2>

            <ProgramChip label={programLabel} blurb={programBlurb} />

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
            <NotifyForm onSubmit={onNotifySubmit} successMessage={successMessage} />
            {supporters?.length ? <Supporters initials={supporters} /> : null}
          </div>

          {/* RIGHT RAIL — Helpful links / principles */}
          <aside className="order-3 lg:sticky top-24 self-start space-y-4">
            <a
              href="#principles"
              className="block rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-slate-900">Principles</div>
              <p className="mt-1 text-xs text-slate-600">No feeds. No ads. Local-first. Reader-owned.</p>
            </a>
            <a
              href="#clubs"
              className="block rounded-2xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-slate-900">Clubs</div>
              <p className="mt-1 text-xs text-slate-600">Small reading circles in libraries and cafés.</p>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
