import view1 from "../../../assets/images/projects/alnassr/view-1.jpg";
import view2 from "../../../assets/images/projects/alnassr/view-2.jpg";
import view3 from "../../../assets/images/projects/alnassr/view-3.jpg";
import view4 from "../../../assets/images/projects/alnassr/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "AlNassr Official Store",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "A branded e-commerce storefront for AlNassr FC merchandise, presenting kits, training wear, lifestyle collections and accessories. The interface connects campaign-led landing pages, season-based collection browsing and product detail pages with imagery and size selection in an Arabic storefront.",
  "live": "https://store.alnassr.sa/",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "alt": "Homepage",
        "caption": "Homepage",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "alt": "Kits by season",
        "caption": "Kits by season",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Season collection",
        "caption": "Season collection",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Product details",
        "caption": "Product details",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
