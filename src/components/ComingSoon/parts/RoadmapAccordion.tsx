import type { Milestone } from "../types";

function StatusChip({ status }: { readonly status: Milestone["status"] }) {
  const map = {
    done: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "in-progress": "bg-sky-50 text-sky-700 border-sky-200",
    next: "bg-slate-50 text-slate-700 border-slate-200",
  } as const;
  let label: string;
  if (status === "done") {
    label = "Done";
  } else if (status === "in-progress") {
    label = "In progress";
  } else {
    label = "Next";
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${map[status]}`}
    >
      {label}
    </span>
  );
}

export default function RoadmapAccordion({
  items,
}: {
  readonly items: Milestone[];
}) {
  return (
    <div className="mx-auto mt-10 max-w-3xl text-left">
      <h4 className="text-sm font-semibold text-slate-900">Roadmap</h4>
      <div className="mt-3 space-y-2">
        {items.map((m, i) => (
          <details
            key={`${m.title}-${i}`}
            className="group rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-900">{m.title}</span>
                <StatusChip status={m.status} />
                {m.eta && (
                  <span className="text-xs text-slate-500">ETA: {m.eta}</span>
                )}
              </div>
              <span className="text-slate-400 transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            {/* Put optional description, links, or screenshots here later */}
            <div className="mt-3 text-sm text-slate-600">
              We’re actively shaping this item. Check back for updates and early
              screenshots.
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
