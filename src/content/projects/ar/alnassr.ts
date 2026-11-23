import fresh0 from "../../../assets/images/projects/alnassr/six-1.jpg";
import fresh1 from "../../../assets/images/projects/alnassr/six-2.jpg";
import fresh2 from "../../../assets/images/projects/alnassr/six-3.jpg";
import fresh3 from "../../../assets/images/projects/alnassr/six-4.jpg";
import fresh4 from "../../../assets/images/projects/alnassr/six-5.jpg";
import fresh5 from "../../../assets/images/projects/alnassr/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "المتجر الرسمي لنادي النصر",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "واجهة متجر إلكتروني لمنتجات نادي النصر، تعرض الأطقم وملابس التدريب ومجموعات لايف ستايل والإكسسوارات. تربط الواجهة بين الصفحة الرئيسية الترويجية وتصفح المجموعات حسب الموسم وصفحات المنتجات التي تعرض الصور وخيارات المقاس ضمن تجربة متجر عربية.",
  "live": "https://store.alnassr.sa/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية للمتجر",caption: "الصفحة الرئيسية للمتجر",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "الأطقم الأكثر مبيعاً",caption: "الأطقم الأكثر مبيعاً",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بانر قسم الأطقم",caption: "بانر قسم الأطقم",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "مجموعات المواسم",caption: "مجموعات المواسم",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "واجهة تفاصيل المنتج",caption: "واجهة تفاصيل المنتج",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "معرض المنتج ومعلومات الدفع المعروضة",caption: "معرض المنتج ومعلومات الدفع المعروضة",natural:true} }
]
} as const satisfies ProjectContent;
