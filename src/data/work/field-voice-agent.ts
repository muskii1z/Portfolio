import type { CaseStudy } from "./types";

export const fieldVoiceAgent: CaseStudy = {
  slug: "field-voice-agent",
  title: "Voice agent for field teams",
  kind: "client",
  // The end client is a nonprofit and stays anonymous: never name it anywhere on the site.
  client: { name: "a nonprofit's field teams", public: false, via: "Camel Case Labs" },
  tagline:
    "A mobile app where field staff log their visits by speaking, and the evaluation harness that keeps the agent honest.",
  role: "Mobile app, matching, evaluation, and production fixes (a teammate built the agent's backend orchestration)",
  timeline: "May 2026 – Present",
  year: 2026,
  status: "live",
  tier: "featured",
  order: 3,
  accent: "learn",
  links: {},
  stack: ["React Native", "Expo", "FastAPI", "Groq Whisper", "LLM tool calling", "pytest"],
  metrics: [
    { value: "922", label: "locations matched from speech" },
    { value: "3 weeks", label: "of live field testing behind the reliability fixes" },
    { value: "Google Play", label: "released to field staff" },
  ],
  problem:
    "Field staff visit sites all day and had to log every visit in forms afterward. A voice agent lets them just say what happened. The hard part was making it dependable: speech-to-text mishears place names, and an agent that logs the wrong site, or says it logged something it didn't, is worse than no agent at all.",
  whatIBuilt: [
    "The React Native app: record a visit, transcribe it with Groq Whisper, and let the agent draft the activity log for review",
    "A matcher that resolves a spoken location against 922 records by checking how many of the name's distinctive words were heard, ignoring filler words, and tolerating transcription typos",
    "Confidence and ambiguity thresholds: when two locations score too close, the app asks the user to pick instead of guessing",
    "A read-only evaluation harness: a test suite of real cases, a snapshot of production data to replay them against, a runner, and a review page",
    "Fixes for failures found in live use: the agent reporting outreach it never logged, action types hardcoded instead of read from the database, and permission gaps that locked out 2 manager roles",
  ],
  decisions: [
    {
      title: "Ask instead of guess",
      why: "A transcription error like \"Southlight\" for \"Southlake\" can land on the wrong site with full confidence.",
      result: "Below a confidence threshold, or when two sites score too close, the app shows what it heard and lets the user choose.",
    },
    {
      title: "Test changes against real cases before shipping",
      why: "Every prompt or tool change risked breaking something that worked the day before.",
      result: "Changes are scored against real production cases, replayed from a snapshot, before release.",
    },
    {
      title: "Handle errors by what the user can do about them",
      why: "A network blip and a failed recording need different fixes, but both showed the same error.",
      result: "Network failures offer a retry; failed recordings ask for a new one. Retry now resends the exact saved request, which fixed a bug where it resubmitted the previous report.",
    },
    {
      title: "Make recording recover on its own",
      why: "Three separate bugs could leave the microphone stuck until the app restarted, and a 2-minute timer silently cut off long recordings.",
      result: "The recorder always releases cleanly, and long recordings are carried through to a plan instead of thrown away.",
    },
  ],
  results: [
    "Released on Google Play for field staff",
    "The agent no longer reports work it didn't do, and both manager roles have access again",
    "Recording, retry, and cancel behave predictably after three weeks of field-test fixes",
  ],
  learned: [
    "An agent that sounds right but logs the wrong thing loses trust faster than having no agent. Evaluation has to use real cases.",
    "Most of the failures weren't the model. They were everything around it: recorders, retries, sessions, and permissions.",
  ],
  media: { screenshots: [] },
  seo: { title: "Voice agent for field teams" },
};
