import fresh0 from "../../../assets/images/projects/safeside/six-1.jpg";
import fresh1 from "../../../assets/images/projects/safeside/six-2.jpg";
import fresh2 from "../../../assets/images/projects/safeside/six-3.jpg";
import fresh3 from "../../../assets/images/projects/safeside/six-4.jpg";
import fresh4 from "../../../assets/images/projects/safeside/six-5.jpg";
import fresh5 from "../../../assets/images/projects/safeside/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "سيف سايد - متجر منتجات السلامة (زد)",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "متجر لبراند سيف سايد السعودي لمنتجات السلامة مبني على زد. يغطي طفايات الحريق والأكثر مبيعا وتقييمات العملاء وباقات المنتجات وجل التثبيت.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "واجهة الصفحة الرئيسية",caption: "واجهة الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "منتج طفاية الحريق",caption: "منتج طفاية الحريق",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "الأكثر مبيعا",caption: "الأكثر مبيعا",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "تقييمات العملاء",caption: "تقييمات العملاء",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "باقة المنتجات",caption: "باقة المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "منتج جل التثبيت",caption: "منتج جل التثبيت",natural:true} }
],
  "live": "https://safeside.sa"
} as const satisfies ProjectContent;
