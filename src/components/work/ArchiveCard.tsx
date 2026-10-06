import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hasDetailPage, type CaseStudy } from "@/data/work";

/** A compact card for earlier projects. Links to a write-up when there is one. */
export function ArchiveCard({ cs }: { cs: CaseStudy }) {
  const detail = hasDetailPage(cs);
  const external = !detail ? cs.links.live ?? cs.links.repo : undefined;

  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display font-bold text-xl text-ink">{cs.title}</h3>
        <span className="font-lab text-xs text-muted">{cs.year}</span>
      </div>
      <p className="mt-2 font-body font-semibold text-[15px] leading-relaxed text-ink/75">{cs.tagline}</p>
      {cs.metrics.length > 0 && (
        <p className="mt-3 font-lab text-xs text-muted">
          {cs.metrics.map((m) => `${m.value} ${m.label}`).join(" · ")}
        </p>
      )}
      {(detail || external) && (
        <span className="mt-4 inline-flex items-center gap-1 font-lab text-xs font-semibold uppercase tracking-[0.12em] text-ink">
          {detail ? "Read more" : "View"} <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      )}
    </>
  );

  const box = "block h-full bg-surface border-[2.5px] border-ink rounded-2xl p-5";

  if (detail) {
    return (
      <Link href={`/work/${cs.slug}`} className={`${box} transition-transform hover:-translate-y-0.5`}>
        {inner}
      </Link>
    );
  }
  if (external) {
    return (
      <a href={external} target="_blank" rel="noopener noreferrer" className={`${box} transition-transform hover:-translate-y-0.5`}>
        {inner}
      </a>
    );
  }
  return <div className={box}>{inner}</div>;
}
