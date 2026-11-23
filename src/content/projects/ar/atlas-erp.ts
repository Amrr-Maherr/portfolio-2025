import currentLogin from "../../../assets/images/projects/atlas-erp/current-login.jpg";
import gallery3 from "../../../assets/images/projects/atlas-erp/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/atlas-erp/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/atlas-erp/gallery-2.jpg";
import atlas0 from "../../../assets/images/projects/atlas-erp/atlas-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Atlas ERP",
  theme: "light",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "tanstack", "axios"],
  videoBorder: true,
  source: "https://github.com/Amrr-Maherr/Atlas-ERP",
  description: "تطبيق واجهة أمامية لتخطيط موارد المؤسسات لأعمال بيع وتوزيع معدات تقنية المعلومات، مبني باستخدام Next.js 16 وReact 19 وTypeScript. ينظم المنتجات والعملاء والموردين والموظفين والمبيعات وأوامر الشراء والأقسام والمخزون ضمن بنية قائمة على الميزات. يتضمن الكود الحالي تسجيل دخول متصلاً بواجهة API وجداول قابلة لإعادة الاستخدام وترقيم صفحات وبحثاً وفرزاً ونماذج ورسومات بيانية وأدوات تصدير. يعرض المعرض شاشة تسجيل الدخول الحالية للنسخة المستضافة، مع لقطات من نسخة محلية سابقة ببيانات تجريبية.",
  components: [
    { type: "media", props: { type: "image", src: currentLogin, alt: "شاشة تسجيل الدخول الحالية للنسخة المستضافة", caption: "شاشة تسجيل الدخول الحالية للنسخة المستضافة", natural: true } },
    {
      type: "media",
      props: {
        type: "image",
        src: atlas0,
        natural: true,
        alt: "إدارة المنتجات، نسخة محلية سابقة ببيانات تجريبية",
        caption: "إدارة المنتجات، نسخة محلية سابقة ببيانات تجريبية",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "إدارة العملاء، نسخة محلية سابقة ببيانات تجريبية", caption: "إدارة العملاء، نسخة محلية سابقة ببيانات تجريبية", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "إدارة الموردين، نسخة محلية سابقة ببيانات تجريبية", caption: "إدارة الموردين، نسخة محلية سابقة ببيانات تجريبية", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "إدارة المخزون، نسخة محلية سابقة ببيانات تجريبية", caption: "إدارة المخزون، نسخة محلية سابقة ببيانات تجريبية", natural: true } },
  ],
} as const satisfies ProjectContent;
