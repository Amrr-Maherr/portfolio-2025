import fresh0 from "../../../assets/images/projects/imdb-stream/six-1.jpg";
import fresh1 from "../../../assets/images/projects/imdb-stream/six-2.jpg";
import fresh2 from "../../../assets/images/projects/imdb-stream/six-3.jpg";
import fresh3 from "../../../assets/images/projects/imdb-stream/six-4.jpg";
import fresh4 from "../../../assets/images/projects/imdb-stream/six-5.jpg";
import fresh5 from "../../../assets/images/projects/imdb-stream/six-6.jpg";

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
{ type: "media", props: {type: "image",src: fresh0,alt: "Popular movies",caption: "Popular movies",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Featured titles grid",caption: "Featured titles grid",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Movie detail hero",caption: "Movie detail hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Storyline and cast",caption: "Storyline and cast",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Videos and photo sections",caption: "Videos and photo sections",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "People discovery",caption: "People discovery",natural:true} }
],
} as const satisfies ProjectContent;
