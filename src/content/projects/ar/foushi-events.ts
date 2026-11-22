import view1 from "../../../assets/images/projects/foushi-events/view-1.jpg";
import view2 from "../../../assets/images/projects/foushi-events/view-2.jpg";
import view3 from "../../../assets/images/projects/foushi-events/view-3.jpg";
import view4 from "../../../assets/images/projects/foushi-events/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "فوشي لتنظيم الفعاليات",
  "theme": "light",
  "tags": [
    "react",
    "typescript",
    "vite",
    "shadcn",
    "tailwind",
    "tanstack",
    "framer",
    "express"
  ],
  "videoBorder": false,
  "description": "موقع عربي لإدارة وتنظيم الفعاليات يشمل التخطيط والتنسيق والديكور والإضاءة والصوت والتصوير مع نموذج تواصل وحجز، مبني بـReact وTypeScript وVite وshadcn/ui.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "الصفحة الرئيسية، معاينة محلية للتطبيق",
        "caption": "الصفحة الرئيسية، معاينة محلية للتطبيق"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "عرض الخدمات، معاينة محلية للتطبيق",
        "caption": "عرض الخدمات، معاينة محلية للتطبيق"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "نبذة عن الشركة، معاينة محلية للتطبيق",
        "caption": "نبذة عن الشركة، معاينة محلية للتطبيق"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "قسم التواصل، معاينة محلية للتطبيق",
        "caption": "قسم التواصل، معاينة محلية للتطبيق"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "أهم المميزات",
        "items": [
          "عرض خدمات تنظيم الفعاليات بالكامل",
          "نموذج تواصل وحجز بواجهة عربية",
          "واجهة عربية متجاوبة (RTL)"
        ]
      }
    }
  ],
  "source": "https://github.com/Amrr-Maherr/saudia-elegance-events"
} as const satisfies ProjectContent;
