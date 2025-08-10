import type { Stat } from "../types";

export default function StatsRow({ stats }: { readonly stats: readonly Stat[] }) {
  return (
    <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
      {stats.map((s, i) => (
        <li key={`${s.label}-${i}`} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
          <div className="text-xl font-bold text-slate-900">{s.value}</div>
          <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{s.label}</div>
        </li>
      ))}
    </ul>
  );
}
