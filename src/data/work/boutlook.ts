import type { CaseStudy } from "./types";

export const boutlook: CaseStudy = {
  slug: "boutlook",
  title: "BOUTLOOK",
  kind: "client",
  client: { name: "BOUTLOOK", public: true, via: "Camel Case Labs" },
  tagline:
    "Rebuilt a combat sports organization's mobile app from scratch and shipped it to the App Store and Google Play.",
  role: "Sole mobile engineer",
  timeline: "May 2026 – Present",
  year: 2026,
  status: "live",
  tier: "featured",
  order: 2,
  accent: "idea",
  links: {},
  stack: ["React Native", "Expo", "TypeScript", "TanStack Query", "Zustand", "Firebase Cloud Messaging", "EAS"],
  metrics: [
    { value: "2", label: "app stores: App Store and Google Play" },
    { value: "11", label: "screens rebuilt across 6 feature areas" },
    { value: "Solo", label: "engineer on the mobile app" },
  ],
  problem:
    "BOUTLOOK runs combat sports events, and its officials and staff work from their phones: checking events, setting availability, and finding each other in the directory. The mobile app needed a full rebuild, and it had to work against the live system the organization runs on.",
  whatIBuilt: [
    "A ground-up rebuild in React Native and Expo: events, availability, a staff directory, documents, and profiles",
    "Sign-in with biometric unlock and secure token storage, plus a working password reset",
    "Push notifications end to end: EAS build configuration, Firebase delivery on Android, opening the right screen when someone taps a notification, and a clear path back when notifications are blocked",
    "Separate mock, QA, and staging modes, so every feature could be tested without touching live data",
    "QA-only diagnostics that show a device's push token, for debugging delivery on real phones",
  ],
  decisions: [
    {
      title: "Show blocked notifications instead of failing silently",
      why: "If someone has turned notifications off, pushes simply never arrive, and nobody knows why.",
      result: "The events screen tells users when notifications are blocked and how to turn them back on.",
    },
    {
      title: "Mock, QA, and staging modes from the start",
      why: "Testing against the live system risks real event and staff data.",
      result: "Features were checked against mock and QA data before they reached staff.",
    },
    {
      title: "Small releases driven by real use",
      why: "Staff found problems using the app day to day, like unmarked days showing as unavailable and a button that was too easy to tap by accident.",
      result: "Steady releases through v1.1.1, each fixing what staff actually ran into.",
    },
  ],
  results: [
    "Live on the App Store and Google Play",
    "The organization's staff run their day-to-day work on it",
    "Push notifications delivered on iOS and Android, with recovery when they're blocked",
  ],
  learned: [
    "Push notifications have more ways to fail silently than to work: permissions, build configuration, and device tokens all have to line up.",
    "Real users find different problems than testers do. The most useful fixes came from watching how staff actually used the app.",
  ],
  media: { screenshots: [] },
  seo: { title: "BOUTLOOK mobile app" },
};
