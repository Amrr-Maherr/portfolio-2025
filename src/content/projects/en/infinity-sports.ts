import fresh0 from "../../../assets/images/projects/infinity-sports/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-sports/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-sports/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-sports/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-sports/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-sports/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Infinity Sports - Sportswear Storefront (Zid)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic right-to-left storefront on Zid for sportswear, footwear, bags, and fitness accessories. It includes category navigation, product listings with price filters, product image galleries, product details, and cart and wishlist controls.",
  "live": "https://arpasv.zid.store/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Hero and navigation",caption: "Hero and navigation",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "New product cards",caption: "New product cards",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Activity category panels",caption: "Activity category panels",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product gallery and shopping controls",caption: "Product gallery and shopping controls",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Catalogue and filters",caption: "Catalogue and filters",natural:true} }
]
} as const satisfies ProjectContent;
