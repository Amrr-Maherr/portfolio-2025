import fresh0 from "../../../assets/images/projects/inin-sport/six-1.jpg";
import fresh1 from "../../../assets/images/projects/inin-sport/six-2.jpg";
import gallery3 from "../../../assets/images/projects/inin-sport/gallery-3.jpg";
import gallery2 from "../../../assets/images/projects/inin-sport/gallery-2.jpg";
import gallery1 from "../../../assets/images/projects/inin-sport/gallery-1.jpg";
import screen from "../../../assets/images/projects/inin-sport/screen-0.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "ININ Sport - Sportswear Store",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://ininsport.com/",
  "description": "A sportswear online store with training, padel, and running collections, product listings, and English and Arabic storefront options.",
  "components": [
{
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        natural: true,
        "alt": "ININ Sport",
        "caption": "Sportswear and activewear storefront"
      }
    },
{ type: "media", props: { type: "image", src: gallery1, alt: "Training collection and product filters", caption: "Training collection and product filters", natural: true } },
{ type: "media", props: { type: "image", src: gallery2, alt: "Product details and size options", caption: "Product details and size options", natural: true } },
{ type: "media", props: { type: "image", src: gallery3, alt: "Shop-by-category section", caption: "Shop-by-category section", natural: true } },
{ type: "media", props: {type: "image",src: fresh0,alt: "Padel collection and filters",caption: "Padel collection and filters",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Running collection and active filters",caption: "Running collection and active filters",natural:true} }
]
} as const satisfies ProjectContent;
