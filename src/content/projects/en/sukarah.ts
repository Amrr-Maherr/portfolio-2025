import fresh0 from "../../../assets/images/projects/sukarah/six-1.jpg";
import fresh1 from "../../../assets/images/projects/sukarah/six-2.jpg";
import fresh2 from "../../../assets/images/projects/sukarah/six-3.jpg";
import fresh3 from "../../../assets/images/projects/sukarah/six-4.jpg";
import fresh4 from "../../../assets/images/projects/sukarah/six-5.jpg";
import fresh5 from "../../../assets/images/projects/sukarah/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Sukarah - Cosmetics Online Store",
  "theme": "light",
  "tags": [],
  "description": "An online store for Sukarah, a Saudi cosmetics brand offering brow and lip products and curated bundles.<br/><br/>Store: https://sukarah.com/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage",caption: "Homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Brow feature banner",caption: "Brow feature banner",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Shop by category",caption: "Shop by category",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Best sellers and direct-add cards",caption: "Best sellers and direct-add cards",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Product details",caption: "Product details",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Customer care",caption: "Customer care",natural:true} }
],
  "live": "https://sukarah.com/"
} as const satisfies ProjectContent;
