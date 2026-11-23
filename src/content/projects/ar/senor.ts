import view1 from "../../../assets/images/projects/senor/view-1.jpg";
import view2 from "../../../assets/images/projects/senor/view-2.jpg";
import view3 from "../../../assets/images/projects/senor/view-3.jpg";
import view4 from "../../../assets/images/projects/senor/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "سينور - قالب متجر للحيوانات الأليفة (زد)",
  "theme": "light",
  "live": "https://neoxero03.zidthemestore.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "قالب واجهة متجر للحيوانات الأليفة على منصة زد، بواجهة عربية من اليمين إلى اليسار، وتنقل بين الأقسام، وشبكات منتجات، وفلاتر أسعار، وصفحات تفاصيل المنتجات. يعرض المتجر التجريبي منتجات طعام وعناية للكلاب والقطط والأسماك، مع صور المنتجات والأسعار ومعلومات المخزون وعناصر التحكم في الكمية.",
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
        "alt": "قائمة المنتجات",
        "caption": "قائمة المنتجات"
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
        "alt": "منتجات مختارة",
        "caption": "منتجات مختارة"
      }
    }
  ]
} as const satisfies ProjectContent;
