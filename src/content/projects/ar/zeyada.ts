import view1 from "../../../assets/images/projects/zeyada/view-1.jpg";
import view2 from "../../../assets/images/projects/zeyada/view-2.jpg";
import view3 from "../../../assets/images/projects/zeyada/view-3.jpg";
import view4 from "../../../assets/images/projects/zeyada/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "زيادة - متجر بقالة تجريبي (زد)",
  "theme": "light",
  "live": "https://neoxeroco.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "واجهة متجر تجريبي للبقالة على منصة زد بواجهة عربية من اليمين إلى اليسار، وتنقل بين الأقسام، وقوائم منتجات، وفلاتر، وأقسام للعروض، وصفحات تفاصيل المنتجات. يعرض القالب تخطيط تسوق متعدد الأقسام مع عناصر بحث ومفضلة وسلة. هذا متجر توضيحي وليس نشاط بيع بالتجزئة فعلياً.",
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
        "alt": "تصفح الأقسام",
        "caption": "تصفح الأقسام"
      }
    }
  ]
} as const satisfies ProjectContent;
