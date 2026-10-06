import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail, FileText } from "lucide-react";
import { detailPages, getAdjacent, getCaseStudy } from "@/data/work";
import { site } from "@/data/site";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudySection, Prose, BulletList } from "@/components/work/CaseStudySection";
import { MediaBlock } from "@/components/work/MediaBlock";
import { ArchitectureBlock } from "@/components/work/ArchitectureBlock";
import { DecisionCard } from "@/components/work/DecisionCard";
import { MetricsRow } from "@/components/shared/MetricsRow";
import { StackChips } from "@/components/shared/StackChips";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return detailPages().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return pageMetadata({
    title: cs.seo?.title ?? cs.title,
    description: cs.seo?.description ?? cs.tagline,
    path: `/work/${cs.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs || !cs.problem) notFound();

  const { prev, next } = getAdjacent(cs.slug);
  let n = 0;
  const num = () => ++n;

  const hasMedia = Boolean(cs.media.video || cs.media.screenshots.length || cs.media.cover);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24">
      <CaseStudyHeader cs={cs} />

      {hasMedia && (
        <div className="mt-12">
          <MediaBlock cs={cs} />
        </div>
      )}

      <CaseStudySection n={num()} label="The problem">
        <Prose>{cs.problem}</Prose>
      </CaseStudySection>

      {cs.whatIBuilt?.length ? (
        <CaseStudySection n={num()} label="What I built">
          <BulletList items={cs.whatIBuilt} />
        </CaseStudySection>
      ) : null}

      {cs.architecture && (
        <CaseStudySection n={num()} label="How it works">
          <ArchitectureBlock architecture={cs.architecture} />
        </CaseStudySection>
      )}

      {cs.evaluation && (
        <CaseStudySection n={num()} label="How I measured it">
          <Prose>{cs.evaluation.approach}</Prose>
          {cs.evaluation.results?.length ? <MetricsRow metrics={cs.evaluation.results} className="mt-6" /> : null}
        </CaseStudySection>
      )}

      {cs.decisions?.length ? (
        <CaseStudySection n={num()} label="Key decisions">
          <div className="grid gap-5 md:grid-cols-2">
            {cs.decisions.map((d) => (
              <DecisionCard key={d.title} d={d} />
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      {cs.results?.length ? (
        <CaseStudySection n={num()} label="Results">
          <BulletList items={cs.results} marker="✓" />
        </CaseStudySection>
      ) : null}

      {cs.learned?.length ? (
        <CaseStudySection n={num()} label="What I learned">
          <BulletList items={cs.learned} />
        </CaseStudySection>
      ) : null}

      <CaseStudySection n={num()} label="Stack">
        <StackChips stack={cs.stack} />
      </CaseStudySection>

      {/* Contact */}
      <section className="mt-16 blk bg-idea-soft p-6 sm:p-8 text-center">
        <p className="font-hand text-2xl text-muted -rotate-1">want the longer version?</p>
        <p className="mt-2 font-display font-bold text-2xl sm:text-3xl text-ink text-balance">
          I&apos;m happy to walk through how I built it.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${site.email}`} className="btn-chunky bg-ink! text-white!">
            <Mail size={18} aria-hidden="true" /> Email me
          </a>
          <a href={site.resume.pdf} target="_blank" rel="noopener noreferrer" className="btn-chunky">
            <FileText size={18} aria-hidden="true" /> Résumé
          </a>
        </div>
      </section>

      {/* Previous / next */}
      {(prev || next) && (
        <nav className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="More case studies">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group bg-surface border-[2.5px] border-ink rounded-2xl p-5 hover:-translate-y-0.5 transition-transform">
              <span className="inline-flex items-center gap-1.5 font-lab text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                <ArrowLeft size={14} aria-hidden="true" /> Previous
              </span>
              <span className="mt-2 block font-display font-bold text-xl text-ink">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group bg-surface border-[2.5px] border-ink rounded-2xl p-5 text-right hover:-translate-y-0.5 transition-transform"
            >
              <span className="inline-flex items-center gap-1.5 font-lab text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Next <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="mt-2 block font-display font-bold text-xl text-ink">{next.title}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
