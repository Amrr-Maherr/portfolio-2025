import viva0 from "../../../assets/images/projects/viva/viva-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Viva - AI Shopping App",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "tanstack", "axios", "groq"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Viva",
  description:
    "A cross-platform eCommerce mobile app built with React Native, Expo, and TypeScript, combining a full shopping experience with a Groq-powered (Llama 3.1) AI shopping assistant.<br/><br/>Features JWT-based authentication, product catalog with infinite scroll, cart, wishlist, checkout, order management, and Google Maps address selection.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: viva0,
        alt: "Viva mobile shopping app",
        caption: "AI-powered eCommerce mobile app",
      },
    },
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
