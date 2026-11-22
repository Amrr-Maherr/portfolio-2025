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
  "title": "إن إن سبورت",
  "slug": "inin-sport",
  "thumbnail": thumbInin,
  "description": "متجر ملابس رياضية"
},
{
    "title": "لين",
    "slug": "leen-world",
    "thumbnail": thumb0,
    "description": "متجر تمور وهدايا فاخرة"
},
{
    "title": "مادن فلورست",
    "slug": "maden-florist",
    "thumbnail": thumb1,
    "description": "متجر ورود وهدايا"
},
{
    "title": "صيدلية الجازع",
    "slug": "aljazea-pharmacy",
    "thumbnail": thumb2,
    "description": "متجر صيدلية إلكتروني"
},
  {
    title: "On - Athletic eCommerce",
    slug: "on-ecommerce",
    thumbnail: thumbnailOn,
    description: "منصة تجارة إلكترونية إنتاجية",
  },
  {
    title: "IMDB Stream",
    slug: "imdb-stream",
    thumbnail: thumbnailImdb,
    description: "منصة استكشاف أفلام ومسلسلات ثنائية اللغة",
  },
  {
    title: "Atlas ERP",
    slug: "atlas-erp",
    thumbnail: thumbnailAtlas,
    description: "لوحة تحكم ERP للمؤسسات",
  },
  {
    title: "Viva - تطبيق تسوق ذكي",
    slug: "viva",
    thumbnail: thumbnailViva,
    description: "تطبيق تجارة إلكترونية مدعوم بالذكاء الاصطناعي",
  },
  {
    title: "YouTube Clone",
    slug: "youtube-clone",
    thumbnail: thumbnailYoutube,
    description: "منصة بث فيديو",
  },
] as const satisfies ProjectPreview[];
