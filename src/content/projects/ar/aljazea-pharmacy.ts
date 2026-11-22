import gallery3 from "../../../assets/images/projects/aljazea-pharmacy/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/aljazea-pharmacy/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/aljazea-pharmacy/gallery-2.jpg";
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
        natural: true,
        "alt": "صيدلية الجازع",
        "caption": "متجر صيدلية إلكتروني"
      }
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "كتالوج المنتجات", caption: "كتالوج المنتجات", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "واجهة تفاصيل المنتج", caption: "واجهة تفاصيل المنتج", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "منتجات وعروض مختارة", caption: "منتجات وعروض مختارة", natural: true } }
  ]
} as const satisfies ProjectContent;
