import shot1 from "../../../assets/images/projects/cosmoscope/cosmoscope-1.jpg";
import shot2 from "../../../assets/images/projects/cosmoscope/cosmoscope-2.jpg";
import shot3 from "../../../assets/images/projects/cosmoscope/cosmoscope-3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "CosmoScope - مستكشف بيانات ناسا",
  theme: "dark",
  tags: ["next", "react", "typescript", "tailwind", "tanstack"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/cosmoscope",
  description:
    "تطبيق ويب لاستكشاف الفضاء مبني بـ Next.js 15 وReact 19 يجمع بيانات ناسا المفتوحة في مكان واحد: أرشيف صورة اليوم الفلكية (APOD) وتتبع الأجرام القريبة من الأرض وصور مركبات المريخ وبحث في مكتبة صور الفضاء. واجهة غامقة متحركة بـ Tailwind CSS وRadix UI وTanStack Query وFramer Motion. يعرض المعرض نسخة إنتاج محلية لأن نشر Vercel الأصلي متوقف.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "الصفحة الرئيسية", caption: "الصفحة الرئيسية (نسخة إنتاج محلية)", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "قسم صورة اليوم", caption: "قسم صورة اليوم الفلكية", natural: true } },
    { type: "media", props: { type: "image", src: shot3, alt: "صفحة البحث في الصور", caption: "صفحة البحث في مكتبة صور الفضاء", natural: true } },
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "أرشيف صورة اليوم الفلكية مع التصفح بالتاريخ",
          "تتبع الأجرام القريبة من الأرض من بيانات ناسا",
          "مستكشف صور مركبات المريخ",
          "بحث في مكتبة وسائط ناسا",
          "واجهة غامقة متحركة بانتقالات Framer Motion",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "مبني بـ Next.js 15 (App Router) وReact 19 وTypeScript. يستخدم TanStack Query للتخزين المؤقت أمام واجهات ناسا العامة، وTailwind CSS مع مكونات Radix UI، وFramer Motion للحركة.",
      },
    },
  ],
} as const satisfies ProjectContent;
