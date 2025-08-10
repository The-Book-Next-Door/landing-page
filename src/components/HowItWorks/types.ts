export type Step = {
  title: string;
  blurb: string;
  imgSrc: string;
  imgAlt: string;
};
export type HowItWorksProps = {
  id?: string;
  heading?: string;
  steps?: Step[];
  className?: string;
};
