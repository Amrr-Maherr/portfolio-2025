import view1 from "../../../assets/images/projects/sakib/view-1.jpg";
import view2 from "../../../assets/images/projects/sakib/view-2.jpg";
import view3 from "../../../assets/images/projects/sakib/view-3.jpg";
import view4 from "../../../assets/images/projects/sakib/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Sakb Perfumes",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce"
  ],
  "videoBorder": false,
  "description": "Storefront front-end work for the Sakb perfume brand on the Zid platform, done during work at NEOXERO.",
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
        "alt": "Perfume collection",
        "caption": "Perfume collection"
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
        "alt": "Customer reviews",
        "caption": "Customer reviews"
      }
    }
  ],
  "live": "https://sakbperfume.com/"
} as const satisfies ProjectContent;
