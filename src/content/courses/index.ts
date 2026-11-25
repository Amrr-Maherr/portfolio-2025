export interface CourseEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
  certificate?: string;
}

export const courses: CourseEntry[] = [
  {
    title: "React Native - Practical Guide",
    organization: "Udemy",
    period: "06/2026",
    description:
      "Practical course on building cross-platform mobile apps with React Native.",
  },
  {
    title: "Advanced React.js Course",
    organization: "Kemz Code",
    period: "09/2025 -- 11/2025",
    description:
      "Advanced React.js concepts including Hooks, scalable component architecture, and state management patterns.",
  },
  {
    title: "React & Next.js — The Complete Guide",
    organization: "Academind by Maximilian Schwarzmüller, Udemy",
    period: "01/2025 -- 08/2025",
    description:
      "Covered Hooks, Redux, App Router, SSR/SSG, React Query, and production-ready deployment practices.",
    certificate: "https://drive.google.com/file/d/1T9loU4tmw5Es3qPn57YLcDrR7dggG2T3/view",
  },
  {
    title: "Web Development Trainee",
    organization: "Web Masters",
    period: "02/2025 -- 04/2025",
    description:
      "Completed an intensive training program covering HTML, CSS, JavaScript, and React.js fundamentals with hands-on projects.",
    certificate: "https://drive.google.com/file/d/1Hq7uvhrRHPO6lKTIL1zX0LHB55tKid4F/view",
  },
  {
    title: "Front-End Development Trainee",
    organization: "SEF Academy",
    period: "08/2024 -- 10/2024",
    description:
      "Completed intensive front-end training covering React.js, HTML5, CSS3, and JavaScript (ES6+), ranking 13th in class with a 96% score.",
    certificate: "https://drive.google.com/file/d/1of9PWDxSgOh38zfpn24m5Hpa5E9WOhcd/view",
  },
];
