import view1 from "../../../assets/images/projects/charlottesweets/view-1.jpg";
import view2 from "../../../assets/images/projects/charlottesweets/view-2.jpg";
import view3 from "../../../assets/images/projects/charlottesweets/view-3.jpg";
import view4 from "../../../assets/images/projects/charlottesweets/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Charlotte Sweets",
  "theme": "light",
  "tags": [
    "react",
    "bootstrap",
    "axios",
    "dashboard",
    "maps"
  ],
  "videoBorder": false,
  "description": "A sweet shop web app with a product storefront and a control panel for orders, branches, and reports/statistics, built with React, Bootstrap, and Axios on an external API, with Leaflet maps for delivery locations.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "Dashboard, recovered LinkedIn screenshot",
        "caption": "Dashboard, recovered LinkedIn screenshot"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "Branches, recovered LinkedIn screenshot",
        "caption": "Branches, recovered LinkedIn screenshot"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Branch map, recovered LinkedIn screenshot",
        "caption": "Branch map, recovered LinkedIn screenshot"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Login, recovered LinkedIn screenshot",
        "caption": "Login, recovered LinkedIn screenshot"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Product showcase storefront",
          "Control panel: orders, branches, managers, statistics",
          "Reports and statistics dashboards",
          "Leaflet maps for delivery locations"
        ]
      }
    },
    {
      "type": "text",
      "props": {
        "title": "Screenshot note",
        "text": "Screenshots recovered from LinkedIn. The external backend was unavailable when checked on 22 November 2026."
      }
    }
  ],
  "source": "https://github.com/Amrr-Maherr/Charlotte--Sweets"
} as const satisfies ProjectContent;
