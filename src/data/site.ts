/** Contact details and links, in one place. Every page reads from here. */
export const site = {
  name: "Musab Saraswat",
  role: "AI Engineer",
  url: "https://musabsaraswat.com",
  location: "Dallas–Fort Worth, TX",
  email: "musab.work17@gmail.com",
  calendly: "https://calendly.com/musab-work17/30min",
  resume: { pdf: "/resume.pdf", updated: "Oct 2026" },
  availability: "Open to AI engineering roles + good problems",
  description:
    "Musab Saraswat is an AI engineer who builds and ships AI products: RAG systems, agents, and mobile apps that real people use.",
} as const;

export type Social = {
  label: "LinkedIn" | "GitHub" | "YouTube";
  href: string;
  /** Background color class for the round icon button. */
  bg: string;
  /** 24×24 SVG path. */
  path: string;
};

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/musab-saraswat-a42944230/",
    bg: "bg-idea",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "GitHub",
    href: "https://github.com/muskii1z",
    bg: "bg-learn",
    path: "M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Aigenticbros",
    bg: "bg-watch",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
];
