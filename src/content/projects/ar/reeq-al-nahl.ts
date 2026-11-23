import fresh0 from "../../../assets/images/projects/reeq-al-nahl/six-1.jpg";
import fresh1 from "../../../assets/images/projects/reeq-al-nahl/six-2.jpg";
import fresh2 from "../../../assets/images/projects/reeq-al-nahl/six-3.jpg";
import fresh3 from "../../../assets/images/projects/reeq-al-nahl/six-4.jpg";
import fresh4 from "../../../assets/images/projects/reeq-al-nahl/six-5.jpg";
import fresh5 from "../../../assets/images/projects/reeq-al-nahl/six-6.jpg";
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
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "بانر الصفحة الرئيسية",caption: "بانر الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "تصنيفات المنتجات",caption: "تصنيفات المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بانر تشكيلة العسل",caption: "بانر تشكيلة العسل",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "المنتجات الأكثر مبيعا",caption: "المنتجات الأكثر مبيعا",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "واجهة تفاصيل المنتج",caption: "واجهة تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "قسم وصف المنتج",caption: "قسم وصف المنتج",natural:true} }
],
  "live": "https://reeqalnahl.com/"
} as const satisfies ProjectContent;
