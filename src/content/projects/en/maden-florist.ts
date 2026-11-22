import screen from "../../../assets/images/projects/maden-florist/screen-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Maden Florist",
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
        "alt": "Maden Florist",
        "caption": "Flowers and gifts storefront"
      }
    }
  ]
} as const satisfies ProjectContent;
