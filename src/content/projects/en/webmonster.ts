import shot1 from "../../../assets/images/projects/webmonster/webmonster-1.jpg";
import shot2 from "../../../assets/images/projects/webmonster/webmonster-2.jpg";
import shot3 from "../../../assets/images/projects/webmonster/webmonster-3.jpg";
import shot4 from "../../../assets/images/projects/webmonster/webmonster-4.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Box&Buy - E-Commerce Store (WebMonster)",
  theme: "light",
  tags: ["react", "javascript", "redux", "bootstrap", "axios"],
  videoBorder: false,
  live: "https://web-monster-e-commerce.vercel.app",
  source: "https://github.com/Amrr-Maherr/WebMonster-e-commerce",
  description:
    "A full e-commerce store built with React 18 (Create React App): product catalog with search and filtering, product detail pages, login and account flows, plus about and contact pages, backed by a Node/Express REST API. Note: the hosted API is currently offline, so live product data may not load on the demo.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "All products page", caption: "All products page", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "About page - Our Story", caption: "About page", natural: true } },
    { type: "media", props: { type: "image", src: shot3, alt: "Contact page with form", caption: "Contact page with form", natural: true } },
    { type: "media", props: { type: "image", src: shot4, alt: "Login page", caption: "Login page", natural: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Product catalog with search and category filtering",
          "Product detail pages served from a REST API",
          "Login and account flows",
          "About and contact pages with a working contact form UI",
          "Responsive layout for desktop and mobile",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React 18 on Create React App, with a separate Node/Express REST API for product data. Deployed on Vercel (frontend) and Railway (API).",
      },
    },
  ],
} as const satisfies ProjectContent;
