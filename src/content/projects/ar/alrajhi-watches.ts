import shot1 from "../../../assets/images/projects/alrajhi-watches/shot-1.jpg";
import shot2 from "../../../assets/images/projects/alrajhi-watches/shot-2.jpg";
import shot3 from "../../../assets/images/projects/alrajhi-watches/shot-3.jpg";
import shot4 from "../../../assets/images/projects/alrajhi-watches/shot-4.jpg";
import shot5 from "../../../assets/images/projects/alrajhi-watches/shot-5.jpg";
import shot6 from "../../../assets/images/projects/alrajhi-watches/shot-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "الراجحي للساعات - متجر ساعات أونلاين",
  theme: "light",
  tags: ["ecommerce", "rtl"],
  videoBorder: false,
  live: "https://alrajhiwatches.com/ar",
  description: "متجر إلكتروني عربي للساعات الرجالية والنسائية، مع تصفح العلامات والأقسام وصفحات المنتجات وخيارات الدفع بالتقسيط عبر تابي وتمارا.",
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
          "كتالوج ساعات رجالية ونسائية",
          "تصفح حسب العلامة والقسم",
          "خيارات التقسيط عبر تابي وتمارا",
          "واجهة عربية RTL متجاوبة مع الجوال",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
