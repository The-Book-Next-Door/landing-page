import { LINKS } from "./constants";

type Props = { readonly active: string };

export default function DesktopLinks({ active }: Props) {
  return (
    <ul className="hidden md:flex items-center gap-2">
      {LINKS.map(({ href, id, label }) => {
        const isActive = active === id;
        return (
          <li key={href}>
            <a
              href={href}
              className={`group relative inline-flex items-center px-3 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {label}
              <span
                aria-hidden
                className={`pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-emerald-600 to-sky-500 transition-transform duration-200 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
