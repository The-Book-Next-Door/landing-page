import { ArrowUpRight, MapPin, Search, Sparkles } from "lucide-react";

import { heroHighlights } from "./data";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[6%] sm:left-[10%] animate-float">
          <div className="bg-paper p-3 rounded-2xl shadow-2xl shadow-ink/10 border border-ink/5 -rotate-6 w-36 sm:w-48">
            <img
              src={heroHighlights[0].src}
              alt={heroHighlights[0].alt}
              width={512}
              height={768}
              className="w-full aspect-[2/3] object-cover rounded-xl mb-3"
            />
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-clay font-medium">{heroHighlights[0].label}</span>
              <span className="text-[10px] font-mono text-ink/60">{heroHighlights[0].location}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-[14%] right-[5%] sm:right-[12%] animate-float-slow [animation-delay:2s]">
          <div className="bg-paper p-3 rounded-2xl shadow-2xl shadow-ink/10 border border-ink/5 rotate-3 w-32 sm:w-40">
            <img
              src={heroHighlights[1].src}
              alt={heroHighlights[1].alt}
              width={512}
              height={768}
              className="w-full aspect-[2/3] object-cover rounded-xl mb-2"
            />
            <span className="text-[10px] font-mono block text-center text-ink/70">{heroHighlights[1].label}</span>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-[14%] left-[14%] animate-float-slow [animation-delay:1s]">
          <div className="bg-paper px-4 py-3 rounded-2xl shadow-xl shadow-ink/10 border border-ink/5 rotate-[-4deg] flex items-center gap-3">
            <div className="size-8 rounded-full bg-forest/15 grid place-items-center">
              <Sparkles className="size-3.5 text-forest" />
            </div>
            <div>
              <p className="text-[11px] font-semibold leading-tight">Wishlist match!</p>
              <p className="text-[9px] font-mono text-ink/50">Calvino · 200m away</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-[20%] right-[8%] animate-float [animation-delay:0.8s]">
          <div className="bg-paper px-4 py-3 rounded-2xl shadow-xl shadow-ink/10 border border-ink/5 rotate-[5deg]">
            <span className="text-[10px] font-mono text-ink/60 uppercase tracking-widest">
              <MapPin className="size-3 inline mr-1 -mt-0.5" />Limpertsberg
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-clay/10 text-clay rounded-full text-[10px] font-mono uppercase tracking-widest mb-8 animate-fade-up">
          <span className="size-1.5 rounded-full bg-clay animate-pulse-soft" />
          A Luxembourgish reading circle
        </span>
        <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance text-ink animate-fade-up [animation-delay:80ms]">
          Give stories a <span className="italic text-clay">second life.</span>
        </h1>
        <p className="mt-7 sm:mt-8 text-ink/65 max-w-[44ch] mx-auto text-base sm:text-lg leading-relaxed animate-fade-up [animation-delay:160ms]">
          A neighborhood sanctuary for swapping, selling, and discovering pre-loved books from
          readers just around the corner.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up [animation-delay:240ms]">
          <button className="group inline-flex items-center justify-center gap-2 bg-ink text-paper px-7 py-4 rounded-full font-medium hover:bg-clay transition-all duration-300">
            <Search className="size-4" />
            Browse Books Nearby
          </button>
          <button className="inline-flex items-center justify-center gap-2 border border-ink/15 px-7 py-4 rounded-full font-medium hover:bg-sand transition-all duration-300">
            List a Book
            <ArrowUpRight className="size-4" />
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-[10px] font-mono uppercase tracking-widest text-ink/40 animate-fade-up [animation-delay:320ms]">
          <span>2,400+ readers</span>
          <span className="size-1 rounded-full bg-ink/20" />
          <span>14 neighborhoods</span>
          <span className="size-1 rounded-full bg-ink/20" />
          <span>Lux. City</span>
        </div>
      </div>
    </section>
  );
}