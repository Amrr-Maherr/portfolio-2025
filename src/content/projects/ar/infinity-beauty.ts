import fresh0 from "../../../assets/images/projects/infinity-beauty/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-beauty/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-beauty/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-beauty/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-beauty/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-beauty/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إنفينيتي بيوتي - متجر تجميل وأزياء (زد)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر تجميل وأزياء عربية من اليمين إلى اليسار على منصة زد للعطور ومستحضرات التجميل والملابس والإكسسوارات. تتضمن تصفحاً للأقسام، وقوائم منتجات وفلاتر للأسعار، وصفحات تفاصيل بمعارض صور وأسعار وعناصر تحكم في الكمية وخيارات السلة.",
  "live": "https://jtssiu.zid.store/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية التجريبية",caption: "الصفحة الرئيسية التجريبية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "الأقسام وبانر برنامج الولاء",caption: "الأقسام وبانر برنامج الولاء",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "قسم مزايا الولاء",caption: "قسم مزايا الولاء",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "واجهة تفاصيل المنتج",caption: "واجهة تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "معرض المنتج ومعلومات الدفع المعروضة",caption: "معرض المنتج ومعلومات الدفع المعروضة",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "وصف المنتج والمنتجات المرتبطة",caption: "وصف المنتج والمنتجات المرتبطة",natural:true} }
]
} as const satisfies ProjectContent;
