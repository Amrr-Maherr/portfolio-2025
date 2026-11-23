import view1 from "../../../assets/images/projects/infinity-sports/view-1.jpg";
import view2 from "../../../assets/images/projects/infinity-sports/view-2.jpg";
import view3 from "../../../assets/images/projects/infinity-sports/view-3.jpg";
import view4 from "../../../assets/images/projects/infinity-sports/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Infinity Sports - Sportswear Storefront (Zid)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic right-to-left storefront on Zid for sportswear, footwear, bags, and fitness accessories. It includes category navigation, product listings with price filters, product image galleries, product details, and cart and wishlist controls.",
  "live": "https://arpasv.zid.store/",
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
        "alt": "All products",
        "caption": "All products",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Product details",
        "caption": "Product details",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Sportswear category",
        "caption": "Sportswear category",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
