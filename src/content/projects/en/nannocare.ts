import view1 from "../../../assets/images/projects/nannocare/view-1.jpg";
import view2 from "../../../assets/images/projects/nannocare/view-2.jpg";
import view3 from "../../../assets/images/projects/nannocare/view-3.jpg";
import view4 from "../../../assets/images/projects/nannocare/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Nannocare",
  "theme": "light",
  "tags": [
    "react",
    "ecommerce",
    "responsive",
    "accessibility"
  ],
  "videoBorder": false,
  "description": "Front-end development for Nannocare&#x27;s global e-commerce website: reusable React components and Hooks, responsive layouts across devices, faster loading with reduced layout shifts, and accessibility and visual-consistency improvements.",
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
        "alt": "Product collection",
        "caption": "Product collection"
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
        "alt": "Brand technology story",
        "caption": "Brand technology story"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Reusable React functional components and Hooks",
          "Responsive layouts for mobile, tablet, and desktop",
          "Performance optimization with minimized layout shifts",
          "Accessibility and visual consistency improvements",
          "Codebase refactoring for clean architecture"
        ]
      }
    }
  ],
  "live": "https://nannocare.com/"
} as const satisfies ProjectContent;
