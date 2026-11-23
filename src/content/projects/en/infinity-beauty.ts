import fresh0 from "../../../assets/images/projects/infinity-beauty/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-beauty/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-beauty/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-beauty/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-beauty/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-beauty/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Infinity Beauty - Beauty and Fashion Storefront (Zid)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic right-to-left beauty and fashion storefront on Zid for perfumes, cosmetics, clothing, and accessories. It includes category browsing, product listings and price filters, plus product detail pages with image galleries, prices, quantity controls, and cart options.",
  "live": "https://jtssiu.zid.store/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Demo homepage",caption: "Demo homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Categories and loyalty banner",caption: "Categories and loyalty banner",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Loyalty benefits section",caption: "Loyalty benefits section",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product gallery and payment-information layout",caption: "Product gallery and payment-information layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Product description and related products",caption: "Product description and related products",natural:true} }
]
} as const satisfies ProjectContent;
