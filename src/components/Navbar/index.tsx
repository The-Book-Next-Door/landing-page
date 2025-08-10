
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.jpeg";

const LINKS = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#story", id: "story", label: "Story" },
  { href: "#how-it-works", id: "how-it-works", label: "How It Works" },
  { href: "#why-it-matters", id: "why-it-matters", label: "Why It Matters" },
];

const LANGS = [
  { code: "EN", label: "English", icon: "🇬🇧" },
  { code: "FR", label: "Français", icon: "🇫🇷" },
  { code: "DE", label: "Deutsch", icon: "🇩🇪" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // langOpen state removed (no longer needed)
  const [active, setActive] = useState<string>(typeof window !== "undefined" ? window.location.hash.replace('#','') || "home" : "home");
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [lang, setLang] = useState("EN");

  const lastY = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  // Scroll direction + progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const dirDown = y > lastY.current;
      const threshold = 24;
      if (!reduceMotion && Math.abs(y - lastY.current) > threshold) {
        setHidden(dirDown && y > 80);
        lastY.current = y;
      } else {
        lastY.current = y;
      }
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion]);

  // Active section observer
  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new window.IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close menus on resize / route hash change
  useEffect(() => {
    const close = () => { setOpen(false); };
    window.addEventListener('resize', close);
    window.addEventListener('hashchange', close);
    return () => { window.removeEventListener('resize', close); window.removeEventListener('hashchange', close); };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 will-change-transform ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      aria-label="Main navigation"
    >
      {/* Scroll progress bar */}
      <span
        aria-hidden
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-emerald-600 to-sky-500 transition-[width] duration-150 rounded-full"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            <img src={Logo} alt="Brand logo" className="h-9 w-9 rounded-lg object-cover shadow-sm" />
            <span className="text-lg font-bold text-slate-900 tracking-tight hidden sm:inline">Book Next Door</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2">
            {LINKS.map(({ href, id, label }) => {
              const isActive = active === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`group relative inline-flex items-center px-3 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-emerald-600 to-sky-500 transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2 md:gap-3">

            {/* Language selector (native select for accessibility) */}
            <div className="relative">
              <label htmlFor="lang-select" className="sr-only">Select language</label>
              <div className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white/90 px-3 py-2 text-base text-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-emerald-400">
                <span className="text-lg mr-1">{LANGS.find(l => l.code === lang)?.icon}</span>
                <select
                  id="lang-select"
                  value={lang}
                  onChange={e => setLang(e.target.value)}
                  className="appearance-none bg-transparent border-none p-0 m-0 text-base font-medium text-slate-700 focus:outline-none"
                  aria-label="Select language"
                >
                  {LANGS.map(({ code, label, icon }) => (
                    <option key={code} value={code} className="text-base">
                      {icon} {label}
                    </option>
                  ))}
                </select>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              {open ? (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-slate-200/70 bg-white/95 backdrop-blur shadow-lg`}>        
        <div className="mx-auto max-w-7xl px-4 py-4">
          <ul className="space-y-1">
            {LINKS.map(({ href, id, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-4 py-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${active === id ? 'text-slate-900 bg-slate-100' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
