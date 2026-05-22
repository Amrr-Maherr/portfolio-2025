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
    description: "Full-featured streaming platform",
  },
  {
    title: "StorHub",
    slug: "storhub",
    thumbnail: thumbnailStorhub,
    description: "Dashboard management system",
  },
  {
    title: "YouTube Clone",
    slug: "youtube-clone",
    thumbnail: thumbnailYoutube,
    description: "Video streaming platform",
  },
  {
    title: "On - Athletic eCommerce",
    slug: "on-ecommerce",
    thumbnail: thumbnailOn,
    description: "Production-grade eCommerce platform",
  },
] as const satisfies ProjectPreview[];
