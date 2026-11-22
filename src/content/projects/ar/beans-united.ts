import view1 from "../../../assets/images/projects/beans-united/view-1.jpg";
import view2 from "../../../assets/images/projects/beans-united/view-2.jpg";
import view3 from "../../../assets/images/projects/beans-united/view-3.jpg";
import view4 from "../../../assets/images/projects/beans-united/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "بينز يونايتد",
  "theme": "light",
  "tags": [
    "ecommerce",
    "coffee",
    "bilingual",
    "rtl"
  ],
  "videoBorder": false,
  "description": "منصة تجارة إلكترونية سعودية للقهوة المختصة تجمع علامات قهوة مميزة وأدوات تحضير وبرنامج ولاء ومحتوى تعليمي عن القهوة وخدمات صيانة احترافية للماكينات في متجر واحد.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "الصفحة الرئيسية بالإنجليزية",
        "caption": "الصفحة الرئيسية بالإنجليزية"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "علامات القهوة",
        "caption": "علامات القهوة"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "الصفحة الرئيسية بالعربية",
        "caption": "الصفحة الرئيسية بالعربية"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "خريطة مصادر القهوة",
        "caption": "خريطة مصادر القهوة"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "علامات قهوة مختصة مختارة وأدوات تحضير",
          "برنامج ولاء مدمج",
          "محتوى تعليمي عن مصادر القهوة",
          "صيانة احترافية لماكينات القهوة (Team Jabber)",
          "تصميم متجاوب ونظيف"
        ]
      }
    }
  ],
  "live": "https://beansunited.sa"
} as const satisfies ProjectContent;
