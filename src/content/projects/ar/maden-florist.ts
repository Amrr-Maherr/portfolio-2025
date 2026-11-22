import gallery3 from "../../../assets/images/projects/maden-florist/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/maden-florist/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/maden-florist/gallery-2.jpg";
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
        natural: true,
        "alt": "مادن فلورست",
        "caption": "متجر ورود وهدايا"
      }
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "الماركات والمناسبات الخاصة", caption: "الماركات والمناسبات الخاصة", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "تفاصيل منتج تنسيق الورد", caption: "تفاصيل منتج تنسيق الورد", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "مجموعة فازات الورد والتصفية", caption: "مجموعة فازات الورد والتصفية", natural: true } }
  ]
} as const satisfies ProjectContent;
