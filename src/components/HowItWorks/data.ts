import type { Step } from "./types";

import List from "../../assets/images/works-books.jpeg"

export const defaultSteps: Step[] = [
  {
    title: "List your books",
    blurb: "Add pre-owned titles and mark them for swap, donate, or sell.",
    imgSrc: List,
    imgAlt: "Stack of books",
  },
  {
    title: "Discover & request",
    blurb:
      "Search by title, genre, or wishlist and request a copy you’ll love.",
    imgSrc: "/images/how/search.jpg",
    imgAlt: "Magnifying glass over a page",
  },
  {
    title: "Meet & swap",
    blurb: "Connect with nearby readers or join a small club meetup to trade.",
    imgSrc: "/images/how/meet.jpg",
    imgAlt: "People chatting with books",
  },
];
