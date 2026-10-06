import Link from "next/link";
import type { ExperienceItem } from "@/data/experience";
import { getCaseStudy } from "@/data/work";
import { cn } from "@/lib/utils";

const dots = ["bg-idea", "bg-learn", "bg-done", "bg-warm"];

/**
 * Work history. "scrapbook" is the card version for home and about;
 * "plain" is the quiet version for the résumé page. `compact` hides the bullets.
 */
export function ExperienceTimeline({
  items,
  variant = "scrapbook",
  compact = false,
}: {
  items: ExperienceItem[];
  variant?: "scrapbook" | "plain";
  compact?: boolean;
}) {
  const plain = variant === "plain";

  return (
    <ol className={cn("relative", plain ? "space-y-9" : "space-y-7")}>
      {!plain && <span aria-hidden="true" className="absolute left-[11px] top-3 bottom-3 w-[3px] bg-ink/15" />}

      {items.map((item, i) =>
        item.roles.map((role) => {
          const related = (item.related ?? []).map(getCaseStudy).filter((c) => c !== undefined);
          return (
            <li key={item.org + role.title} className={cn("relative", !plain && "pl-10")}>
              {!plain && (
                <span
                  aria-hidden="true"
                  className={cn("absolute left-0 top-6 w-[25px] h-[25px] rounded-full border-[3px] border-ink", dots[i % dots.length])}
                />
              )}

              <div className={plain ? "" : "bg-surface border-[3px] border-ink rounded-2xl p-5 sm:p-6 shadow-[4px_4px_0_var(--color-ink)]"}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-bold text-[22px] leading-tight text-ink">
                    {item.org}
                    {item.orgNote && <span className="font-body font-bold text-base text-muted"> ({item.orgNote})</span>}
                  </h3>
                  <span className="font-lab text-xs text-muted">{item.location}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-body font-extrabold italic text-[17px] text-ink">
                    {role.title}
                    {(role.type === "Contract" || item.via) && (
                      <span className="font-bold not-italic text-muted">
                        {" "}
                        · {[role.type === "Contract" ? "Contract" : null, item.via].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </p>
                  <span className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink">
                    {role.period}
                    {role.current && (
                      <span className="ml-2 inline-block align-middle w-2 h-2 rounded-full bg-done border border-ink" aria-label="current" />
                    )}
                  </span>
                </div>

                {role.summary && (
                  <p className="mt-3 font-body font-semibold text-[15px] italic leading-relaxed text-muted">{role.summary}</p>
                )}

                {!compact && (
                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 font-body font-semibold text-[16px] leading-relaxed text-ink/85">
                        <span aria-hidden="true" className="flex-none mt-[0.6em] w-1.5 h-1.5 rounded-full bg-ink/50" />
                        <span className="text-pretty">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {related.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="font-lab text-[11px] uppercase tracking-[0.12em] text-muted">Case studies</span>
                    {related.map((cs) => (
                      <Link
                        key={cs.slug}
                        href={`/work/${cs.slug}`}
                        className="sticker bg-idea-soft normal-case! tracking-normal! text-[13px]! hover:-translate-y-0.5 transition-transform"
                      >
                        {cs.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })
      )}
    </ol>
  );
}
