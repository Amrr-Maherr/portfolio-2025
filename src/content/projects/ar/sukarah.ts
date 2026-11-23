import view1 from "../../../assets/images/projects/sukarah/view-1.jpg";
import view2 from "../../../assets/images/projects/sukarah/view-2.jpg";
import view3 from "../../../assets/images/projects/sukarah/view-3.jpg";
import view4 from "../../../assets/images/projects/sukarah/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "سُكّرة - متجر مستحضرات تجميل",
  "theme": "light",
  "tags": [],
  "description": "متجر إلكتروني لسُكّرة، علامة تجميل سعودية تقدم منتجات للحواجب والشفاه ومجموعات مختارة.",
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
        "alt": "تصفح الأقسام",
        "caption": "تصفح الأقسام",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "قائمة المنتجات",
        "caption": "قائمة المنتجات",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "تفاصيل المنتج",
        "caption": "تفاصيل المنتج",
        "natural": true
      }
    }
  ],
  "live": "https://sukarah.com/"
} as const satisfies ProjectContent;
