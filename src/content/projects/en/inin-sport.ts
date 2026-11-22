import screen from "../../../assets/images/projects/inin-sport/screen-0.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "ININ Sport",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://ininsport.com/",
  "description": "A sportswear online store with training, padel, and running collections, product listings, and English and Arabic storefront options.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        "alt": "ININ Sport",
        "caption": "Sportswear and activewear storefront"
      }
    }
  ]
} as const satisfies ProjectContent;
