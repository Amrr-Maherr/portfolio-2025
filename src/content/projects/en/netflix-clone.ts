import netflix0 from "../../../assets/images/projects/netflix-clone/netflix-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Netflix Clone",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind", "tanstack", "redux", "stripe", "pwa", "axios"],
  videoBorder: false,
  live: "https://movies-app-pi-tawny.vercel.app",
  description:
    "A full-featured streaming platform built with Next.js SSR, integrating 12+ TMDb API endpoints for movies, TV shows, and actor data.<br/><br/>Features global state management with Redux Toolkit, server-state caching via TanStack Query, a multi-step subscription flow with Stripe Elements, and PWA support with dark mode.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: netflix0,
        alt: "Netflix Clone homepage",
        caption: "Streaming platform with SSR",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Server-side rendering with Next.js for optimal SEO and performance",
          "12+ TMDb API endpoints for comprehensive media data",
          "Global state management with Redux Toolkit",
          "Server-state caching with TanStack Query minimising redundant requests",
          "Multi-step subscription flow using Stripe Elements",
          "PWA support with offline capabilities and dark mode",
          "Accessibility-focused responsive layouts across all devices",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React 19, TypeScript, Next.js, and Tailwind CSS v4. The architecture follows scalable component patterns, ensuring maintainability and performance across the entire application.",
      },
    },
  ],
} as const satisfies ProjectContent;
