import fresh0 from "../../../assets/images/projects/youtube-clone/six-1.jpg";
import fresh1 from "../../../assets/images/projects/youtube-clone/six-2.jpg";
import fresh2 from "../../../assets/images/projects/youtube-clone/six-3.jpg";
import fresh3 from "../../../assets/images/projects/youtube-clone/six-4.jpg";
import fresh4 from "../../../assets/images/projects/youtube-clone/six-5.jpg";
import fresh5 from "../../../assets/images/projects/youtube-clone/six-6.jpg";

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
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "بحث في الوقت الفعلي مع استعلامات منزوعة الارتداد",
          "تصفح القنوات وواجهات صفحات المشاهدة",
          "إدارة الحالة مع Redux Toolkit",
          "تحسين الأداء من خلال التخزين المؤقت",
          "تصميم سريع الاستجابة لجميع أحجام الشاشات",
          "منشور على Vercel",
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
{ type: "media", props: {type: "image",src: fresh0,alt: "شبكة الفيديو بالصفحة الرئيسية",caption: "شبكة الفيديو بالصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "المزيد من فيديوهات الصفحة الرئيسية",caption: "المزيد من فيديوهات الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "شبكة استكشاف Shorts",caption: "شبكة استكشاف Shorts",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "واجهة صفحة المشاهدة دون التحقق من التشغيل",caption: "واجهة صفحة المشاهدة دون التحقق من التشغيل",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "قسم التعليقات",caption: "قسم التعليقات",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "المزيد من بطاقات Shorts",caption: "المزيد من بطاقات Shorts",natural:true} }
],
} as const satisfies ProjectContent;
