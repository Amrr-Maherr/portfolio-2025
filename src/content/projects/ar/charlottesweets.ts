import view1 from "../../../assets/images/projects/charlottesweets/view-1.jpg";
import view2 from "../../../assets/images/projects/charlottesweets/view-2.jpg";
import view3 from "../../../assets/images/projects/charlottesweets/view-3.jpg";
import view4 from "../../../assets/images/projects/charlottesweets/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "شارلوت سويتس - متجر ولوحة إدارة",
  "theme": "light",
  "tags": [
    "react",
    "bootstrap",
    "axios",
    "dashboard",
    "maps"
  ],
  "videoBorder": false,
  "description": "تطبيق ويب لمحل حلويات مع واجهة عرض للمنتجات ولوحة تحكم للطلبات والفروع والتقارير والإحصائيات، مبني بـReact وBootstrap وAxios على واجهة API خارجية، مع خرائط Leaflet لمواقع التوصيل.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "لوحة التحكم، صورة مستعادة من LinkedIn",
        "caption": "لوحة التحكم، صورة مستعادة من LinkedIn"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "الفروع، صورة مستعادة من LinkedIn",
        "caption": "الفروع، صورة مستعادة من LinkedIn"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "خريطة الفرع، صورة مستعادة من LinkedIn",
        "caption": "خريطة الفرع، صورة مستعادة من LinkedIn"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "تسجيل الدخول، صورة مستعادة من LinkedIn",
        "caption": "تسجيل الدخول، صورة مستعادة من LinkedIn"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "واجهة عرض للمنتجات",
          "لوحة تحكم: الطلبات والفروع والمديرون والإحصائيات",
          "تقارير وإحصائيات",
          "خرائط Leaflet لمواقع التوصيل"
        ]
      }
    },
    {
      "type": "text",
      "props": {
        "title": "ملاحظة عن الصور",
        "text": "صور مستعادة من LinkedIn. لم تكن خدمة الخلفية الخارجية متاحة عند فحصها في 22 نوفمبر 2026."
      }
    }
  ],
  "source": "https://github.com/Amrr-Maherr/Charlotte--Sweets"
} as const satisfies ProjectContent;
