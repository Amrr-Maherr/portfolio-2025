import gallery3 from "../../../assets/images/projects/youtube-clone/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/youtube-clone/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/youtube-clone/gallery-2.jpg";
import youtube0 from "../../../assets/images/projects/youtube-clone/youtube-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "YouTube Clone - بحث الفيديو والقنوات",
  theme: "light",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "redux", "axios"],
  videoBorder: true,
  live: "https://youtube-omega-gilt-35.vercel.app",
  source: "https://github.com/Amrr-Maherr/Youtube",
  description:
    "تطبيق لتصفح الفيديو مبني باستخدام React وTypeScript، يضم نتائج البحث وصفحات القنوات وتفاصيل الفيديو ومقاطع ذات صلة. يستخدم TanStack Query لجلب البيانات وRedux Toolkit لإدارة حالة التطبيق، مع واجهة متجاوبة مبنية باستخدام Tailwind CSS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: youtube0,
        natural: true,
        alt: "منصة فيديو YouTube Clone",
        caption: "منصة بث فيديو",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "صفحة الفيديو والمقاطع ذات الصلة", caption: "صفحة الفيديو والمقاطع ذات الصلة", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "ملف القناة وشبكة الفيديوهات", caption: "ملف القناة وشبكة الفيديوهات", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "نتائج البحث عن الفيديوهات", caption: "نتائج البحث عن الفيديوهات", natural: true } },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "بحث في الوقت الفعلي مع استعلامات منزوعة الارتداد",
          "تصفح القنوات وتشغيل الفيديو",
          "إدارة الحالة مع Redux Toolkit",
          "تحسين الأداء من خلال التخزين المؤقت",
          "تصميم سريع الاستجابة لجميع أحجام الشاشات",
          "سير عمل نشر جاهز للإنتاج على Vercel",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز الجوانب التقنية",
        text: "بني باستخدام React و TypeScript و Vite و Tailwind CSS. يستخدم TanStack Query للتخزين المؤقت لبيانات الخادم و Redux Toolkit لإدارة الحالة العامة، منشور على Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
