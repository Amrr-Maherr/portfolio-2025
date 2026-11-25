import shot1 from "../../../assets/images/projects/reefi/shot-1.jpg";
import shot2 from "../../../assets/images/projects/reefi/shot-2.jpg";
import shot3 from "../../../assets/images/projects/reefi/shot-3.jpg";
import shot4 from "../../../assets/images/projects/reefi/shot-4.jpg";
import shot5 from "../../../assets/images/projects/reefi/shot-5.jpg";
import shot6 from "../../../assets/images/projects/reefi/shot-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "ريفي - متجر أرواب الحمام والمناشف أونلاين",
  theme: "light",
  tags: ["ecommerce", "rtl"],
  videoBorder: false,
  live: "https://reefi.me/",
  description: "متجر إلكتروني لأرواب الحمام والمناشف والمنسوجات المنزلية، مع عروض المنتجات وتصفح الأقسام وسلة شراء وإتمام الطلب.",
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
          "كتالوج أرواب ومناشف",
          "عروض ومنتجات مميزة",
          "صفحات المنتجات والسلة",
          "متجر متجاوب مع كل الشاشات",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
