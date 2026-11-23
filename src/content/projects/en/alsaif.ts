import fresh0 from "../../../assets/images/projects/alsaif/six-1.jpg";
import fresh1 from "../../../assets/images/projects/alsaif/six-2.jpg";
import fresh2 from "../../../assets/images/projects/alsaif/six-3.jpg";
import fresh3 from "../../../assets/images/projects/alsaif/six-4.jpg";
import fresh4 from "../../../assets/images/projects/alsaif/six-5.jpg";
import fresh5 from "../../../assets/images/projects/alsaif/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "AlSaif Trading Agencies Store",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic e-commerce storefront for AlSaif Trading Agencies, presenting home appliances, cookware, housewares, dallahs, teapots and pressure cookers. The interface brings together promotional landing sections, category browsing, product listings with sorting and filtering controls, and product detail pages with image galleries and product options.",
  "live": "https://alsaifco.sa/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Storefront homepage",caption: "Storefront homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Bestselling products",caption: "Bestselling products",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Electrical appliances banner",caption: "Electrical appliances banner",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Cookware collection",caption: "Cookware collection",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Heater product detail",caption: "Heater product detail",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Product gallery and payment-information layout",caption: "Product gallery and payment-information layout",natural:true} }
]
} as const satisfies ProjectContent;
