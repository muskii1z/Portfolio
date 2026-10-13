import type { CaseStudy } from "./types";

export const ragMotion: CaseStudy = {
  slug: "rag-motion",
  title: "rag-motion",
  kind: "own",
  tagline:
    "An AI assistant for strength coaches that answers only from trusted sources, cites every claim, and builds full training programs with an agent.",
  role: "Solo engineer: design, build, and evaluation",
  timeline: "Sep 2026 – Present",
  year: 2026,
  status: "in-progress",
  tier: "featured",
  order: 1,
  accent: "ink",
  links: { repo: "https://github.com/muskii1z/rag-motion" },
  stack: ["Python", "FastAPI", "PostgreSQL + pgvector", "Voyage embeddings", "Gemini via OpenRouter", "LangSmith", "pytest", "Docker"],
  metrics: [
    { value: "4 → 0", label: "answers breaking a client's equipment limits, out of 13", note: "averaged over 3 runs" },
    { value: "30/30", label: "agent-built programs passing every check, up from 15/20" },
    { value: "55", label: "test questions with reviewed expected answers" },
    { value: "173", label: "automated tests" },
  ],
  problem:
    "AI training advice usually sounds confident but can't say where it came from, and it ignores the details a coach cares about: what equipment someone has, how experienced they are, whether they're 17 or 70. I wanted an assistant that answers only from sources a coach would trust, cites every claim, respects a client's limits, and then builds a full training program the same way.",
  whatIBuilt: [
    "A knowledge base of the Physical Activity Guidelines for Americans, 8 open-access research papers, coaching notes, and a 60-exercise catalog, stored in PostgreSQL with pgvector",
    "Ingestion that splits each document by its own structure into 150–450 word passages, keeping the source, chapter, pages, and license on every passage",
    "Search that turns a question into an embedding and pulls the closest exercises and passages, with SQL filters for equipment and age group read from the question",
    "Answers written only from the retrieved evidence, with every claim cited and every citation checked in code. Advice from the model's general knowledge is labeled separately.",
    "A tool-calling agent that interviews a client, searches exercises and sources, and submits a full program, which code checks against 18 rules before accepting it",
    "LangSmith tracing on every request: what was retrieved, the prompt, the answer, the cost, and the timing",
  ],
  architecture: {
    steps: [
      "Read the limits: a small model call pulls equipment, age group, and experience level from the question",
      "Expand gym slang: a dictionary turns shorthand like RDL and BSS into full exercise names",
      "Retrieve: pgvector finds the closest exercises and passages, filtered in SQL to what the client can use",
      "Answer: Gemini writes from that evidence only and cites every claim",
      "Check: code verifies every citation before the answer is shown",
    ],
  },
  evaluation: {
    approach:
      "A 55-question test set with expected, acceptable, and forbidden answers for each question, drafted with AI and reviewed by me against my exercise science training. Retrieval is scored with recall and MRR. Answers are checked in code for valid citations, honest coverage claims, and forbidden recommendations, with an AI judge used only for a few labeling rules. Every before-and-after comparison is averaged over 3 runs, because single runs proved too noisy to trust. The program agent has its own evaluation: 14 fictional clients, scored by the same code checks the agent has to pass.",
    results: [
      { value: "40/40", label: "citations valid" },
      { value: "0.80 → 0.83", label: "exercise recall after adding filters" },
      { value: "89% → 100%", label: "slang questions finding the right exercise" },
    ],
  },
  decisions: [
    {
      title: "Enforce limits in the database, not the prompt",
      why: "Telling the model not to suggest barbell exercises doesn't stop it from seeing them. So a small model call reads the client's equipment and age group, and SQL keeps only exercises they can actually do.",
      result: "Answers that broke a client's limits went from 4 of 13 to 0 across 3 runs, and exercise recall went up from 0.80 to 0.83.",
      alternatives: "Rules in the prompt",
    },
    {
      title: "A slang dictionary instead of an AI rewrite",
      why: "Embeddings don't know gym shorthand: \"RDL\" scored far below \"Romanian deadlift.\" I tested a small dictionary against having a model rewrite every question.",
      result: "Both found the right exercise for every slang question, up from 89%. The dictionary added no time; the model rewrite added 640 ms. The dictionary won.",
      alternatives: "LLM query rewriting",
    },
    {
      title: "Code builds the structure, the agent fills it",
      why: "When the agent planned a whole training week itself, about 1 in 4 programs broke a structural rule even after 3 tries.",
      result: "Now code lays out the week and the agent chooses exercises for each slot. Programs passing every check went from 15 of 20 to 30 of 30.",
    },
    {
      title: "Pick models by testing, not by price",
      why: "I compared 6 models on the agent. One cheaper model matched Gemini's reliability at about a quarter of the cost, but it stalled on full program-sized answers.",
      result: "Gemini 2.5 Flash runs the agent, with a cheaper fallback model and a 40-second hard deadline. Programs come back in 8–21 seconds.",
    },
    {
      title: "Average every comparison over 3 runs",
      why: "The same question could come back with a different answer on the next run, so a single run could make a change look better or worse than it was.",
      result: "A change only counts if it beats the run-to-run noise.",
    },
  ],
  results: [
    "Every answer cites its sources, and code verifies each citation",
    "Equipment and age-group limits are enforced: no limit-breaking answers across 3 runs",
    "The program agent has passed every check on all 90 runs since the structure fix",
    "Answers cost about $0.0004 each",
  ],
  learned: [
    "Structured output checks the shape of an answer, not whether it's true. One model followed an instruction hidden inside a document.",
    "Search can't enforce rules on its own. Limits belong in the query, not the prompt.",
    "An answer can't be better than what search returns, so I measure retrieval separately from answers.",
    "A research tool once invented numbers from a PDF it couldn't read. Checking against the real text caught it.",
  ],
  media: { screenshots: [] },
  seo: { title: "rag-motion: a RAG system and agent for strength coaches" },
};
