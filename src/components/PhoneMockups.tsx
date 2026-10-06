import Image from "next/image";
import type { Media } from "@/data/work";

/** A row of phone-framed screenshots. Scrolls sideways on narrow screens. */
export function PhoneMockups({ screenshots }: { screenshots: Media[] }) {
  if (screenshots.length === 0) return null;

  return (
    <div className="flex justify-start sm:justify-center gap-4 sm:gap-7 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1">
      {screenshots.map((s) => (
        <figure key={s.src + s.alt} className="flex-none snap-center">
          <div className="relative w-36 sm:w-48 bg-ink rounded-[2.1rem] sm:rounded-[2.6rem] p-1.5 sm:p-2 shadow-[5px_5px_0_var(--color-ink)]">
            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 bg-ink rounded-b-xl z-10" />
            <div className="relative bg-surface rounded-[1.7rem] sm:rounded-[2.1rem] overflow-hidden aspect-[9/19.5]">
              <Image src={s.src} alt={s.alt} fill sizes="(min-width: 640px) 192px, 144px" className="object-cover" />
            </div>
          </div>
          {s.caption && (
            <figcaption className="mt-3 max-w-36 sm:max-w-48 text-center font-lab text-[11px] leading-relaxed text-muted">
              {s.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
