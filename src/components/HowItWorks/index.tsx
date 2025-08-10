import type { HowItWorksProps } from "./types";
import { defaultSteps } from "./data";
import StepsGrid from "./StepsGrid";

export default function HowItWorks({
  id = "how-it-works",
  heading = "How it works",
  steps = defaultSteps,
  className = "",
}: Readonly<HowItWorksProps>) {
  return (
    <section
      id={id}
      className={["relative isolate overflow-hidden py-16 md:py-24", className].join(" ")}
      aria-labelledby={`${id}-title`}
    >

      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="text-center">
          <h2
            id={`${id}-title`}
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900"
          >
            {heading}
          </h2>
          <p className="mt-2 text-slate-600">
            Three simple steps to keep stories moving.
          </p>
        </header>

        <StepsGrid steps={steps} />

        {/* connector line on desktop */}
        <div className="mt-10 hidden md:block">
          <div className="mx-auto max-w-5xl h-1 rounded-full bg-gradient-to-r from-emerald-500 via-slate-200 to-sky-500 opacity-60" />
        </div>
      </div>
    </section>
  );
}
