import fresh0 from "../../../assets/images/projects/infinity-docs/six-1.jpg";
import fresh1 from "../../../assets/images/projects/infinity-docs/six-2.jpg";
import fresh2 from "../../../assets/images/projects/infinity-docs/six-3.jpg";
import fresh3 from "../../../assets/images/projects/infinity-docs/six-4.jpg";
import fresh4 from "../../../assets/images/projects/infinity-docs/six-5.jpg";
import fresh5 from "../../../assets/images/projects/infinity-docs/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Infinity Theme Docs - Feature and Settings Guide",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "The documentation site for the Infinity Zid theme (v6.7.5). It covers the theme features and settings guide, the three demo stores (beauty, sports and electronics), design previews, updates and support.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Hero",caption: "Hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Demo stores",caption: "Demo stores",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Theme features",caption: "Theme features",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Customization",caption: "Customization",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Docs section",caption: "Docs section",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Footer and support",caption: "Footer and support",natural:true} }
],
  "live": "https://cdn.neoxero.com/infinity-docs"
} as const satisfies ProjectContent;
