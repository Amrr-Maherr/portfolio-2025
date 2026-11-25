import shot1 from "../../../assets/images/projects/webmonster/webmonster-1.jpg";
import shot2 from "../../../assets/images/projects/webmonster/webmonster-2.jpg";
import shot3 from "../../../assets/images/projects/webmonster/webmonster-3.jpg";
import shot4 from "../../../assets/images/projects/webmonster/webmonster-4.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Box&Buy - متجر إلكتروني (WebMonster)",
  theme: "light",
  tags: ["react", "javascript", "redux", "bootstrap", "axios"],
  videoBorder: false,
  live: "https://web-monster-e-commerce.vercel.app",
  source: "https://github.com/Amrr-Maherr/WebMonster-e-commerce",
  description:
    "متجر إلكتروني كامل مبني بـ React 18 (Create React App): كتالوج منتجات مع بحث وفلترة وصفحات تفاصيل المنتج وتدفقات تسجيل الدخول والحساب، بالإضافة إلى صفحات عن المتجر والتواصل، مدعوم بواجهة REST API بـ Node/Express. ملاحظة: الواجهة البرمجية المستضافة متوقفة حاليًا، لذا قد لا تظهر بيانات المنتجات في الديمو.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "صفحة كل المنتجات", caption: "صفحة كل المنتجات", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "صفحة عن المتجر", caption: "صفحة عن المتجر", natural: true } },
    { type: "media", props: { type: "image", src: shot3, alt: "صفحة التواصل مع النموذج", caption: "صفحة التواصل مع النموذج", natural: true } },
    { type: "media", props: { type: "image", src: shot4, alt: "صفحة تسجيل الدخول", caption: "صفحة تسجيل الدخول", natural: true } },
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "كتالوج منتجات مع بحث وفلترة بالتصنيفات",
          "صفحات تفاصيل المنتج من واجهة REST API",
          "تدفقات تسجيل الدخول والحساب",
          "صفحات عن المتجر والتواصل مع نموذج تواصل",
          "تصميم متجاوب للشاشات الكبيرة والموبايل",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "مبني بـ React 18 على Create React App، مع واجهة REST API منفصلة بـ Node/Express لبيانات المنتجات. منشور على Vercel (الواجهة) وRailway (الواجهة البرمجية).",
      },
    },
  ],
} as const satisfies ProjectContent;
