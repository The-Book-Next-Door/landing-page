import type { Step } from "./types";

export default function StepCard({ step, index }: { readonly step: Step; readonly index: number }) {
  return (
    <li className="group relative rounded-3xl border border-slate-200 bg-white/85 shadow-sm overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 opacity-80" />
      <figure>
        <img
          src={step.imgSrc}
          alt={step.imgAlt}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
        <figcaption className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.blurb}</p>

          {/* subtle hover CTA */}
          <div className="mt-3 h-8">
            <span className="inline-flex items-center text-sm font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <svg className="ml-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
