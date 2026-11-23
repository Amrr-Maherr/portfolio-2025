import view1 from "../../../assets/images/projects/infinity-beauty/view-1.jpg";
import view2 from "../../../assets/images/projects/infinity-beauty/view-2.jpg";
import view3 from "../../../assets/images/projects/infinity-beauty/view-3.jpg";
import view4 from "../../../assets/images/projects/infinity-beauty/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Infinity Beauty - Beauty and Fashion Storefront (Zid)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic right-to-left beauty and fashion storefront on Zid for perfumes, cosmetics, clothing, and accessories. It includes category browsing, product listings and price filters, plus product detail pages with image galleries, prices, quantity controls, and cart options.",
  "live": "https://jtssiu.zid.store/",
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
        "alt": "Product details",
        "caption": "Product details",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Fashion category",
        "caption": "Fashion category",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Product information",
        "caption": "Product information",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
