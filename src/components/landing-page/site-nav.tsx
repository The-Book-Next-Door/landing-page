import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto">
      <div
        className={`mx-auto flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-ink/5 transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-xl shadow-xl shadow-ink/5" : "bg-paper/60 backdrop-blur-md shadow-sm"
        }`}
      >
        <span className="font-serif italic font-bold text-base sm:text-lg whitespace-nowrap">
          The Book Next Door
        </span>
        <div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-ink/70">
          <a href="#marketplace" className="hover:text-clay transition-colors">
            Marketplace
          </a>
          <a href="#flow" className="hover:text-clay transition-colors">
            The Flow
          </a>
          <a href="#wishlist" className="hover:text-clay transition-colors">
            Wishlist
          </a>
          <a href="#clubs" className="hover:text-clay transition-colors">
            Clubs
          </a>
        </div>
        <button className="bg-ink text-paper px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider hover:bg-clay transition-colors duration-300 whitespace-nowrap">
          Join
        </button>
      </div>
    </nav>
  );
}