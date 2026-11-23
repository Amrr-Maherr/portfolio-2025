import view1 from "../../../assets/images/projects/senor/view-1.jpg";
import view2 from "../../../assets/images/projects/senor/view-2.jpg";
import view3 from "../../../assets/images/projects/senor/view-3.jpg";
import view4 from "../../../assets/images/projects/senor/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Senor - Pet Storefront Theme (Zid)",
  "theme": "light",
  "live": "https://neoxero03.zidthemestore.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A pet-storefront theme on Zid with an Arabic right-to-left interface, category navigation, product grids, price filters, and product detail pages. The demo presents food and care products for dogs, cats, and fish, with product images, pricing, stock information, and quantity controls.",
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
        "alt": "Featured products",
        "caption": "Featured products"
      }
    }
  ]
} as const satisfies ProjectContent;
