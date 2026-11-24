import fresh0 from "../../../assets/images/projects/neoxero/six-1.jpg";
import fresh1 from "../../../assets/images/projects/neoxero/six-2.jpg";
import fresh2 from "../../../assets/images/projects/neoxero/six-3.jpg";
import fresh3 from "../../../assets/images/projects/neoxero/six-4.jpg";
import fresh4 from "../../../assets/images/projects/neoxero/six-5.jpg";
import fresh5 from "../../../assets/images/projects/neoxero/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "NEOXERO - Digital Agency Website",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://neoxero.com/en",
  "description": "The official website of NEOXERO, a full-service digital agency helping brands and online stores grow with integrated marketing and development solutions for the Zid and Salla platforms.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero",caption: "Homepage hero",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Services section",caption: "Services section",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Stats and featured projects",caption: "Stats and featured projects",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Partners and clients",caption: "Partners and clients",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Client testimonials",caption: "Client testimonials",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Latest news and articles",caption: "Latest news and articles",natural:true} }
]
} as const satisfies ProjectContent;
