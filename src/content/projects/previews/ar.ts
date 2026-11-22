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
{
  "title": "نكستون للتجارة الإلكترونية",
  "slug": "nexton-ecommerce",
  "thumbnail": newThumb0,
  "description": "تطبيق واجهة أمامية للتجارة الإلكترونية"
},
{
  "title": "ريق النحل - متجر العسل ومنتجات النحل",
  "slug": "reeq-al-nahl",
  "thumbnail": newThumb1,
  "description": "متجر للعسل ومنتجات النحل"
},
{
  "title": "عطور سكب",
  "slug": "sakib",
  "thumbnail": newThumb2,
  "description": "عمل على واجهة متجر عطور"
},
{
  "title": "نانوكير",
  "slug": "nannocare",
  "thumbnail": newThumb3,
  "description": "تطوير واجهة متجر إلكتروني عالمي"
},
{
  "title": "بينز يونايتد",
  "slug": "beans-united",
  "thumbnail": newThumb4,
  "description": "متجر ثنائي اللغة للقهوة المختصة"
},
{
  "title": "فوشي لتنظيم الفعاليات",
  "slug": "foushi-events",
  "thumbnail": newThumb5,
  "description": "موقع عربي لخدمات تنظيم الفعاليات"
},
{
  "title": "يوم أوث",
  "slug": "yumauth",
  "thumbnail": newThumb6,
  "description": "تطبيق لتصفح الوصفات وتسجيل الدخول"
},
{
  "title": "شارلوت سويتس",
  "slug": "charlottesweets",
  "thumbnail": newThumb7,
  "description": "متجر حلويات ولوحة تحكم"
},
] as const satisfies ProjectPreview[];
