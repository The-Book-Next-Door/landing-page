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

export default function ComingSoon({
  title = "COMING SOON…",
  programLabel = "Plant a Tree Program",
  programBlurb = "For every book swap, we'll plant a tree in your community.",
  launchDate,
  progress,
  onNotifySubmit,
  className = "",
  stats,
  features,
  roadmap,
  supporters,
  successMessage = "You're on the list. We’ll ping you at launch!",
  showBackgroundDecor = true,
}: Readonly<ComingSoonProps>) {
  const { remaining, launchLine } = useCountdown(launchDate);

  return (
    <section className={["relative pt-20", "isolate overflow-hidden", className].join(" ")}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500" />
      {showBackgroundDecor && <BackgroundDecor />}

      <div className="mx-auto max-w-5xl px-6 text-center">
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

        {launchLine && (
          <p className="mt-3 text-sm text-slate-600">
            Launching on <span className="font-medium text-slate-900">{launchLine}</span>
          </p>
        )}

        {remaining && <Countdown remaining={remaining} />}

        {typeof progress === "number" && <Progress value={progress} />}

        {stats?.length ? <StatsRow stats={stats} /> : null}

        {features?.length ? <FeatureCards features={features} /> : null}

        {roadmap?.length ? <Roadmap items={roadmap} /> : null}

        <NotifyForm onSubmit={onNotifySubmit} successMessage={successMessage} />

        {supporters?.length ? <Supporters initials={supporters} /> : null}
      </div>
    </section>
  );
}
