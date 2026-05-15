import { Heart, Sparkles } from "lucide-react";

function WishStep({ n, text, offset }: { n: number; text: string; offset?: boolean }) {
  return (
    <div className={`flex items-center gap-4 bg-paper/10 backdrop-blur-sm border border-paper/15 p-4 rounded-2xl ${offset ? "md:translate-x-4" : ""}`}>
      <div className="size-10 rounded-xl bg-clay grid place-items-center text-paper font-mono text-sm shrink-0">
        {n}
      </div>
      <p className="text-sm font-medium text-paper/90">{text}</p>
    </div>
  );
}

export function WishlistSection() {
  return (
    <section id="wishlist" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-forest text-paper rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 md:p-20 relative overflow-hidden">
          <div aria-hidden className="absolute -top-8 -right-4 sm:right-10 opacity-[0.07] pointer-events-none select-none">
            <p className="font-serif text-[10rem] sm:text-[16rem] italic leading-none">match.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-paper/50">
                · 03 / Wishlist
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] mt-3 mb-6 text-balance">
                Never miss a <span className="italic">wanted</span> story.
              </h2>
              <p className="text-paper/70 text-lg leading-relaxed mb-10 max-w-[42ch]">
                Add out-of-print titles or rare finds to your wishlist. When a neighbor lists your
                dream book, we nudge you both — instantly, quietly.
              </p>
              <button className="inline-flex items-center gap-2 bg-paper text-forest px-6 py-3.5 rounded-full font-medium hover:bg-clay hover:text-paper transition-all duration-300">
                <Heart className="size-4" /> Create Your Wishlist
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <WishStep n={1} text='Add "Invisible Cities" to your wishlist' />
              <WishStep n={2} text="Elena lists her copy, 200m away" offset />
              <div className="flex items-center gap-4 bg-paper text-forest p-4 rounded-2xl shadow-2xl shadow-black/20 md:translate-x-8 animate-pulse-soft">
                <div className="size-10 rounded-xl bg-forest grid place-items-center text-paper shrink-0">
                  <Sparkles className="size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">It's a match.</p>
                  <p className="text-xs text-forest/60">Say hello to Elena →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}