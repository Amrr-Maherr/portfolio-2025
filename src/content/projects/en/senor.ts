import fresh0 from "../../../assets/images/projects/senor/six-1.jpg";
import fresh1 from "../../../assets/images/projects/senor/six-2.jpg";
import fresh2 from "../../../assets/images/projects/senor/six-3.jpg";
import fresh3 from "../../../assets/images/projects/senor/six-4.jpg";
import fresh4 from "../../../assets/images/projects/senor/six-5.jpg";
import fresh5 from "../../../assets/images/projects/senor/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Senor - Pet Storefront Theme (Zid)",
  "theme": "light",
  "live": "https://neoxero03.zidthemestore.com/ar-us/",
  "tags": [
    "zid",
    "ecommerce",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A pet-storefront theme on Zid with an Arabic right-to-left interface, category navigation, product grids, price filters, and product detail pages. The demo presents food and care products for dogs, cats, and fish, with product images, pricing, stock information, and quantity controls.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Theme demo homepage",caption: "Theme demo homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Bestselling products",caption: "Bestselling products",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Promotional category panels",caption: "Promotional category panels",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product description and payment-information layout",caption: "Product description and payment-information layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Lower catalogue view",caption: "Lower catalogue view",natural:true} }
]
} as const satisfies ProjectContent;
