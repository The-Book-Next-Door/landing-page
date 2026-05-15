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

export const heroHighlights = [
  { src: book1, alt: "Penguin Classics paperback", label: "FREE", location: "BONNEVOIE" },
  { src: book2, alt: "Hardcover book", label: "SWAP ONLY", location: "" },
] as const;

export const listings = [
  { title: "The Art of Living", author: "Epictetus", img: marketplaceHero, span: "md:col-span-2", aspect: "aspect-[16/10]", tag: "AVAILABLE", tagClass: "bg-forest text-paper", meta: "Mint · Limpertsberg", offset: "" },
  { title: "Quiet Moments", author: "Mary Oliver", img: bookPoetry, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "WISHLIST MATCH", tagClass: "bg-clay/10 text-clay", meta: "Free · Belair", offset: "md:mt-12" },
  { title: "Old World Blues", author: "Italo Calvino", img: bookVintage, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "SWAP", tagClass: "bg-ink/5 text-ink", meta: "Good · Grund", offset: "" },
  { title: "Soft Currents", author: "Ocean Vuong", img: bookFiction, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "€8", tagClass: "bg-sand text-ink", meta: "Like New · Kirchberg", offset: "md:mt-8" },
  { title: "A Year of Reading", author: "Various", img: book1, span: "md:col-span-1", aspect: "aspect-[3/4]", tag: "FREE", tagClass: "bg-forest/10 text-forest", meta: "Good · Bonnevoie", offset: "" },
  { title: "Between Margins", author: "Anne Carson", img: book2, span: "md:col-span-2", aspect: "aspect-[16/10]", tag: "SWAP", tagClass: "bg-clay/10 text-clay", meta: "Mint · Strassen", offset: "md:mt-12" },
] as const;

export const flowSteps = [
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
] as const;

export const clubs = [
  { tag: "K", title: "Kirchberg Classics Club", meta: "Tuesdays · 18:30", genre: "Classics" },
  { tag: "G", title: "Modern Fiction Exchange", meta: "Grund Community Hub", genre: "Fiction" },
  { tag: "P", title: "Poetry Hour, Pétrusse", meta: "First Sunday · 10:00", genre: "Poetry" },
  { tag: "B", title: "Belair Sci-Fi Society", meta: "Online + monthly meet", genre: "Sci-Fi" },
] as const;

export const clubImage = clubsImg;
export const sustainabilityImage = sustainImg;