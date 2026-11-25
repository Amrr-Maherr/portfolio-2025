
import type { ProjectContent } from "../../types";

export default {
  title: "Products Dashboard - لوحة تحكم CRUD",
  theme: "light",
  tags: ["react", "javascript", "bootstrap", "dashboard"],
  videoBorder: false,
  live: "https://products-dashboard-five.vercel.app/",
  description:
    "لوحة تحكم لإدارة المنتجات والتصنيفات: عرض القوائم مع بحث وترقيم صفحات، وتدفقات إنشاء وتعديل وحذف، باستخدام json-server وDummyJSON كمصادر بيانات.",
  components: [
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "عرض المنتجات والتصنيفات مع البحث",
          "تدفقات الإنشاء والتعديل والحذف",
          "ترقيم صفحات للقوائم الكبيرة",
          "بيانات تجريبية من DummyJSON عبر json-server",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "لوحة تحكم React تستهلك نقاط REST من json-server وواجهة DummyJSON. منشورة على Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
