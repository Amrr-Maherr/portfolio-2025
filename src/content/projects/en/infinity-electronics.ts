import view1 from "../../../assets/images/projects/infinity-electronics/view-1.jpg";
import view2 from "../../../assets/images/projects/infinity-electronics/view-2.jpg";
import view3 from "../../../assets/images/projects/infinity-electronics/view-3.jpg";
import view4 from "../../../assets/images/projects/infinity-electronics/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Infinity Electronics - Electronics Storefront (Zid)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic right-to-left electronics storefront on Zid with category navigation, promotional sections, product listings and price filters. Product pages present image galleries, descriptions, pricing, quantity controls, and cart and wishlist options.",
  "live": "https://p8bg4g.zid.store/",
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
        "alt": "Electronics category",
        "caption": "Electronics category",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Category navigation",
        "caption": "Category navigation",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
