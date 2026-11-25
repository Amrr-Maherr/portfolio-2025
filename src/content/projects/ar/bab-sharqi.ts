import shot1 from "../../../assets/images/projects/bab-sharqi/shot-1.jpg";
import shot2 from "../../../assets/images/projects/bab-sharqi/shot-2.jpg";
import shot3 from "../../../assets/images/projects/bab-sharqi/shot-3.jpg";
import shot4 from "../../../assets/images/projects/bab-sharqi/shot-4.jpg";
import shot5 from "../../../assets/images/projects/bab-sharqi/shot-5.jpg";
import shot6 from "../../../assets/images/projects/bab-sharqi/shot-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "باب شرقي - متجر حلويات شرقية أونلاين",
  theme: "light",
  tags: ["ecommerce", "rtl"],
  videoBorder: false,
  live: "https://bab-sharqi.com/ar",
  description: "متجر إلكتروني عربي للحلويات الشرقية الفاخرة، مع تصفح الأقسام وعلب الهدايا وسلة شراء وإتمام طلب كامل للسوق السعودي.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "الصفحة الرئيسية", caption: "الصفحة الرئيسية", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "عرض المتجر 2", caption: "عرض المتجر 2", natural: true } },
    { type: "media", props: { type: "image", src: shot3, alt: "عرض المتجر 3", caption: "عرض المتجر 3", natural: true } },
    { type: "media", props: { type: "image", src: shot4, alt: "عرض المتجر 4", caption: "عرض المتجر 4", natural: true } },
    { type: "media", props: { type: "image", src: shot5, alt: "عرض المتجر 5", caption: "عرض المتجر 5", natural: true } },
    { type: "media", props: { type: "image", src: shot6, alt: "عرض المتجر 6", caption: "عرض المتجر 6", natural: true } },
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "كتالوج حلويات شرقية فاخرة حسب الأقسام",
          "علب هدايا ومجموعات مميزة",
          "سلة شراء وإتمام الطلب",
          "واجهة عربية RTL متجاوبة مع الجوال",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
