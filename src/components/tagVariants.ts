export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "typescript"
  | "tailwind"
  | "redux"
  | "tanstack"
  | "stripe"
  | "vite"
  | "zod"
  | "framer"
  | "swiper"
  | "shadcn"
  | "pwa"
  | "axios"
  | "reacthookform";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  redux: "Redux Toolkit",
  tanstack: "TanStack Query",
  stripe: "Stripe",
  vite: "Vite",
  zod: "Zod",
  framer: "Framer Motion",
  swiper: "Swiper.js",
  shadcn: "shadcn/ui",
  pwa: "PWA",
  axios: "Axios",
  reacthookform: "React Hook Form",
} as const satisfies Record<TagVariant, string>;
