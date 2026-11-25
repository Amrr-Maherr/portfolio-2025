import fresh0 from "../../../assets/images/projects/safeside/six-1.jpg";
import fresh1 from "../../../assets/images/projects/safeside/six-2.jpg";
import fresh2 from "../../../assets/images/projects/safeside/six-3.jpg";
import fresh3 from "../../../assets/images/projects/safeside/six-4.jpg";
import fresh4 from "../../../assets/images/projects/safeside/six-5.jpg";
import fresh5 from "../../../assets/images/projects/safeside/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "SafeSide - Safety Products Storefront (Zid)",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "A storefront for SafeSide, a Saudi safety products brand, built on Zid. It covers fire extinguishers, best sellers, customer reviews, product bundles and safety grip gel.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Fire extinguisher product",caption: "Fire extinguisher product",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Best sellers",caption: "Best sellers",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Customer reviews",caption: "Customer reviews",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product bundle",caption: "Product bundle",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Grip gel product",caption: "Grip gel product",natural:true} }
],
  "live": "https://safeside.sa"
} as const satisfies ProjectContent;
