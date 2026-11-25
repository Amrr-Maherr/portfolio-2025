import fresh0 from "../../../assets/images/projects/munfarid/six-1.jpg";
import fresh1 from "../../../assets/images/projects/munfarid/six-2.jpg";
import fresh2 from "../../../assets/images/projects/munfarid/six-3.jpg";
import fresh3 from "../../../assets/images/projects/munfarid/six-4.jpg";
import fresh4 from "../../../assets/images/projects/munfarid/six-5.jpg";
import fresh5 from "../../../assets/images/projects/munfarid/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "منفرد - ديمو ثيم المفروشات والساعات الذكية (زد)",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "ديمو متجر على زد باسم منفرد. يضم واجهة رئيسية وقسم من نحن ومفروشات بصفحات أقسام ومنتجات وقسم ساعة ذكية ونافذة عروض وصفحة كل المنتجات.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الواجهة الرئيسية ومن نحن",caption: "الواجهة الرئيسية ومن نحن",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "قسم المفروشات",caption: "قسم المفروشات",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "منتج مفروشات",caption: "منتج مفروشات",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "منتج ساعة ذكية",caption: "منتج ساعة ذكية",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "كل المنتجات",caption: "كل المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "قسم الساعة الذكية",caption: "قسم الساعة الذكية",natural:true} }
],
  "live": "https://neoxero01.zidthemestore.com/"
} as const satisfies ProjectContent;
