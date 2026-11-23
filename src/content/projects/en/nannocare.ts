import view1 from "../../../assets/images/projects/nannocare/view-1.jpg";
import view2 from "../../../assets/images/projects/nannocare/view-2.jpg";
import view3 from "../../../assets/images/projects/nannocare/view-3.jpg";
import view4 from "../../../assets/images/projects/nannocare/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Nannocare - Personal Care Store",
  "theme": "light",
  "tags": [
    "react",
    "ecommerce",
    "responsive",
    "accessibility"
  ],
  "videoBorder": false,
  "description": "An e-commerce website for Nannocare personal-care products. It combines product collections, product detail pages, brand and technology information, and shopping controls in a product-focused storefront.",
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
        "alt": "Product collection",
        "caption": "Product collection"
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
        "alt": "Brand technology story",
        "caption": "Brand technology story"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Product collection and detail interfaces",
          "Responsive layouts for mobile, tablet, and desktop",
          "Brand and product-technology information",
          "Product imagery and shopping controls",
          "Product-focused storefront navigation"
        ]
      }
    }
  ],
  "live": "https://nannocare.com/"
} as const satisfies ProjectContent;
