import view1 from "../../../assets/images/projects/infinity-sports/view-1.jpg";
import view2 from "../../../assets/images/projects/infinity-sports/view-2.jpg";
import view3 from "../../../assets/images/projects/infinity-sports/view-3.jpg";
import view4 from "../../../assets/images/projects/infinity-sports/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إنفينيتي سبورتس - متجر ملابس رياضية (زد)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر عربية من اليمين إلى اليسار على منصة زد للملابس والأحذية الرياضية والحقائب وإكسسوارات اللياقة. تتضمن تنقلاً بين الأقسام، وقوائم منتجات مع فلاتر للأسعار، ومعارض صور للمنتجات، وتفاصيل المنتجات، وعناصر تحكم في السلة والمفضلة.",
  "live": "https://arpasv.zid.store/",
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
        "alt": "كل المنتجات",
        "caption": "كل المنتجات",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "تفاصيل المنتج",
        "caption": "تفاصيل المنتج",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "قسم الملابس الرياضية",
        "caption": "قسم الملابس الرياضية",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
