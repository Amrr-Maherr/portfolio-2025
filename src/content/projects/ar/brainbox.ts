import chat from "../../../assets/images/projects/brainbox/chat.svg";
import splash from "../../../assets/images/projects/brainbox/splash.svg";
import welcome from "../../../assets/images/projects/brainbox/welcome.svg";
import login from "../../../assets/images/projects/brainbox/login.svg";
import register from "../../../assets/images/projects/brainbox/register.svg";
import forgot_password from "../../../assets/images/projects/brainbox/forgot-password.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "BrainBox - تطبيق شات بالذكاء الاصطناعي",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "tanstack", "axios"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/BrainBox",
  description:
    "تطبيق محادثة مبني باستخدام React Native وExpo وTypeScript. يرسل الرسائل إلى Google Gemini 2.5 Flash مع TanStack Query للتخزين المؤقت ومعالجة الأخطاء، ويعرض فقاعات الرسائل مع الوقت بثيم فاتح وغامق. يتضمن أيضًا شاشات البداية والتعريف والترحيب وتسجيل الدخول والتسجيل واستعادة كلمة المرور باستخدام Expo Router. يعرض المعرض نسخة الويب المحلية؛ رد الذكاء الاصطناعي في صورة المحادثة عينة، وشاشات المصادقة واجهات فقط.",
  components: [
    { type: "media", props: { type: "image", src: chat, alt: "المحادثة، رد تجريبي (نسخة ويب محلية)", caption: "المحادثة، رد تجريبي (نسخة ويب محلية)", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: splash, alt: "شاشة البداية", caption: "شاشة البداية", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: welcome, alt: "شاشة الترحيب", caption: "شاشة الترحيب", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: login, alt: "تسجيل الدخول", caption: "تسجيل الدخول", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: register, alt: "إنشاء حساب", caption: "إنشاء حساب", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: forgot_password, alt: "نسيت كلمة المرور", caption: "نسيت كلمة المرور", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "محادثة مع Gemini 2.5 Flash عبر Generative Language API",
          "فقاعات رسائل ووقت ومؤشر تحميل ورسائل خطأ واضحة",
          "تخزين مؤقت عبر TanStack Query لمدة 5 دقائق",
          "شاشات بداية وتعريف من 3 شرائح وترحيب",
          "شاشات تسجيل الدخول والتسجيل وكود التحقق وإعادة تعيين كلمة المرور (واجهات فقط)",
          "ثيم فاتح وغامق حسب الجهاز",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "مبني بـ React Native 0.81 وExpo SDK 54 وExpo Router وTypeScript. يستخدم TanStack Query وAxios لطلب Gemini وReact Native Reanimated لشرائح التعريف وطبقة مكونات للثيم الفاتح والغامق.",
      },
    },
  ],
} as const satisfies ProjectContent;
