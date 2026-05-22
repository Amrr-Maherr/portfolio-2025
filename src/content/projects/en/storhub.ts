import storhub0 from "../../../assets/images/projects/storhub/storhub-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "StorHub",
  theme: "light",
  tags: ["next", "react", "typescript", "tailwind", "shadcn", "tanstack"],
  videoBorder: true,
  description:
    "A full CRUD dashboard management system with server-side pagination and optimised data fetching.<br/><br/>Built with responsive and accessible tables, forms, and reusable dashboard components using shadcn/ui, following scalable architecture patterns for rapid module expansion.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: storhub0,
        alt: "StorHub dashboard",
        caption: "Dashboard management system",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Full CRUD operations with server-side pagination",
          "Optimised data fetching with TanStack Query",
          "Responsive and accessible tables and forms",
          "Reusable dashboard components using shadcn/ui",
          "Scalable architecture allowing rapid module expansion",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Developed with Next.js, React, TypeScript, and Tailwind CSS. The component library follows shadcn/ui patterns for consistent, accessible UI elements across all dashboard modules.",
      },
    },
  ],
} as const satisfies ProjectContent;
