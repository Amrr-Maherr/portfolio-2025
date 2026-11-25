import shot1 from "../../../assets/images/projects/nectar/nectar-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Nectar - Grocery Shopping Mobile App",
  theme: "light",
  tags: ["reactnative", "expo", "javascript"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Nectar",
  description:
    "A grocery shopping mobile app built with React Native and Expo: store browsing, product categories and cart screens with a clean modern UI.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "App store screens", caption: "Store browsing screens (Expo build)", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Store browsing with product categories",
          "Product detail and cart screens",
          "Clean modern mobile UI",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React Native and Expo.",
      },
    },
  ],
} as const satisfies ProjectContent;
