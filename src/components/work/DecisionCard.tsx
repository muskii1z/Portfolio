import type { Decision } from "@/data/work";

/** One engineering decision: what I chose, why, and what happened. */
export function DecisionCard({ d }: { d: Decision }) {
  return (
    <article className="h-full bg-surface border-[2.5px] border-ink rounded-2xl p-5 sm:p-6">
      <h3 className="font-display font-bold text-xl leading-snug text-ink text-balance">{d.title}</h3>
      {d.alternatives && (
        <p className="mt-2 font-lab text-[11px] uppercase tracking-[0.1em] text-muted">Instead of: {d.alternatives}</p>
      )}
      <dl className="mt-4 space-y-3">
        <div>
          <dt className="font-lab text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Why</dt>
          <dd className="mt-1 font-body font-semibold text-[16px] leading-relaxed text-ink/85">{d.why}</dd>
        </div>
        <div className="border-t-2 border-dashed border-ink/15 pt-3">
          <dt className="font-lab text-[11px] font-semibold uppercase tracking-[0.12em] text-done">Result</dt>
          <dd className="mt-1 font-body font-bold text-[16px] leading-relaxed text-ink">{d.result}</dd>
        </div>
      </dl>
    </article>
  );
}
