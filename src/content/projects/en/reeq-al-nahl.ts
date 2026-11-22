import view1 from "../../../assets/images/projects/reeq-al-nahl/view-1.jpg";
import view2 from "../../../assets/images/projects/reeq-al-nahl/view-2.jpg";
import view3 from "../../../assets/images/projects/reeq-al-nahl/view-3.jpg";
import view4 from "../../../assets/images/projects/reeq-al-nahl/view-4.jpg";
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
  "description": "A production eCommerce store for a Saudi honey retailer, built on the Zid platform using the Zid Platform API, Redux, and component-driven development with Storybook.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "Homepage",
        "caption": "Homepage"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "Honey collection",
        "caption": "Honey collection"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Product details",
        "caption": "Product details"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Bestsellers",
        "caption": "Bestsellers"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Production store on the Zid platform",
          "Component-driven development with Storybook",
          "State management with Redux",
          "Arabic storefront for a retailer with physical branches"
        ]
      }
    }
  ],
  "live": "https://reeqalnahl.com/"
} as const satisfies ProjectContent;
