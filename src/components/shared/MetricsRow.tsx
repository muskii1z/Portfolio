import Link from "next/link";
import type { Metric } from "@/data/work";
import { cn } from "@/lib/utils";

const tints = ["bg-idea-soft", "bg-learn-soft", "bg-done-soft", "bg-warm-soft"];

type Item = Metric & { href?: string };

/**
 * Headline numbers. "chunky" is the scrapbook version for the home page;
 * "plain" is the quieter version for case studies.
 */
export function MetricsRow({
  metrics,
  variant = "plain",
  className,
}: {
  metrics: Item[];
  variant?: "chunky" | "plain";
  className?: string;
}) {
  if (metrics.length === 0) return null;
  const cols = metrics.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <dl className={cn("grid gap-4", cols, className)}>
      {metrics.map((m, i) => {
        const body = (
          <>
            <dt className="sr-only">{m.label}</dt>
            <dd
              className={cn(
                "font-display font-bold text-ink leading-none tracking-tight",
                variant === "chunky" ? "text-[clamp(34px,4vw,46px)]" : "text-[clamp(28px,3.4vw,38px)]"
              )}
            >
              {m.value}
            </dd>
            <dd className="mt-2.5 font-body font-bold text-[15px] leading-snug text-ink/80">{m.label}</dd>
            {m.note && <dd className="mt-1.5 font-lab text-[11px] uppercase tracking-[0.1em] text-muted">{m.note}</dd>}
          </>
        );
        const box =
          variant === "chunky"
            ? cn("block h-full blk p-5", tints[i % tints.length])
            : "block h-full bg-surface border-[2.5px] border-ink rounded-2xl p-5";

        return m.href ? (
          <Link
            key={m.label}
            href={m.href}
            className={cn(box, "transition-transform hover:-translate-y-0.5")}
          >
            {body}
          </Link>
        ) : (
          <div key={m.label} className={box}>
            {body}
          </div>
        );
      })}
    </dl>
  );
}
