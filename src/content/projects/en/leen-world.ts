import fresh0 from "../../../assets/images/projects/leen-world/six-1.jpg";
import fresh1 from "../../../assets/images/projects/leen-world/six-2.jpg";
import fresh2 from "../../../assets/images/projects/leen-world/six-3.jpg";
import fresh3 from "../../../assets/images/projects/leen-world/six-4.jpg";
import fresh4 from "../../../assets/images/projects/leen-world/six-5.jpg";
import fresh5 from "../../../assets/images/projects/leen-world/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Leen World - Dates and Gifts Store",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://leenworld.com/",
  "description": "An online store for premium Saudi dates, maamoul, and gifts, with product categories and an Arabic storefront.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Storefront homepage",caption: "Storefront homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Product categories",caption: "Product categories",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Featured product cards",caption: "Featured product cards",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Saqaie dates product detail",caption: "Saqaie dates product detail",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product information accordions",caption: "Product information accordions",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Related product categories",caption: "Related product categories",natural:true} }
]
} as const satisfies ProjectContent;
