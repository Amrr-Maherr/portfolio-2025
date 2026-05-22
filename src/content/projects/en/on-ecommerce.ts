import on0 from "../../../assets/images/projects/on-ecommerce/on-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "On - Athletic eCommerce",
  theme: "dark",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "zod", "framer", "swiper", "reacthookform"],
  videoBorder: false,
  live: "https://on-pied.vercel.app",
  description:
    "A production-grade eCommerce platform with a custom brutalist-inspired design system and full dark mode support.<br/><br/>Features advanced product filtering, cart and wishlist persistence, authentication flows with React Hook Form and Zod validation, and performance optimisation through lazy loading and animation optimisation.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: on0,
        alt: "On eCommerce platform",
        caption: "Athletic eCommerce platform",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Custom brutalist-inspired design system with dark mode",
          "Advanced product filtering and search",
          "Cart and wishlist persistence across sessions",
          "Authentication flows with React Hook Form and Zod validation",
          "Image lazy loading and animation optimisation",
          "Mobile-first responsive layouts with Swiper.js carousels",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Developed with React 19, TypeScript, Vite, and Tailwind CSS v4. Uses TanStack Query for data management and Framer Motion for smooth animations throughout the shopping experience.",
      },
    },
  ],
} as const satisfies ProjectContent;
