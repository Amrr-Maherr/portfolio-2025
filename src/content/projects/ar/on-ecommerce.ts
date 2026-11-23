import fresh0 from "../../../assets/images/projects/on-ecommerce/six-1.jpg";
import fresh1 from "../../../assets/images/projects/on-ecommerce/six-2.jpg";
import fresh2 from "../../../assets/images/projects/on-ecommerce/six-3.jpg";
import fresh3 from "../../../assets/images/projects/on-ecommerce/six-4.jpg";
import fresh4 from "../../../assets/images/projects/on-ecommerce/six-5.jpg";
import fresh5 from "../../../assets/images/projects/on-ecommerce/six-6.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "On - متجر ملابس وأحذية رياضية",
  theme: "dark",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "zod", "framer", "swiper", "reacthookform"],
  videoBorder: false,
  live: "https://on-pied.vercel.app",
  source: "https://github.com/Amrr-Maherr/On",
  description:
    "واجهة متجر للملابس والأحذية الرياضية مبنية باستخدام React وTypeScript. تجمع بين تصفح المجموعات وفلاتر المنتجات وصفحات التفاصيل وواجهات السلة والمفضلة ونماذج تسجيل الدخول، مع دعم الوضع الداكن.",
  components: [
{
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "نظام تصميم وحشي مخصص مع الوضع الداكن",
          "تصفية وبحث متقدمين في المنتجات",
          "استمرارية سلة التسوق وقائمة الرغبات عبر الجلسات",
          "تدفقات المصادقة مع React Hook Form والتحقق من Zod",
          "تحميل بطيء للصور وتحسين الرسوم المتحركة",
          "تخطيطات سريعة الاستجابة تعطي الأولوية للجوال مع دوارات Swiper.js",
        ],
      },
    },
{
      type: "text",
      props: {
        title: "أبرز الجوانب التقنية",
        text: "طور باستخدام React 19 و TypeScript و Vite و Tailwind CSS v4. يستخدم TanStack Query لإدارة البيانات و Framer Motion لرسوم متحركة سلسة طوال تجربة التسوق.",
      },
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "بانر الصفحة الرئيسية",caption: "بانر الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "بانر المجموعة بالصفحة الرئيسية",caption: "بانر المجموعة بالصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "صفحة كتالوج المنتجات",caption: "صفحة كتالوج المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "صفحة العلامات التجارية",caption: "صفحة العلامات التجارية",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "واجهة تفاصيل المنتج",caption: "واجهة تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "معرض المنتج ولوحة المخزون",caption: "معرض المنتج ولوحة المخزون",natural:true} }
],
} as const satisfies ProjectContent;
