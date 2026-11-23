import fresh0 from "../../../assets/images/projects/beans-united/six-1.jpg";
import fresh1 from "../../../assets/images/projects/beans-united/six-2.jpg";
import fresh2 from "../../../assets/images/projects/beans-united/six-3.jpg";
import fresh3 from "../../../assets/images/projects/beans-united/six-4.jpg";
import fresh4 from "../../../assets/images/projects/beans-united/six-5.jpg";
import fresh5 from "../../../assets/images/projects/beans-united/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "بينز يونايتد - موقع شركة قهوة مختصة",
  "theme": "light",
  "tags": [
    "coffee",
    "bilingual",
    "rtl"
  ],
  "videoBorder": false,
  "description": "موقع تعريفي ثنائي اللغة لشركة سعودية متخصصة في القهوة المختصة. يعرض الشركة ومصادر القهوة والعلامات التجارية والشراكات، مع صفحات مستقلة لعلاقات المستثمرين والمدونة والوظائف.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "الصفحة الرئيسية",caption: "الصفحة الرئيسية",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "خريطة مصادر القهوة",caption: "خريطة مصادر القهوة",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "علاقات المستثمرين",caption: "علاقات المستثمرين",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "المدونة",caption: "المدونة",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "الوظائف",caption: "الوظائف",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "بوابة شركاء الأعمال، صفحة عامة",caption: "بوابة شركاء الأعمال، صفحة عامة",natural:true} }
],
  "live": "https://beansunited.sa"
} as const satisfies ProjectContent;
