import fresh0 from "../../../assets/images/projects/sakib/six-1.jpg";
import fresh1 from "../../../assets/images/projects/sakib/six-2.jpg";
import fresh2 from "../../../assets/images/projects/sakib/six-3.jpg";
import fresh3 from "../../../assets/images/projects/sakib/six-4.jpg";
import fresh4 from "../../../assets/images/projects/sakib/six-5.jpg";
import fresh5 from "../../../assets/images/projects/sakib/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Sakb Perfumes - Fragrance Store",
  "theme": "light",
  "tags": [
    "zid",
    "ecommerce"
  ],
  "videoBorder": false,
  "description": "An Arabic fragrance storefront for Sakb Perfumes on the Zid platform, presenting the brand, perfume collections and product-shopping interfaces.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Perfume product cards",caption: "Perfume product cards",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Customer reviews section",caption: "Customer reviews section",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product catalog",caption: "Product catalog",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Mirage Musk product detail",caption: "Mirage Musk product detail",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Leather Noir product detail",caption: "Leather Noir product detail",natural:true} }
],
  "live": "https://sakbperfume.com/"
} as const satisfies ProjectContent;
