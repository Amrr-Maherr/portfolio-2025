import imdb0 from "../../../assets/images/projects/imdb-stream/imdb-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "IMDB Stream",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "axios", "firebase"],
  videoBorder: false,
  live: "https://imdb-stream.vercel.app",
  source: "https://github.com/Amrr-Maherr/imdb-stream",
  description:
    "A bilingual (EN/AR, RTL) movie and TV discovery platform built with Next.js App Router and TypeScript, using hybrid Server/Client Component rendering with ISR for TMDb data.<br/><br/>Features Firebase authentication (email, Google, phone, guest), Firestore-backed favorites and watchlist, and a Groq-powered AI recommendation assistant.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: imdb0,
        alt: "IMDB Stream discovery platform",
        caption: "Movie and TV discovery platform",
      },
    },
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
