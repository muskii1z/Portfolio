"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Shows YouTube's thumbnail and loads the player only when clicked,
 * so the page doesn't pull in YouTube's scripts until someone wants the video.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border-[3px] border-ink bg-ink shadow-[6px_6px_0_var(--color-ink)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- remote thumbnail, no need for next/image config */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid place-items-center w-20 h-20 rounded-full bg-watch border-[3px] border-ink shadow-[4px_4px_0_var(--color-ink)] group-hover:scale-105 transition-transform">
              <Play size={32} className="ml-1 text-ink" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
