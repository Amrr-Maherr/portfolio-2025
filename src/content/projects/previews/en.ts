import thumb_diriyah from "../../../assets/images/projects/thumbnails/al-diriyah.jpg";
import thumb_alsaif from "../../../assets/images/projects/thumbnails/alsaif.jpg";
import thumb_alnassr from "../../../assets/images/projects/thumbnails/alnassr.jpg";
import thumb_infinity_sports from "../../../assets/images/projects/thumbnails/infinity-sports.jpg";
import thumb_infinity_beauty from "../../../assets/images/projects/thumbnails/infinity-beauty.jpg";
import thumb_infinity_electronics from "../../../assets/images/projects/thumbnails/infinity-electronics.jpg";
import thumb_sukarah from "../../../assets/images/projects/thumbnails/sukarah.jpg";
import thumb_senor from "../../../assets/images/projects/thumbnails/senor.jpg";
import thumb_zeyada from "../../../assets/images/projects/thumbnails/zeyada.jpg";
import thumb_education_market from "../../../assets/images/projects/thumbnails/education-market.jpg";
import newThumb0 from "../../../assets/images/projects/thumbnails/nexton-ecommerce.jpg";
import newThumb1 from "../../../assets/images/projects/thumbnails/reeq-al-nahl.jpg";
import newThumb2 from "../../../assets/images/projects/thumbnails/sakib.jpg";
import newThumb3 from "../../../assets/images/projects/thumbnails/nannocare.jpg";
import newThumb4 from "../../../assets/images/projects/thumbnails/beans-united.jpg";
import newThumb5 from "../../../assets/images/projects/thumbnails/foushi-events.jpg";
import newThumb6 from "../../../assets/images/projects/thumbnails/yumauth.jpg";
import newThumb7 from "../../../assets/images/projects/thumbnails/charlottesweets.jpg";
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
{title:"Senor - Pet Storefront Theme (Zid)",slug:"senor",thumbnail:thumb_senor,description:"Arabic pet storefront theme on Zid"},
{title:"Zeyada - Grocery Storefront Demo (Zid)",slug:"zeyada",thumbnail:thumb_zeyada,description:"Arabic grocery storefront demo on Zid"},
{title:"Education Market - School Supplies Store (Zid)",slug:"education-market",thumbnail:thumb_education_market,description:"School uniforms and supplies storefront"},
{title:"Sukarah - Cosmetics Online Store",slug:"sukarah",thumbnail:thumb_sukarah,description:"An online store for Sukarah, a Saudi cosmetics brand offering brow and lip products and curated bundles."},
{title:"Infinity Electronics - Electronics Storefront (Zid)",slug:"infinity-electronics",thumbnail:thumb_infinity_electronics,description:"Electronics storefront"},
{title:"Infinity Beauty - Beauty and Fashion Storefront (Zid)",slug:"infinity-beauty",thumbnail:thumb_infinity_beauty,description:"Beauty and fashion storefront"},
{title:"Infinity Sports - Sportswear Storefront (Zid)",slug:"infinity-sports",thumbnail:thumb_infinity_sports,description:"Sportswear storefront"},
{"title": "AlNassr Official Store", "slug": "alnassr", "thumbnail": thumb_alnassr, "description": "Club merchandise storefront"},
{"title": "AlSaif Trading Agencies Store", "slug": "alsaif", "thumbnail": thumb_alsaif, "description": "Home appliances and cookware storefront"},
{"title": "Diriyah Club - Official Website", "slug": "al-diriyah", "thumbnail": thumb_diriyah, "description": "Official club website and news"},
{
    title: "Atlas ERP",
    slug: "atlas-erp",
    thumbnail: thumbnailAtlas,
    description: "Enterprise ERP dashboard",
  },
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
{
  "title": "Nexton E-Commerce",
  "slug": "nexton-ecommerce",
  "thumbnail": newThumb0,
  "description": "Front-end eCommerce application"
},
{
  "title": "Reeq Al Nahl - Honey & Bee Products Store",
  "slug": "reeq-al-nahl",
  "thumbnail": newThumb1,
  "description": "Honey and bee products storefront"
},
{
  "title": "Sakb Perfumes",
  "slug": "sakib",
  "thumbnail": newThumb2,
  "description": "Perfume storefront front-end work"
},
{
  "title": "Nannocare",
  "slug": "nannocare",
  "thumbnail": newThumb3,
  "description": "Global eCommerce front-end work"
},
{
  "title": "Beans United",
  "slug": "beans-united",
  "thumbnail": newThumb4,
  "description": "Bilingual specialty-coffee storefront"
},
{
  "title": "Foushi Events",
  "slug": "foushi-events",
  "thumbnail": newThumb5,
  "description": "Arabic event services website"
},
{
  "title": "YumAuth",
  "slug": "yumauth",
  "thumbnail": newThumb6,
  "description": "Recipe browsing and authentication app"
},
{
  "title": "Charlotte Sweets",
  "slug": "charlottesweets",
  "thumbnail": newThumb7,
  "description": "Sweet shop storefront and control panel"
}
] as const satisfies ProjectPreview[];
