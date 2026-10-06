import type { CaseStudy } from "./types";
import { ragMotion } from "./rag-motion";
import { boutlook } from "./boutlook";
import { fieldVoiceAgent } from "./field-voice-agent";
import { vitalzHub } from "./vitalz-hub";
import { websnipe } from "./websnipe";
import { terminalMastery, aigentDesk, aiForTeachers } from "./archive";

export type { CaseStudy, Metric, Media, Video, Decision, Accent } from "./types";

const all: CaseStudy[] = [ragMotion, boutlook, fieldVoiceAgent, vitalzHub, websnipe, terminalMastery, aigentDesk, aiForTeachers];

/** Every published case study, in display order. Drafts never appear. */
export const caseStudies: CaseStudy[] = all.filter((c) => !c.draft).sort((a, b) => a.order - b.order);

export const getFeatured = () => caseStudies.filter((c) => c.tier === "featured");
export const getArchive = () => caseStudies.filter((c) => c.tier === "archive");
export const getHomeFeatured = () => getFeatured().slice(0, 4);
export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

/** Archive items with no write-up get a card but no detail page. */
export const hasDetailPage = (c: CaseStudy) => Boolean(c.problem);

/** Studies that have a detail page, used to generate the /work/[slug] routes. */
export const detailPages = () => caseStudies.filter(hasDetailPage);

/** Previous and next study with a detail page, for links at the bottom of a case study. */
export function getAdjacent(slug: string) {
  const list = detailPages();
  const i = list.findIndex((c) => c.slug === slug);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined };
}

/** "Client work via Camel Case Labs", "For a nonprofit's field teams", or "Own project". */
export function clientLine(c: CaseStudy) {
  if (c.kind === "own") return "Own project";
  if (!c.client) return "Client work";
  if (!c.client.public) return `For ${c.client.name}${c.client.via ? ` · via ${c.client.via}` : ""}`;
  return `Client work${c.client.via ? ` · via ${c.client.via}` : ""}`;
}
