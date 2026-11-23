import fresh0 from "../../../assets/images/projects/alsaif/six-1.jpg";
import fresh1 from "../../../assets/images/projects/alsaif/six-2.jpg";
import fresh2 from "../../../assets/images/projects/alsaif/six-3.jpg";
import fresh3 from "../../../assets/images/projects/alsaif/six-4.jpg";
import fresh4 from "../../../assets/images/projects/alsaif/six-5.jpg";
import fresh5 from "../../../assets/images/projects/alsaif/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "متجر السيف للتوكيلات التجارية",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر إلكتروني عربية للسيف للتوكيلات التجارية، تعرض الأجهزة المنزلية وأدوات الطهي والأواني المنزلية والدلال والأباريق وقدور الضغط. تجمع الواجهة بين أقسام ترويجية في الصفحة الرئيسية وتصفح الأقسام وقوائم المنتجات مع أدوات الفرز والتصفية وصفحات تفاصيل تتضمن معارض صور وخيارات المنتجات.",
  "live": "https://alsaifco.sa/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية للمتجر",caption: "الصفحة الرئيسية للمتجر",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "المنتجات الأكثر مبيعاً",caption: "المنتجات الأكثر مبيعاً",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بانر الأجهزة الكهربائية",caption: "بانر الأجهزة الكهربائية",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "مجموعة أواني الطهي",caption: "مجموعة أواني الطهي",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "تفاصيل منتج التدفئة",caption: "تفاصيل منتج التدفئة",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "معرض المنتج ومعلومات الدفع المعروضة",caption: "معرض المنتج ومعلومات الدفع المعروضة",natural:true} }
]
} as const satisfies ProjectContent;
