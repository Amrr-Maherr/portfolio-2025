import fresh0 from "../../../assets/images/projects/sukarah/six-1.jpg";
import fresh1 from "../../../assets/images/projects/sukarah/six-2.jpg";
import fresh2 from "../../../assets/images/projects/sukarah/six-3.jpg";
import fresh3 from "../../../assets/images/projects/sukarah/six-4.jpg";
import fresh4 from "../../../assets/images/projects/sukarah/six-5.jpg";
import fresh5 from "../../../assets/images/projects/sukarah/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "سُكّرة - متجر مستحضرات تجميل",
  "theme": "light",
  "tags": [],
  "description": "متجر إلكتروني لسُكّرة، علامة تجميل سعودية تقدم منتجات للحواجب والشفاه ومجموعات مختارة.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية",caption: "الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "بانر منتجات الحواجب",caption: "بانر منتجات الحواجب",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "التسوق حسب الفئة",caption: "التسوق حسب الفئة",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "الأكثر مبيعًا والإضافة للسلة",caption: "الأكثر مبيعًا والإضافة للسلة",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "تفاصيل المنتج",caption: "تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "خدمة العملاء",caption: "خدمة العملاء",natural:true} }
],
  "live": "https://sukarah.com/"
} as const satisfies ProjectContent;
