import fresh0 from "../../../assets/images/projects/zeyada/six-1.jpg";
import fresh1 from "../../../assets/images/projects/zeyada/six-2.jpg";
import fresh2 from "../../../assets/images/projects/zeyada/six-3.jpg";
import fresh3 from "../../../assets/images/projects/zeyada/six-4.jpg";
import fresh4 from "../../../assets/images/projects/zeyada/six-5.jpg";
import fresh5 from "../../../assets/images/projects/zeyada/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Zeyada - Grocery Storefront Demo (Zid)",
  "theme": "light",
  "live": "https://neoxeroco.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A grocery-style storefront demo on Zid with an Arabic right-to-left interface, category navigation, product listings, filters, promotional sections, and product detail pages. The theme presents a multi-category shopping layout with search, wishlist, and cart controls. This is a demonstration store, not a live retail business.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage navigation and hero, storefront demo",caption: "Homepage navigation and hero, storefront demo",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Promotional layout, storefront demo",caption: "Promotional layout, storefront demo",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Category heading and breadcrumb, demo",caption: "Category heading and breadcrumb, demo",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Catalogue cards and filters, demo",caption: "Catalogue cards and filters, demo",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product detail layout, demo data",caption: "Product detail layout, demo data",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Quantity, gallery and information tabs, demo",caption: "Quantity, gallery and information tabs, demo",natural:true} }
]
} as const satisfies ProjectContent;
