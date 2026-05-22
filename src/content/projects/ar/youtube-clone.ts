import youtube0 from "../../../assets/images/projects/youtube-clone/youtube-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "YouTube Clone",
  theme: "light",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "redux", "axios"],
  videoBorder: true,
  live: "https://youtube-omega-gilt-35.vercel.app",
  description:
    "منصة بث فيديو سريعة الاستجابة مع بحث في الوقت الفعلي، وتصفح القنوات، وميزات تشغيل الفيديو.<br/><br/>تدير حالة التطبيق باستخدام Redux Toolkit وتحسن أداء التصيير من خلال التخزين المؤقت مع TanStack Query لتجربة مستخدم سلسة.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: youtube0,
        alt: "منصة فيديو YouTube Clone",
        caption: "منصة بث فيديو",
      },
    },
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
