import shot1 from "../../../assets/images/projects/daffah/shot-1.jpg";
import shot2 from "../../../assets/images/projects/daffah/shot-2.jpg";
import shot3 from "../../../assets/images/projects/daffah/shot-3.jpg";
import shot4 from "../../../assets/images/projects/daffah/shot-4.jpg";
import shot5 from "../../../assets/images/projects/daffah/shot-5.jpg";
import shot6 from "../../../assets/images/projects/daffah/shot-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Daffah - Saudi Thobes and Menswear Online Store",
  theme: "light",
  tags: ["ecommerce", "rtl"],
  videoBorder: false,
  live: "https://daffah.sa/",
  description: "An Arabic online store for Saudi thobes and menswear, with product categories, fabric and style options and a cart and checkout flow.",
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
          "Thobes and menswear catalog",
          "Product pages with options",
          "Cart and checkout flow",
          "Arabic RTL, mobile-friendly layout",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
