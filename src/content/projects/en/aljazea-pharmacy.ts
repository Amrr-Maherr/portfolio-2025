import fresh0 from "../../../assets/images/projects/aljazea-pharmacy/six-1.jpg";
import fresh1 from "../../../assets/images/projects/aljazea-pharmacy/six-2.jpg";
import fresh2 from "../../../assets/images/projects/aljazea-pharmacy/six-3.jpg";
import fresh3 from "../../../assets/images/projects/aljazea-pharmacy/six-4.jpg";
import fresh4 from "../../../assets/images/projects/aljazea-pharmacy/six-5.jpg";
import fresh5 from "../../../assets/images/projects/aljazea-pharmacy/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Al Jazea Pharmacy - Online Store",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://aljazeaonline.com/",
  "description": "An online pharmacy storefront with product search, category navigation, promotional collections, and shopping cart access.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Storefront homepage",caption: "Storefront homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Bestselling products",caption: "Bestselling products",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Promotional product banner",caption: "Promotional product banner",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Payment-information and service panel",caption: "Payment-information and service panel",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Product catalogue",caption: "Product catalogue",natural:true} }
]
} as const satisfies ProjectContent;
