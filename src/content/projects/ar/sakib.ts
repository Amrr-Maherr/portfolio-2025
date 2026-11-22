import view1 from "../../../assets/images/projects/sakib/view-1.jpg";
import view2 from "../../../assets/images/projects/sakib/view-2.jpg";
import view3 from "../../../assets/images/projects/sakib/view-3.jpg";
import view4 from "../../../assets/images/projects/sakib/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "عطور سكب",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce"
  ],
  "videoBorder": false,
  "description": "عمل على واجهة متجر علامة سكب للعطور على منصة زد، ضمن العمل في NEOXERO.",
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
        "alt": "مجموعة العطور",
        "caption": "مجموعة العطور"
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
        "alt": "آراء العملاء",
        "caption": "آراء العملاء"
      }
    }
  ],
  "live": "https://sakbperfume.com/"
} as const satisfies ProjectContent;
