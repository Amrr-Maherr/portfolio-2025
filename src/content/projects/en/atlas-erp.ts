import currentLogin from "../../../assets/images/projects/atlas-erp/current-login.jpg";
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
  description: "A front-end ERP application for IT retail and wholesale workflows, built with Next.js 16, React 19 and TypeScript. It organizes products, customers, suppliers, employees, sales, purchase orders, categories and inventory in a feature-based architecture. Current source includes API-backed authentication, reusable table interfaces, pagination, search, sorting, forms, charts and export utilities. The gallery shows the current hosted sign-in screen alongside earlier local-demo views with seed data.",
  components: [
    { type: "media", props: { type: "image", src: currentLogin, alt: "Current hosted sign-in screen", caption: "Current hosted sign-in screen", natural: true } },
    {
      type: "media",
      props: {
        type: "image",
        src: atlas0,
        natural: true,
        alt: "Product management, earlier local version with seed data",
        caption: "Product management, earlier local version with seed data",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "Customer management, earlier local version with seed data", caption: "Customer management, earlier local version with seed data", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "Supplier management, earlier local version with seed data", caption: "Supplier management, earlier local version with seed data", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "Inventory management, earlier local version with seed data", caption: "Inventory management, earlier local version with seed data", natural: true } },
  ],
} as const satisfies ProjectContent;
