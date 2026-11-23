import fresh0 from "../../../assets/images/projects/yumauth/six-1.jpg";
import fresh1 from "../../../assets/images/projects/yumauth/six-2.jpg";
import view1 from "../../../assets/images/projects/yumauth/view-1.jpg";
import view2 from "../../../assets/images/projects/yumauth/view-2.jpg";
import view3 from "../../../assets/images/projects/yumauth/view-3.jpg";
import view4 from "../../../assets/images/projects/yumauth/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "يوم أوث - تطبيق تصفح الوصفات",
  "theme": "light",
  "tags": [
    "react",
    "vite",
    "tailwind",
    "tanstack",
    "auth"
  ],
  "videoBorder": false,
  "description": "تطبيق لتصفح الوصفات مبني بـReact وVite، مع البحث وصفحات تفاصيل الوصفات وشاشات تسجيل الدخول وإنشاء الحساب، باستخدام React Query وTailwind CSS.",
  "components": [
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "الصفحة الرئيسية، معاينة محلية للتطبيق",
        "caption": "الصفحة الرئيسية، معاينة محلية للتطبيق"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "تفاصيل الوصفة، معاينة محلية للتطبيق",
        "caption": "تفاصيل الوصفة، معاينة محلية للتطبيق"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "تسجيل الدخول، معاينة محلية للتطبيق",
        "caption": "تسجيل الدخول، معاينة محلية للتطبيق"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "إنشاء حساب، معاينة محلية للتطبيق",
        "caption": "إنشاء حساب، معاينة محلية للتطبيق"
      }
    },
{
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "تصفح الوصفات والبحث وعرض التفاصيل",
          "شاشات تسجيل الدخول وإنشاء الحساب",
          "تدفق تسجيل دخول وإنشاء حساب بسيط"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "نتائج البحث، لقطة من مستودع المشروع",caption: "نتائج البحث، لقطة من مستودع المشروع",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "كتالوج الوصفات، لقطة من مستودع المشروع",caption: "كتالوج الوصفات، لقطة من مستودع المشروع",natural:true} }
],
  "source": "https://github.com/Amrr-Maherr/YumAuth"
} as const satisfies ProjectContent;
