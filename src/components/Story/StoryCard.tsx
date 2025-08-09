// StoryCard.tsx (replace previous export)
import ExpandableText from "./ExpandableText";
import type { StoryItem } from "./types";

type Size = "md" | "lg" | "xl";
type Props = {
  item: StoryItem & { kicker?: string; href?: string };
  compact?: boolean;
  layout?: "image" | "split";
  size?: Size; // NEW
  emphasize?: boolean; // thicker shadow
};

const IMG_H = {
  md: "h-56 md:h-64",
  lg: "h-64 md:h-72",
  xl: "h-72 md:h-80",
};
const PAD = { md: "p-5", lg: "p-6", xl: "p-7" };

export default function StoryCard({
  item,
  compact = false,
  layout = "image",
  size = "lg",
  emphasize = false,
}: Props) {
  const Wrapper = item.href ? "a" : "div";
  const pad = compact ? "p-4" : PAD[size];

  if (layout === "split") {
    return (
      <li
        className={`group rounded-3xl border border-slate-200 bg-white/85 overflow-hidden
                      transition-transform hover:-translate-y-0.5 ${
                        emphasize ? "shadow-md" : "shadow-sm"
                      } hover:shadow-md`}
      >
        <Wrapper
          {...(item.href ? { href: item.href } : {})}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 focus:outline-none"
        >
          <ScrimImage
            src={item.imgSrc}
            alt={item.imgAlt}
            className={IMG_H[size]}
          />
          <div className={["flex flex-col", pad].join(" ")}>
            {item.kicker && <Kicker>{item.kicker}</Kicker>}
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
              {item.title}
            </h3>
            <ExpandableText text={item.body} compact={compact} />
            {item.href && <ReadMore />}
          </div>
        </Wrapper>
      </li>
    );
  }

  return (
    <li
      className={`group rounded-3xl border border-slate-200 bg-white/85 overflow-hidden
                    transition-transform hover:-translate-y-0.5 ${
                      emphasize ? "shadow-md" : "shadow-sm"
                    } hover:shadow-md`}
    >
      <Wrapper
        {...(item.href ? { href: item.href } : {})}
        className="block focus:outline-none"
      >
        <ScrimImage
          src={item.imgSrc}
          alt={item.imgAlt}
          className={IMG_H[size]}
        />
        <div className={pad}>
          {item.kicker && <Kicker>{item.kicker}</Kicker>}
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
            {item.title}
          </h3>
          <ExpandableText text={item.body} compact={compact} />
          {item.href && <ReadMore />}
        </div>
      </Wrapper>
    </li>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] uppercase tracking-wider text-slate-500">
      {children}
    </span>
  );
}
function ReadMore() {
  return (
    <span className="mt-3 inline-flex items-center text-sm font-medium text-emerald-700">
      Read the full story
      <svg
        className="ml-1"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </span>
  );
}
function ScrimImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={["relative w-full", className].join(" ")}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
      </div>
    </div>
  );
}
