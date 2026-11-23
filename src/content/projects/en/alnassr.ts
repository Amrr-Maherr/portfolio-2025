import fresh0 from "../../../assets/images/projects/alnassr/six-1.jpg";
import fresh1 from "../../../assets/images/projects/alnassr/six-2.jpg";
import fresh2 from "../../../assets/images/projects/alnassr/six-3.jpg";
import fresh3 from "../../../assets/images/projects/alnassr/six-4.jpg";
import fresh4 from "../../../assets/images/projects/alnassr/six-5.jpg";
import fresh5 from "../../../assets/images/projects/alnassr/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "AlNassr Official Store",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "A branded e-commerce storefront for AlNassr FC merchandise, presenting kits, training wear, lifestyle collections and accessories. The interface connects campaign-led landing pages, season-based collection browsing and product detail pages with imagery and size selection in an Arabic storefront.",
  "live": "https://store.alnassr.sa/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Storefront homepage",caption: "Storefront homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Bestselling kits",caption: "Bestselling kits",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Kits category hero",caption: "Kits category hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Season collections",caption: "Season collections",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Product gallery and payment-information layout",caption: "Product gallery and payment-information layout",natural:true} }
]
} as const satisfies ProjectContent;
