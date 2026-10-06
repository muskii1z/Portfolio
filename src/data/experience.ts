export interface Role {
  title: string;
  type?: "Founder" | "Contract" | "Full-time" | "Internship";
  period: string;
  current?: boolean;
  /** One line under the title, e.g. how the company came to be. */
  summary?: string;
  bullets: string[];
}

export interface ExperienceItem {
  org: string;
  /** e.g. "formerly Aigentic Bros" */
  orgNote?: string;
  /** e.g. "via Starline Labs" */
  via?: string;
  location?: string;
  roles: Role[];
  /** Case-study slugs to link from this entry. */
  related?: string[];
}

export const experience: ExperienceItem[] = [
  {
    org: "Starline Labs",
    orgNote: "formerly Aigentic Bros",
    location: "Dallas, TX",
    related: ["vitalz-hub", "rag-motion", "websnipe"],
    roles: [
      {
        title: "Founder & AI Engineer",
        type: "Founder",
        period: "Summer 2025 – Present",
        current: true,
        summary:
          "Co-founded Aigentic Bros in 2025 (AI education and client automations); formed Starline Labs LLC in February 2026 to take on AI engineering contracts.",
        bullets: [
          "Built the VitalzHub prototype solo, a healthcare platform that turns lab reports into plain-English health plans for clients in the UAE; it earned stakeholder approval in Dubai and secured funding",
          "Rebuilt the funded platform with one other engineer: FastAPI and Next.js with role-based access for 5 user types, PDF lab-report ingestion, and LLM-drafted care plans that doctors sign off before patients see them, deployed on AWS",
          "Built rag-motion, a RAG system and program-building agent for strength coaches, evaluated on 55 test questions and 12 fictional clients",
          "Launched AI for Teachers through Aigentic Bros, reaching a 50% visitor-to-customer conversion rate and a 90-member community, and built n8n automations and custom GPTs for clients",
        ],
      },
    ],
  },
  {
    org: "Camel Case Labs",
    via: "via Starline Labs",
    location: "Dallas, TX",
    related: ["boutlook", "field-voice-agent"],
    roles: [
      {
        title: "AI Engineer",
        type: "Contract",
        period: "Feb 2026 – Present",
        current: true,
        bullets: [
          "Rebuilt BOUTLOOK's mobile app from scratch as the sole engineer and shipped it to the App Store and Google Play across 12 store builds through v1.1.0",
          "Built the mobile app for a voice AI agent that lets a nonprofit's field teams log visits by speaking instead of filling out forms, released on Google Play",
          "Built an evaluation harness that scores agent prompt and tool changes against real cases before release",
          "Fixed live agent failures found in field use, including the agent reporting outreach it never logged and permission gaps that locked out 2 manager roles, each shipped with regression tests",
        ],
      },
    ],
  },
  {
    org: "Mind Propel",
    location: "Dallas, TX",
    roles: [
      {
        title: "Automation & Marketing Lead",
        type: "Full-time",
        period: "Aug 2024 – May 2025",
        bullets: [
          "Built AI content pipelines in n8n for daily LinkedIn and X posting, cutting content production time by 50% while maintaining engagement",
          "Automated publishing across multiple channels at a steady 7 posts per week, with no manual posting",
        ],
      },
    ],
  },
];

export const education = {
  school: "University of Texas at Arlington",
  degree: "B.S. Exercise Science and Kinesiology",
  period: "May 2024",
  location: "Arlington, TX",
  notes: [
    "Physical Therapy Technician Intern: managed patient scheduling and learned exercise selection and programming from licensed physical therapists",
  ],
};

export const certifications = [
  "IBM Product Manager Professional Certificate",
  "Google Project Management Professional Certificate",
];

export const skillGroups: { label: string; items: string }[] = [
  {
    label: "AI engineering",
    items:
      "RAG (embeddings, pgvector, metadata filtering, hybrid search), AI agents and tool calling, evaluation (eval sets, LLM-as-judge), structured output, prompt engineering, LangSmith",
  },
  { label: "Languages & backend", items: "Python, TypeScript, SQL, FastAPI, PostgreSQL, Pydantic, SQLAlchemy, REST APIs, Docker" },
  {
    label: "Mobile, web & cloud",
    items: "React Native (Expo), Next.js, React, Tailwind CSS, AWS (EC2, CloudFront), GitHub Actions, pytest, Playwright",
  },
  { label: "Product", items: "MVP scoping, client discovery, roadmapping, stakeholder management" },
];
