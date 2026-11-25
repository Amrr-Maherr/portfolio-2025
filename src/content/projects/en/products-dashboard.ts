
import type { ProjectContent } from "../../types";

export default {
  title: "Products Dashboard - CRUD Admin Panel",
  theme: "light",
  tags: ["react", "javascript", "bootstrap"],
  videoBorder: false,
  live: "https://products-dashboard-five.vercel.app/",
  description:
    "A CRUD admin panel for managing products and categories: listing with search and pagination, plus create, edit and delete flows, using json-server and DummyJSON as data sources.",
  components: [
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Product and category listing with search",
          "Create, edit and delete flows",
          "Pagination over large lists",
          "DummyJSON-backed demo data with json-server",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "React admin dashboard consuming REST endpoints from json-server and the DummyJSON API. Deployed on Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
