import fresh0 from "../../../assets/images/projects/munfarid/six-1.jpg";
import fresh1 from "../../../assets/images/projects/munfarid/six-2.jpg";
import fresh2 from "../../../assets/images/projects/munfarid/six-3.jpg";
import fresh3 from "../../../assets/images/projects/munfarid/six-4.jpg";
import fresh4 from "../../../assets/images/projects/munfarid/six-5.jpg";
import fresh5 from "../../../assets/images/projects/munfarid/six-6.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Munfarid - Home Textiles and Smart Watch Theme Demo (Zid)",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "A Zid theme demo storefront named Munfarid. It includes a hero and about section, bedding sets with category and product pages, a smartwatch landing section, a promo popup and an all-products listing.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage hero and about",caption: "Homepage hero and about",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Bedding category",caption: "Bedding category",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Bedding product",caption: "Bedding product",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Smart watch product",caption: "Smart watch product",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "All products",caption: "All products",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "Smart watch section",caption: "Smart watch section",natural:true} }
],
  "live": "https://neoxero01.zidthemestore.com/"
} as const satisfies ProjectContent;
