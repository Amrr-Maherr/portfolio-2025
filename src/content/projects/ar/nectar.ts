import shot1 from "../../../assets/images/projects/nectar/nectar-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Nectar - تطبيق تسوق بقالة",
  theme: "light",
  tags: ["reactnative", "expo", "javascript"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Nectar",
  description:
    "تطبيق موبايل لتسوق البقالة مبني بـ React Native وExpo: تصفح المتجر وتصنيفات المنتجات وشاشات السلة بواجهة عصرية نظيفة.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "شاشات المتجر", caption: "شاشات تصفح المتجر (نسخة Expo)", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "أهم المميزات",
        items: [
          "تصفح المتجر مع تصنيفات المنتجات",
          "شاشات تفاصيل المنتج والسلة",
          "واجهة موبايل عصرية نظيفة",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "تفاصيل تقنية",
        text: "مبني بـ React Native وExpo.",
      },
    },
  ],
} as const satisfies ProjectContent;
