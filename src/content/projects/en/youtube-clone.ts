import youtube0 from "../../../assets/images/projects/youtube-clone/youtube-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "YouTube Clone",
  theme: "light",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "redux", "axios"],
  videoBorder: true,
  live: "https://youtube-omega-gilt-35.vercel.app",
  source: "https://github.com/Amrr-Maherr/Youtube",
  description:
    "A responsive video streaming platform with real-time search, channel browsing, and video playback features.<br/><br/>Manages application state using Redux Toolkit and optimises rendering performance through memoisation and TanStack Query caching for a smooth user experience.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: youtube0,
        alt: "YouTube Clone video platform",
        caption: "Video streaming platform",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Real-time search with debounced queries",
          "Channel browsing and video playback",
          "State management with Redux Toolkit",
          "Performance optimisation via memoisation and caching",
          "Responsive design across all screen sizes",
          "Production-ready Vercel deployment workflow",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React, TypeScript, Vite, and Tailwind CSS. Uses TanStack Query for server-state caching and Redux Toolkit for global state management, deployed on Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
