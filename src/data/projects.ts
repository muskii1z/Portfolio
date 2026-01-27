export interface Decision {
  decision: string;
  options: string[];
  rationale: string;
  outcome: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  status: "shipped" | "pivoted" | "sunset" | "ongoing";
  hook: string;
  overview: {
    what: string;
    who: string;
    myRole: string;
  };
  problems: string[];
  businessImpact: string;
  approach: {
    framing: string;
    constraints: string[];
    alternatives: { option: string; whyRejected: string }[];
  };
  decisions: Decision[];
  screenshots: Screenshot[];
  whatDidntWork: {
    experiment: string;
    learning: string;
    howItHelped: string;
  };
  outcome: {
    primaryMetric: { value: string; label: string };
    secondaryImpacts: string[];
    currentStatus: string;
  };
  reflection?: string;
  techStack?: string;
  imgSrc?: string;
  videoSrc?: string;
}

export const projects: Project[] = [
  {
    slug: "vitalz-hub",
    title: "Vitalz Hub",
    tagline: "Client healthcare platform unifying bloodwork, records, and supplements for the UAE market.",
    role: "AI Product Manager",
    timeline: "Nov 2025 - Jan 2026",
    status: "shipped",
    hook: "The UAE lacked a unified mobile health platform. I led product development from concept to investor-ready MVP in 12 weeks, shipping 5 core modules and 20+ screens that generated strong early investor interest.",
    overview: {
      what: "Mobile-first healthcare app for bloodwork tracking, medical document storage, health recommendations, and supplement purchasing.",
      who: "Health-conscious consumers in the UAE seeking centralized personal health management.",
      myRole: "Led end-to-end product development at AIgentic Bros—owned UX/UI design, prototyping, feature scoping, and client collaboration.",
    },
    problems: [
      "No single mobile app existed locally to centralize personal health data",
      "Bloodwork arrived as fragmented PDFs from multiple labs with inconsistent formats",
      "Users couldn't track health trends across time or providers",
      "Supplement purchases were disconnected from health insights",
    ],
    businessImpact:
      "Client identified significant market gap with no local competition; investor-ready MVP needed to validate market opportunity.",
    approach: {
      framing:
        "Position as an all-in-one health hub rather than single-feature app to differentiate in emerging UAE market.",
      constraints: [
        "12-week timeline to investor demo",
        "Small team (product studio model)",
        "Multiple lab PDF formats to support",
        "Mobile-first requirement",
      ],
      alternatives: [
        {
          option: "Single-feature bloodwork app",
          whyRejected: "Wouldn't differentiate in market",
        },
        {
          option: "Web-first approach",
          whyRejected: "Target users are mobile-primary",
        },
      ],
    },
    decisions: [
      {
        decision: "Unified health platform positioning",
        options: ["Single feature app", "Modular features", "All-in-one hub"],
        rationale:
          "Differentiate in UAE market where no comprehensive solution exists",
        outcome: "Clear value prop for investor conversations",
      },
      {
        decision: "Two-step ingestion workflow (process → preview → save)",
        options: ["Fully automated", "Manual entry", "Hybrid with preview"],
        rationale:
          "Balance automation speed with data accuracy for medical data",
        outcome: "Users trust the data, fewer support requests",
      },
      {
        decision: "Comparison-first dashboards",
        options: ["Raw lab tables", "Single-test view", "Trend visualization"],
        rationale:
          "Users want to understand changes over time, not just current values",
        outcome: "Key differentiator in demos",
      },
      {
        decision: "Embedded supplement marketplace",
        options: ["External links", "Affiliate model", "Integrated shop"],
        rationale:
          "Connect recommendations directly to action, capture revenue",
        outcome: "Complete user journey from insight to purchase",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/vitalz-hub/IMG_1249.png",
        alt: "Bloodwork Timeline",
        caption: "Historical comparison showing Hematocrit and Hemoglobin trends",
      },
      {
        src: "/images/projects/vitalz-hub/IMG_1250.png",
        alt: "Vitalz Hub Home",
        caption: "Home screen - 'No more guesswork with your health'",
      },
      {
        src: "/images/projects/vitalz-hub/shop.png",
        alt: "Supplement Shop",
        caption: "Integrated marketplace with health-focused products",
      },
    ],
    whatDidntWork: {
      experiment:
        "Initial PDF parsing relied on generic extraction, resulting in inconsistent accuracy across different UAE lab formats.",
      learning:
        "Medical PDFs vary wildly in structure—headers, tables, units all differ by lab. Generic parsing wasn't reliable enough for health data.",
      howItHelped:
        "Built custom ingestion tool using DocLing to standardize extraction across formats, significantly improving data accuracy and user trust.",
    },
    outcome: {
      primaryMetric: { value: "12 weeks", label: "from concept to investor-ready MVP" },
      secondaryImpacts: [
        "5 core modules shipped (records, bloodwork, trends, recommendations, shop)",
        "20+ mobile screens designed and built",
        "Multiple iterations based on stakeholder feedback",
        "Early investor previews generated strong interest",
      ],
      currentStatus: "Demo-ready MVP prepared for upcoming fundraising conversations",
    },
    reflection:
      "Market context heavily shapes product decisions. In an emerging market like UAE healthcare tech, being comprehensive beats being focused—there's room to own the category. Mobile-first constraints actually sharpened our design decisions.",
    techStack: "Next.js + Tailwind | API routes | Python + DocLing | SQLite/Supabase",
    imgSrc: "/images/projects/vitalz-hub/IMG_1250.png",
  },
  {
    slug: "aigent-desk",
    title: "AIgentDesk",
    tagline: "AI Assistant for n8n Automation — Production SaaS helping users troubleshoot and generate workflows",
    role: "AI Product Manager",
    timeline: "2025",
    status: "shipped",
    hook: "AIgentDesk is an AI-powered SaaS platform that helps n8n users troubleshoot broken automations and generate complete workflows through natural language, using RAG over n8n documentation to provide accurate, platform-specific guidance.",
    overview: {
      what: "AI-powered SaaS platform for n8n automation assistance with troubleshooting and workflow generation capabilities",
      who: "n8n users struggling with debugging workflows, configuring nodes, and translating business logic into automation graphs",
      myRole: "Led product strategy, UX design, prototyping, and MVP delivery — owned RAG system design, shipped workflow generation features, and ran early monetization experiments",
    },
    problems: [
      "Debugging failing nodes and broken triggers in complex workflows",
      "Translating business logic into correct workflow graphs",
      "Searching through scattered n8n documentation",
      "Configuring credentials and data mapping correctly",
    ],
    businessImpact:
      "First revenue-generating product for AIgentic Bros, validated demand for specialized automation copilots and established platform credibility",
    approach: {
      framing:
        "Position as deeply specialized n8n copilot rather than generic automation AI to build trust and accuracy",
      constraints: [
        "RAG-first architecture needed for reliable, documentation-grounded responses",
        "JSON export as first-class feature for direct n8n import",
        "Troubleshooting prioritized over workflow generation as primary job-to-be-done",
      ],
      alternatives: [
        {
          option: "Generic automation assistant",
          whyRejected: "Lacked n8n-specific knowledge and produced unusable workflow configurations",
        },
      ],
    },
    decisions: [
      {
        decision: "Vertical-only focus on n8n",
        options: ["Generic automation AI", "Multi-platform support", "n8n-specific copilot"],
        rationale:
          "Positioned the product as deeply specialized rather than generic to improve accuracy and adoption",
        outcome: "Vertical focus accelerated adoption and improved trust",
      },
      {
        decision: "RAG-first architecture",
        options: ["Pure LLM", "RAG over documentation", "Hybrid approach"],
        rationale:
          "Grounded responses in n8n documentation to improve reliability and reduce hallucinations",
        outcome: "Improved trust in AI outputs and reduced incorrect configurations",
      },
      {
        decision: "JSON export as first-class feature",
        options: ["Text explanations only", "Code snippets", "Importable JSON output"],
        rationale:
          "Optimized for 'paste directly into n8n' workflow to reduce friction",
        outcome: "Workflow-native output beats explanations—users preferred actionable output",
      },
      {
        decision: "Troubleshooting before building",
        options: ["Generation-first UX", "Debugging-first UX", "Equal priority"],
        rationale:
          "Prioritized debugging flows as the first user job-to-be-done based on user research",
        outcome: "Better product-market fit and higher engagement",
      },
    ],
    screenshots: [
      { src: "", alt: "AIgentDesk chat interface", caption: "Chat-based troubleshooting" },
      { src: "", alt: "Workflow generation", caption: "JSON workflow output" },
      { src: "", alt: "Documentation search", caption: "RAG-powered search" },
    ],
    whatDidntWork: {
      experiment:
        "Initial version relied on generic AI responses without n8n-specific context, resulting in incorrect node configurations and frustrated users.",
      learning:
        "Users needed platform-specific, actionable guidance—not generic automation advice. Trust is critical for technical products.",
      howItHelped:
        "Led to RAG-first architecture and vertical positioning. Rebuilt system to ground all responses in n8n documentation, dramatically improving accuracy.",
    },
    outcome: {
      primaryMetric: { value: "Paying Customers", label: "Early Revenue Validation" },
      secondaryImpacts: [
        "Validated demand for vertical AI copilots in automation space",
        "Established AIgentic Bros' first revenue-generating product",
        "Used by automation consultants and operations teams",
        "Demonstrated willingness to pay for specialized AI tooling",
      ],
      currentStatus: "Production SaaS product with paying customers and active usage",
    },
    reflection:
      "Vertical focus is a competitive advantage. Building for a specific platform (n8n) allowed us to deeply understand user pain points and deliver value that generic tools couldn't match. Early monetization experiments validated that specialized AI copilots are worth paying for.",
    techStack: "Next.js, Tailwind CSS, Claude API, RAG pipelines, n8n, Supabase",
    imgSrc: "/images/projects/aigent-desk/cover.png",
    videoSrc: "/videos/projects/aigent-desk/demo.mp4",
  },
  {
    slug: "terminal-mastery",
    title: "Terminal Mastery",
    tagline: "Interactive Linux Learning Platform — Teaching terminal fundamentals through hands-on lessons",
    role: "Solo Product Manager & Builder",
    timeline: "2025",
    status: "shipped",
    hook: "Terminal Mastery is a web-based learning platform that helps beginners gain confidence using the Linux command line through hands-on lessons, quizzes, and practice environments.",
    overview: {
      what: "Web-based learning platform with structured curriculum covering 20 essential Linux commands",
      who: "Aspiring developers struggling to learn the terminal through dense documentation",
      myRole: "Built solo — conducted market research, designed UX, built platform, deployed product",
    },
    problems: [
      "Dense and documentation-heavy learning resources",
      "Fragmented content across videos and blogs",
      "Too theoretical without hands-on practice",
      "Fear of breaking their system",
    ],
    businessImpact:
      "Solo-built MVP to learn Claude Code-driven development and practice end-to-end product ownership",
    approach: {
      framing:
        "Focused curriculum teaching terminal fundamentals in under two hours",
      constraints: [
        "Limited to 20 most essential commands",
        "Safe simulated environment required",
        "Must work on mobile and desktop",
        "Solo-built project",
      ],
      alternatives: [],
    },
    decisions: [
      {
        decision: "Limit to 20 commands",
        options: ["Comprehensive command library", "20 essential commands", "10 beginner commands"],
        rationale:
          "Focused the curriculum to avoid overwhelm while covering majority of real-world use cases",
        outcome: "Users completed curriculum without feeling overwhelmed",
      },
      {
        decision: "Try before signup experience",
        options: ["Require auth upfront", "Anonymous progress", "No tracking"],
        rationale:
          "Lower barrier to entry and allow users to experience value before committing",
        outcome: "Improved conversion and engagement",
      },
      {
        decision: "Dark theme default",
        options: ["Light theme", "Dark theme", "System preference"],
        rationale:
          "Matched real terminal environments to improve immersion",
        outcome: "Better learning experience mimicking actual terminals",
      },
      {
        decision: "Static deployment",
        options: ["Full-stack app", "Static + cloud services", "Serverless"],
        rationale:
          "Optimized for speed and low hosting cost while using cloud services for dynamic data",
        outcome: "Fast load times and low infrastructure costs",
      },
    ],
    screenshots: [],
    whatDidntWork: {
      experiment:
        "Initial version included too many advanced commands that overwhelmed beginners",
      learning:
        "Scope control is critical for shipping. Less is more when teaching fundamentals",
      howItHelped:
        "Trimmed curriculum to 20 essential commands, improving completion rates",
    },
    outcome: {
      primaryMetric: { value: "Full MVP", label: "Solo-Built & Shipped" },
      secondaryImpacts: [
        "Complete curriculum with certification system",
        "Mobile-responsive across devices",
        "Production-ready web application",
        "Personal learning accelerator for AI product building",
      ],
      currentStatus: "Deployed production app with full curriculum",
    },
    reflection:
      "Solo building sharpened my PM instincts. Fast iteration beats perfect architecture. Product framing matters as much as features.",
    techStack: "Next.js, Tailwind CSS, TypeScript, Framer Motion, Supabase, Netlify",
    imgSrc: "/images/projects/terminal-mastery/cover.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
