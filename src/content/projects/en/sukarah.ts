import view1 from "../../../assets/images/projects/sukarah/view-1.jpg";
import view2 from "../../../assets/images/projects/sukarah/view-2.jpg";
import view3 from "../../../assets/images/projects/sukarah/view-3.jpg";
import view4 from "../../../assets/images/projects/sukarah/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Sukarah - Cosmetics Online Store",
  "theme": "light",
  "tags": [],
  "description": "An online store for Sukarah, a Saudi cosmetics brand offering brow and lip products and curated bundles.<br/><br/>Store: https://sukarah.com/",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "alt": "Homepage",
        "caption": "Homepage",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "alt": "Category navigation",
        "caption": "Category navigation",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Product listing",
        "caption": "Product listing",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Product details",
        "caption": "Product details",
        "natural": true
      }
    }
  ],
  "live": "https://sukarah.com/"
} as const satisfies ProjectContent;
