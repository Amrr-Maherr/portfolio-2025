import gallery3 from "../../../assets/images/projects/imdb-stream/gallery-3.jpg";
import gallery1 from "../../../assets/images/projects/imdb-stream/gallery-1.jpg";
import gallery2 from "../../../assets/images/projects/imdb-stream/gallery-2.jpg";
import imdb0 from "../../../assets/images/projects/imdb-stream/imdb-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "IMDB Stream",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "axios", "firebase"],
  videoBorder: false,
  live: "https://imdb-stream.vercel.app",
  source: "https://github.com/Amrr-Maherr/imdb-stream",
  description:
    "منصة ثنائية اللغة (إنجليزي/عربي مع دعم RTL) لاستكشاف الأفلام والمسلسلات، مبنية بـNext.js App Router وTypeScript، مع عرض هجين لمكونات الخادم والعميل وISR لبيانات TMDb.<br/><br/>تتضمن مصادقة Firebase (بريد إلكتروني، Google، هاتف، زائر)، وقوائم مفضلة ومشاهدة مدعومة بـFirestore، ومساعد توصيات ذكي مدعوم بـGroq.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: imdb0,
        natural: true,
        alt: "منصة IMDB Stream لاستكشاف الأفلام",
        caption: "منصة استكشاف الأفلام والمسلسلات",
      },
    },
    { type: "media", props: { type: "image", src: gallery1, alt: "صفحة استكشاف الأشخاص", caption: "صفحة استكشاف الأشخاص", natural: true } },
    { type: "media", props: { type: "image", src: gallery2, alt: "ملف الممثل وإحصاءات أعماله", caption: "ملف الممثل وإحصاءات أعماله", natural: true } },
    { type: "media", props: { type: "image", src: gallery3, alt: "تفاصيل الفيلم وفريق العمل وقائمة المشاهدة", caption: "تفاصيل الفيلم وفريق العمل وقائمة المشاهدة", natural: true } },
    {
      type: "list",
      props: {
        title: "الميزات الرئيسية",
        items: [
          "عرض هجين لمكونات الخادم والعميل مع ISR لبيانات TMDb",
          "قوائم أفلام ومسلسلات قابلة للتصفية مع بحث وصفحات تفاصيل غنية",
          "مصادقة Firebase: بريد إلكتروني، Google، هاتف، ودخول كزائر",
          "قوائم مفضلة ومشاهدة لكل مستخدم مدعومة بـFirestore",
          "مساعد توصيات ذكي مدعوم بـGroq مع بطاقات نتائج قابلة للنقر",
          "دعم ثنائي اللغة إنجليزي/عربي مع تخطيط RTL كامل",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "أبرز النقاط التقنية",
        text: "مبني بـNext.js 16 وReact 19 وTypeScript وTailwind CSS v4 مع shadcn/ui. يستخدم Firebase Auth وFirestore، وnext-intl للتعدد اللغوي، وGroq API للتوصيات الذكية.",
      },
    },
  ],
} as const satisfies ProjectContent;
