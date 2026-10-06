import type { CaseStudy } from "./types";

/** Earlier and smaller projects, shown as compact cards on /work. */

export const terminalMastery: CaseStudy = {
  slug: "terminal-mastery",
  title: "Terminal Mastery",
  kind: "own",
  tagline: "An interactive course that teaches the Linux command line through 20 hands-on lessons.",
  role: "Solo builder",
  timeline: "Sep 2025",
  year: 2025,
  status: "archived",
  tier: "archive",
  order: 10,
  links: { repo: "https://github.com/muskii1z/Terminal-Mastery" },
  stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "jsPDF"],
  metrics: [
    { value: "20", label: "hands-on lessons" },
    { value: "Solo", label: "built and deployed end to end" },
  ],
  problem:
    "Most terminal tutorials are dense documentation with no practice, and beginners worry about breaking their own system. I wanted a short course with a safe, simulated terminal to practice in.",
  whatIBuilt: [
    "20 lessons covering the most-used Linux commands, each with a simulated terminal to practice in",
    "Sign-in and per-user progress tracking with Supabase",
    "PDF completion certificates and a command cheat sheet generated with jsPDF",
  ],
  decisions: [
    {
      title: "Limit the course to 20 commands",
      why: "An early version with advanced commands overwhelmed beginners.",
      result: "A focused course covering the commands people actually use.",
    },
    {
      title: "Let people try before signing up",
      why: "Asking for an account up front stops people before they see any value.",
      result: "Lessons are open; sign-in only saves progress.",
    },
  ],
  learned: ["Cutting scope was the most useful decision. Less is more when teaching fundamentals."],
  media: {
    cover: { src: "/images/projects/terminal-mastery/cover.png", alt: "Terminal Mastery landing page", frame: "browser" },
    screenshots: [],
  },
};

export const aigentDesk: CaseStudy = {
  slug: "aigent-desk",
  title: "AIgentDesk",
  kind: "own",
  tagline: "An AI assistant for n8n that troubleshoots broken automations and generates workflows you can import.",
  role: "Product lead and builder, through Aigentic Bros",
  timeline: "2025",
  year: 2025,
  status: "archived",
  tier: "archive",
  order: 11,
  links: {},
  stack: ["Next.js", "Claude API", "RAG", "Supabase", "n8n"],
  metrics: [{ value: "Paying", label: "customers during its run" }],
  problem:
    "n8n users get stuck debugging failing nodes and translating business logic into working workflows, and general-purpose AI gives them configurations that don't run.",
  whatIBuilt: [
    "A chat assistant grounded in n8n's documentation with retrieval, so answers match how n8n actually works",
    "Workflow generation that outputs JSON you can paste straight into n8n",
  ],
  decisions: [
    {
      title: "Ground answers in n8n's documentation",
      why: "The first version used general AI answers and produced node configurations that didn't work.",
      result: "Retrieval over the docs made answers specific to n8n and more reliable.",
    },
    {
      title: "Output importable JSON, not explanations",
      why: "Users wanted something they could use immediately.",
      result: "Generated workflows paste directly into n8n.",
    },
  ],
  learned: ["For technical users, an answer they can use right away beats an explanation of what to do."],
  media: {
    cover: { src: "/images/projects/aigent-desk/cover.png", alt: "AIgentDesk sign-in screen", frame: "browser" },
    screenshots: [],
    video: { kind: "file", src: "/videos/projects/aigent-desk/demo.mp4" },
  },
};

export const aiForTeachers: CaseStudy = {
  slug: "ai-for-teachers",
  title: "AI for Teachers",
  kind: "own",
  tagline: "A course teaching teachers to use AI in their classrooms, launched through a live webinar and Udemy.",
  role: "Co-founder, through Aigentic Bros",
  timeline: "2025",
  year: 2025,
  status: "archived",
  tier: "archive",
  order: 12,
  links: {},
  stack: ["Course design", "Live webinars", "Udemy"],
  metrics: [
    { value: "50%", label: "visitor-to-customer conversion" },
    { value: "90", label: "members in the community" },
  ],
  media: { screenshots: [] },
};
