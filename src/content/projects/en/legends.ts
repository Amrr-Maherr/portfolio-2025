
import type { ProjectContent } from "../../types";

export default {
  title: "Legends - Task & Employee Management Dashboards",
  theme: "dark",
  tags: ["react", "javascript", "dashboard", "bootstrap"],
  videoBorder: false,
  description:
    "An internal task and employee management web app with two dashboards: an admin dashboard (departments, shifts, task assignment and Chart.js analytics) and an employee dashboard (profile and assigned tasks), with full authentication. Private company project, so no public link or screenshots.",
  components: [
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Admin dashboard: departments, shifts and task assignment",
          "Analytics charts built with Chart.js",
          "Employee dashboard: profile and assigned tasks",
          "Full authentication and role-based views",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Highlights",
        text: "React single-page app with Chart.js analytics and a complete auth flow. Repository and deployment are private.",
      },
    },
  ],
} as const satisfies ProjectContent;
