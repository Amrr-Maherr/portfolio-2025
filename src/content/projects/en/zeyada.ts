import view1 from "../../../assets/images/projects/zeyada/view-1.jpg";
import view2 from "../../../assets/images/projects/zeyada/view-2.jpg";
import view3 from "../../../assets/images/projects/zeyada/view-3.jpg";
import view4 from "../../../assets/images/projects/zeyada/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Zeyada - Grocery Storefront Demo (Zid)",
  "theme": "light",
  "live": "https://neoxeroco.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A grocery-style storefront demo on Zid with an Arabic right-to-left interface, category navigation, product listings, filters, promotional sections, and product detail pages. The theme presents a multi-category shopping layout with search, wishlist, and cart controls. This is a demonstration store, not a live retail business.",
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
        "alt": "Product listing",
        "caption": "Product listing"
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
        "alt": "Category navigation",
        "caption": "Category navigation"
      }
    }
  ]
} as const satisfies ProjectContent;
