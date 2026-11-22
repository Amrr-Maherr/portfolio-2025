import view1 from "../../../assets/images/projects/nannocare/view-1.jpg";
import view2 from "../../../assets/images/projects/nannocare/view-2.jpg";
import view3 from "../../../assets/images/projects/nannocare/view-3.jpg";
import view4 from "../../../assets/images/projects/nannocare/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "نانوكير",
  "theme": "light",
  "tags": [
    "react",
    "ecommerce",
    "responsive",
    "accessibility"
  ],
  "videoBorder": false,
  "description": "تطوير الواجهة الأمامية لمتجر Nannocare العالمي: مكونات React قابلة لإعادة الاستخدام وHooks، وتصميم متجاوب لكل الأجهزة، وتحميل أسرع مع تقليل انزياح التخطيط، وتحسينات في إمكانية الوصول والاتساق البصري.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "الصفحة الرئيسية",
        "caption": "الصفحة الرئيسية"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "مجموعة المنتجات",
        "caption": "مجموعة المنتجات"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "تفاصيل المنتج",
        "caption": "تفاصيل المنتج"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "عرض تقنية العلامة التجارية",
        "caption": "عرض تقنية العلامة التجارية"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "مكونات React وظيفية قابلة لإعادة الاستخدام مع Hooks",
          "تصميم متجاوب للجوال والتابلت وسطح المكتب",
          "تحسين الأداء وتقليل انزياح التخطيط",
          "تحسين إمكانية الوصول والاتساق البصري",
          "إعادة تنظيم الكود لبنية نظيفة قابلة للصيانة"
        ]
      }
    }
  ],
  "live": "https://nannocare.com/"
} as const satisfies ProjectContent;
