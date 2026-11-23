import fresh0 from "../../../assets/images/projects/education-market/six-1.jpg";
import fresh1 from "../../../assets/images/projects/education-market/six-2.jpg";
import fresh2 from "../../../assets/images/projects/education-market/six-3.jpg";
import fresh3 from "../../../assets/images/projects/education-market/six-4.jpg";
import fresh4 from "../../../assets/images/projects/education-market/six-5.jpg";
import fresh5 from "../../../assets/images/projects/education-market/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Education Market - School Supplies Store (Zid)",
  "theme": "light",
  "live": "https://educationmarket.sa/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "An Arabic e-commerce storefront on Zid for school uniforms, stationery, bags, arts supplies, and computer accessories. The store includes category-based browsing, product grids, and product detail pages with images, pricing, and options such as uniform sizes.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage",caption: "Homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "School uniform categories",caption: "School uniform categories",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Uniform product grid and price filter",caption: "Uniform product grid and price filter",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product gallery and size selection",caption: "Product gallery and size selection",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product description tabs",caption: "Product description tabs",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "All products and filters",caption: "All products and filters",natural:true} }
]
} as const satisfies ProjectContent;
