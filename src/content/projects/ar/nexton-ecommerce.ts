import fresh0 from "../../../assets/images/projects/nexton-ecommerce/six-1.jpg";
import fresh1 from "../../../assets/images/projects/nexton-ecommerce/six-2.jpg";
import view1 from "../../../assets/images/projects/nexton-ecommerce/view-1.jpg";
import view2 from "../../../assets/images/projects/nexton-ecommerce/view-2.jpg";
import view3 from "../../../assets/images/projects/nexton-ecommerce/view-3.jpg";
import view4 from "../../../assets/images/projects/nexton-ecommerce/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "نكستون للتجارة الإلكترونية",
  "theme": "light",
  "tags": [
    "next",
    "react",
    "javascript",
    "tailwind",
    "redux",
    "tanstack",
    "axios",
    "radix"
  ],
  "videoBorder": false,
  "description": "متجر إلكتروني حديث مبني بـNext.js 15 وReact 19 من تصميم Figma مخصص، مع صفحات منتجات ديناميكية وسلة تسوق ودفع تفاعلي ومدفوعات عبر PayPal.",
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
        "alt": "تفاصيل المنتج",
        "caption": "تفاصيل المنتج"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "الفئات والمنتجات المقترحة",
        "caption": "الفئات والمنتجات المقترحة"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "تسجيل الدخول",
        "caption": "تسجيل الدخول"
      }
    },
{
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "صفحات منتجات ديناميكية بتنقل سلس",
          "سلة تسوق ودفع تفاعلية",
          "إدارة الحالة بـRedux Toolkit للسلة وتدفق المستخدم",
          "حركات بـFramer Motion وGSAP",
          "تكامل بوابة دفع PayPal"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "بطاقات المنتجات الأكثر مبيعًا",caption: "بطاقات المنتجات الأكثر مبيعًا",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "حملة المجموعة الشتوية",caption: "حملة المجموعة الشتوية",natural:true} }
],
  "live": "https://nexton-e-commerce.vercel.app/",
  "source": "https://github.com/Amrr-Maherr/nexton-e-commerce"
} as const satisfies ProjectContent;
