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
      className={["relative pt-10 isolate overflow-hidden", className].join(
        " "
      )}
    >
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

          {/* RIGHT RAIL — Helpful links / principles */}
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
          </aside>
        </div>
      </div>
    </div>
  );
}
