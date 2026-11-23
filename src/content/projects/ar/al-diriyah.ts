import fresh0 from "../../../assets/images/projects/al-diriyah/six-1.jpg";
import fresh1 from "../../../assets/images/projects/al-diriyah/six-2.jpg";
import fresh2 from "../../../assets/images/projects/al-diriyah/six-3.jpg";
import fresh3 from "../../../assets/images/projects/al-diriyah/six-4.jpg";
import fresh4 from "../../../assets/images/projects/al-diriyah/six-5.jpg";
import fresh5 from "../../../assets/images/projects/al-diriyah/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "نادي الدرعية - الموقع الرسمي",
  "theme": "light",
  "tags": [
    "rtl"
  ],
  "description": "موقع رسمي لنادي الدرعية يعرض أخبار النادي وجدول المباريات والنتائج ورؤية النادي وقيمه وقسم المتجر ومعرض الصور. تجمع الواجهة هذه الأقسام في تجربة عربية بهوية النادي، مع إتاحة الانتقال إلى اللغة الإنجليزية.",
  "live": "https://www.diriyahclub.sa/ar/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية للنادي",caption: "الصفحة الرئيسية للنادي",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "جدول المباريات والنتائج",caption: "جدول المباريات والنتائج",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "رؤية النادي",caption: "رؤية النادي",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "مهمة النادي",caption: "مهمة النادي",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "قيم النادي",caption: "قيم النادي",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "معاينة متجر النادي",caption: "معاينة متجر النادي",natural:true} }
]
} as const satisfies ProjectContent;
