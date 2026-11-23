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
  "description": "واجهة متجر عربية للعسل ومنتجات النحل على منصة زد. تجمع بين الأقسام الترويجية ومجموعات المنتجات وبطاقات الكتالوج وصفحات التفاصيل وعناصر التسوق لمتجر متعدد فئات العسل ومنتجات النحل.",
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
          "مجموعات العسل ومنتجات النحل",
          "تفاصيل المنتجات وعناصر التسوق",
          "واجهة عربية لمتجر له فروع فعلية"
        ]
      }
    }
  ],
  "live": "https://reeqalnahl.com/"
} as const satisfies ProjectContent;
