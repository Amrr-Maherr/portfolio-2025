import view1 from "../../../assets/images/projects/infinity-beauty/view-1.jpg";
import view2 from "../../../assets/images/projects/infinity-beauty/view-2.jpg";
import view3 from "../../../assets/images/projects/infinity-beauty/view-3.jpg";
import view4 from "../../../assets/images/projects/infinity-beauty/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إنفينيتي بيوتي - متجر تجميل وأزياء (زد)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر تجميل وأزياء عربية من اليمين إلى اليسار على منصة زد للعطور ومستحضرات التجميل والملابس والإكسسوارات. تتضمن تصفحاً للأقسام، وقوائم منتجات وفلاتر للأسعار، وصفحات تفاصيل بمعارض صور وأسعار وعناصر تحكم في الكمية وخيارات السلة.",
  "live": "https://jtssiu.zid.store/",
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
        "alt": "قسم الأزياء",
        "caption": "قسم الأزياء",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "معلومات المنتج",
        "caption": "معلومات المنتج",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
