function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[10px] font-mono uppercase tracking-widest mb-5 text-ink/45">{title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-clay transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="pt-20 pb-10 px-6 bg-paper border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <h3 className="font-serif italic font-bold text-2xl mb-5">The Book Next Door</h3>
            <p className="text-sm text-ink/55 leading-relaxed">
              A neighborhood reading circle for Luxembourg. Cultivating a slower, more thoughtful
              way to circulate stories — one chapter at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
            <FooterCol title="Market" items={["Nearby Books", "Book Swaps", "Free Shelf", "Wishlist"]} />
            <FooterCol title="Community" items={["Reading Circles", "Local Events", "Sustainability", "Stories"]} />
            <FooterCol title="About" items={["The Manifesto", "Contact", "Press", "Support"]} />
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-ink/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-ink/40 uppercase tracking-widest">
          <span>Luxembourg City · 2026</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ink transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}