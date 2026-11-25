import shot1 from "../../../assets/images/projects/qafalah-alayman/qafalah-alayman-1.jpg";
import shot2 from "../../../assets/images/projects/qafalah-alayman/qafalah-alayman-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "قافلة الأيمن - موقع حجز عمرة وسفر",
  theme: "light",
  tags: ["react", "javascript", "vite", "bootstrap", "rtl"],
  videoBorder: false,
  live: "https://qafalah-alayman.vercel.app",
  source: "https://github.com/Amrr-Maherr/qafalah-alayman",
  description:
    "موقع عربي لحجز العمرة والسفر مبني بـ React وVite: صفحة رئيسية مع قسم بطل، وحجز باقات العمرة، ونماذج حجز الليموزين والطيران، وفوتر مع اشتراك بالنشرة البريدية. واجهة RTL بالكامل.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "قسم البطل في الصفحة الرئيسية", caption: "قسم البطل في الصفحة الرئيسية", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "نموذج حجز الليموزين", caption: "نموذج حجز الليموزين", natural: true } },
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "تدفق حجز باقات العمرة",
          "نموذج حجز الليموزين",
          "نموذج حجز الطيران",
          "فوتر مع اشتراك بالنشرة البريدية",
          "واجهة عربية RTL بالكامل",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "مبني بـ React وVite كتطبيق صفحة واحدة مع توجيه من جهة العميل، منشور على Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
