import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, Heart, MapPin, Search, Sparkles } from "lucide-react";

import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import bookPoetry from "@/assets/book-poetry.jpg";
import bookVintage from "@/assets/book-vintage.jpg";
import bookFiction from "@/assets/book-fiction.jpg";
import marketplaceHero from "@/assets/marketplace-hero.jpg";
import flowList from "@/assets/flow-list.jpg";
import flowMeet from "@/assets/flow-meet.jpg";
import clubsImg from "@/assets/clubs.jpg";
import sustainImg from "@/assets/sustain.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Nav() {
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
          <a href="#marketplace" className="hover:text-clay transition-colors">Marketplace</a>
          <a href="#flow" className="hover:text-clay transition-colors">The Flow</a>
          <a href="#wishlist" className="hover:text-clay transition-colors">Wishlist</a>
          <a href="#clubs" className="hover:text-clay transition-colors">Clubs</a>
        </div>
        <button className="bg-ink text-paper px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider hover:bg-clay transition-colors duration-300 whitespace-nowrap">
          Join
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Floating cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[6%] sm:left-[10%] animate-float">
          <div className="bg-paper p-3 rounded-2xl shadow-2xl shadow-ink/10 border border-ink/5 -rotate-6 w-36 sm:w-48">
            <img
              src={book1}
              alt="Penguin Classics paperback"
              width={512}
              height={768}
              className="w-full aspect-[2/3] object-cover rounded-xl mb-3"
            />
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-clay font-medium">FREE</span>
              <span className="text-[10px] font-mono text-ink/60">BONNEVOIE</span>
            </div>
          </div>
        </div>

        <div className="absolute top-[14%] right-[5%] sm:right-[12%] animate-float-slow [animation-delay:2s]">
          <div className="bg-paper p-3 rounded-2xl shadow-2xl shadow-ink/10 border border-ink/5 rotate-3 w-32 sm:w-40">
            <img
              src={book2}
              alt="Hardcover book"
              width={512}
              height={768}
              className="w-full aspect-[2/3] object-cover rounded-xl mb-2"
            />
            <span className="text-[10px] font-mono block text-center text-ink/70">SWAP ONLY</span>
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

      {/* Center content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-clay/10 text-clay rounded-full text-[10px] font-mono uppercase tracking-widest mb-8 animate-fade-up">
          <span className="size-1.5 rounded-full bg-clay animate-pulse-soft" />
          A Luxembourgish reading circle
        </span>
        <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance text-ink animate-fade-up [animation-delay:80ms]">
          Give stories a{" "}
          <span className="italic text-clay">second life.</span>
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

const listings = [
  { title: "The Art of Living", author: "Epictetus", img: marketplaceHero, span: "md:col-span-2", aspect: "aspect-[16/10]", tag: "AVAILABLE", tagClass: "bg-forest text-paper", meta: "Mint · Limpertsberg", offset: "" },
  { title: "Quiet Moments", author: "Mary Oliver", img: bookPoetry, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "WISHLIST MATCH", tagClass: "bg-clay/10 text-clay", meta: "Free · Belair", offset: "md:mt-12" },
  { title: "Old World Blues", author: "Italo Calvino", img: bookVintage, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "SWAP", tagClass: "bg-ink/5 text-ink", meta: "Good · Grund", offset: "" },
  { title: "Soft Currents", author: "Ocean Vuong", img: bookFiction, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "€8", tagClass: "bg-sand text-ink", meta: "Like New · Kirchberg", offset: "md:mt-8" },
  { title: "A Year of Reading", author: "Various", img: book1, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "FREE", tagClass: "bg-forest/10 text-forest", meta: "Good · Bonnevoie", offset: "" },
  { title: "Between Margins", author: "Anne Carson", img: book2, span: "md:col-span-2", aspect: "aspect-[16/10]", tag: "SWAP", tagClass: "bg-clay/10 text-clay", meta: "Mint · Strassen", offset: "md:mt-12" },
];

function Marketplace() {
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
          <a href="#" className="text-xs font-mono uppercase tracking-widest border-b border-ink/20 pb-1 hover:text-clay hover:border-clay transition-colors">
            View all listings →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {listings.map((l) => (
            <article key={l.title} className={`${l.span} ${l.offset} group cursor-pointer`}>
              <div className="bg-paper p-4 rounded-3xl border border-ink/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-ink/10">
                <div className={`relative w-full ${l.aspect} overflow-hidden rounded-2xl mb-4 bg-sand`}>
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full ${l.tagClass}`}>
                    {l.tag}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl truncate">{l.title}</h3>
                    <p className="text-xs text-ink/50 mt-0.5 truncate">{l.author}</p>
                  </div>
                  <Heart className="size-4 text-ink/30 hover:text-clay transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-[10px] font-mono text-ink/45 uppercase tracking-widest mt-3">
                  {l.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const flow = [
  {
    n: "01",
    label: "List",
    title: "Digitize your library.",
    body: "Snap a photo, add a few notes about its condition, and set your intention: swap it, sell it for coffee money, or give it away as a neighborhood gift.",
    img: flowList,
    alt: "Photographing a book with a phone",
  },
  {
    n: "02",
    label: "Match",
    title: "The magic match.",
    body: "Our wishlist engine hums in the background. When a book you list matches a neighbor's wish, we notify you both. It feels like a small cosmic coincidence.",
    img: flowMeet,
    alt: "Two readers exchanging a book",
  },
  {
    n: "03",
    label: "Meet",
    title: "Hand to hand, locally.",
    body: "Meet at a café in Grund or a bench in the Pétrusse valley. Exchange the story — and perhaps a few words about it.",
    img: clubsImg,
    alt: "Friends meeting over coffee with books",
  },
];

function Flow() {
  return (
    <section id="flow" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20 sm:mb-28">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay">
            · 02 / The Flow
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-3 italic text-balance">
            The journey of a book.
          </h2>
          <p className="mt-6 text-ink/60 text-lg leading-relaxed">
            We believe a book belongs to a journey, not a warehouse. Three slow, considered steps —
            from your shelf to your neighbor's.
          </p>
        </div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {flow.map((step, i) => (
            <div
              key={step.n}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 group`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/10">
                <img
                  src={step.img}
                  alt={step.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 md:px-8 lg:px-12">
                <span className="text-clay font-mono text-sm">
                  {step.n} / {step.label.toUpperCase()}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl mt-4 mb-5 text-balance">
                  {step.title}
                </h3>
                <p className="text-ink/65 leading-relaxed text-base sm:text-lg max-w-[45ch]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wishlist() {
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
              <WishStep n={1} text='Add "Invisible Cities" to your wishlist' tone="muted" />
              <WishStep n={2} text="Elena lists her copy, 200m away" tone="muted" offset />
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

function WishStep({ n, text, offset }: { n: number; text: string; tone?: string; offset?: boolean }) {
  return (
    <div className={`flex items-center gap-4 bg-paper/10 backdrop-blur-sm border border-paper/15 p-4 rounded-2xl ${offset ? "md:translate-x-4" : ""}`}>
      <div className="size-10 rounded-xl bg-clay grid place-items-center text-paper font-mono text-sm shrink-0">
        {n}
      </div>
      <p className="text-sm font-medium text-paper/90">{text}</p>
    </div>
  );
}

const clubs = [
  { tag: "K", title: "Kirchberg Classics Club", meta: "Tuesdays · 18:30", genre: "Classics" },
  { tag: "G", title: "Modern Fiction Exchange", meta: "Grund Community Hub", genre: "Fiction" },
  { tag: "P", title: "Poetry Hour, Pétrusse", meta: "First Sunday · 10:00", genre: "Poetry" },
  { tag: "B", title: "Belair Sci-Fi Society", meta: "Online + monthly meet", genre: "Sci-Fi" },
];

function Clubs() {
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
              {clubs.map((c) => (
                <button
                  key={c.title}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl border border-ink/8 bg-paper hover:border-clay/30 hover:shadow-lg hover:shadow-ink/5 transition-all duration-300 text-left"
                >
                  <div className="size-12 rounded-xl bg-forest/10 text-forest grid place-items-center font-serif text-lg italic shrink-0">
                    {c.tag}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-ink truncate">{c.title}</h4>
                    <p className="text-xs text-ink/50 mt-0.5">{c.meta}</p>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink/40">
                    {c.genre}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={clubsImg}
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

function Sustainability() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <img
              src={sustainImg}
              alt="Books on a wooden bench"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full aspect-[16/10] object-cover rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/10"
            />
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay">
              · 05 / Neighborhood
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-[1.05] text-balance">
              A second life, <span className="italic">on the same street.</span>
            </h2>
            <p className="mt-6 text-ink/65 text-lg leading-relaxed">
              Every shared book is a tiny act of resistance against waste — and a reason to meet the
              reader two doors down. Slow, local, and quietly radical.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              <Stat k="6,200" v="Books rehomed" />
              <Stat k="14" v="Luxembourg quartiers" />
              <Stat k="89%" v="Found within 1 km" />
              <Stat k="0" v="Warehouses, ever" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl text-ink">{k}</p>
      <p className="text-[10px] font-mono uppercase tracking-widest text-ink/50 mt-1">{v}</p>
    </div>
  );
}

function CTA() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <BookOpen className="size-8 mx-auto text-clay mb-6" />
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-[0.95] text-balance">
          Your next chapter <br />is on the next street.
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center justify-center gap-2 bg-ink text-paper px-7 py-4 rounded-full font-medium hover:bg-clay transition-colors">
            <Search className="size-4" /> Browse Books Nearby
          </button>
          <button className="inline-flex items-center justify-center gap-2 border border-ink/15 px-7 py-4 rounded-full font-medium hover:bg-sand transition-colors">
            List a Book <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[10px] font-mono uppercase tracking-widest mb-5 text-ink/45">{title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="hover:text-clay transition-colors">{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Landing() {
  return (
    <main className="bg-paper text-ink overflow-x-clip">
      <Nav />
      <Hero />
      <Marketplace />
      <Flow />
      <Wishlist />
      <Clubs />
      <Sustainability />
      <CTA />
      <Footer />
    </main>
  );
}
