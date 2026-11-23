import local0 from "../../../assets/images/projects/viva/local-0.jpg";
import local1 from "../../../assets/images/projects/viva/local-1.jpg";
import local2 from "../../../assets/images/projects/viva/local-2.jpg";
import local3 from "../../../assets/images/projects/viva/local-3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Viva - AI Shopping App",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "tanstack", "axios", "groq"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Viva",
  description:
    "A React Native and Expo shopping app with TypeScript. The source includes product browsing, cart, wishlist, checkout and order screens, authentication and password recovery, address selection, and a Groq-powered shopping assistant. The gallery shows local web previews of the onboarding and authentication screens, not a completed purchase or signed-in shopping session.",
  components: [
    { type: "media", props: { type: "image", src: local0, alt: "Onboarding, local app web preview", caption: "Onboarding, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local1, alt: "Login, local app web preview", caption: "Login, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local2, alt: "Registration, local app web preview", caption: "Registration, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local3, alt: "Password recovery, local app web preview", caption: "Password recovery, local app web preview", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Product catalog with infinite-scroll pagination and category filtering",
          "Groq-powered AI assistant (Llama 3.1) with product-aware contextual help",
          "JWT authentication with full password reset flows",
          "Cart, wishlist, checkout, and order history",
          "Google Maps address selection with location permissions",
          "Skeleton loading states and Lottie animations across major screens",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React Native, Expo Router, and TypeScript. Uses TanStack Query for data fetching, react-native-maps with expo-location for address picking, and the Groq API for the AI shopping assistant.",
      },
    },
  ],
} as const satisfies ProjectContent;
