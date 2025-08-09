type CountdownProps = Readonly<{
  remaining: Readonly<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>;
}>;

export default function Countdown({ remaining }: CountdownProps) {
  const items = [
    { k: "Days", v: remaining.days },
    { k: "Hours", v: remaining.hours },
    { k: "Minutes", v: remaining.minutes },
    { k: "Seconds", v: remaining.seconds },
  ];
  return (
    <div className="mt-8" aria-live="polite">
      <div className="inline-flex items-stretch divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm">
        {items.map(({ k, v }) => (
          <div
            key={k}
            className="px-5 py-3 first:rounded-l-2xl last:rounded-r-2xl"
          >
            <div className="text-2xl md:text-3xl font-bold tabular-nums text-slate-900 text-center">
              {String(v).padStart(2, "0")}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 text-center">
              {k}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
