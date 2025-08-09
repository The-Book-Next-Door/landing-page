// HeroContent – lean, no animation, richer content
// - Keeps your smooth scroll CTA
// - Adds compact reassurance bullets to avoid empty feel
// - Secondary quick-links row (roadmap, principles)
// - No framer-motion, no decorative JS

export default function HeroContent() {
  const scrollToNextSection = () => {
    const element = document.getElementById("story");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Build a Calm Space for
          {" "}
          <span className="bg-gradient-to-br from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            Book People
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-xl">
          We’re crafting a quiet, clutter‑free hub for readers. The focus: simple local meetups,
          thoughtful swaps, and tools that reduce noise—so you can read more and doomscroll less.
        </p>
      </header>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={scrollToNextSection}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          See how it works
        </button>
        <a
          href="#roadmap"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          View roadmap
        </a>
      </div>

      {/* Reassurance bullets (lightweight, no motion) */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
        {[
          { h: "Local‑first", p: "Find nearby readers and clubs—quality over feeds.", icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          ) },
          { h: "Private by default", p: "Your shelf stays on your device until you share.", icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          ) },
          { h: "No ads", p: "A calm product, funded by members not ads.", icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 8l8 8M16 8l-8 8"/></svg>
          ) },
        ].map((f) => (
          <li key={f.h} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white" aria-hidden>
              {f.icon}
            </span>
            <div>
              <div className="font-semibold text-slate-900 text-sm">{f.h}</div>
              <p className="text-xs text-slate-600 mt-0.5">{f.p}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Quick links row (optional) */}
      <div className="flex flex-wrap gap-2 text-sm text-slate-600">
        <a href="#principles" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5V4.5a2 2 0 0 1 2-2h12"/><path d="M20 22V6.5a2 2 0 0 0-2-2H6"/><path d="M8 10h6M8 14h8M8 18h3"/></svg>
          Product principles
        </a>
        <a href="#faq" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-100">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 1 1 3.9 3.6c-.6.3-1 .9-1 1.6V15"/><path d="M12 19h.01"/></svg>
          FAQ
        </a>
      </div>
    </section>
  );
}
