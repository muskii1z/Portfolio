import type { CaseStudy } from "./types";

export const vitalzHub: CaseStudy = {
  slug: "vitalz-hub",
  title: "VitalzHub",
  kind: "client",
  client: { name: "VitalzHub", public: true, via: "Starline Labs" },
  tagline:
    "A healthcare platform that turns lab reports into plain-English health plans. I built the prototype solo; it got funded, and then I rebuilt it as a full platform.",
  role: "Solo engineer on the prototype; one of two engineers on the platform",
  timeline: "Nov 2025 – Present",
  year: 2026,
  status: "shipped",
  tier: "featured",
  order: 4,
  accent: "warm",
  links: {},
  stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docling", "Capacitor", "AWS (EC2, CloudFront)", "Playwright"],
  metrics: [
    { value: "Funded", label: "after stakeholder approval in Dubai" },
    { value: "5", label: "user roles, from patient to doctor" },
    { value: "Solo", label: "engineer on the prototype" },
  ],
  problem:
    "In the UAE, people get bloodwork back as PDFs from different labs, in different formats, with no easy way to see trends or know what to do next. The client needed a prototype good enough to raise funding, and then a real platform that doctors could trust.",
  whatIBuilt: [
    "The prototype, solo: a Next.js app wrapped for iOS and Android with Capacitor, with bloodwork history, trend comparisons, plain-English explanations of each marker, and a supplement shop",
    "A Python service using Docling to pull tables and values out of lab-report PDFs",
    "The platform, with one other engineer: a FastAPI backend and Next.js apps. My part was the patient app: lab results, progress tracking, and AI-drafted care plans with PDF export and Arabic support",
    "Role-based access for 5 user types (patient, nurse, practitioner, doctor, admin), enforced by a test that checks every API route",
    "Lab-report ingestion for 2 lab vendors into a shared dictionary of 47 curated biomarkers (parser built by my teammate)",
    "AI-drafted care plans that a doctor reviews, edits, and signs off before a patient sees them",
    "Deployment on AWS (EC2, CloudFront) with GitHub Actions CI and end-to-end tests across every role",
  ],
  decisions: [
    {
      title: "A doctor signs off on every AI-drafted plan",
      why: "Health advice a model writes on its own isn't safe to show patients directly.",
      result: "The model drafts a plan section by section; a doctor reviews and signs it before release, and every step is logged.",
    },
    {
      title: "Preview extracted lab data before saving it",
      why: "Values pulled from a PDF can't be trusted blindly when they're medical data.",
      result: "Users confirm what was extracted before it's stored.",
      alternatives: "Fully automatic saving",
    },
    {
      title: "Extraction built for real lab PDFs",
      why: "Lab reports differ in headers, tables, and units, and generic PDF extraction was inconsistent across formats.",
      result: "A Docling-based extraction step made results consistent across the labs we supported.",
    },
    {
      title: "Test access control on every route",
      why: "With five roles, one forgotten permission check means one user can see another's health data.",
      result: "A test checks every API route against the role table, and a second test checks every page.",
    },
  ],
  results: [
    "The prototype earned stakeholder approval in Dubai and secured funding",
    "The platform runs on AWS with patient, staff, and lab-partner apps",
    "Every care plan passes a doctor's review before a patient sees it",
  ],
  learned: [
    "Health data needs a person in the loop: the AI drafts, and a doctor decides.",
    "Generic PDF parsing isn't good enough for medical data. Extraction has to be built for the documents you actually receive.",
  ],
  media: {
    cover: { src: "/images/projects/vitalz-hub/IMG_1250.png", alt: "VitalzHub home screen", frame: "phone" },
    screenshots: [
      {
        src: "/images/projects/vitalz-hub/IMG_1250.png",
        alt: "VitalzHub home screen",
        caption: "Home: \"No more guesswork with your health\"",
        frame: "phone",
      },
      {
        src: "/images/projects/vitalz-hub/IMG_1249.png",
        alt: "Bloodwork timeline comparing hematocrit and hemoglobin over time",
        caption: "Bloodwork history, compared across tests",
        frame: "phone",
      },
      {
        src: "/images/projects/vitalz-hub/shop.png",
        alt: "Supplement shop inside the app",
        caption: "Supplement shop, linked to each health plan",
        frame: "phone",
      },
    ],
  },
  seo: { title: "VitalzHub healthcare platform" },
};
