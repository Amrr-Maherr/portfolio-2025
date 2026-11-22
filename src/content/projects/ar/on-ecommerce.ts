import on0 from "../../../assets/images/projects/on-ecommerce/on-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "On - Athletic eCommerce",
  theme: "dark",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "zod", "framer", "swiper", "reacthookform"],
  videoBorder: false,
  live: "https://on-pied.vercel.app",
  source: "https://github.com/Amrr-Maherr/On",
  description:
    "منصة تجارة إلكترونية بجودة إنتاجية مع نظام تصميم وحشي مخصص ودعم كامل للوضع الداكن.<br/><br/>تتميز بتصفية منتجات متقدمة، واستمرارية سلة التسوق وقائمة الرغبات، وتدفقات المصادقة مع React Hook Form والتحقق من Zod، وتحسين الأداء من خلال التحميل البطيء وتحسين الرسوم المتحركة.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: on0,
        alt: "منصة On للتجارة الإلكترونية",
        caption: "منصة تجارة إلكترونية رياضية",
      },
    },
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
