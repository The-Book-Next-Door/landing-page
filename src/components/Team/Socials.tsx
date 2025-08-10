import type { Social } from "./types";
import { iconFor } from "./icons";

export default function Socials({ socials, className = "" }: { readonly socials: Social[]; readonly className?: string }) {
  return (
    <ul className={["flex items-center gap-2", className].join(" ")}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 hover:text-slate-900 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label={s.label}
            title={s.label}
          >
            {iconFor(s.label)}
          </a>
        </li>
      ))}
    </ul>
  );
}
