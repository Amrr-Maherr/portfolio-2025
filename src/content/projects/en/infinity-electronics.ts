import fresh0 from "../../../assets/images/projects/infinity-electronics/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-electronics/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-electronics/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-electronics/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-electronics/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-electronics/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Infinity Electronics - Electronics Storefront (Zid)",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic right-to-left electronics storefront on Zid with category navigation, promotional sections, product listings and price filters. Product pages present image galleries, descriptions, pricing, quantity controls, and cart and wishlist options.",
  "live": "https://p8bg4g.zid.store/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage and navigation",caption: "Homepage and navigation",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Category tiles and campaign",caption: "Category tiles and campaign",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Catalogue header",caption: "Catalogue header",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product grid and filters",caption: "Product grid and filters",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Gallery and payment information panels",caption: "Gallery and payment information panels",natural:true} }
]
} as const satisfies ProjectContent;
