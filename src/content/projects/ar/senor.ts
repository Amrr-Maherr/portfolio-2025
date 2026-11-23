import fresh0 from "../../../assets/images/projects/senor/six-1.jpg";
import fresh1 from "../../../assets/images/projects/senor/six-2.jpg";
import fresh2 from "../../../assets/images/projects/senor/six-3.jpg";
import fresh3 from "../../../assets/images/projects/senor/six-4.jpg";
import fresh4 from "../../../assets/images/projects/senor/six-5.jpg";
import fresh5 from "../../../assets/images/projects/senor/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "سينور - قالب متجر للحيوانات الأليفة (زد)",
  "theme": "light",
  "live": "https://neoxero03.zidthemestore.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "قالب واجهة متجر للحيوانات الأليفة على منصة زد، بواجهة عربية من اليمين إلى اليسار، وتنقل بين الأقسام، وشبكات منتجات، وفلاتر أسعار، وصفحات تفاصيل المنتجات. يعرض المتجر التجريبي منتجات طعام وعناية للكلاب والقطط والأسماك، مع صور المنتجات والأسعار ومعلومات المخزون وعناصر التحكم في الكمية.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية للقالب التجريبي",caption: "الصفحة الرئيسية للقالب التجريبي",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "المنتجات الأكثر مبيعاً",caption: "المنتجات الأكثر مبيعاً",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بانرات الأقسام الترويجية",caption: "بانرات الأقسام الترويجية",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "واجهة تفاصيل المنتج",caption: "واجهة تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "وصف المنتج ومعلومات الدفع المعروضة",caption: "وصف المنتج ومعلومات الدفع المعروضة",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "الجزء السفلي من الكتالوج",caption: "الجزء السفلي من الكتالوج",natural:true} }
]
} as const satisfies ProjectContent;
