import screen from "../../../assets/images/projects/leen-world/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "لين",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://leenworld.com/",
  "description": "متجر إلكتروني للتمور السعودية الفاخرة والمعمول والهدايا، مع تصنيفات للمنتجات وواجهة عربية.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        "alt": "لين",
        "caption": "متجر تمور وهدايا فاخرة"
      }
    }
  ]
} as const satisfies ProjectContent;
