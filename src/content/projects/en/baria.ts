import fresh0 from "../../../assets/images/projects/baria/six-1.jpg";
import fresh1 from "../../../assets/images/projects/baria/six-2.jpg";
import fresh2 from "../../../assets/images/projects/baria/six-3.jpg";
import fresh3 from "../../../assets/images/projects/baria/six-4.jpg";
import fresh4 from "../../../assets/images/projects/baria/six-5.jpg";
import type { ProjectContent } from "../../types";

export default {
  "title": "Baria - Electronics and Phones Storefront (Zid)",
  "theme": "light",
  "tags": ["zid", "ecommerce", "rtl"],
  "videoBorder": false,
  "description": "A Zid electronics storefront named Baria (Bareq) for the Saudi market. It features a promo banner slider, category browsing for phones, smart watches, computers, printers and speakers, discounted product listings in SAR, a best sellers section and a today's deal section.",
  "components": [
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage and banners",caption: "Homepage and banners",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "Promo banners",caption: "Promo banners",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Product listings",caption: "Product listings",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Phones and offers",caption: "Phones and offers",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Today's deal",caption: "Today's deal",natural:true} }
],
  "live": "https://fk5vq7.zid.store/"
} as const satisfies ProjectContent;
