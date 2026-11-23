import fresh0 from "../../../assets/images/projects/al-diriyah/six-1.jpg";
import fresh1 from "../../../assets/images/projects/al-diriyah/six-2.jpg";
import fresh2 from "../../../assets/images/projects/al-diriyah/six-3.jpg";
import fresh3 from "../../../assets/images/projects/al-diriyah/six-4.jpg";
import fresh4 from "../../../assets/images/projects/al-diriyah/six-5.jpg";
import fresh5 from "../../../assets/images/projects/al-diriyah/six-6.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "Diriyah Club - Official Website",
  "theme": "light",
  "tags": [
    "rtl"
  ],
  "description": "An official club website presenting Diriyah Club news, match fixtures and results, the club vision and values, a store section and a photo gallery. The front-end brings these sections together in a branded Arabic interface with English navigation available.",
  "live": "https://www.diriyahclub.sa/ar/",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Club homepage",caption: "Club homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Fixtures and results",caption: "Fixtures and results",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Club vision",caption: "Club vision",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Club mission",caption: "Club mission",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Club values",caption: "Club values",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Club store preview",caption: "Club store preview",natural:true} }
]
} as const satisfies ProjectContent;
