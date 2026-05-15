import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Sparkles, MapPin, Search, ArrowUpRight, Instagram, AtSign, Heart, BookOpen } from "lucide-react";
function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `mx-auto flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-ink/5 transition-all duration-500 ${scrolled ? "bg-paper/85 backdrop-blur-xl shadow-xl shadow-ink/5" : "bg-paper/60 backdrop-blur-md shadow-sm"}`,
      children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif italic font-bold text-base sm:text-lg whitespace-nowrap", children: "The Book Next Door" }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-ink/70", children: [
          /* @__PURE__ */ jsx("a", { href: "#marketplace", className: "hover:text-clay transition-colors", children: "Marketplace" }),
          /* @__PURE__ */ jsx("a", { href: "#flow", className: "hover:text-clay transition-colors", children: "The Flow" }),
          /* @__PURE__ */ jsx("a", { href: "#wishlist", className: "hover:text-clay transition-colors", children: "Wishlist" }),
          /* @__PURE__ */ jsx("a", { href: "#clubs", className: "hover:text-clay transition-colors", children: "Clubs" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "bg-ink text-paper px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider hover:bg-clay transition-colors duration-300 whitespace-nowrap", children: "Join" })
      ]
    }
  ) });
}
const book1 = "/landing-page/assets/book-1-W7ZljISw.jpg";
const book2 = "/landing-page/assets/book-2-BCD4XqCg.jpg";
const bookPoetry = "/landing-page/assets/book-poetry-B22vzBaW.jpg";
const bookVintage = "/landing-page/assets/book-vintage-C3pTHcSO.jpg";
const bookFiction = "/landing-page/assets/book-fiction-DGgDEhRP.jpg";
const marketplaceHero = "/landing-page/assets/marketplace-hero-DK62l8D-.jpg";
const flowList = "/landing-page/assets/flow-list-BJ4lS09i.jpg";
const flowMeet = "/landing-page/assets/flow-meet-DMATeKOO.jpg";
const clubsImg = "/landing-page/assets/clubs-Bl8H7_wq.jpg";
const sustainImg = "/landing-page/assets/sustain-CGS5-aVl.jpg";
const heroHighlights = [
  { src: book1, alt: "Penguin Classics paperback", label: "FREE", location: "BONNEVOIE" },
  { src: book2, alt: "Hardcover book", label: "SWAP ONLY", location: "" }
];
const launchAt = "2026-07-01T09:00:00+02:00";
const socialProofMembers = [
  { initials: "LM", name: "Lea M." },
  { initials: "AT", name: "Alex T." },
  { initials: "SR", name: "Sofia R." },
  { initials: "ND", name: "Noah D." },
  { initials: "EK", name: "Emma K." }
];
const socialLinks = {
  instagram: "https://www.instagram.com/booknextdoor.lu/",
  threads: "https://www.threads.com/@booknextdoor.lu?xmt=AQG0zWDBnH-svjyRo4OHVEZCCciR5E5Zf2doyFuwlOU6QhE"
};
const listings = [
  { title: "The Art of Living", author: "Epictetus", img: marketplaceHero, span: "md:col-span-2", aspect: "aspect-[16/10]", tag: "AVAILABLE", tagClass: "bg-forest text-paper", meta: "Mint · Limpertsberg", offset: "" },
  { title: "Quiet Moments", author: "Mary Oliver", img: bookPoetry, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "WISHLIST MATCH", tagClass: "bg-clay/10 text-clay", meta: "Free · Belair", offset: "md:mt-12" },
  { title: "Old World Blues", author: "Italo Calvino", img: bookVintage, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "SWAP", tagClass: "bg-ink/5 text-ink", meta: "Good · Grund", offset: "" },
  { title: "Soft Currents", author: "Ocean Vuong", img: bookFiction, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "€8", tagClass: "bg-sand text-ink", meta: "Like New · Kirchberg", offset: "md:mt-8" },
  { title: "A Year of Reading", author: "Various", img: book1, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "FREE", tagClass: "bg-forest/10 text-forest", meta: "Good · Bonnevoie", offset: "" },
  { title: "Between Margins", author: "Anne Carson", img: book2, span: "md:col-span-2", aspect: "aspect-[16/10]", tag: "SWAP", tagClass: "bg-clay/10 text-clay", meta: "Mint · Strassen", offset: "md:mt-12" }
];
const flowSteps = [
  {
    n: "01",
    label: "List",
    title: "Digitize your library.",
    body: "Snap a photo, add a few notes about its condition, and set your intention: swap it, sell it for coffee money, or give it away as a neighborhood gift.",
    img: flowList,
    alt: "Photographing a book with a phone"
  },
  {
    n: "02",
    label: "Match",
    title: "The magic match.",
    body: "Our wishlist engine hums in the background. When a book you list matches a neighbor's wish, we notify you both. It feels like a small cosmic coincidence.",
    img: flowMeet,
    alt: "Two readers exchanging a book"
  },
  {
    n: "03",
    label: "Meet",
    title: "Hand to hand, locally.",
    body: "Meet at a café in Grund or a bench in the Pétrusse valley. Exchange the story — and perhaps a few words about it.",
    img: clubsImg,
    alt: "Friends meeting over coffee with books"
  }
];
const clubs = [
  { tag: "K", title: "Kirchberg Classics Club", meta: "Tuesdays · 18:30", genre: "Classics" },
  { tag: "G", title: "Modern Fiction Exchange", meta: "Grund Community Hub", genre: "Fiction" },
  { tag: "P", title: "Poetry Hour, Pétrusse", meta: "First Sunday · 10:00", genre: "Poetry" },
  { tag: "B", title: "Belair Sci-Fi Society", meta: "Online + monthly meet", genre: "Sci-Fi" }
];
const clubImage = clubsImg;
const sustainabilityImage = sustainImg;
function toCountdownParts(targetTimestamp) {
  const deltaMs = targetTimestamp - Date.now();
  if (deltaMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }
  const totalSeconds = Math.floor(deltaMs / 1e3);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor(totalSeconds % 86400 / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, finished: false };
}
function CountdownCell({ value, label }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-w-16 sm:min-w-20 rounded-2xl bg-paper/80 border border-ink/10 px-3 py-2 sm:px-4 sm:py-3", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif text-2xl sm:text-3xl leading-none text-ink tabular-nums", children: String(value).padStart(2, "0") }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-ink/55", children: label })
  ] });
}
function LaunchCountdown({ launchAt: launchAt2 }) {
  const targetTimestamp = Date.parse(launchAt2);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false
  });
  useEffect(() => {
    if (!Number.isFinite(targetTimestamp)) {
      return;
    }
    const update = () => {
      setCountdown(toCountdownParts(targetTimestamp));
    };
    update();
    const timer = window.setInterval(update, 1e3);
    return () => window.clearInterval(timer);
  }, [targetTimestamp]);
  if (!Number.isFinite(targetTimestamp)) {
    return null;
  }
  if (countdown.finished) {
    return /* @__PURE__ */ jsx("div", { className: "mt-8 inline-flex items-center gap-2 rounded-full border border-forest/30 bg-forest/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-forest", children: "We are live now" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 animate-fade-up [animation-delay:220ms]", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-ink/50 mb-3", children: "Launching soon" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsx(CountdownCell, { value: countdown.days, label: "Days" }),
      /* @__PURE__ */ jsx(CountdownCell, { value: countdown.hours, label: "Hours" }),
      /* @__PURE__ */ jsx(CountdownCell, { value: countdown.minutes, label: "Minutes" }),
      /* @__PURE__ */ jsx(CountdownCell, { value: countdown.seconds, label: "Seconds" })
    ] })
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[18%] left-[6%] sm:left-[10%] animate-float", children: /* @__PURE__ */ jsxs("div", { className: "bg-paper p-3 rounded-2xl shadow-2xl shadow-ink/10 border border-ink/5 -rotate-6 w-36 sm:w-48", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroHighlights[0].src,
            alt: heroHighlights[0].alt,
            width: 512,
            height: 768,
            className: "w-full aspect-[2/3] object-cover rounded-xl mb-3"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-clay font-medium", children: heroHighlights[0].label }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-ink/60", children: heroHighlights[0].location })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-[14%] right-[5%] sm:right-[12%] animate-float-slow [animation-delay:2s]", children: /* @__PURE__ */ jsxs("div", { className: "bg-paper p-3 rounded-2xl shadow-2xl shadow-ink/10 border border-ink/5 rotate-3 w-32 sm:w-40", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroHighlights[1].src,
            alt: heroHighlights[1].alt,
            width: 512,
            height: 768,
            className: "w-full aspect-[2/3] object-cover rounded-xl mb-2"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono block text-center text-ink/70", children: heroHighlights[1].label })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute bottom-[14%] left-[14%] animate-float-slow [animation-delay:1s]", children: /* @__PURE__ */ jsxs("div", { className: "bg-paper px-4 py-3 rounded-2xl shadow-xl shadow-ink/10 border border-ink/5 rotate-[-4deg] flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "size-8 rounded-full bg-forest/15 grid place-items-center", children: /* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-forest" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold leading-tight", children: "Wishlist match!" }),
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-mono text-ink/50", children: "Calvino · 200m away" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute bottom-[20%] right-[8%] animate-float [animation-delay:0.8s]", children: /* @__PURE__ */ jsx("div", { className: "bg-paper px-4 py-3 rounded-2xl shadow-xl shadow-ink/10 border border-ink/5 rotate-[5deg]", children: /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-ink/60 uppercase tracking-widest", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "size-3 inline mr-1 -mt-0.5" }),
        "Limpertsberg"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-clay/10 text-clay rounded-full text-[10px] font-mono uppercase tracking-widest mb-8 animate-fade-up", children: [
        /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-clay animate-pulse-soft" }),
        "A Luxembourgish reading circle"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance text-ink animate-fade-up [animation-delay:80ms]", children: [
        "Give stories a ",
        /* @__PURE__ */ jsx("span", { className: "italic text-clay", children: "second life." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-7 sm:mt-8 text-ink/65 max-w-[44ch] mx-auto text-base sm:text-lg leading-relaxed animate-fade-up [animation-delay:160ms]", children: "A neighborhood sanctuary for swapping, selling, and discovering pre-loved books from readers just around the corner." }),
      /* @__PURE__ */ jsx(LaunchCountdown, { launchAt }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up [animation-delay:240ms]", children: [
        /* @__PURE__ */ jsxs("button", { className: "group inline-flex items-center justify-center gap-2 bg-ink text-paper px-7 py-4 rounded-full font-medium hover:bg-clay transition-all duration-300", children: [
          /* @__PURE__ */ jsx(Search, { className: "size-4" }),
          "Browse Books Nearby"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center justify-center gap-2 border border-ink/15 px-7 py-4 rounded-full font-medium hover:bg-sand transition-all duration-300", children: [
          "List a Book",
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-col items-center gap-5 animate-fade-up [animation-delay:320ms]", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center", children: socialProofMembers.map((member, index) => /* @__PURE__ */ jsx(
          "span",
          {
            title: member.name,
            className: `grid place-items-center size-10 rounded-full border-2 border-paper bg-forest/15 text-[10px] font-mono uppercase tracking-wider text-forest ${index > 0 ? "-ml-2" : ""}`,
            children: member.initials
          },
          member.name
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-ink/60", children: "Joined by local readers already following the launch." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: socialLinks.instagram,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center justify-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-clay transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx(Instagram, { className: "size-4" }),
                "Instagram"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: socialLinks.threads,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center justify-center gap-2 border border-ink/15 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-sand transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx(AtSign, { className: "size-4" }),
                "Threads"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function MarketplaceSection() {
  return /* @__PURE__ */ jsx("section", { id: "marketplace", className: "py-24 sm:py-32 px-6 bg-paper-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-clay", children: "· 01 / The Marketplace" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl sm:text-5xl mt-3 text-balance max-w-[18ch]", children: "Recent additions in the city." })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "text-xs font-mono uppercase tracking-widest border-b border-ink/20 pb-1 hover:text-clay hover:border-clay transition-colors",
          children: "View all listings →"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8", children: listings.map((listing) => /* @__PURE__ */ jsx("article", { className: `${listing.span} ${listing.offset} group cursor-pointer`, children: /* @__PURE__ */ jsxs("div", { className: "bg-paper p-4 rounded-3xl border border-ink/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-ink/10", children: [
      /* @__PURE__ */ jsxs("div", { className: `relative w-full ${listing.aspect} overflow-hidden rounded-2xl mb-4 bg-sand`, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: listing.img,
            alt: listing.title,
            loading: "lazy",
            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: `absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full ${listing.tagClass}`, children: listing.tag })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg sm:text-xl truncate", children: listing.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink/50 mt-0.5 truncate", children: listing.author })
        ] }),
        /* @__PURE__ */ jsx(Heart, { className: "size-4 text-ink/30 hover:text-clay transition-colors shrink-0 mt-1" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono text-ink/45 uppercase tracking-widest mt-3", children: listing.meta })
    ] }) }, listing.title)) })
  ] }) });
}
function FlowSection() {
  return /* @__PURE__ */ jsx("section", { id: "flow", className: "py-24 sm:py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-20 sm:mb-28", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-clay", children: "· 02 / The Flow" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl sm:text-5xl md:text-6xl mt-3 italic text-balance", children: "The journey of a book." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-ink/60 text-lg leading-relaxed", children: "We believe a book belongs to a journey, not a warehouse. Three slow, considered steps — from your shelf to your neighbor's." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-24 sm:gap-32", children: flowSteps.map((step, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 group`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/10", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: step.img,
              alt: step.alt,
              loading: "lazy",
              className: "w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 md:px-8 lg:px-12", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-clay font-mono text-sm", children: [
              step.n,
              " / ",
              step.label.toUpperCase()
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl sm:text-4xl mt-4 mb-5 text-balance", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "text-ink/65 leading-relaxed text-base sm:text-lg max-w-[45ch]", children: step.body })
          ] })
        ]
      },
      step.n
    )) })
  ] }) });
}
function WishStep({ n, text, offset }) {
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-4 bg-paper/10 backdrop-blur-sm border border-paper/15 p-4 rounded-2xl ${offset ? "md:translate-x-4" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "size-10 rounded-xl bg-clay grid place-items-center text-paper font-mono text-sm shrink-0", children: n }),
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-paper/90", children: text })
  ] });
}
function WishlistSection() {
  return /* @__PURE__ */ jsx("section", { id: "wishlist", className: "py-24 sm:py-32 px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-forest text-paper rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 md:p-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-8 -right-4 sm:right-10 opacity-[0.07] pointer-events-none select-none", children: /* @__PURE__ */ jsx("p", { className: "font-serif text-[10rem] sm:text-[16rem] italic leading-none", children: "match." }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-paper/50", children: "· 03 / Wishlist" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] mt-3 mb-6 text-balance", children: [
          "Never miss a ",
          /* @__PURE__ */ jsx("span", { className: "italic", children: "wanted" }),
          " story."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-paper/70 text-lg leading-relaxed mb-10 max-w-[42ch]", children: "Add out-of-print titles or rare finds to your wishlist. When a neighbor lists your dream book, we nudge you both — instantly, quietly." }),
        /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center gap-2 bg-paper text-forest px-6 py-3.5 rounded-full font-medium hover:bg-clay hover:text-paper transition-all duration-300", children: [
          /* @__PURE__ */ jsx(Heart, { className: "size-4" }),
          " Create Your Wishlist"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsx(WishStep, { n: 1, text: 'Add "Invisible Cities" to your wishlist' }),
        /* @__PURE__ */ jsx(WishStep, { n: 2, text: "Elena lists her copy, 200m away", offset: true }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-paper text-forest p-4 rounded-2xl shadow-2xl shadow-black/20 md:translate-x-8 animate-pulse-soft", children: [
          /* @__PURE__ */ jsx("div", { className: "size-10 rounded-xl bg-forest grid place-items-center text-paper shrink-0", children: /* @__PURE__ */ jsx(Sparkles, { className: "size-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "It's a match." }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-forest/60", children: "Say hello to Elena →" })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
function ClubsSection() {
  return /* @__PURE__ */ jsx("section", { id: "clubs", className: "py-24 sm:py-32 px-6 bg-paper-soft", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-clay", children: "· 04 / Book Clubs" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] mt-3 text-balance", children: [
        "More than a market. ",
        /* @__PURE__ */ jsx("br", {}),
        "A cultural hearth."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-ink/65 text-lg leading-relaxed max-w-[44ch]", children: "Reading circles in Kirchberg, silent reading hours in Grund, genre-specific communities — and the freedom to start your own." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: clubs.map((club) => /* @__PURE__ */ jsxs(
        "button",
        {
          className: "w-full flex items-center gap-4 p-4 rounded-2xl border border-ink/8 bg-paper hover:border-clay/30 hover:shadow-lg hover:shadow-ink/5 transition-all duration-300 text-left",
          children: [
            /* @__PURE__ */ jsx("div", { className: "size-12 rounded-xl bg-forest/10 text-forest grid place-items-center font-serif text-lg italic shrink-0", children: club.tag }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium text-ink truncate", children: club.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-ink/50 mt-0.5", children: club.meta })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-ink/40", children: club.genre })
          ]
        },
        club.title
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: clubImage,
          alt: "Cozy book club meeting",
          loading: "lazy",
          width: 896,
          height: 1120,
          className: "w-full aspect-[4/5] object-cover rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/15"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-clay text-paper p-6 sm:p-8 rounded-2xl shadow-2xl max-w-[18rem] animate-float", children: [
        /* @__PURE__ */ jsx("p", { className: "italic font-serif text-lg sm:text-xl leading-snug", children: '"The best way to know a neighbor is through the books they leave behind."' }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono mt-4 opacity-80 uppercase tracking-widest", children: "— Léa, Bonnevoie" })
      ] })
    ] })
  ] }) }) });
}
function Stat({ k, v }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif text-3xl sm:text-4xl text-ink", children: k }),
    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-ink/50 mt-1", children: v })
  ] });
}
function SustainabilitySection() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "md:col-span-7 order-2 md:order-1", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: sustainabilityImage,
        alt: "Books on a wooden bench",
        loading: "lazy",
        width: 1280,
        height: 800,
        className: "w-full aspect-[16/10] object-cover rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-ink/10"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 order-1 md:order-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-clay", children: "· 05 / Neighborhood" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl sm:text-5xl mt-3 leading-[1.05] text-balance", children: [
        "A second life, ",
        /* @__PURE__ */ jsx("span", { className: "italic", children: "on the same street." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-ink/65 text-lg leading-relaxed", children: "Every shared book is a tiny act of resistance against waste — and a reason to meet the reader two doors down. Slow, local, and quietly radical." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-2 gap-x-8 gap-y-6", children: [
        /* @__PURE__ */ jsx(Stat, { k: "6,200", v: "Books rehomed" }),
        /* @__PURE__ */ jsx(Stat, { k: "14", v: "Luxembourg quartiers" }),
        /* @__PURE__ */ jsx(Stat, { k: "89%", v: "Found within 1 km" }),
        /* @__PURE__ */ jsx(Stat, { k: "0", v: "Warehouses, ever" })
      ] })
    ] })
  ] }) }) });
}
function CtaSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx(BookOpen, { className: "size-8 mx-auto text-clay mb-6" }),
    /* @__PURE__ */ jsxs("h2", { className: "font-serif text-5xl sm:text-6xl md:text-7xl italic leading-[0.95] text-balance", children: [
      "Your next chapter ",
      /* @__PURE__ */ jsx("br", {}),
      "is on the next street."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center", children: [
      /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center justify-center gap-2 bg-ink text-paper px-7 py-4 rounded-full font-medium hover:bg-clay transition-colors", children: [
        /* @__PURE__ */ jsx(Search, { className: "size-4" }),
        " Browse Books Nearby"
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center justify-center gap-2 border border-ink/15 px-7 py-4 rounded-full font-medium hover:bg-sand transition-colors", children: [
        "List a Book ",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
      ] })
    ] })
  ] }) });
}
function FooterCol({ title, items }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { className: "text-[10px] font-mono uppercase tracking-widest mb-5 text-ink/45", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm", children: items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-clay transition-colors", children: item }) }, item)) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "pt-20 pb-10 px-6 bg-paper border-t border-ink/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif italic font-bold text-2xl mb-5", children: "The Book Next Door" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/55 leading-relaxed", children: "A neighborhood reading circle for Luxembourg. Cultivating a slower, more thoughtful way to circulate stories — one chapter at a time." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16", children: [
        /* @__PURE__ */ jsx(FooterCol, { title: "Market", items: ["Nearby Books", "Book Swaps", "Free Shelf", "Wishlist"] }),
        /* @__PURE__ */ jsx(FooterCol, { title: "Community", items: ["Reading Circles", "Local Events", "Sustainability", "Stories"] }),
        /* @__PURE__ */ jsx(FooterCol, { title: "About", items: ["The Manifesto", "Contact", "Press", "Support"] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20 pt-8 border-t border-ink/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-ink/40 uppercase tracking-widest", children: [
      /* @__PURE__ */ jsx("span", { children: "Luxembourg City · 2026" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-ink transition-colors", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-ink transition-colors", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-ink transition-colors", children: "Instagram" })
      ] })
    ] })
  ] }) });
}
function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "bg-paper text-ink overflow-x-clip", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(MarketplaceSection, {}),
    /* @__PURE__ */ jsx(FlowSection, {}),
    /* @__PURE__ */ jsx(WishlistSection, {}),
    /* @__PURE__ */ jsx(ClubsSection, {}),
    /* @__PURE__ */ jsx(SustainabilitySection, {}),
    /* @__PURE__ */ jsx(CtaSection, {}),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const SplitComponent = LandingPage;
export {
  SplitComponent as component
};
