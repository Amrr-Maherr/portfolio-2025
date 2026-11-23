import gallery3 from "../../../assets/images/projects/on-ecommerce/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/on-ecommerce/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/on-ecommerce/gallery-2.jpg";
import on0 from "../../../assets/images/projects/on-ecommerce/on-0.jpg";

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
      type: "media",
      props: {
        type: "image",
        src: on0,
        natural: true,
        alt: "منصة On للتجارة الإلكترونية",
        caption: "منصة تجارة إلكترونية رياضية",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "قسم مجموعة الجري", caption: "قسم مجموعة الجري", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "صفحة كتالوج المنتجات", caption: "صفحة كتالوج المنتجات", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "شبكة المنتجات وتصفية الأقسام", caption: "شبكة المنتجات وتصفية الأقسام", natural: true } },
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
  ],
} as const satisfies ProjectContent;
