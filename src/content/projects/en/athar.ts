import fresh0 from "../../../assets/images/projects/athar/six-1.jpg";
import fresh1 from "../../../assets/images/projects/athar/six-2.jpg";
import fresh2 from "../../../assets/images/projects/athar/six-3.jpg";
import fresh3 from "../../../assets/images/projects/athar/six-4.jpg";
import fresh4 from "../../../assets/images/projects/athar/six-5.jpg";
import fresh5 from "../../../assets/images/projects/athar/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Athar - Training & Consulting Brand Website",
  "theme": "light",
  "tags": [
    "react",
    "javascript",
    "bootstrap",
    "framer",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A multi-page Arabic (RTL) brand website for Athar, a training and consulting company. Built with React 19 and React Router 7, it covers training program and certificate pages, business packages, about, contact and registration, using styled-components with Bootstrap 5, Framer Motion animations, react-slick carousels and EmailJS-powered forms.",
  "components": [
{
      "type": "list",
      "props": {
        "title": "Key Features",
        "items": [
          "Multi-page React 19 site with React Router 7",
          "Training program and certificate catalog pages",
          "Contact and registration flows with EmailJS",
          "Animated sections with Framer Motion and react-slick carousels",
          "Fully Arabic RTL layout"
        ]
      }
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "About page",caption: "About page",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Professional certificates catalog",caption: "Professional certificates catalog",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Business Intelligence package",caption: "Business Intelligence package",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Contact form",caption: "Contact form",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Smart Effect packages",caption: "Smart Effect packages",natural:true} }
],
  "source": "https://github.com/Amrr-Maherr/ether-landign-page"
} as const satisfies ProjectContent;
