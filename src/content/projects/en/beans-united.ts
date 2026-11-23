import view1 from "../../../assets/images/projects/beans-united/view-1.jpg";
import view2 from "../../../assets/images/projects/beans-united/view-2.jpg";
import view3 from "../../../assets/images/projects/beans-united/view-3.jpg";
import view4 from "../../../assets/images/projects/beans-united/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Beans United",
  "theme": "light",
  "tags": [
    "coffee",
    "bilingual",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A bilingual corporate website for a Saudi specialty-coffee business. It presents the company and its coffee origins, brands and business partnerships, with dedicated Investor Relations, Blogs and Careers pages.",
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
        "alt": "Investor Relations",
        "caption": "Investor Relations"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Blogs",
        "caption": "Blogs"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Careers",
        "caption": "Careers"
      }
    }
  ],
  "live": "https://beansunited.sa"
} as const satisfies ProjectContent;
