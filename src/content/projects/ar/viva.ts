import viva0 from "../../../assets/images/projects/viva/viva-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Viva - تطبيق تسوق ذكي",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "tanstack", "axios", "groq"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Viva",
  description:
    "تطبيق جوال للتجارة الإلكترونية متعدد المنصات مبني بـReact Native وExpo وTypeScript، يجمع تجربة تسوق كاملة مع مساعد تسوق ذكي مدعوم بـGroq (Llama 3.1).<br/><br/>يتضمن مصادقة قائمة على JWT، وكتالوج منتجات بتمرير لا نهائي، وسلة تسوق وقائمة رغبات ودفع وإدارة طلبات، واختيار العنوان عبر خرائط Google.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: viva0,
        alt: "تطبيق Viva للتسوق على الجوال",
        caption: "تطبيق تجارة إلكترونية مدعوم بالذكاء الاصطناعي",
      },
    },
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
