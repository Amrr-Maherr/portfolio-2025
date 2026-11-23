import fresh0 from "../../../assets/images/projects/reeq-al-nahl/six-1.jpg";
import fresh1 from "../../../assets/images/projects/reeq-al-nahl/six-2.jpg";
import fresh2 from "../../../assets/images/projects/reeq-al-nahl/six-3.jpg";
import fresh3 from "../../../assets/images/projects/reeq-al-nahl/six-4.jpg";
import fresh4 from "../../../assets/images/projects/reeq-al-nahl/six-5.jpg";
import fresh5 from "../../../assets/images/projects/reeq-al-nahl/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Reeq Al Nahl - Honey & Bee Products Store",
  "theme": "light",
  "tags": [
    "zid",
    "redux",
    "storybook",
    "api"
  ],
  "videoBorder": false,
  "description": "An Arabic honey and bee-products storefront on the Zid platform. Its interface brings together promotional sections, product collections, catalogue cards, product detail pages and shopping controls for a multi-category honey retailer.",
  "components": [
{
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Production store on the Zid platform",
          "Honey and bee-product collections",
          "Product details and shopping controls",
          "Arabic storefront for a retailer with physical branches"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Product categories",caption: "Product categories",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Honey collection banner",caption: "Honey collection banner",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Bestselling products",caption: "Bestselling products",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product detail layout",caption: "Product detail layout",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Product description section",caption: "Product description section",natural:true} }
],
  "live": "https://reeqalnahl.com/"
} as const satisfies ProjectContent;
