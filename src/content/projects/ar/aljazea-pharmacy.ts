import screen from "../../../assets/images/projects/aljazea-pharmacy/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "صيدلية الجازع",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://aljazeaonline.com/",
  "description": "واجهة متجر إلكتروني لصيدلية، تضم البحث عن المنتجات وتصفح التصنيفات والعروض والوصول إلى سلة التسوق.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        "alt": "صيدلية الجازع",
        "caption": "متجر صيدلية إلكتروني"
      }
    }
  ]
} as const satisfies ProjectContent;
