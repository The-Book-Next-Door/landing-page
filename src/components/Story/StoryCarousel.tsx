import { useRef } from "react";
import StoryCard from "./StoryCard";
import type { StoryItem } from "./types";

export default function StoryCarousel({ items }: { items: StoryItem[] }) {
  const scroller = useRef<HTMLUListElement>(null);

  const step = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("li") as HTMLElement | null;
    const w = card ? card.offsetWidth : 320;
    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  return (
    <div className="mt-8 md:hidden">
      <div className="relative overflow-x-clip">
        <ul
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Story cards"
        >
          {items.map((it, i) => (
            <StoryCard key={i} item={it} compact />
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
