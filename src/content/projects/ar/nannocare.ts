import view1 from "../../../assets/images/projects/nannocare/view-1.jpg";
import view2 from "../../../assets/images/projects/nannocare/view-2.jpg";
import view3 from "../../../assets/images/projects/nannocare/view-3.jpg";
import view4 from "../../../assets/images/projects/nannocare/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "نانوكير - متجر عناية شخصية",
  "theme": "light",
  "tags": [
    "react",
    "ecommerce",
    "responsive",
    "accessibility"
  ],
  "videoBorder": false,
  "description": "موقع تجارة إلكترونية لمنتجات العناية الشخصية من Nannocare. يجمع بين مجموعات المنتجات وصفحات تفاصيلها ومعلومات العلامة والتقنية وعناصر التسوق ضمن واجهة تركز على المنتجات.",
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
          "واجهات مجموعات المنتجات وتفاصيلها",
          "تصميم متجاوب للجوال والتابلت وسطح المكتب",
          "معلومات العلامة وتقنية المنتجات",
          "صور المنتجات وعناصر التسوق",
          "تنقل في المتجر يركز على المنتجات"
        ]
      }
    }
  ],
  "live": "https://nannocare.com/"
} as const satisfies ProjectContent;
