import shot1 from "../../../assets/images/projects/cosmoscope/cosmoscope-1.jpg";
import shot2 from "../../../assets/images/projects/cosmoscope/cosmoscope-2.jpg";
import shot3 from "../../../assets/images/projects/cosmoscope/cosmoscope-3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "CosmoScope - NASA Space Data Explorer",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "tanstack"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/cosmoscope",
  description:
    "A space exploration web app built with Next.js 15 and React 19 that brings NASA's open data into one place: the Astronomy Picture of the Day (APOD) archive, Near-Earth Object tracking, Mars Rover photos and a deep-space image search. Dark animated UI built with Tailwind CSS, Radix UI, TanStack Query and Framer Motion. The gallery shows a local production build because the original Vercel deployment is offline.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "Homepage hero - dark space landing", caption: "Homepage hero (local production build)", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "Picture of the Day section", caption: "Picture of the Day section", natural: true } },
    { type: "media", props: { type: "image", src: shot3, alt: "Image search page", caption: "Deep-space image search page", natural: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Astronomy Picture of the Day archive with date browsing",
          "Near-Earth Object tracking from NASA feeds",
          "Mars Rover photo explorer",
          "Deep-space image search across NASA's media library",
          "Dark animated interface with Framer Motion transitions",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with Next.js 15 (App Router), React 19 and TypeScript. Uses TanStack Query for data caching against NASA's public APIs, Tailwind CSS with Radix UI primitives, and Framer Motion for animation.",
      },
    },
  ],
} as const satisfies ProjectContent;
