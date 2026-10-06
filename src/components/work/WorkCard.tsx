import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clientLine, type CaseStudy } from "@/data/work";
import { StackChips } from "@/components/shared/StackChips";
import { CardVisual } from "./CardVisual";

/** A featured project on /work: text and numbers on the left, the visual on the right. */
export function WorkCard({ cs }: { cs: CaseStudy }) {
  return (
    <article className="blk p-6 sm:p-8 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
      <div className="min-w-0">
        <p className="font-lab text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {clientLine(cs)} · {cs.timeline}
        </p>
        <h2 className="mt-3 font-display font-bold text-ink text-[clamp(30px,4vw,44px)] leading-none">{cs.title}</h2>
        <p className="mt-4 font-body font-semibold text-[17px] leading-relaxed text-ink/80 max-w-[52ch]">{cs.tagline}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 max-w-md">
          {cs.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="border-l-[3px] border-ink pl-3">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-display font-bold text-2xl sm:text-3xl leading-none text-ink">{m.value}</dd>
              <dd className="mt-1.5 font-body font-bold text-sm leading-snug text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>

        <StackChips stack={cs.stack.slice(0, 5)} className="mt-6" />

        <Link href={`/work/${cs.slug}`} className="btn-chunky bg-idea! mt-7 text-[15px]! px-4! py-2.5!">
          Read the case study <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <CardVisual cs={cs} sizes="(min-width: 768px) 480px, 100vw" />
    </article>
  );
}
