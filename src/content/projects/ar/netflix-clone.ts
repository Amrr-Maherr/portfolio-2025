import netflix0 from "../../../assets/images/projects/netflix-clone/netflix-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Netflix Clone",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind", "tanstack", "redux", "stripe", "pwa", "axios"],
  videoBorder: false,
  live: "https://movies-app-pi-tawny.vercel.app",
  description:
    "منصة بث متكاملة مبنية مع Next.js SSR، تدمج أكثر من 12 نقطة اتصال من TMDb API للأفلام والمسلسلات وبيانات الممثلين.<br/><br/>تتميز بإدارة الحالة العالمية مع Redux Toolkit، وتخزين مؤقت لبيانات الخادم مع TanStack Query، وتدفق اشتراك متعدد الخطوات باستخدام Stripe Elements، ودعم PWA مع الوضع الداكن.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: netflix0,
        alt: "واجهة Netflix Clone",
        caption: "منصة بث مع SSR",
      },
    },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "تصيير من جانب الخادم باستخدام Next.js لتحسين SEO والأداء",
          "أكثر من 12 نقطة اتصال من TMDb API لبيانات وسائط شاملة",
          "إدارة الحالة العالمية مع Redux Toolkit",
          "تخزين مؤقت لبيانات الخادم مع TanStack Query",
          "تدفق اشتراك متعدد الخطوات باستخدام Stripe Elements",
          "دعم PWA مع إمكانيات العمل دون اتصال والوضع الداكن",
          "تخطيطات سريعة الاستجابة تركز على إمكانية الوصول عبر جميع الأجهزة",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز الجوانب التقنية",
        text: "بني باستخدام React 19 و TypeScript و Next.js و Tailwind CSS v4. تتبع الهندسة أنماط المكونات القابلة للتوسع، مما يضمن قابلية الصيانة والأداء عبر التطبيق بأكمله.",
      },
    },
  ],
} as const satisfies ProjectContent;
