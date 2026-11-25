import shot1 from "../../../assets/images/projects/o-matcha/shot-1.jpg";
import shot2 from "../../../assets/images/projects/o-matcha/shot-2.jpg";
import shot3 from "../../../assets/images/projects/o-matcha/shot-3.jpg";
import shot4 from "../../../assets/images/projects/o-matcha/shot-4.jpg";
import shot5 from "../../../assets/images/projects/o-matcha/shot-5.jpg";
import shot6 from "../../../assets/images/projects/o-matcha/shot-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "O Matcha - Matcha and Tea Accessories Online Store",
  theme: "light",
  tags: ["ecommerce", "rtl"],
  videoBorder: false,
  live: "https://omatcha.sa/",
  description: "An online store for matcha, tea and matcha preparation tools, with product categories, product pages and a cart and checkout flow.",
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
          "Matcha, tea and tools catalog",
          "Product pages with details",
          "Cart and checkout flow",
          "Clean responsive layout",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
