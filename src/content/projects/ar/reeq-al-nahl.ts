import view1 from "../../../assets/images/projects/reeq-al-nahl/view-1.jpg";
import view2 from "../../../assets/images/projects/reeq-al-nahl/view-2.jpg";
import view3 from "../../../assets/images/projects/reeq-al-nahl/view-3.jpg";
import view4 from "../../../assets/images/projects/reeq-al-nahl/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "ريق النحل - متجر العسل ومنتجات النحل",
  "theme": "light",
  "tags": [
    "zid",
    "redux",
    "storybook",
    "api"
  ],
  "videoBorder": false,
  "description": "متجر إلكتروني إنتاجي لتاجر عسل سعودي، مبني على منصة زد باستخدام Zid Platform API وRedux وتطوير المكونات بـStorybook.",
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
        "alt": "مجموعة العسل",
        "caption": "مجموعة العسل"
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
        "alt": "الأكثر مبيعًا",
        "caption": "الأكثر مبيعًا"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "متجر إنتاجي على منصة زد",
          "تطوير بالمكونات مع Storybook",
          "إدارة الحالة بـRedux",
          "واجهة عربية لمتجر له فروع فعلية"
        ]
      }
    }
  ],
  "live": "https://reeqalnahl.com/"
} as const satisfies ProjectContent;
