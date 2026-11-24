import local0 from "../../../assets/images/projects/bazar/local-0.jpg";
import local1 from "../../../assets/images/projects/bazar/local-1.jpg";
import local2 from "../../../assets/images/projects/bazar/local-2.jpg";
import local3 from "../../../assets/images/projects/bazar/local-3.jpg";
import local4 from "../../../assets/images/projects/bazar/local-4.jpg";
import local5 from "../../../assets/images/projects/bazar/local-5.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Bazar - تطبيق مكتبة كتب",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "firebase", "tanstack", "axios"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Bazar",
  description:
    "تطبيق مكتبة كتب مبني بـReact Native وExpo وTypeScript. تصفح الكتب الرائجة والإصدارات الجديدة من OpenLibrary API، واستكشف فئات مختارة، وافتح صفحات تفاصيل غنية لكل كتاب، مع مصادقة Firebase بالبريد وكلمة المرور ووضع الضيف. يعرض المعرض معاينات ويب محلية لشاشات التطبيق.",
  components: [
    { type: "media", props: { type: "image", src: local0, alt: "تسجيل الدخول، معاينة ويب محلية للتطبيق", caption: "تسجيل الدخول، معاينة ويب محلية للتطبيق", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local1, alt: "إنشاء حساب، معاينة ويب محلية للتطبيق", caption: "إنشاء حساب، معاينة ويب محلية للتطبيق", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local2, alt: "الرئيسية مع شريط الكتب الرائجة، معاينة ويب محلية", caption: "الرئيسية مع شريط الكتب الرائجة، معاينة ويب محلية", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local3, alt: "شبكة كتب الفئة، معاينة ويب محلية", caption: "شبكة كتب الفئة، معاينة ويب محلية", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local4, alt: "تفاصيل الكتاب، معاينة ويب محلية", caption: "تفاصيل الكتاب، معاينة ويب محلية", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local5, alt: "استعادة كلمة المرور، معاينة ويب محلية", caption: "استعادة كلمة المرور، معاينة ويب محلية", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "شريط بطل للكتب الرائجة مع الإصدارات الجديدة، مدعوم من OpenLibrary API",
          "تصفح الفئات (روايات، فانتازيا، رومانسية، خيال علمي، غموض، تاريخ، سيرة ذاتية، تطوير الذات) مع شبكات كتب",
          "صفحات تفاصيل غنية: الغلاف والوصف والمواضيع والبيانات الوصفية وروابط خارجية والطبعات",
          "مصادقة Firebase بالبريد الإلكتروني وكلمة المرور مع دخول ضيف مجهول",
          "تدفق نسيان كلمة المرور والتحقق برمز OTP وإعادة التعيين",
          "شاشات تعريفية متحركة وشاشة بداية تحمل هوية التطبيق",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز النقاط التقنية",
        text: "مبني بـReact Native وExpo SDK 56 وTypeScript. يستخدم expo-router للتوجيه المعتمد على الملفات مع تبويبات سفلية، وTanStack Query مع Axios للتعامل مع OpenLibrary REST API، وFirebase Auth، وReact Native Reanimated للشرائط المتحركة.",
      },
    },
  ],
} as const satisfies ProjectContent;
