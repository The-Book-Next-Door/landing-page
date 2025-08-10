import StoryCard from "./StoryCard";
import type { StoryItem } from "./types";

export default function StoryGrid({ items }: { readonly items: readonly StoryItem[] }) {
  return (
    <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <StoryCard key={i} item={it} />
      ))}
    </ul>
  );
}
