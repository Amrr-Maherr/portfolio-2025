import gallery3 from "../../../assets/images/projects/aljazea-pharmacy/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/aljazea-pharmacy/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/aljazea-pharmacy/gallery-2.jpg";
import screen from "../../../assets/images/projects/aljazea-pharmacy/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Al Jazea Pharmacy - Online Store",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://aljazeaonline.com/",
  "description": "An online pharmacy storefront with product search, category navigation, promotional collections, and shopping cart access.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        natural: true,
        "alt": "Al Jazea Pharmacy",
        "caption": "Online pharmacy storefront"
      }
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "Product catalog", caption: "Product catalog", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "Product detail interface", caption: "Product detail interface", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "Featured products and offers", caption: "Featured products and offers", natural: true } }
  ]
} as const satisfies ProjectContent;
