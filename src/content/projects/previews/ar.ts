import thumbnailNetflix from "../../../assets/images/projects/thumbnails/netflix-clone.jpg";
import thumbnailStorhub from "../../../assets/images/projects/thumbnails/storhub.jpg";
import thumbnailYoutube from "../../../assets/images/projects/thumbnails/youtube-clone.jpg";
import thumbnailOn from "../../../assets/images/projects/thumbnails/on-ecommerce.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Netflix Clone",
    slug: "netflix-clone",
    thumbnail: thumbnailNetflix,
    description: "منصة بث متكاملة",
  },
  {
    title: "StorHub",
    slug: "storhub",
    thumbnail: thumbnailStorhub,
    description: "نظام إدارة لوحة القيادة",
  },
  {
    title: "YouTube Clone",
    slug: "youtube-clone",
    thumbnail: thumbnailYoutube,
    description: "منصة بث فيديو",
  },
  {
    title: "On - Athletic eCommerce",
    slug: "on-ecommerce",
    thumbnail: thumbnailOn,
    description: "منصة تجارة إلكترونية إنتاجية",
  },
] as const satisfies ProjectPreview[];
