import screen from "../../../assets/images/projects/leen-world/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Leen World",
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
        "alt": "Leen World",
        "caption": "Premium dates and gifts storefront"
      }
    }
  ]
} as const satisfies ProjectContent;
