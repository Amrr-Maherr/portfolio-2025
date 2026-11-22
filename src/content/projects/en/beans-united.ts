import view1 from "../../../assets/images/projects/beans-united/view-1.jpg";
import view2 from "../../../assets/images/projects/beans-united/view-2.jpg";
import view3 from "../../../assets/images/projects/beans-united/view-3.jpg";
import view4 from "../../../assets/images/projects/beans-united/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Beans United",
  "theme": "light",
  "tags": [
    "ecommerce",
    "coffee",
    "bilingual",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A Saudi specialty-coffee e-commerce platform combining premium coffee brands, brewing tools, a loyalty program, educational coffee content, and professional machine maintenance services in one storefront.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "English homepage",
        "caption": "English homepage"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "Coffee brands",
        "caption": "Coffee brands"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Arabic homepage",
        "caption": "Arabic homepage"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Coffee origins map",
        "caption": "Coffee origins map"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Curated specialty coffee brands and brewing tools",
          "Integrated loyalty program",
          "Educational content about coffee origins",
          "Professional coffee machine maintenance (Team Jabber)",
          "Clean responsive design"
        ]
      }
    }
  ],
  "live": "https://beansunited.sa"
} as const satisfies ProjectContent;
