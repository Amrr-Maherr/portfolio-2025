import fresh0 from "../../../assets/images/projects/education-market/six-1.jpg";
import fresh1 from "../../../assets/images/projects/education-market/six-2.jpg";
import fresh2 from "../../../assets/images/projects/education-market/six-3.jpg";
import fresh3 from "../../../assets/images/projects/education-market/six-4.jpg";
import fresh4 from "../../../assets/images/projects/education-market/six-5.jpg";
import fresh5 from "../../../assets/images/projects/education-market/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "إديوكيشن ماركت - متجر مستلزمات مدرسية (زد)",
  "theme": "light",
  "live": "https://educationmarket.sa/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "واجهة متجر إلكتروني عربية على منصة زد للزي المدرسي والقرطاسية والحقائب وأدوات الفنون وملحقات الكمبيوتر. يتضمن المتجر تصفحاً حسب الأقسام، وشبكات منتجات، وصفحات تفاصيل تعرض الصور والأسعار والخيارات مثل مقاسات الزي المدرسي.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية",caption: "الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "فئات الزي المدرسي",caption: "فئات الزي المدرسي",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "شبكة المنتجات وتصفية السعر",caption: "شبكة المنتجات وتصفية السعر",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "معرض المنتج واختيار المقاس",caption: "معرض المنتج واختيار المقاس",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "تبويبات وصف المنتج",caption: "تبويبات وصف المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "جميع المنتجات والفلاتر",caption: "جميع المنتجات والفلاتر",natural:true} }
]
} as const satisfies ProjectContent;
