import thumbInin from "../../../assets/images/projects/thumbnails/inin-sport.jpg";
import thumb0 from "../../../assets/images/projects/thumbnails/leen-world.jpg";
import thumb1 from "../../../assets/images/projects/thumbnails/maden-florist.jpg";
import thumb2 from "../../../assets/images/projects/thumbnails/aljazea-pharmacy.jpg";
import thumbnailOn from "../../../assets/images/projects/thumbnails/on-ecommerce.jpg";
import thumbnailImdb from "../../../assets/images/projects/thumbnails/imdb-stream.jpg";
import thumbnailAtlas from "../../../assets/images/projects/thumbnails/atlas-erp.jpg";
import thumbnailViva from "../../../assets/images/projects/thumbnails/viva.jpg";
import thumbnailYoutube from "../../../assets/images/projects/thumbnails/youtube-clone.jpg";

import type { ProjectPreview } from "../../types";

export default [
{
  "title": "ININ Sport",
  "slug": "inin-sport",
  "thumbnail": thumbInin,
  "description": "Sportswear and activewear storefront"
},
{
    "title": "Leen World",
    "slug": "leen-world",
    "thumbnail": thumb0,
    "description": "Premium dates and gifts storefront"
},
{
    "title": "Maden Florist",
    "slug": "maden-florist",
    "thumbnail": thumb1,
    "description": "Flowers and gifts storefront"
},
{
    "title": "Al Jazea Pharmacy",
    "slug": "aljazea-pharmacy",
    "thumbnail": thumb2,
    "description": "Online pharmacy storefront"
},
  {
    title: "On - Athletic eCommerce",
    slug: "on-ecommerce",
    thumbnail: thumbnailOn,
    description: "Production-grade eCommerce platform",
  },
  {
    title: "IMDB Stream",
    slug: "imdb-stream",
    thumbnail: thumbnailImdb,
    description: "Bilingual movie & TV discovery platform",
  },
  {
    title: "Atlas ERP",
    slug: "atlas-erp",
    thumbnail: thumbnailAtlas,
    description: "Enterprise ERP dashboard",
  },
  {
    title: "Viva - AI Shopping App",
    slug: "viva",
    thumbnail: thumbnailViva,
    description: "AI-powered eCommerce mobile app",
  },
  {
    title: "YouTube Clone",
    slug: "youtube-clone",
    thumbnail: thumbnailYoutube,
    description: "Video streaming platform",
  },
] as const satisfies ProjectPreview[];
