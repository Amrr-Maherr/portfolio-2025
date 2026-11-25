import fresh0 from "../../../assets/images/projects/arasco/six-1.jpg";
import fresh1 from "../../../assets/images/projects/arasco/six-2.jpg";
import fresh2 from "../../../assets/images/projects/arasco/six-3.jpg";
import fresh3 from "../../../assets/images/projects/arasco/six-4.jpg";
import fresh4 from "../../../assets/images/projects/arasco/six-5.jpg";
import fresh5 from "../../../assets/images/projects/arasco/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "أراسكو - متجر المستلزمات الزراعية",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "متجر إلكتروني عربي على زد لشركة العمار الدولية للمستلزمات الزراعية. يضم أقسام وقاية المحاصيل ومبيدات الأعشاب والأسمدة مع قوائم المنتجات.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "واجهة الصفحة الرئيسية",caption: "واجهة الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "الأقسام",caption: "الأقسام",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "وقاية المحاصيل",caption: "وقاية المحاصيل",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "مبيدات الأعشاب",caption: "مبيدات الأعشاب",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "منتجات المبيدات",caption: "منتجات المبيدات",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "الأسمدة",caption: "الأسمدة",natural:true} }
],
  "live": "https://shop.al-emar.com"
} as const satisfies ProjectContent;
