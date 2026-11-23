import view1 from "../../../assets/images/projects/alsaif/view-1.jpg";
import view2 from "../../../assets/images/projects/alsaif/view-2.jpg";
import view3 from "../../../assets/images/projects/alsaif/view-3.jpg";
import view4 from "../../../assets/images/projects/alsaif/view-4.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "AlSaif Trading Agencies Store",
  "theme": "light",
  "tags": [
    "ecommerce",
    "rtl"
  ],
  "description": "An Arabic e-commerce storefront for AlSaif Trading Agencies, presenting home appliances, cookware, housewares, dallahs, teapots and pressure cookers. The interface brings together promotional landing sections, category browsing, product listings with sorting and filtering controls, and product detail pages with image galleries and product options.",
  "live": "https://alsaifco.sa/",
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
        "alt": "Home appliances category",
        "caption": "Home appliances category",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "alt": "Product details",
        "caption": "Product details",
        "natural": true
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "alt": "Pressure cookers category",
        "caption": "Pressure cookers category",
        "natural": true
      }
    }
  ]
} as const satisfies ProjectContent;
