import shot1 from "../../../assets/images/projects/qafalah-alayman/qafalah-alayman-1.jpg";
import shot2 from "../../../assets/images/projects/qafalah-alayman/qafalah-alayman-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Qafalah Alayman - Umrah & Travel Booking Site",
  theme: "light",
  tags: ["react", "javascript", "vite", "bootstrap"],
  videoBorder: false,
  live: "https://qafalah-alayman.vercel.app",
  source: "https://github.com/Amrr-Maherr/qafalah-alayman",
  description:
    "An Arabic Umrah and travel booking website built with React and Vite: a landing page with hero section, Umrah package booking, limousine reservation and flight booking forms, and a newsletter footer. Fully RTL.",
  components: [
    { type: "media", props: { type: "image", src: shot1, alt: "Landing page hero", caption: "Landing page hero", natural: true } },
    { type: "media", props: { type: "image", src: shot2, alt: "Limousine booking form", caption: "Limousine booking form", natural: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Umrah package booking flow",
          "Limousine reservation form",
          "Flight booking form",
          "Newsletter signup footer",
          "Fully Arabic RTL interface",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React and Vite as a single-page app with client-side routing, deployed on Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
