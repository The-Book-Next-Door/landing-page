import Decor from "./Decor";
import StoryGrid from "./StoryGrid";
import StoryCarousel from "./StoryCarousel";
import { defaultItems } from "./data";
import type { StoryBehindProps } from "./types";

export default function StoryBehind({
  id = "story",
  title = "The Story Behind",
  subtitle = "Where it started, what we’re building, and why it stays small and calm.",
  items = defaultItems,
  className = "",
}: Readonly<StoryBehindProps>) {
  return (
    <section
      id={id}
      className={[
        "relative isolate overflow-hidden pb-16 md:py-24",
        className,
      ].join(" ")}
    >

      <div className="mx-auto w-full max-w-[100rem] px-6">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-3 text-slate-600">{subtitle}</p>
        </header>

        <StoryGrid items={items} />
        <StoryCarousel items={items} />

        <p className="mx-auto mt-10 max-w-3xl text-center text-slate-600">
          Whether you’re a reader, a gifter, or a swapper—there’s a place for
          you here. Let’s keep stories moving.
        </p>
      </div>
    </section>
  );
}
