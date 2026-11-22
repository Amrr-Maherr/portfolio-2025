import view1 from "../../../assets/images/projects/yumauth/view-1.jpg";
import view2 from "../../../assets/images/projects/yumauth/view-2.jpg";
import view3 from "../../../assets/images/projects/yumauth/view-3.jpg";
import view4 from "../../../assets/images/projects/yumauth/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "YumAuth",
  "theme": "light",
  "tags": [
    "react",
    "vite",
    "tailwind",
    "tanstack",
    "auth"
  ],
  "videoBorder": false,
  "description": "A recipe browsing app built with React and Vite, with real authentication-protected routes for searching and viewing recipe details, using React Query and Tailwind CSS.",
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
        "alt": "Recipe details, local app preview",
        "caption": "Recipe details, local app preview"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Login, local app preview",
        "caption": "Login, local app preview"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Registration, local app preview",
        "caption": "Registration, local app preview"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Browse, search, and view detailed recipes",
          "Authentication-gated protected routes",
          "Clean sign-in/sign-up flow"
        ]
      }
    }
  ],
  "source": "https://github.com/Amrr-Maherr/YumAuth"
} as const satisfies ProjectContent;
