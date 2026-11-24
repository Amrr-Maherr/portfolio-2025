import chat from "../../../assets/images/projects/brainbox/chat.svg";
import splash from "../../../assets/images/projects/brainbox/splash.svg";
import welcome from "../../../assets/images/projects/brainbox/welcome.svg";
import login from "../../../assets/images/projects/brainbox/login.svg";
import register from "../../../assets/images/projects/brainbox/register.svg";
import forgot_password from "../../../assets/images/projects/brainbox/forgot-password.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "BrainBox - AI Chat Mobile App",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "tanstack", "axios"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/BrainBox",
  description:
    "A React Native and Expo chat app written in TypeScript. It sends messages to Google Gemini 2.5 Flash with TanStack Query for caching and error handling, and shows message bubbles with timestamps in light and dark themes. It also includes splash, onboarding, welcome, login, register and password recovery screens built with Expo Router. The gallery shows the local Expo web build; the AI reply in the chat screenshot is a sample response, and the authentication screens are interface only.",
  components: [
    { type: "media", props: { type: "image", src: chat, alt: "AI chat, sample reply (local Expo web build)", caption: "AI chat, sample reply (local Expo web build)", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: splash, alt: "Splash screen", caption: "Splash screen", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: welcome, alt: "Welcome screen", caption: "Welcome screen", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: login, alt: "Login screen", caption: "Login screen", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: register, alt: "Register screen", caption: "Register screen", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: forgot_password, alt: "Forgot password screen", caption: "Forgot password screen", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Chat with Gemini 2.5 Flash through the Generative Language API",
          "Message bubbles, timestamps, loading spinner and readable error messages",
          "TanStack Query caching with a 5-minute stale time",
          "Splash, 3-slide onboarding and welcome screens",
          "Login, register, verification code and reset password screens (UI only)",
          "Light and dark theme that follows the device",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React Native 0.81, Expo SDK 54, Expo Router and TypeScript. Uses TanStack Query and Axios for the Gemini request, React Native Reanimated for the onboarding carousel, and a themed component layer for light and dark mode.",
      },
    },
  ],
} as const satisfies ProjectContent;
