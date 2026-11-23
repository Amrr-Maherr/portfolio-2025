import fresh0 from "../../../assets/images/projects/on-ecommerce/six-1.jpg";
import fresh1 from "../../../assets/images/projects/on-ecommerce/six-2.jpg";
import fresh2 from "../../../assets/images/projects/on-ecommerce/six-3.jpg";
import fresh3 from "../../../assets/images/projects/on-ecommerce/six-4.jpg";
import fresh4 from "../../../assets/images/projects/on-ecommerce/six-5.jpg";
import fresh5 from "../../../assets/images/projects/on-ecommerce/six-6.jpg";

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
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Homepage collection banner",caption: "Homepage collection banner",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Product catalogue page",caption: "Product catalogue page",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Brands page",caption: "Brands page",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Product gallery and stock panel",caption: "Product gallery and stock panel",natural:true} }
],
} as const satisfies ProjectContent;
