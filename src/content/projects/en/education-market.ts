import view1 from "../../../assets/images/projects/education-market/view-1.jpg";
import view2 from "../../../assets/images/projects/education-market/view-2.jpg";
import view3 from "../../../assets/images/projects/education-market/view-3.jpg";
import view4 from "../../../assets/images/projects/education-market/view-4.jpg";
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
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "Homepage",
        "caption": "Homepage"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "School uniforms",
        "caption": "School uniforms"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Product details",
        "caption": "Product details"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "All products",
        "caption": "All products"
      }
    }
  ]
} as const satisfies ProjectContent;
