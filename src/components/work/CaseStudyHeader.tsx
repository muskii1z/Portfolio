import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clientLine, type CaseStudy } from "@/data/work";
import { Sticker } from "@/components/home/Sticker";
import { LinkButtons } from "@/components/shared/LinkButtons";
import { MetricsRow } from "@/components/shared/MetricsRow";

const statusLabel: Record<CaseStudy["status"], { text: string; tint: "done" | "idea" | "learn-soft" | "surface" }> = {
  live: { text: "live", tint: "done" },
  shipped: { text: "shipped", tint: "done" },
  "in-progress": { text: "in progress", tint: "idea" },
  archived: { text: "archived", tint: "surface" },
};

/** Top of a case study: who it was for, the title, my role, links, and the headline numbers. */
export function CaseStudyHeader({ cs }: { cs: CaseStudy }) {
  const status = statusLabel[cs.status];

  return (
    <header>
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 font-lab text-xs font-semibold uppercase tracking-[0.14em] text-muted hover:text-ink transition-colors"
      >
        <ArrowLeft size={15} aria-hidden="true" /> All work
      </Link>

      <p className="mt-8 font-lab text-xs font-semibold uppercase tracking-[0.14em] text-muted">{clientLine(cs)}</p>
      <h1 className="mt-3 font-display font-bold text-ink leading-[0.98] tracking-tight text-[clamp(40px,6.5vw,72px)] text-balance">
        {cs.title}
      </h1>
      <p className="mt-5 font-body font-semibold text-xl sm:text-[22px] leading-relaxed text-ink/80 max-w-[60ch] text-pretty">
        {cs.tagline}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        <Sticker tint={status.tint}>{status.text}</Sticker>
        <Sticker tint="surface">{cs.timeline}</Sticker>
      </div>
      <p className="mt-4 font-body font-bold text-[15px] text-muted">
        <span className="font-lab text-[11px] uppercase tracking-[0.12em] mr-2">My role</span>
        {cs.role}
      </p>

      <div className="mt-7">
        <LinkButtons links={cs.links} />
      </div>

      <MetricsRow metrics={cs.metrics} className="mt-10" />
    </header>
  );
}
