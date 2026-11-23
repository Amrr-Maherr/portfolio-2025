import fresh0 from "../../../assets/images/projects/sakib/six-1.jpg";
import fresh1 from "../../../assets/images/projects/sakib/six-2.jpg";
import fresh2 from "../../../assets/images/projects/sakib/six-3.jpg";
import fresh3 from "../../../assets/images/projects/sakib/six-4.jpg";
import fresh4 from "../../../assets/images/projects/sakib/six-5.jpg";
import fresh5 from "../../../assets/images/projects/sakib/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "عطور سكب - متجر عطور",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce"
  ],
  "videoBorder": false,
  "description": "واجهة متجر عربية لعلامة عطور سكب على منصة زد، تعرض العلامة ومجموعات العطور وواجهات التسوق للمنتجات.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "بانر الصفحة الرئيسية",caption: "بانر الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "بطاقات العطور",caption: "بطاقات العطور",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "قسم آراء العملاء",caption: "قسم آراء العملاء",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "كتالوج المنتجات",caption: "كتالوج المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "تفاصيل عطر Mirage Musk",caption: "تفاصيل عطر Mirage Musk",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "تفاصيل عطر Leather Noir",caption: "تفاصيل عطر Leather Noir",natural:true} }
],
  "live": "https://sakbperfume.com/"
} as const satisfies ProjectContent;
