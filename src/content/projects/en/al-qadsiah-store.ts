import shot1 from "../../../assets/images/projects/al-qadsiah-store/shot-1.jpg";
import shot2 from "../../../assets/images/projects/al-qadsiah-store/shot-2.jpg";
import shot3 from "../../../assets/images/projects/al-qadsiah-store/shot-3.jpg";
import shot4 from "../../../assets/images/projects/al-qadsiah-store/shot-4.jpg";
import shot5 from "../../../assets/images/projects/al-qadsiah-store/shot-5.jpg";
import shot6 from "../../../assets/images/projects/al-qadsiah-store/shot-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Al Qadsiah Club - Official Online Store",
  theme: "light",
  tags: ["ecommerce", "rtl"],
  videoBorder: false,
  live: "https://store.alqadsiah.com/",
  description: "An Arabic and English online store for the official Al Qadsiah club shop, selling the 26/27 home, away and third jerseys, shorts, accessories and kids kits. It has hero slides, category tiles, product grids and a sponsors footer.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "Homepage", caption: "Homepage", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "Store view 2", caption: "Store view 2", natural: true } },
    { type: "media", props: { type: "image", src: shot3, alt: "Store view 3", caption: "Store view 3", natural: true } },
    { type: "media", props: { type: "image", src: shot4, alt: "Store view 4", caption: "Store view 4", natural: true } },
    { type: "media", props: { type: "image", src: shot5, alt: "Store view 5", caption: "Store view 5", natural: true } },
    { type: "media", props: { type: "image", src: shot6, alt: "Store view 6", caption: "Store view 6", natural: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "26/27 home, away and third jerseys",
          "Category tiles and product grids",
          "Sponsors footer",
          "Arabic and English storefront",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
