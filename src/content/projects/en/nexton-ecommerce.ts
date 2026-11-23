import fresh0 from "../../../assets/images/projects/nexton-ecommerce/six-1.jpg";
import fresh1 from "../../../assets/images/projects/nexton-ecommerce/six-2.jpg";
import view1 from "../../../assets/images/projects/nexton-ecommerce/view-1.jpg";
import view2 from "../../../assets/images/projects/nexton-ecommerce/view-2.jpg";
import view3 from "../../../assets/images/projects/nexton-ecommerce/view-3.jpg";
import view4 from "../../../assets/images/projects/nexton-ecommerce/view-4.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Nexton E-Commerce",
  "theme": "light",
  "tags": [
    "next",
    "react",
    "javascript",
    "tailwind",
    "redux",
    "tanstack",
    "axios",
    "radix"
  ],
  "videoBorder": false,
  "description": "A modern front-end e-commerce application built with Next.js 15 and React 19 from a custom Figma design, featuring dynamic product pages, an interactive cart and checkout flow, and PayPal payments.",
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
        "alt": "Product details",
        "caption": "Product details"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view3,
        "natural": true,
        "alt": "Categories and recommendations",
        "caption": "Categories and recommendations"
      }
    },
{
      "type": "media",
      "props": {
        "type": "image",
        "src": view4,
        "natural": true,
        "alt": "Login",
        "caption": "Login"
      }
    },
{
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Dynamic product pages with smooth navigation",
          "Interactive shopping cart and checkout",
          "Redux Toolkit state management for cart and user flow",
          "Framer Motion and GSAP animations",
          "PayPal payment gateway integration"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "Best sellers product cards",caption: "Best sellers product cards",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Winter collection campaign",caption: "Winter collection campaign",natural:true} }
],
  "live": "https://nexton-e-commerce.vercel.app/",
  "source": "https://github.com/Amrr-Maherr/nexton-e-commerce"
} as const satisfies ProjectContent;
