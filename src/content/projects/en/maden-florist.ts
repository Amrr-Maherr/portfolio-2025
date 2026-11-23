import fresh0 from "../../../assets/images/projects/maden-florist/six-1.jpg";
import fresh1 from "../../../assets/images/projects/maden-florist/six-2.jpg";
import gallery3 from "../../../assets/images/projects/maden-florist/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/maden-florist/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/maden-florist/gallery-2.jpg";
import screen from "../../../assets/images/projects/maden-florist/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Maden Florist - Flowers and Gifts Store",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://madenflorist.com/",
  "description": "An online flower and gift store with collections for bouquets, flower vases, and table arrangements, plus product browsing and a shopping cart.",
  "components": [
{
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        natural: true,
        "alt": "Maden Florist",
        "caption": "Flowers and gifts storefront"
      }
    },
{ type: "media", props: { type: "image", src: gallery1, alt: "Brands and special occasions", caption: "Brands and special occasions", natural: true } },
{ type: "media", props: { type: "image", src: gallery2, alt: "Flower arrangement product details", caption: "Flower arrangement product details", natural: true } },
{ type: "media", props: { type: "image", src: gallery3, alt: "Flower-vase collection and filters", caption: "Flower-vase collection and filters", natural: true } },
{ type: "media", props: {type: "image",src: fresh0,alt: "Flower bouquets collection",caption: "Flower bouquets collection",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Table arrangements collection",caption: "Table arrangements collection",natural:true} }
]
} as const satisfies ProjectContent;
