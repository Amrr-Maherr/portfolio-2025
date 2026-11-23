import fresh0 from "../../../assets/images/projects/infinity-electronics/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-electronics/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-electronics/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-electronics/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-electronics/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-electronics/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إنفينيتي إلكترونيكس - متجر إلكترونيات (زد)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر إلكترونيات عربية من اليمين إلى اليسار على منصة زد، مع تنقل بين الأقسام، وأقسام ترويجية، وقوائم منتجات وفلاتر للأسعار. تعرض صفحات المنتجات معارض صور وأوصافاً وأسعاراً وعناصر تحكم في الكمية وخيارات السلة والمفضلة.",
  "live": "https://p8bg4g.zid.store/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية والتنقل",caption: "الصفحة الرئيسية والتنقل",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "فئات المنتجات والحملة",caption: "فئات المنتجات والحملة",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "عنوان الكتالوج",caption: "عنوان الكتالوج",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "شبكة المنتجات والفلاتر",caption: "شبكة المنتجات والفلاتر",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "تفاصيل المنتج",caption: "تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "المعرض ولوحات معلومات الدفع",caption: "المعرض ولوحات معلومات الدفع",natural:true} }
]
} as const satisfies ProjectContent;
