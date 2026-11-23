import view1 from "../../../assets/images/projects/infinity-electronics/view-1.jpg";
import view2 from "../../../assets/images/projects/infinity-electronics/view-2.jpg";
import view3 from "../../../assets/images/projects/infinity-electronics/view-3.jpg";
import view4 from "../../../assets/images/projects/infinity-electronics/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إنفينيتي إلكترونيكس - متجر إلكترونيات (زد)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر إلكترونيات عربية من اليمين إلى اليسار على منصة زد، مع تنقل بين الأقسام، وأقسام ترويجية، وقوائم منتجات وفلاتر للأسعار. تعرض صفحات المنتجات معارض صور وأوصافاً وأسعاراً وعناصر تحكم في الكمية وخيارات السلة والمفضلة.",
  "live": "https://p8bg4g.zid.store/",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "alt": "الصفحة الرئيسية",
        "caption": "الصفحة الرئيسية",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "alt": "تفاصيل المنتج",
        "caption": "تفاصيل المنتج",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "قسم الإلكترونيات",
        "caption": "قسم الإلكترونيات",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "تصفح الأقسام",
        "caption": "تصفح الأقسام",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
