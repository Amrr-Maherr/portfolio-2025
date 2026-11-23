import fresh0 from "../../../assets/images/projects/inin-sport/six-1.jpg";
import fresh1 from "../../../assets/images/projects/inin-sport/six-2.jpg";
import gallery3 from "../../../assets/images/projects/inin-sport/gallery-3.jpg";
import gallery2 from "../../../assets/images/projects/inin-sport/gallery-2.jpg";
import gallery1 from "../../../assets/images/projects/inin-sport/gallery-1.jpg";
import screen from "../../../assets/images/projects/inin-sport/screen-0.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إن إن سبورت - متجر ملابس رياضية",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://ininsport.com/",
  "description": "متجر إلكتروني للملابس الرياضية، يضم مجموعات للتمارين والبادل والجري وقوائم منتجات وخيارات للواجهة بالإنجليزية والعربية.",
  "components": [
{
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        natural: true,
        "alt": "إن إن سبورت",
        "caption": "متجر ملابس رياضية"
      }
    },
{ type: "media", props: { type: "image", src: gallery1, alt: "مجموعة التمارين وفلاتر المنتجات", caption: "مجموعة التمارين وفلاتر المنتجات", natural: true } },
{ type: "media", props: { type: "image", src: gallery2, alt: "تفاصيل المنتج وخيارات المقاس", caption: "تفاصيل المنتج وخيارات المقاس", natural: true } },
{ type: "media", props: { type: "image", src: gallery3, alt: "قسم التسوق حسب النشاط", caption: "قسم التسوق حسب النشاط", natural: true } },
{ type: "media", props: {type: "image",src: fresh0,alt: "مجموعة البادل والتصفية",caption: "مجموعة البادل والتصفية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "مجموعة الجري والفلاتر النشطة",caption: "مجموعة الجري والفلاتر النشطة",natural:true} }
]
} as const satisfies ProjectContent;
