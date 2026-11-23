import fresh0 from "../../../assets/images/projects/leen-world/six-1.jpg";
import fresh1 from "../../../assets/images/projects/leen-world/six-2.jpg";
import fresh2 from "../../../assets/images/projects/leen-world/six-3.jpg";
import fresh3 from "../../../assets/images/projects/leen-world/six-4.jpg";
import fresh4 from "../../../assets/images/projects/leen-world/six-5.jpg";
import fresh5 from "../../../assets/images/projects/leen-world/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "لين - متجر التمور والهدايا",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://leenworld.com/",
  "description": "متجر إلكتروني للتمور السعودية الفاخرة والمعمول والهدايا، مع تصنيفات للمنتجات وواجهة عربية.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية للمتجر",caption: "الصفحة الرئيسية للمتجر",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "أقسام المنتجات",caption: "أقسام المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بطاقات المنتجات المختارة",caption: "بطاقات المنتجات المختارة",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "تفاصيل تمر الصقعي",caption: "تفاصيل تمر الصقعي",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "قوائم معلومات المنتج",caption: "قوائم معلومات المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "أقسام المنتجات المرتبطة",caption: "أقسام المنتجات المرتبطة",natural:true} }
]
} as const satisfies ProjectContent;
