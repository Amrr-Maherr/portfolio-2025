
import type { ProjectContent } from "../../types";

export default {
  title: "Legends - لوحات إدارة المهام والموظفين",
  theme: "dark",
  tags: ["react", "javascript", "dashboard", "bootstrap"],
  videoBorder: false,
  description:
    "تطبيق ويب داخلي لإدارة المهام والموظفين بلوحتين: لوحة تحكم المدير (الأقسام والورديات وإسناد المهام وتحليلات Chart.js) ولوحة تحكم الموظف (الملف الشخصي والمهام المسندة)، مع مصادقة كاملة. مشروع شركة خاص، لذا لا يوجد رابط أو لقطات عامة.",
  components: [
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "لوحة المدير: الأقسام والورديات وإسناد المهام",
          "رسوم تحليلية مبنية بـ Chart.js",
          "لوحة الموظف: الملف الشخصي والمهام المسندة",
          "مصادقة كاملة وعروض حسب الدور",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "تطبيق React أحادي الصفحة مع تحليلات Chart.js وتدفق مصادقة كامل. المستودع والنشر خاصان.",
      },
    },
  ],
} as const satisfies ProjectContent;
