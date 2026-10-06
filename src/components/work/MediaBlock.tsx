import Image from "next/image";
import type { CaseStudy } from "@/data/work";
import { PhoneMockups } from "@/components/PhoneMockups";
import { YouTubeEmbed } from "./YouTubeEmbed";

/** The case study's main visual: video first, then phone screenshots, then a cover image. */
export function MediaBlock({ cs }: { cs: CaseStudy }) {
  const { video, screenshots, cover } = cs.media;

  if (video?.kind === "youtube") return <YouTubeEmbed id={video.id} title={video.title} />;

  if (video?.kind === "file") {
    return (
      <div className="relative">
        <span className="tape -top-3 left-10 -rotate-6" />
        <video
          src={video.src}
          poster={video.poster ?? cover?.src}
          controls
          preload="metadata"
          className="w-full rounded-2xl border-[3px] border-ink bg-ink shadow-[6px_6px_0_var(--color-ink)]"
        />
      </div>
    );
  }

  if (screenshots.length > 0) return <PhoneMockups screenshots={screenshots} />;

  if (cover) {
    return (
      <figure className="relative">
        <span className="tape -top-3 left-10 -rotate-6 blue" />
        <div className="overflow-hidden rounded-2xl border-[3px] border-ink bg-surface shadow-[6px_6px_0_var(--color-ink)]">
          <div className="flex gap-1.5 px-4 py-3 border-b-[3px] border-ink bg-learn-soft" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-watch border-2 border-ink" />
            <span className="w-3 h-3 rounded-full bg-idea border-2 border-ink" />
            <span className="w-3 h-3 rounded-full bg-done border-2 border-ink" />
          </div>
          <div className="relative aspect-[16/10]">
            <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 896px) 860px, 100vw" className="object-cover object-top" />
          </div>
        </div>
        {cover.caption && <figcaption className="mt-3 font-lab text-xs text-muted text-center">{cover.caption}</figcaption>}
      </figure>
    );
  }

  return null;
}
