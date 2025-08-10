export type Stat = { label: string; value: string };
export type Feature = { title: string; blurb: string };
export type Milestone = {
  title: string;
  status: "done" | "in-progress" | "next";
  eta?: string;
};

export type ComingSoonProps = {
  title?: string;
  programLabel?: string;
  programBlurb?: string;
  launchDate: Date | string;
  progress: number;
  onNotifySubmit?: (email: string) => Promise<void> | void;
  className?: string;

  stats?: Stat[];
  features?: Feature[];
  roadmap?: Milestone[];
  supporters?: string[];
  successMessage?: string;
  showBackgroundDecor?: boolean;
};
