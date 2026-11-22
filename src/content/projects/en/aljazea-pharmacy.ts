import screen from "../../../assets/images/projects/aljazea-pharmacy/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Al Jazea Pharmacy",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://aljazeaonline.com/",
  "description": "An online pharmacy storefront with product search, category navigation, promotional collections, and shopping cart access.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        "alt": "Al Jazea Pharmacy",
        "caption": "Online pharmacy storefront"
      }
    }
  ]
} as const satisfies ProjectContent;
