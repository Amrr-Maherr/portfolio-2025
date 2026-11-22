import screen from "../../../assets/images/projects/maden-florist/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "مادن فلورست",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://madenflorist.com/",
  "description": "متجر إلكتروني للورود والهدايا، يضم باقات الورد والفازات وتنسيقات الطاولات، مع تصفح المنتجات وسلة تسوق.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        "alt": "مادن فلورست",
        "caption": "متجر ورود وهدايا"
      }
    }
  ]
} as const satisfies ProjectContent;
