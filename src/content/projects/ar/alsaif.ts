import view1 from "../../../assets/images/projects/alsaif/view-1.jpg";
import view2 from "../../../assets/images/projects/alsaif/view-2.jpg";
import view3 from "../../../assets/images/projects/alsaif/view-3.jpg";
import view4 from "../../../assets/images/projects/alsaif/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "متجر السيف للتوكيلات التجارية",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر إلكتروني عربية للسيف للتوكيلات التجارية، تعرض الأجهزة المنزلية وأدوات الطهي والأواني المنزلية والدلال والأباريق وقدور الضغط. تجمع الواجهة بين أقسام ترويجية في الصفحة الرئيسية وتصفح الأقسام وقوائم المنتجات مع أدوات الفرز والتصفية وصفحات تفاصيل تتضمن معارض صور وخيارات المنتجات.",
  "live": "https://alsaifco.sa/",
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
        "alt": "قسم الكهربائيات",
        "caption": "قسم الكهربائيات",
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
        "alt": "قسم قدور الضغط",
        "caption": "قسم قدور الضغط",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
