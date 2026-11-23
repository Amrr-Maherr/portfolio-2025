import local0 from "../../../assets/images/projects/viva/local-0.jpg";
import local1 from "../../../assets/images/projects/viva/local-1.jpg";
import local2 from "../../../assets/images/projects/viva/local-2.jpg";
import local3 from "../../../assets/images/projects/viva/local-3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Viva - تطبيق تسوق بمساعد ذكي",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "tanstack", "axios", "groq"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Viva",
  description:
    "تطبيق تسوق مبني باستخدام React Native وExpo وTypeScript. يتضمن الكود شاشات تصفح المنتجات والسلة والمفضلة والدفع والطلبات وتسجيل الدخول واستعادة كلمة المرور واختيار العنوان ومساعد تسوق يعتمد على Groq. يعرض المعرض معاينات ويب محلية لشاشات البداية والمصادقة، وليس عملية شراء مكتملة أو جلسة تسوق بعد تسجيل الدخول.",
  components: [
    { type: "media", props: { type: "image", src: local0, alt: "البداية، معاينة ويب محلية للتطبيق", caption: "البداية، معاينة ويب محلية للتطبيق", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local1, alt: "تسجيل الدخول، معاينة ويب محلية للتطبيق", caption: "تسجيل الدخول، معاينة ويب محلية للتطبيق", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local2, alt: "إنشاء حساب، معاينة ويب محلية للتطبيق", caption: "إنشاء حساب، معاينة ويب محلية للتطبيق", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local3, alt: "استعادة كلمة المرور، معاينة ويب محلية للتطبيق", caption: "استعادة كلمة المرور، معاينة ويب محلية للتطبيق", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "كتالوج منتجات بتمرير لا نهائي وتصفية حسب الفئة",
          "مساعد ذكي مدعوم بـGroq (Llama 3.1) مع مساعدة سياقية واعية بالمنتج",
          "مصادقة JWT مع تدفقات كاملة لاستعادة كلمة المرور",
          "سلة تسوق وقائمة رغبات ودفع وسجل طلبات",
          "اختيار العنوان عبر خرائط Google مع أذونات الموقع",
          "حالات تحميل هيكلية ورسوم Lottie متحركة عبر الشاشات الرئيسية",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز النقاط التقنية",
        text: "مبني بـReact Native وExpo Router وTypeScript. يستخدم TanStack Query لجلب البيانات، وreact-native-maps مع expo-location لاختيار العناوين، وGroq API لمساعد التسوق الذكي.",
      },
    },
  ],
} as const satisfies ProjectContent;
