import type { Milestone } from "../types";

function StatusDot({ status }: { readonly status: Milestone["status"] }) {
  let c = "";
  if (status === "done") {
    c = "bg-emerald-500";
  } else if (status === "in-progress") {
    c = "bg-sky-500";
  } else {
    c = "bg-slate-300";
  }
  return <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${c}`} />;
}

function StatusChip({ status }: { readonly status: Milestone["status"] }) {
  const map = {
    done: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "in-progress": "bg-sky-50 text-sky-700 border-sky-200",
    next: "bg-slate-50 text-slate-700 border-slate-200",
  } as const;
  let statusLabel = "";
  if (status === "done") {
    statusLabel = "Done";
  } else if (status === "in-progress") {
    statusLabel = "In progress";
  } else {
    statusLabel = "Next";
  }
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${map[status]}`}>
      {statusLabel}
    </span>
  );
}

export default function Roadmap({ items }: { readonly items: Milestone[] }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl text-left">
      <h4 className="text-sm font-semibold text-slate-900">Roadmap</h4>
      <ul className="mt-3 space-y-3">
        {items.map((m, i) => (
          <li key={`${m.title}-${i}`} className="flex flex-col sm:flex-row items-start gap-3 rounded-xl border border-slate-200 bg-white/80 p-4">
            <StatusDot status={m.status} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-slate-900">{m.title}</span>
                <StatusChip status={m.status} />
                {m.eta && <span className="text-xs text-slate-500">ETA: {m.eta}</span>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
