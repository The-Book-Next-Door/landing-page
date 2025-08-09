import StoryIdea from "../../assets/images/story-idea.jpeg";
import StoryClub from "../../assets/images/story-club.jpeg";
import StoryShelf from "../../assets/images/story-shelf.jpeg";

export const defaultItems = [
  {
    kicker: "ORIGIN",
    imgSrc: StoryShelf,
    imgAlt: "A warmly lit bookshelf with once-loved books",
    title: "A quiet shelf, a simple question",
    body:
      "One rainy afternoon we found a shelf of once-loved books—margin notes, folded corners, little histories. They were waiting. What if we helped them meet their next reader?",
    href: "#", // optional
  },
  {
    kicker: "THE IDEA",
    imgSrc: StoryIdea,
    imgAlt: "Notebook and books by a window",
    title: "Pass a book on, find your next",
    body:
      "Sharing should feel like saying hello. Offer a title you’ve finished, discover one you’ll start tonight. No feeds, no noise—just people and books.",
  },
  {
    kicker: "COMMUNITY",
    imgSrc: StoryClub,
    imgAlt: "Small reading circle meeting in a library room",
    title: "From swaps to small circles",
    body:
      "We’re building friendly, local meetups where stories travel hand to hand. Keep it small, warm, and human-sized—because reading is better together.",
  },
  
];
