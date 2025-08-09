import { useEffect, useState } from "react";
import Logo from "../../assets/logo.jpeg";

// Navbar – professional, interactive, and aligned with the site's palette
// - Translucent glass bar with subtle border
// - Desktop links with elegant hover/active indicator (emerald→sky gradient)
// - Accessible mobile menu (no external libs), focus-visible styles
// - Lightweight hash-based "active" detection for in-page anchors

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-it-matters", label: "Why It Matters" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(typeof window !== "undefined" ? window.location.hash || "#home" : "#home");

  // Track hash to style active link
  useEffect(() => {
    const onHash = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md">
            <img src={Logo} alt="Brand logo" className="h-8 w-8 rounded-md object-cover" />
            <span className="sr-only">Go to home</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map(({ href, label }) => {
              const isActive = active === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`group relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md 
                      ${isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {/* underline indicator */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-200 
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                        bg-gradient-to-r from-emerald-600 to-sky-500`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side: language + mobile toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language selector (native, styled) */}
            <label className="sr-only" htmlFor="lang">Language</label>
            <select
              id="lang"
              className="appearance-none bg-white/70 border border-slate-300 px-2.5 py-1.5 text-sm rounded-md text-slate-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              defaultValue="EN"
              onChange={(e) => console.log("lang:", e.target.value)}
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="DE">DE</option>
            </select>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              {/* icon */}
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
      <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"} border-t border-slate-200/70 bg-white/80 backdrop-blur`}>        
        <div className="mx-auto max-w-7xl px-6 py-3">
          <ul className="space-y-1">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 
                    ${active === href ? "text-slate-900 bg-slate-100" : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"}`}
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
