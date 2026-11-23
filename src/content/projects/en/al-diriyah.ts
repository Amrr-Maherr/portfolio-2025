import view1 from "../../../assets/images/projects/al-diriyah/view-1.jpg";
import view2 from "../../../assets/images/projects/al-diriyah/view-2.jpg";
import view3 from "../../../assets/images/projects/al-diriyah/view-3.jpg";
import view4 from "../../../assets/images/projects/al-diriyah/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Diriyah Club - Official Website",
  "theme": "light",
  "tags": [
    "rtl"
  ],
  "description": "An official club website presenting Diriyah Club news, match fixtures and results, the club vision and values, a store section and a photo gallery. The front-end brings these sections together in a branded Arabic interface with English navigation available.",
  "live": "https://www.diriyahclub.sa/ar/",
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
        "alt": "Club news",
        "caption": "Club news",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Fixtures and results",
        "caption": "Fixtures and results",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Club vision",
        "caption": "Club vision",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
