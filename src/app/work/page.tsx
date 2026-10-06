import { getArchive, getFeatured } from "@/data/work";
import { PageHeader } from "@/components/shared/PageHeader";
import { WorkCard } from "@/components/work/WorkCard";
import { ArchiveCard } from "@/components/work/ArchiveCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from Musab Saraswat: a RAG system and agent for strength coaches, mobile apps shipped to the App Store and Google Play, a voice agent for field teams, and a funded healthcare platform.",
  path: "/work",
});

export default function WorkPage() {
  const featured = getFeatured();
  const archive = getArchive();

  return (
    <div className="pb-24">
      <PageHeader
        kicker="everything I've shipped"
        title="WORK"
        intro="AI systems, agents, and mobile apps, built for clients and for myself. Each case study covers the problem, what I built, the decisions that mattered, and how I measured the result."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        {featured.map((cs) => (
          <WorkCard key={cs.slug} cs={cs} />
        ))}
      </div>

      {archive.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
          <p className="font-hand text-2xl text-muted -rotate-1">earlier work</p>
          <h2 className="mt-1 font-display font-bold text-3xl sm:text-4xl text-ink">Archive</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((cs) => (
              <ArchiveCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
