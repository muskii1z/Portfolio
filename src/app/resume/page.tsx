import Link from "next/link";
import { Download } from "lucide-react";
import { experience, education, certifications, skillGroups } from "@/data/experience";
import { getFeatured } from "@/data/work";
import { site } from "@/data/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Résumé",
  description: "Musab Saraswat's résumé: AI engineer with RAG systems, AI agents, and mobile apps shipped to production.",
  path: "/resume",
});

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-2xl text-ink border-b-[3px] border-ink pb-2 mb-6">{children}</h2>
  );
}

export default function ResumePage() {
  return (
    <div className="pb-24">
      <PageHeader kicker="the one-pager" title="Résumé" pixel={false}>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href={site.resume.pdf} target="_blank" rel="noopener noreferrer" className="btn-chunky bg-idea!">
            <Download size={18} aria-hidden="true" /> Download PDF
          </a>
          <span className="font-lab text-xs uppercase tracking-[0.12em] text-muted">Updated {site.resume.updated}</span>
        </div>
      </PageHeader>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14">
        <section>
          <Heading>Experience</Heading>
          <ExperienceTimeline items={experience} variant="plain" />
        </section>

        <section>
          <Heading>Selected work</Heading>
          <ul className="grid gap-3 sm:grid-cols-2">
            {getFeatured().map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={`/work/${cs.slug}`}
                  className="block h-full bg-surface border-[2.5px] border-ink rounded-xl p-4 hover:-translate-y-0.5 transition-transform"
                >
                  <span className="font-display font-bold text-lg text-ink">{cs.title}</span>
                  <span className="mt-1 block font-body font-semibold text-[15px] leading-snug text-ink/75">{cs.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Heading>Education</Heading>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <p className="font-display font-bold text-[22px] text-ink">{education.school}</p>
            <span className="font-lab text-xs text-muted">{education.location}</span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <p className="font-body font-extrabold italic text-[17px] text-ink">{education.degree}</p>
            <span className="font-lab text-xs font-semibold uppercase tracking-[0.08em] text-ink">{education.period}</span>
          </div>
          {education.notes.map((n) => (
            <p key={n} className="mt-3 font-body font-semibold text-[16px] leading-relaxed text-ink/85">
              {n}
            </p>
          ))}
        </section>

        <section>
          <Heading>Skills</Heading>
          <dl className="space-y-3">
            {skillGroups.map((g) => (
              <div key={g.label} className="font-body text-[16px] leading-relaxed">
                <dt className="inline font-extrabold text-ink">{g.label}: </dt>
                <dd className="inline font-semibold text-ink/85">{g.items}</dd>
              </div>
            ))}
            <div className="font-body text-[16px] leading-relaxed">
              <dt className="inline font-extrabold text-ink">Certifications: </dt>
              <dd className="inline font-semibold text-ink/85">{certifications.join(", ")}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
