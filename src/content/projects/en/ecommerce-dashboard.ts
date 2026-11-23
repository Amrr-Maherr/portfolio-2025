import view1 from "../../../assets/images/projects/ecommerce-dashboard/view-1.jpg";
import view2 from "../../../assets/images/projects/ecommerce-dashboard/view-2.jpg";
import view3 from "../../../assets/images/projects/ecommerce-dashboard/view-3.jpg";
import view4 from "../../../assets/images/projects/ecommerce-dashboard/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "E-commerce Dashboard",
  "theme": "light",
  "tags": [],
  "description": "A store management dashboard demo built with Next.js (App Router), React and TypeScript. It integrates the RouteMisr API for product, category and brand management and the DummyJSON API for users and orders, with dashboard charts, paginated data tables with sorting and search, detail pages for each entity, and an authentication flow.<br/><br/>Tech stack: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, TanStack Table, Recharts, React Hook Form, Zod, Axios.<br/><br/>Live demo: https://dashboard-bay-one.vercel.app/",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "alt": "StoreHub welcome",
        "caption": "StoreHub welcome",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "alt": "Dashboard overview (demo data)",
        "caption": "Dashboard overview (demo data)",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Products table (demo data)",
        "caption": "Products table (demo data)",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Orders table (demo data)",
        "caption": "Orders table (demo data)",
        "natural": true
      }
    }
  ],
  "live": "https://dashboard-bay-one.vercel.app/"
} as const satisfies ProjectContent;
