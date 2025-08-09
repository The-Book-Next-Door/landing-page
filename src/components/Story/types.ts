export type StoryItem = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  body: string;
};

export type StoryBehindProps = {
  id?: string; // default: "story"
  title?: string; // section heading
  subtitle?: string; // section subheading
  items?: StoryItem[]; // if omitted, uses defaults from data.ts
  className?: string;
};
