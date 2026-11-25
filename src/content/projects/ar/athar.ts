import fresh0 from "../../../assets/images/projects/athar/six-1.jpg";
import fresh1 from "../../../assets/images/projects/athar/six-2.jpg";
import fresh2 from "../../../assets/images/projects/athar/six-3.jpg";
import fresh3 from "../../../assets/images/projects/athar/six-4.jpg";
import fresh4 from "../../../assets/images/projects/athar/six-5.jpg";
import fresh5 from "../../../assets/images/projects/athar/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "أثر - موقع براند للتدريب والاستشارات",
  "theme": "light",
  "tags": [
    "react",
    "javascript",
    "bootstrap",
    "framer",
    "rtl"
  ],
  "videoBorder": false,
  "description": "موقع عربي متعدد الصفحات لبراند أثر للتدريب والاستشارات. مبني بـ React 19 وReact Router 7 ويغطي صفحات البرامج التدريبية والشهادات وباقات الأعمال وصفحات من نحن والتواصل والتسجيل، باستخدام styled-components مع Bootstrap 5 وأنيميشن Framer Motion وكاروسيل react-slick وفورمات تعمل بـ EmailJS.",
  "components": [
{
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "موقع متعدد الصفحات بـ React 19 وReact Router 7",
          "صفحات كتالوج البرامج التدريبية والشهادات",
          "فورمات التواصل والتسجيل عبر EmailJS",
          "أقسام متحركة بـ Framer Motion وكاروسيل react-slick",
          "تصميم عربي RTL بالكامل"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "واجهة الصفحة الرئيسية",caption: "واجهة الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "صفحة من نحن",caption: "صفحة من نحن",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "كتالوج الشهادات الاحترافية",caption: "كتالوج الشهادات الاحترافية",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "باقة ذكاء الأعمال",caption: "باقة ذكاء الأعمال",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "فورم التواصل",caption: "فورم التواصل",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "باقات الأثر الذكي",caption: "باقات الأثر الذكي",natural:true} }
],
  "source": "https://github.com/Amrr-Maherr/ether-landign-page"
} as const satisfies ProjectContent;
