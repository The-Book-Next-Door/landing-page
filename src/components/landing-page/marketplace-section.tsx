import { Heart } from "lucide-react";

import { listings } from "./data";

export function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-24 sm:py-32 px-6 bg-paper-soft">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay">
              · 01 / The Marketplace
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3 text-balance max-w-[18ch]">
              Recent additions in the city.
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-mono uppercase tracking-widest border-b border-ink/20 pb-1 hover:text-clay hover:border-clay transition-colors"
          >
            View all listings →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {listings.map((listing) => (
            <article key={listing.title} className={`${listing.span} ${listing.offset} group cursor-pointer`}>
              <div className="bg-paper p-4 rounded-3xl border border-ink/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-ink/10">
                <div className={`relative w-full ${listing.aspect} overflow-hidden rounded-2xl mb-4 bg-sand`}>
                  <img
                    src={listing.img}
                    alt={listing.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full ${listing.tagClass}`}>
                    {listing.tag}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl truncate">{listing.title}</h3>
                    <p className="text-xs text-ink/50 mt-0.5 truncate">{listing.author}</p>
                  </div>
                  <Heart className="size-4 text-ink/30 hover:text-clay transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-[10px] font-mono text-ink/45 uppercase tracking-widest mt-3">
                  {listing.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}