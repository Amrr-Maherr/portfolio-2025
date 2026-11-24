import fresh0 from "../../../assets/images/projects/neoxero/six-1.jpg";
import fresh1 from "../../../assets/images/projects/neoxero/six-2.jpg";
import fresh2 from "../../../assets/images/projects/neoxero/six-3.jpg";
import fresh3 from "../../../assets/images/projects/neoxero/six-4.jpg";
import fresh4 from "../../../assets/images/projects/neoxero/six-5.jpg";
import fresh5 from "../../../assets/images/projects/neoxero/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "NEOXERO - موقع الوكالة الرقمية",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://neoxero.com/en",
  "description": "الموقع الرسمي لشركة NEOXERO، وكالة رقمية متكاملة تساعد العلامات التجارية والمتاجر الإلكترونية على النمو من خلال حلول تسويق وتطوير متوافقة مع منصتي زد وسلة.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الواجهة الرئيسية",caption: "الواجهة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "قسم الخدمات",caption: "قسم الخدمات",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "الإحصائيات والمشاريع المختارة",caption: "الإحصائيات والمشاريع المختارة",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "الشركاء والعملاء",caption: "الشركاء والعملاء",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "آراء العملاء",caption: "آراء العملاء",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "أحدث الأخبار والمقالات",caption: "أحدث الأخبار والمقالات",natural:true} }
]
} as const satisfies ProjectContent;
