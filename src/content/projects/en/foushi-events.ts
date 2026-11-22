import view1 from "../../../assets/images/projects/foushi-events/view-1.jpg";
import view2 from "../../../assets/images/projects/foushi-events/view-2.jpg";
import view3 from "../../../assets/images/projects/foushi-events/view-3.jpg";
import view4 from "../../../assets/images/projects/foushi-events/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Foushi Events",
  "theme": "light",
  "tags": [
    "react",
    "typescript",
    "vite",
    "shadcn",
    "tailwind",
    "tanstack",
    "framer",
    "express"
  ],
  "videoBorder": false,
  "description": "An Arabic-first event management website covering planning, coordination, decor, lighting, sound, and photography, with a contact/booking flow, built with React, TypeScript, Vite, and shadcn/ui.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view1,
        "natural": true,
        "alt": "Homepage, local app preview",
        "caption": "Homepage, local app preview"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view2,
        "natural": true,
        "alt": "Service showcase, local app preview",
        "caption": "Service showcase, local app preview"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "About the company, local app preview",
        "caption": "About the company, local app preview"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Contact section, local app preview",
        "caption": "Contact section, local app preview"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Service showcase for full event organization",
          "Contact and booking flow (Arabic UI)",
          "Arabic-first responsive interface (RTL)"
        ]
      }
    }
  ],
  "source": "https://github.com/Amrr-Maherr/saudia-elegance-events"
} as const satisfies ProjectContent;
