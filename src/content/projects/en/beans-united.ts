import fresh0 from "../../../assets/images/projects/beans-united/six-1.jpg";
import fresh1 from "../../../assets/images/projects/beans-united/six-2.jpg";
import fresh2 from "../../../assets/images/projects/beans-united/six-3.jpg";
import fresh3 from "../../../assets/images/projects/beans-united/six-4.jpg";
import fresh4 from "../../../assets/images/projects/beans-united/six-5.jpg";
import fresh5 from "../../../assets/images/projects/beans-united/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Beans United",
  "theme": "light",
  "tags": [
    "coffee",
    "bilingual",
    "rtl"
  ],
  "videoBorder": false,
  "description": "A bilingual corporate website for a Saudi specialty-coffee business. It presents the company and its coffee origins, brands and business partnerships, with dedicated Investor Relations, Blogs and Careers pages.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage",caption: "Homepage",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Coffee origins map",caption: "Coffee origins map",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Investor Relations",caption: "Investor Relations",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Blogs",caption: "Blogs",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Careers",caption: "Careers",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Business partner portal, public landing",caption: "Business partner portal, public landing",natural:true} }
],
  "live": "https://beansunited.sa"
} as const satisfies ProjectContent;
