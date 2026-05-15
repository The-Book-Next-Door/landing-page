import { clubImage, clubs } from "./data";

export function ClubsSection() {
  return (
    <section id="clubs" className="py-24 sm:py-32 px-6 bg-paper-soft">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay">
              · 04 / Book Clubs
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] mt-3 text-balance">
              More than a market. <br />A cultural hearth.
            </h2>
            <p className="mt-6 text-ink/65 text-lg leading-relaxed max-w-[44ch]">
              Reading circles in Kirchberg, silent reading hours in Grund, genre-specific
              communities — and the freedom to start your own.
            </p>

            <div className="mt-10 space-y-3">
              {clubs.map((club) => (
                <button
                  key={club.title}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl border border-ink/8 bg-paper hover:border-clay/30 hover:shadow-lg hover:shadow-ink/5 transition-all duration-300 text-left"
                >
                  <div className="size-12 rounded-xl bg-forest/10 text-forest grid place-items-center font-serif text-lg italic shrink-0">
                    {club.tag}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-ink truncate">{club.title}</h4>
                    <p className="text-xs text-ink/50 mt-0.5">{club.meta}</p>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40">
                    {club.genre}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={clubImage}
              alt="Cozy book club meeting"
              loading="lazy"
              width={896}
              height={1120}
              className="w-full aspect-[4/5] object-cover rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/15"
            />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-clay text-paper p-6 sm:p-8 rounded-2xl shadow-2xl max-w-[18rem] animate-float">
              <p className="italic font-serif text-lg sm:text-xl leading-snug">
                "The best way to know a neighbor is through the books they leave behind."
              </p>
              <p className="text-[10px] font-mono mt-4 opacity-80 uppercase tracking-widest">
                — Léa, Bonnevoie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}