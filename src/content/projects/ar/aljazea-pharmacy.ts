import fresh0 from "../../../assets/images/projects/aljazea-pharmacy/six-1.jpg";
import fresh1 from "../../../assets/images/projects/aljazea-pharmacy/six-2.jpg";
import fresh2 from "../../../assets/images/projects/aljazea-pharmacy/six-3.jpg";
import fresh3 from "../../../assets/images/projects/aljazea-pharmacy/six-4.jpg";
import fresh4 from "../../../assets/images/projects/aljazea-pharmacy/six-5.jpg";
import fresh5 from "../../../assets/images/projects/aljazea-pharmacy/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "صيدلية الجازع - متجر إلكتروني",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://aljazeaonline.com/",
  "description": "واجهة متجر إلكتروني لصيدلية، تضم البحث عن المنتجات وتصفح التصنيفات والعروض والوصول إلى سلة التسوق.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية للمتجر",caption: "الصفحة الرئيسية للمتجر",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "المنتجات الأكثر مبيعاً",caption: "المنتجات الأكثر مبيعاً",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بانر المنتجات الترويجي",caption: "بانر المنتجات الترويجي",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "واجهة تفاصيل المنتج",caption: "واجهة تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "لوحة معلومات الدفع والخدمات",caption: "لوحة معلومات الدفع والخدمات",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "كتالوج المنتجات",caption: "كتالوج المنتجات",natural:true} }
]
} as const satisfies ProjectContent;
