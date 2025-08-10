export default function Supporters({
  initials,
}: {
  readonly initials: string[];
}) {
  return (
    <div className="mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-2">
      <div className="flex -space-x-2 mb-2 sm:mb-0">
        {initials.slice(0, 6).map((i, idx) => (
          <div
            key={idx}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-slate-200 text-[11px] font-semibold text-slate-700"
            title={i}
          >
            {i}
          </div>
        ))}
      </div>
      {initials.length > 6 && (
        <span className="text-xs text-slate-600">
          +{initials.length - 6} more interested
        </span>
      )}
    </div>
  );
}
