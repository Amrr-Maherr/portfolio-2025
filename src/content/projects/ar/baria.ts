import fresh0 from "../../../assets/images/projects/baria/six-1.jpg";
import fresh1 from "../../../assets/images/projects/baria/six-2.jpg";
import fresh2 from "../../../assets/images/projects/baria/six-3.jpg";
import fresh3 from "../../../assets/images/projects/baria/six-4.jpg";
import fresh4 from "../../../assets/images/projects/baria/six-5.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "بارق - متجر إلكترونيات وهواتف (زد)",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "متجر إلكترونيات على زد باسم بارق للسوق السعودي. يضم سلايدر عروض وتصفح أقسام الهواتف والساعات الذكية والكمبيوتر والطابعات ومكبرات الصوت وعروض أسعار بالريال وقسم الأكثر مبيعا وعرض اليوم.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الواجهة والبنرات",caption: "الواجهة والبنرات",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "بنرات العروض",caption: "بنرات العروض",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "قوائم المنتجات",caption: "قوائم المنتجات",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "الهواتف والعروض",caption: "الهواتف والعروض",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "عرض اليوم",caption: "عرض اليوم",natural:true} }
],
  "live": "https://fk5vq7.zid.store/"
} as const satisfies ProjectContent;
