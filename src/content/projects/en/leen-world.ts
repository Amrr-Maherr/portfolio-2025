import gallery3 from "../../../assets/images/projects/leen-world/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/leen-world/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/leen-world/gallery-2.jpg";
import screen from "../../../assets/images/projects/leen-world/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Leen World - Dates and Gifts Store",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://leenworld.com/",
  "description": "An online store for premium Saudi dates, maamoul, and gifts, with product categories and an Arabic storefront.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        natural: true,
        "alt": "Leen World",
        "caption": "Premium dates and gifts storefront"
      }
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "Store categories", caption: "Store categories", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "Dates collection", caption: "Dates collection", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "Product details and weight options", caption: "Product details and weight options", natural: true } }
  ]
} as const satisfies ProjectContent;
