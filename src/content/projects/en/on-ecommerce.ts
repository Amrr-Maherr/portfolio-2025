import gallery3 from "../../../assets/images/projects/on-ecommerce/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/on-ecommerce/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/on-ecommerce/gallery-2.jpg";
import on0 from "../../../assets/images/projects/on-ecommerce/on-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "On - Athletic E-Commerce",
  theme: "dark",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "zod", "framer", "swiper", "reacthookform"],
  videoBorder: false,
  live: "https://on-pied.vercel.app",
  source: "https://github.com/Amrr-Maherr/On",
  description:
    "An athletic e-commerce front end built with React and TypeScript. It combines collection browsing, product filters, product detail pages, cart and wishlist interfaces, and sign-in forms in a dark-mode storefront.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: on0,
        natural: true,
        alt: "On eCommerce platform",
        caption: "Athletic eCommerce platform",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "Running collection section", caption: "Running collection section", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "Product catalog page", caption: "Product catalog page", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "Product grid and category filters", caption: "Product grid and category filters", natural: true } },
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
