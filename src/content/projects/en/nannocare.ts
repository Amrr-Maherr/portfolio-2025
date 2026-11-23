import fresh0 from "../../../assets/images/projects/nannocare/six-1.jpg";
import fresh1 from "../../../assets/images/projects/nannocare/six-2.jpg";
import fresh2 from "../../../assets/images/projects/nannocare/six-3.jpg";
import fresh3 from "../../../assets/images/projects/nannocare/six-4.jpg";
import fresh4 from "../../../assets/images/projects/nannocare/six-5.jpg";
import fresh5 from "../../../assets/images/projects/nannocare/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Nannocare - Personal Care Store",
  "theme": "light",
  "tags": [
    "react",
    "ecommerce",
    "responsive",
    "accessibility"
  ],
  "videoBorder": false,
  "description": "An e-commerce website for Nannocare personal-care products. It combines product collections, product detail pages, brand and technology information, and shopping controls in a product-focused storefront.",
  "components": [
{
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Product collection and detail interfaces",
          "Responsive layouts for mobile, tablet, and desktop",
          "Brand and product-technology information",
          "Product imagery and shopping controls",
          "Product-focused storefront navigation"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage video hero",caption: "Homepage video hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Product information section",caption: "Product information section",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Technology information layout",caption: "Technology information layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Product catalog",caption: "Product catalog",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Multipack product detail and gallery",caption: "Multipack product detail and gallery",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Lower product information section",caption: "Lower product information section",natural:true} }
],
  "live": "https://nannocare.com/"
} as const satisfies ProjectContent;
