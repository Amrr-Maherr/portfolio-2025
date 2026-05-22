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
      "Engineered responsive, component-driven interfaces with React.js, reducing UI inconsistencies across shared interfaces and improving overall UX consistency.",
      "Designed and maintained a scalable reusable component library following Component-Driven Development (CDD) principles, accelerating feature development across internal modules.",
      "Integrated RESTful APIs using Axios with robust loading, error, and empty-state handling for reliable data flows.",
      "Improved code quality through unit and integration testing using Jest and React Testing Library, covering critical UI components and user flows.",
    ],
  },
  {
    company: "Freelance Front-End Developer",
    role: "Front-End Developer (Freelance)",
    period: "01/2025 -- 08/2025",
    bullets: [
      "Delivered tailored React.js front-end solutions for multiple clients, translating business requirements into responsive and maintainable UI systems.",
      "Improved application performance through memoisation, code splitting, and lazy loading techniques for faster page rendering.",
      "Applied scalable architecture patterns and clean code principles across multiple production-ready projects.",
    ],
  },
  {
    company: "The Fourth Pyramid",
    role: "Front-End Developer",
    period: "01/2025 -- 03/2025",
    bullets: [
      "Developed responsive web interfaces integrated with RESTful APIs while ensuring cross-browser compatibility and smooth data presentation.",
      "Built responsive layouts using Tailwind CSS and Bootstrap, improving usability across mobile and desktop devices.",
    ],
  },
];
