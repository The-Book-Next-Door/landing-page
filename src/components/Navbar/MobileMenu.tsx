import { LINKS } from "./constants";

type Props = { readonly open: boolean; readonly active: string; readonly setOpen: (v: boolean) => void };

export default function MobileMenu({ open, active, setOpen }: Props) {
  return (
    <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"} border-t border-slate-200/70 bg-white/95 backdrop-blur shadow-lg`}>
      <div className="mx-auto max-w-7xl px-4 py-4">
        <ul className="space-y-1">
          {LINKS.map(({ href, id, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-4 py-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  active === id ? "text-slate-900 bg-slate-100" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
