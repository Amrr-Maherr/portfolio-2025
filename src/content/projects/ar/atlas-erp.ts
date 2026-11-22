import atlas0 from "../../../assets/images/projects/atlas-erp/atlas-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Atlas ERP",
  theme: "light",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "tanstack", "axios"],
  videoBorder: true,
  source: "https://github.com/Amrr-Maherr/Atlas-ERP",
  description:
    "لوحة تحكم حديثة لتخطيط موارد المؤسسات (ERP) لشركة تجزئة/جملة في مجال تقنية المعلومات، مبنية بـNext.js 16 App Router وReact 19 وبنية معيارية قائمة على الميزات.<br/><br/>تغطي ثمان وحدات أعمال مع صفحات قوائم وتفاصيل CRUD كاملة، وترقيم صفحات وفرز وبحث، وتصدير CSV/Excel/PDF، مدعومة بـTanStack Query وTanStack Table.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: atlas0,
        alt: "لوحة تحكم Atlas ERP",
        caption: "لوحة تحكم ERP للمؤسسات",
      },
    },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "ثمان وحدات أعمال: الفئات، المنتجات، العملاء، الموردون، الموظفون، المبيعات، أوامر الشراء، والمخزون",
          "واجهات CRUD كاملة مع ترقيم صفحات وفرز وبحث وشارات حالة",
          "تصدير CSV/Excel/PDF لجميع جداول الكيانات",
          "تحليلات لوحة التحكم مع رسوم بيانية ومؤشرات أداء",
          "بيانات أولية واقعية: 214 منتجًا و350 عميلًا و800 عملية بيع",
          "حالات تحميل وخطأ وفراغ متسقة عبر جميع الوحدات",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز النقاط التقنية",
        text: "مبني بـNext.js 16 وReact 19 وTypeScript وTailwind CSS v4 مع shadcn/ui. تُدار حالة الخادم بـTanStack Query v5، والجداول بـTanStack Table v8، وتُقدَّم البيانات عبر واجهة REST API وهمية ببيانات أولية مولدة.",
      },
    },
  ],
} as const satisfies ProjectContent;
