import fresh0 from "../../../assets/images/projects/nannocare/six-1.jpg";
import fresh1 from "../../../assets/images/projects/nannocare/six-2.jpg";
import fresh2 from "../../../assets/images/projects/nannocare/six-3.jpg";
import fresh3 from "../../../assets/images/projects/nannocare/six-4.jpg";
import fresh4 from "../../../assets/images/projects/nannocare/six-5.jpg";
import fresh5 from "../../../assets/images/projects/nannocare/six-6.jpg";
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
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "بانر الفيديو بالصفحة الرئيسية",caption: "بانر الفيديو بالصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "قسم معلومات المنتج",caption: "قسم معلومات المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "واجهة معلومات التقنية",caption: "واجهة معلومات التقنية",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "كتالوج المنتجات",caption: "كتالوج المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "تفاصيل المنتج ومعرض الصور",caption: "تفاصيل المنتج ومعرض الصور",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "قسم معلومات المنتج السفلي",caption: "قسم معلومات المنتج السفلي",natural:true} }
],
  "live": "https://nannocare.com/"
} as const satisfies ProjectContent;
