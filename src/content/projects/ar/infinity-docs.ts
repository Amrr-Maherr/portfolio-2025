import fresh0 from "../../../assets/images/projects/infinity-docs/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-docs/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-docs/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-docs/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-docs/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-docs/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "توثيق ثيم Infinity - دليل المميزات والإعدادات",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "موقع التوثيق الخاص بثيم Infinity على زد (v6.7.5). يغطي دليل المميزات والإعدادات والمتاجر التجريبية الثلاثة (الجمال والرياضة والإلكترونيات) ومعاينات التصميم والتحديثات والدعم.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الواجهة الرئيسية",caption: "الواجهة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "المتاجر التجريبية",caption: "المتاجر التجريبية",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "مميزات الثيم",caption: "مميزات الثيم",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "التخصيص",caption: "التخصيص",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "قسم التوثيق",caption: "قسم التوثيق",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "الدعم والتذييل",caption: "الدعم والتذييل",natural:true} }
],
  "live": "https://cdn.neoxero.com/infinity-docs"
} as const satisfies ProjectContent;
