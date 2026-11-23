import fresh0 from "../../../assets/images/projects/infinity-sports/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-sports/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-sports/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-sports/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-sports/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-sports/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إنفينيتي سبورتس - متجر ملابس رياضية (زد)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر عربية من اليمين إلى اليسار على منصة زد للملابس والأحذية الرياضية والحقائب وإكسسوارات اللياقة. تتضمن تنقلاً بين الأقسام، وقوائم منتجات مع فلاتر للأسعار، ومعارض صور للمنتجات، وتفاصيل المنتجات، وعناصر تحكم في السلة والمفضلة.",
  "live": "https://arpasv.zid.store/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "البانر الرئيسي والتنقل",caption: "البانر الرئيسي والتنقل",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "بطاقات أحدث المنتجات",caption: "بطاقات أحدث المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "لوحات فئات الأنشطة",caption: "لوحات فئات الأنشطة",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "تفاصيل المنتج",caption: "تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "معرض المنتج وعناصر التسوق",caption: "معرض المنتج وعناصر التسوق",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "الكتالوج والفلاتر",caption: "الكتالوج والفلاتر",natural:true} }
]
} as const satisfies ProjectContent;
