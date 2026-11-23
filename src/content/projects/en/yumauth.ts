import fresh0 from "../../../assets/images/projects/yumauth/six-1.jpg";
import fresh1 from "../../../assets/images/projects/yumauth/six-2.jpg";
import view1 from "../../../assets/images/projects/yumauth/view-1.jpg";
import view2 from "../../../assets/images/projects/yumauth/view-2.jpg";
import view3 from "../../../assets/images/projects/yumauth/view-3.jpg";
import view4 from "../../../assets/images/projects/yumauth/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "YumAuth - Recipe Browser",
  "theme": "light",
  "tags": [
    "react",
    "vite",
    "tailwind",
    "tanstack",
    "auth"
  ],
  "videoBorder": false,
  "description": "A recipe browsing app built with React and Vite, with search, recipe detail pages, and sign-in and registration screens, using React Query and Tailwind CSS.",
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
          "Sign-in and registration screens",
          "Clean sign-in/sign-up flow"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "Search results, screenshot supplied in source repository",caption: "Search results, screenshot supplied in source repository",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Recipe catalogue, screenshot supplied in source repository",caption: "Recipe catalogue, screenshot supplied in source repository",natural:true} }
],
  "source": "https://github.com/Amrr-Maherr/YumAuth"
} as const satisfies ProjectContent;
