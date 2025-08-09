import StoryCard from "./StoryCard";
import type { StoryItem } from "./types";

export default function StoryGrid({ items }: { items: StoryItem[] }) {
  return (
    <ul className="mt-10 hidden md:grid grid-cols-3 gap-6">
      {items.map((it, i) => (
        <StoryCard key={i} item={it} />
      ))}
    </ul>
  );
}
