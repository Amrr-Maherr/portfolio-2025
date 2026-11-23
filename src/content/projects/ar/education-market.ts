import view1 from "../../../assets/images/projects/education-market/view-1.jpg";
import view2 from "../../../assets/images/projects/education-market/view-2.jpg";
import view3 from "../../../assets/images/projects/education-market/view-3.jpg";
import view4 from "../../../assets/images/projects/education-market/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "إديوكيشن ماركت - متجر مستلزمات مدرسية (زد)",
  "theme": "light",
  "live": "https://educationmarket.sa/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "واجهة متجر إلكتروني عربية على منصة زد للزي المدرسي والقرطاسية والحقائب وأدوات الفنون وملحقات الكمبيوتر. يتضمن المتجر تصفحاً حسب الأقسام، وشبكات منتجات، وصفحات تفاصيل تعرض الصور والأسعار والخيارات مثل مقاسات الزي المدرسي.",
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
        "alt": "الزي المدرسي",
        "caption": "الزي المدرسي"
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
        "alt": "كل المنتجات",
        "caption": "كل المنتجات"
      }
    }
  ]
} as const satisfies ProjectContent;
