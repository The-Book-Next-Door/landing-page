import type { Feature } from "../types";

export default function FeatureCards({ features }: { readonly features: readonly Feature[] }) {
  return (
    <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 text-left">
      {features.map((f, i) => (
        <li key={`${f.title}-${i}`} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7 10 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.blurb}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
