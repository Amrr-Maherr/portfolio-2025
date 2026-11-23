import view1 from "../../../assets/images/projects/al-diriyah/view-1.jpg";
import view2 from "../../../assets/images/projects/al-diriyah/view-2.jpg";
import view3 from "../../../assets/images/projects/al-diriyah/view-3.jpg";
import view4 from "../../../assets/images/projects/al-diriyah/view-4.jpg";
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
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "alt": "الصفحة الرئيسية",
        "caption": "الصفحة الرئيسية",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "alt": "أخبار النادي",
        "caption": "أخبار النادي",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "المباريات والنتائج",
        "caption": "المباريات والنتائج",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "رؤية النادي",
        "caption": "رؤية النادي",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
