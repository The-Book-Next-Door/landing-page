export default function HeroContent() {
  const scrollToNextSection = () => {
    const element = document.getElementById("story");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="space-y-10">
      {/* Accessibility: Visually hidden heading for screen readers */}
      <h2 className="sr-only">Welcome to The Book Next Door</h2>
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Build a Calm Space for{" "}
          <span className="block mt-1 bg-gradient-to-br from-emerald-600 to-sky-600 bg-clip-text text-transparent drop-shadow-sm">
            Book People
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-2xl">
          A quiet, clutter-free hub for readers. Simple local meetups, thoughtful swaps, and tools that reduce noise—so you can read more and doomscroll less.
        </p>
      </header>

      {/* Reassurance bullets (modern cards) */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-slate-700">
        {/* Card 1 */}
        <li className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7 10 17l-5-5" /></svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900">No ads. No feeds.</h3>
          </div>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            We keep your reading space free of endless feeds and noisy banners.
          </p>
        </li>
        {/* Card 2 */}
        <li className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7 10 17l-5-5" /></svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900">Local-first meetups</h3>
          </div>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Connect with readers near you through small, in-person gatherings.
          </p>
        </li>
        {/* Card 3 */}
        <li className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7 10 17l-5-5" /></svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900">Simple book swaps</h3>
          </div>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Exchange books effortlessly with others, keeping your shelves fresh.
          </p>
        </li>
      </ul>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
        <button
          onClick={scrollToNextSection}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-white font-semibold text-base shadow-md hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          See how it works
        </button>
        <a
          href="#countdown"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-800 text-base shadow-md hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          View roadmap
        </a>
      </div>

      {/* Mini testimonial */}
      <div className="mt-6 flex items-center gap-3 bg-white/80 rounded-xl shadow-sm px-4 py-3 max-w-md">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Testimonial user avatar"
          className="h-10 w-10 rounded-full object-cover border border-slate-200"
        />
        <div>
          <p className="text-sm text-slate-700 italic">
            “I finally found a book community that feels calm and welcoming. No noise, just real readers.”
          </p>
          <span className="block text-xs text-slate-500 mt-1">— Sofia, early member</span>
        </div>
      </div>

      {/* Quick links row */}
      <div className="flex flex-wrap gap-2 text-sm text-slate-600 mt-2">
        <a
          href="#principles"
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-100"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5V4.5a2 2 0 0 1 2-2h12" /><path d="M20 22V6.5a2 2 0 0 0-2-2H6" /><path d="M8 10h6M8 14h8M8 18h3" /></svg>
          Product principles
        </a>
        <a
          href="#faq"
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-100"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 3.9 3.6c-.6.3-1 .9-1 1.6V15" /><path d="M12 19h.01" /></svg>
          FAQ
        </a>
      </div>
    </section>
  );
}
