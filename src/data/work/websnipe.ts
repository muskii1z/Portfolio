import type { CaseStudy } from "./types";

export const websnipe: CaseStudy = {
  slug: "websnipe",
  title: "WebSnipe",
  kind: "own",
  tagline:
    "An AI agent pipeline that finds local businesses with weak websites, researches each one, and drafts outreach and a preview site.",
  role: "Solo engineer",
  timeline: "Apr 2026",
  year: 2026,
  status: "shipped",
  tier: "featured",
  order: 5,
  accent: "done",
  links: { repo: "https://github.com/muskii1z/Websnipe" },
  stack: ["Python", "Streamlit", "SQLite", "Claude Code (Sonnet and Opus)"],
  metrics: [
    { value: "70", label: "businesses found and scored" },
    { value: "58", label: "fully researched, with call scripts" },
    { value: "~20", label: "Dallas-area cities covered" },
  ],
  problem:
    "Finding local businesses that need a better website, researching each one, and writing outreach that doesn't read like spam takes hours per business. I wanted a pipeline that does the research and drafting, so a person only reviews and sends.",
  whatIBuilt: [
    "Scout: searches a trade and a city, checks each business's website, and scores the lead",
    "Research: pulls review themes, services, and nearby competitors that do have websites",
    "Outreach: writes a three-email sequence, a call script with objection handling, and talking points",
    "Find emails and build a preview site: contact emails from public listings, and a one-page site for interested leads",
    "Each stage runs as a supervised background process that a Streamlit dashboard monitors, with all state in SQLite",
  ],
  decisions: [
    {
      title: "Match each model to the task",
      why: "Scouting and research are high-volume; outreach is the part a business owner actually reads.",
      result: "Sonnet handles scouting and research. Opus writes the outreach.",
    },
    {
      title: "Skip leads that aren't worth researching",
      why: "Franchises, businesses with fewer than 5 reviews, and fake lead-generation listings waste research time.",
      result: "The scout filters them out and scores the rest, so no cold leads were ever researched.",
    },
    {
      title: "One shared database, accessed one way",
      why: "Separate agent stages running on their own could overwrite each other's data.",
      result: "Every stage reads and writes through the same small set of helper scripts.",
    },
  ],
  results: [
    "70 businesses found and scored across 5 campaigns: 43 hot, 27 warm",
    "58 fully researched, with call scripts and talking points",
    "35 contact emails found, for electricians, HVAC companies, and plumbers",
  ],
  learned: [
    "An agent's output is only useful if the next stage can rely on its shape, so every stage writes the same fields.",
    "Model choice matters most at the step a person actually reads.",
  ],
  media: { screenshots: [] },
  seo: { title: "WebSnipe: an AI lead-generation agent pipeline" },
};
