import view1 from "../../../assets/images/projects/ecommerce-dashboard/view-1.jpg";
import view2 from "../../../assets/images/projects/ecommerce-dashboard/view-2.jpg";
import view3 from "../../../assets/images/projects/ecommerce-dashboard/view-3.jpg";
import view4 from "../../../assets/images/projects/ecommerce-dashboard/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "لوحة إدارة متجر إلكتروني",
  "theme": "light",
  "tags": [],
  "description": "عرض تجريبي للوحة إدارة متجر مبني باستخدام Next.js وReact وTypeScript. يتصل بواجهة RouteMisr لإدارة المنتجات والأقسام والعلامات التجارية، وDummyJSON للمستخدمين والطلبات. يشمل رسوماً بيانية وجداول بترقيم الصفحات والفرز والبحث وصفحات تفاصيل وتسجيل الدخول.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "alt": "الصفحة الترحيبية",
        "caption": "الصفحة الترحيبية",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "alt": "نظرة عامة (بيانات تجريبية)",
        "caption": "نظرة عامة (بيانات تجريبية)",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "جدول المنتجات (بيانات تجريبية)",
        "caption": "جدول المنتجات (بيانات تجريبية)",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "جدول الطلبات (بيانات تجريبية)",
        "caption": "جدول الطلبات (بيانات تجريبية)",
        "natural": true
      }
    }
  ],
  "live": "https://dashboard-bay-one.vercel.app/"
} as const satisfies ProjectContent;
