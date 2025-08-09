import { useRef } from "react";
import type { Feature } from "../types";

export default function FeatureCarousel({
  features,
}: {
  readonly features: Feature[];
}) {
  const scroller = useRef<HTMLUListElement>(null);

  const step = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? (card as HTMLElement).offsetWidth : 320;
    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={scroller}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {features.map((f, i) => (
          <li
            key={`${f.title}-${i}`}
            className="snap-start shrink-0 basis-[85%] rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 7 10 17l-5-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.blurb}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent" />

      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => step(-1)}
          className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}
