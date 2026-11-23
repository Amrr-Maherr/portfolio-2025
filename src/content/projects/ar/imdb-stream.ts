import fresh0 from "../../../assets/images/projects/imdb-stream/six-1.jpg";
import fresh1 from "../../../assets/images/projects/imdb-stream/six-2.jpg";
import fresh2 from "../../../assets/images/projects/imdb-stream/six-3.jpg";
import fresh3 from "../../../assets/images/projects/imdb-stream/six-4.jpg";
import fresh4 from "../../../assets/images/projects/imdb-stream/six-5.jpg";
import fresh5 from "../../../assets/images/projects/imdb-stream/six-6.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "IMDB Stream - استكشاف الأفلام والمسلسلات",
  theme: "dark",
  tags: ["next", "typescript", "react", "tailwind", "shadcn", "axios", "firebase"],
  videoBorder: false,
  live: "https://imdb-stream.vercel.app",
  source: "https://github.com/Amrr-Maherr/imdb-stream",
  description:
    "تطبيق لاستكشاف الأفلام والمسلسلات بالعربية والإنجليزية مبني باستخدام Next.js وTypeScript. يتضمن كتالوجات قابلة للبحث وصفحات تفاصيل الأعمال والأشخاص وتسجيل دخول عبر Firebase وقوائم المفضلة والمشاهدة ومساعد توصيات ذكي، مع دعم تخطيط من اليمين إلى اليسار في الواجهة العربية.",
  components: [
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
{ type: "media", props: {type: "image",src: fresh0,alt: "الأفلام الشائعة",caption: "الأفلام الشائعة",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "شبكة الأعمال المختارة",caption: "شبكة الأعمال المختارة",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "بانر تفاصيل الفيلم",caption: "بانر تفاصيل الفيلم",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "القصة وطاقم التمثيل",caption: "القصة وطاقم التمثيل",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "أقسام الفيديو والصور",caption: "أقسام الفيديو والصور",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "استكشاف الأشخاص",caption: "استكشاف الأشخاص",natural:true} }
],
} as const satisfies ProjectContent;
