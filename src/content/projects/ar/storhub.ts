import storhub0 from "../../../assets/images/projects/storhub/storhub-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "StorHub",
  theme: "light",
  tags: ["next", "react", "typescript", "tailwind", "shadcn", "tanstack"],
  videoBorder: true,
  description:
    "نظام إدارة لوحة تحكم كامل مع ترقيم صفحات من جانب الخادم وجلب بيانات محسّن.<br/><br/>بني بجداول ونماذج ومكونات لوحة تحكم قابلة لإعادة الاستخدام وسريعة الاستجابة باستخدام shadcn/ui، وفقًا لأنماط معمارية قابلة للتوسع للتوسع السريع في الوحدات.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: storhub0,
        alt: "لوحة تحكم StorHub",
        caption: "نظام إدارة لوحة القيادة",
      },
    },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "عمليات CRUD كاملة مع ترقيم صفحات من جانب الخادم",
          "جلب بيانات محسّن مع TanStack Query",
          "جداول ونماذج سريعة الاستجابة وسهلة الوصول",
          "مكونات لوحة تحكم قابلة لإعادة الاستخدام باستخدام shadcn/ui",
          "هندسة قابلة للتوسع تسمح بالتوسع السريع في الوحدات",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز الجوانب التقنية",
        text: "طور باستخدام Next.js و React و TypeScript و Tailwind CSS. تتبع مكتبة المكونات أنماط shadcn/ui لعناصر واجهة مستخدم متسقة وسهلة الوصول عبر جميع وحدات لوحة التحكم.",
      },
    },
  ],
} as const satisfies ProjectContent;
