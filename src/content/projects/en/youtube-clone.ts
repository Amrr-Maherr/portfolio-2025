import fresh0 from "../../../assets/images/projects/youtube-clone/six-1.jpg";
import fresh1 from "../../../assets/images/projects/youtube-clone/six-2.jpg";
import fresh2 from "../../../assets/images/projects/youtube-clone/six-3.jpg";
import fresh3 from "../../../assets/images/projects/youtube-clone/six-4.jpg";
import fresh4 from "../../../assets/images/projects/youtube-clone/six-5.jpg";
import fresh5 from "../../../assets/images/projects/youtube-clone/six-6.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "YouTube Clone - Video Search and Channels",
  theme: "light",
  tags: ["react", "typescript", "vite", "tailwind", "tanstack", "redux", "axios"],
  videoBorder: true,
  live: "https://youtube-omega-gilt-35.vercel.app",
  source: "https://github.com/Amrr-Maherr/Youtube",
  description:
    "A React and TypeScript video-browsing app with search results, channel pages, video detail pages and related videos. It uses TanStack Query for data fetching and Redux Toolkit for application state, with a responsive interface built with Tailwind CSS.",
  components: [
{
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Real-time search with debounced queries",
          "Channel browsing and watch-page layouts",
          "State management with Redux Toolkit",
          "Performance optimisation via memoisation and caching",
          "Responsive design across all screen sizes",
          "Deployed on Vercel",
        ],
      },
    },
{
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "Built with React, TypeScript, Vite, and Tailwind CSS. Uses TanStack Query for server-state caching and Redux Toolkit for global state management, deployed on Vercel.",
      },
    },
{ type: "media", props: {type: "image",src: fresh0,alt: "Homepage video grid",caption: "Homepage video grid",natural:true} },
{ type: "media", props: {type: "image",src: fresh1,alt: "More homepage videos",caption: "More homepage videos",natural:true} },
{ type: "media", props: {type: "image",src: fresh2,alt: "Shorts discovery grid",caption: "Shorts discovery grid",natural:true} },
{ type: "media", props: {type: "image",src: fresh3,alt: "Watch-page layout (playback not verified)",caption: "Watch-page layout (playback not verified)",natural:true} },
{ type: "media", props: {type: "image",src: fresh4,alt: "Comments section",caption: "Comments section",natural:true} },
{ type: "media", props: {type: "image",src: fresh5,alt: "More Shorts cards",caption: "More Shorts cards",natural:true} }
],
} as const satisfies ProjectContent;
