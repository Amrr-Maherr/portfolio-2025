import local0 from "../../../assets/images/projects/bazar/local-0.svg";
import local1 from "../../../assets/images/projects/bazar/local-1.svg";
import local2 from "../../../assets/images/projects/bazar/local-2.svg";
import local3 from "../../../assets/images/projects/bazar/local-3.svg";
import local4 from "../../../assets/images/projects/bazar/local-4.svg";
import local5 from "../../../assets/images/projects/bazar/local-5.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Bazar - Bookstore Mobile App",
  theme: "dark",
  tags: ["reactnative", "expo", "typescript", "firebase", "tanstack", "axios"],
  videoBorder: false,
  source: "https://github.com/Amrr-Maherr/Bazar",
  description:
    "A React Native and Expo bookstore app with TypeScript. Browse trending books and new releases from the OpenLibrary API, explore curated categories, and open rich book detail pages, with Firebase email/password authentication and a guest mode. The gallery shows local web previews of the app screens.",
  components: [
    { type: "media", props: { type: "image", src: local0, alt: "Sign in, local app web preview", caption: "Sign in, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local1, alt: "Create account, local app web preview", caption: "Create account, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local2, alt: "Home with trending books carousel, local app web preview", caption: "Home with trending books carousel, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local3, alt: "Category grid, local app web preview", caption: "Category grid, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local4, alt: "Book details, local app web preview", caption: "Book details, local app web preview", natural: true, portrait: true } },
    { type: "media", props: { type: "image", src: local5, alt: "Password recovery, local app web preview", caption: "Password recovery, local app web preview", natural: true, portrait: true } },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Trending books hero carousel plus New Releases, powered by the OpenLibrary API",
          "Category browsing (fiction, fantasy, romance, sci-fi, mystery, history, biography, self help) with book grids",
          "Rich book detail pages: cover, description, subjects, metadata, external links, and editions",
          "Firebase email/password authentication with anonymous guest login",
          "Forgot-password, OTP verification, and reset-password flow",
          "Onboarding carousel and branded splash screen",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React Native, Expo SDK 56, and TypeScript. Uses expo-router file-based typed routing with bottom tabs, TanStack Query with an Axios client for the OpenLibrary REST API, Firebase Auth, and React Native Reanimated for the carousels.",
      },
    },
  ],
} as const satisfies ProjectContent;
