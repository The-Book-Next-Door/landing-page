import StepCard from "./StepCard";
import type { Step } from "./types";

export default function StepsGrid({ steps }: { readonly steps: Step[] }) {
  return (
    <ul className="mt-10 hidden md:grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <StepCard key={s.title} step={s} index={i} />
      ))}
    </ul>
  );
}
