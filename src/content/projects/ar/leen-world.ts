import gallery3 from "../../../assets/images/projects/leen-world/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/leen-world/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/leen-world/gallery-2.jpg";
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
        natural: true,
        "alt": "لين",
        "caption": "متجر تمور وهدايا فاخرة"
      }
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "تصنيفات المتجر", caption: "تصنيفات المتجر", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "مجموعة التمور", caption: "مجموعة التمور", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "تفاصيل المنتج وخيارات الوزن", caption: "تفاصيل المنتج وخيارات الوزن", natural: true } }
  ]
} as const satisfies ProjectContent;
