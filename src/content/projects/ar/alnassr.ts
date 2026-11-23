import view1 from "../../../assets/images/projects/alnassr/view-1.jpg";
import view2 from "../../../assets/images/projects/alnassr/view-2.jpg";
import view3 from "../../../assets/images/projects/alnassr/view-3.jpg";
import view4 from "../../../assets/images/projects/alnassr/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "المتجر الرسمي لنادي النصر",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر إلكتروني لمنتجات نادي النصر، تعرض الأطقم وملابس التدريب ومجموعات لايف ستايل والإكسسوارات. تربط الواجهة بين الصفحة الرئيسية الترويجية وتصفح المجموعات حسب الموسم وصفحات المنتجات التي تعرض الصور وخيارات المقاس ضمن تجربة متجر عربية.",
  "live": "https://store.alnassr.sa/",
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
        "alt": "الأطقم حسب الموسم",
        "caption": "الأطقم حسب الموسم",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "مجموعة الموسم",
        "caption": "مجموعة الموسم",
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
  ]
} as const satisfies ProjectContent;
