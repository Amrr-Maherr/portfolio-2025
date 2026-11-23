import view1 from "../../../assets/images/projects/beans-united/view-1.jpg";
import view2 from "../../../assets/images/projects/beans-united/view-2.jpg";
import view3 from "../../../assets/images/projects/beans-united/view-3.jpg";
import view4 from "../../../assets/images/projects/beans-united/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "بينز يونايتد",
  "theme": "light",
  "tags": [
    "coffee",
    "bilingual",
    "rtl"
  ],
  "videoBorder": false,
  "description": "موقع تعريفي ثنائي اللغة لشركة سعودية متخصصة في القهوة المختصة. يعرض الشركة ومصادر القهوة والعلامات التجارية والشراكات، مع صفحات مستقلة لعلاقات المستثمرين والمدونة والوظائف.",
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
        "alt": "علاقات المستثمرين",
        "caption": "علاقات المستثمرين"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "المدونة",
        "caption": "المدونة"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "الوظائف",
        "caption": "الوظائف"
      }
    }
  ],
  "live": "https://beansunited.sa"
} as const satisfies ProjectContent;
