import type { Tint } from "@/components/home/Sticker";

/** Printed in the polaroid's bottom margin on the home page. */
export const heroStats: { label: string; value: string }[] = [
  { label: "Name", value: "Musab Saraswat" },
  { label: "Based", value: "Dallas, TX" },
  { label: "Role", value: "AI Engineer" },
  { label: "Also", value: "Founder @ Starline Labs" },
];

/** Headline numbers under the hero. Every one links to the work behind it. */
export const proof: { value: string; label: string; href: string }[] = [
  { value: "2", label: "apps shipped to the App Store and Google Play", href: "/work/boutlook" },
  { value: "4 → 0", label: "answers breaking a client's equipment limits, after I added filters", href: "/work/rag-motion" },
  { value: "55", label: "test questions behind every change to my RAG system", href: "/work/rag-motion" },
  { value: "Funded", label: "healthcare platform, built from my solo prototype", href: "/work/vitalz-hub" },
];

/** The lined index card in "who I am". Keep each one short. */
export const fastFacts = [
  "Big sports fan",
  "Traveler",
  "Home chef",
];

/** The sticky note in "who I am". */
export const currently: { text: string; href?: string }[] = [
  { text: "writing Loop to Harness, an 11-day course on building agents" },
  { text: "building rag-motion, an AI assistant for strength coaches", href: "/work/rag-motion" },
  { text: "shipping AI products for clients through Starline Labs" },
];

/** "What I build with" stickers. */
export const stack: { label: string; tint: Tint }[] = [
  { label: "Python", tint: "done-soft" },
  { label: "FastAPI", tint: "surface" },
  { label: "TypeScript", tint: "idea-soft" },
  { label: "Next.js", tint: "surface" },
  { label: "React Native", tint: "learn-soft" },
  { label: "Claude API", tint: "build" },
  { label: "OpenAI API", tint: "surface" },
  { label: "RAG + pgvector", tint: "read" },
  { label: "Evals", tint: "done" },
  { label: "LangSmith", tint: "learn-soft" },
  { label: "AWS", tint: "idea-soft" },
  { label: "Supabase", tint: "done-soft" },
  { label: "Claude Code", tint: "idea" },
];
