import { useState } from "react";

export default function ExpandableText({
  text,
  compact = false,
}: {
  readonly text: string;
  readonly compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const max = compact ? 140 : 200;
  const isLong = text.length > max;
  const shown = !isLong || open ? text : text.slice(0, max).trimEnd() + "…";

  return (
    <p className="mt-3 text-sm leading-relaxed text-slate-600">
      {shown}{" "}
      {isLong && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline text-emerald-700 hover:underline"
          aria-expanded={open}
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </p>
  );
}
