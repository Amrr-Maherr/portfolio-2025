import fresh0 from "../../../assets/images/projects/arasco/six-1.jpg";
import fresh1 from "../../../assets/images/projects/arasco/six-2.jpg";
import fresh2 from "../../../assets/images/projects/arasco/six-3.jpg";
import fresh3 from "../../../assets/images/projects/arasco/six-4.jpg";
import fresh4 from "../../../assets/images/projects/arasco/six-5.jpg";
import fresh5 from "../../../assets/images/projects/arasco/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Arasco - Agricultural Supplies Storefront",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "An Arabic eCommerce storefront on Zid for Al-Emar International, an agricultural supplies store. It includes crop protection, herbicides and fertilizers categories with product listings.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Categories",caption: "Categories",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Crop protection",caption: "Crop protection",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Herbicides",caption: "Herbicides",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Herbicide products",caption: "Herbicide products",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Fertilizers",caption: "Fertilizers",natural:true} }
],
  "live": "https://shop.al-emar.com"
} as const satisfies ProjectContent;
