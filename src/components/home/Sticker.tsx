import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tints = {
  idea: "bg-idea",
  learn: "bg-learn",
  read: "bg-read",
  build: "bg-build",
  done: "bg-done",
  watch: "bg-watch",
  practice: "bg-practice",
  warm: "bg-warm",
  "idea-soft": "bg-idea-soft",
  "done-soft": "bg-done-soft",
  "learn-soft": "bg-learn-soft",
  surface: "bg-surface",
} as const;

export type Tint = keyof typeof tints;

export function Sticker({
  children,
  tint = "surface",
  className,
}: {
  children: ReactNode;
  tint?: Tint;
  className?: string;
}) {
  return <span className={cn("sticker", tints[tint], className)}>{children}</span>;
}
