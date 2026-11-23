import gallery3 from "../../../assets/images/projects/imdb-stream/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/imdb-stream/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/imdb-stream/gallery-2.jpg";
import imdb0 from "../../../assets/images/projects/imdb-stream/imdb-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "IMDB Stream - Movies and TV Discovery",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "axios", "firebase"],
  videoBorder: false,
  live: "https://imdb-stream.vercel.app",
  source: "https://github.com/Amrr-Maherr/imdb-stream",
  description:
    "A bilingual English and Arabic movie and TV discovery app built with Next.js and TypeScript. It includes searchable catalogues, movie and person detail pages, Firebase sign-in, favourites and watchlists, and an AI recommendation assistant. Its Arabic interface supports right-to-left layouts.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: imdb0,
        natural: true,
        alt: "IMDB Stream discovery platform",
        caption: "Movie and TV discovery platform",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "People discovery page", caption: "People discovery page", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "Actor profile and career statistics", caption: "Actor profile and career statistics", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "Movie details, cast and watchlist controls", caption: "Movie details, cast and watchlist controls", natural: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Hybrid Server/Client Component rendering with ISR for TMDb data",
          "Filterable movie and TV catalogs with search and rich detail pages",
          "Firebase authentication: email, Google, phone, and guest sign-in",
          "Firestore-backed favorites and watchlist per user",
          "Groq-powered AI recommendation assistant with clickable result cards",
          "Bilingual English/Arabic support with full RTL layout",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 with shadcn/ui. Uses Firebase Auth and Firestore, next-intl for internationalisation, and the Groq API for AI-powered recommendations.",
      },
    },
  ],
} as const satisfies ProjectContent;
