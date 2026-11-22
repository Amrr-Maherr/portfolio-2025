import gallery3 from "../../../assets/images/projects/atlas-erp/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/atlas-erp/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/atlas-erp/gallery-2.jpg";
import atlas0 from "../../../assets/images/projects/atlas-erp/atlas-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Atlas ERP",
  theme: "light",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "tanstack", "axios"],
  videoBorder: true,
  source: "https://github.com/Amrr-Maherr/Atlas-ERP",
  description:
    "A modern enterprise resource planning (ERP) dashboard for an IT retail/wholesale business, built with Next.js 16 App Router, React 19, and a feature-based architecture.<br/><br/>Covers eight business modules with full CRUD list and detail pages, server-side style pagination, sorting, search, and CSV/Excel/PDF export, powered by TanStack Query and TanStack Table.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: atlas0,
        natural: true,
        alt: "Product management, local demo with seed data",
        caption: "Product management, local demo with seed data",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "Customer management, local demo with seed data", caption: "Customer management, local demo with seed data", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "Supplier management, local demo with seed data", caption: "Supplier management, local demo with seed data", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "Inventory management, local demo with seed data", caption: "Inventory management, local demo with seed data", natural: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Eight business modules: categories, products, customers, suppliers, employees, sales, purchase orders, and inventory",
          "Full CRUD interfaces with pagination, sorting, search, and status badges",
          "CSV/Excel/PDF export across all entity tables",
          "Dashboard analytics with charts and KPI summaries",
          "Realistic seed data: 214 products, 350 customers, 800 sales transactions",
          "Consistent loading, error, and empty states across modules",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 with shadcn/ui. Server state is managed with TanStack Query v5, tables with TanStack Table v8, and data is served by a mock REST API with generated seed data.",
      },
    },
  ],
} as const satisfies ProjectContent;
