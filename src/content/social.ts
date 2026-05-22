export const social = [
  { url: "mailto:amrr.maherr24@gmail.com", name: "mail" },
  { url: "https://github.com/Amrr-Maherr", name: "github" },
  { url: "https://www.linkedin.com/in/amrr-maherr", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
