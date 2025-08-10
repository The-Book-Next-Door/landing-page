import { LANGS } from "./constants";

type Props = { readonly lang: string; readonly setLang: (v: string) => void };

export default function LanguageSelect({ lang, setLang }: Props) {
  return (
    <div className="relative">
      <label htmlFor="lang-select" className="sr-only">Select language</label>
      <div className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-base text-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-emerald-400">
        <span className="text-lg mr-1">{LANGS.find(l => l.code === lang)?.icon}</span>
        <select
          id="lang-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="appearance-none bg-transparent border-none p-0 m-0 text-base font-medium text-slate-700 focus:outline-none"
        >
          {LANGS.map(({ code, label, icon }) => (
            <option key={code} value={code}>
              {icon} {label}
            </option>
          ))}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
