export default function Progress({ value }: { readonly value: number }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="mx-auto mt-6 max-w-xl">
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>Build Progress</span>
        <span className="tabular-nums font-medium">{v}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" style={{ width: `${v}%` }} aria-hidden />
      </div>
    </div>
  );
}
