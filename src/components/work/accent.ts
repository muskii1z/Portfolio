import type { Accent } from "@/data/work";

/** Colors for a project block, its folder tab, and its tape. */
export const accentLooks: Record<Accent, { block: string; tab: string; tape: string; soft: string }> = {
  ink: { block: "bg-ink text-white", tab: "bg-learn text-ink", tape: "", soft: "bg-learn-soft" },
  idea: { block: "bg-idea text-ink", tab: "bg-ink text-white", tape: "blue", soft: "bg-idea-soft" },
  learn: { block: "bg-learn text-ink", tab: "bg-idea text-ink", tape: "pink", soft: "bg-learn-soft" },
  warm: { block: "bg-warm text-ink", tab: "bg-ink text-white", tape: "blue", soft: "bg-warm-soft" },
  done: { block: "bg-done text-ink", tab: "bg-ink text-white", tape: "pink", soft: "bg-done-soft" },
};

export const lookFor = (accent: Accent | undefined) => accentLooks[accent ?? "ink"];
