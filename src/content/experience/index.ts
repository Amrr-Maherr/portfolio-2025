export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "NEOXERO",
    role: "Front-End Developer",
    period: "03/2025 -- Present",
    bullets: [
      "Developed production eCommerce stores on the Zid and Salla platforms using React, Next.js, Storybook, internal packages and Component-Driven Development, building reusable UI components and theme sections.",
      "Contributed to backend features and REST APIs with Node.js/Express.js, including MongoDB/Mongoose schemas, authentication, authorization and backend modules.",
    ],
  },
  {
    company: "The Fourth Pyramid",
    role: "Front-End Developer",
    period: "01/2025 -- 03/2025",
    bullets: [
      "Built SEO-optimized interfaces with Tailwind CSS and integrated REST APIs.",
    ],
  },
  {
    company: "Legends Team & Soft Development",
    role: "Front-End Developer (Freelance)",
    period: "01/2024 -- 01/2025",
    bullets: [
      "Developed features for Next.js eCommerce projects; managed state with Redux and Zustand.",
    ],
  },
];
