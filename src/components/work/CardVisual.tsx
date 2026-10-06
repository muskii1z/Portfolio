import Image from "next/image";
import type { CaseStudy } from "@/data/work";
import { ThreePhonesComposite } from "@/components/ui/three-phones-composite";
import { lookFor } from "./accent";

/**
 * A note card for projects without screens yet: the system's steps, or the
 * first things built. The card's text side already shows the numbers.
 */
function HowItWorks({ cs, soft }: { cs: CaseStudy; soft: string }) {
  const steps = cs.architecture?.steps;
  const items = (steps?.length ? steps : cs.whatIBuilt ?? []).map((item) => {
    const [head, ...rest] = item.split(": ");
    return rest.length ? { head, detail: rest.join(": ") } : { head: "", detail: item };
  });
  const short = items.every((i) => i.head);
  const shown = items.slice(0, short ? 5 : 3);

  return (
    <div className={`lg:absolute lg:inset-0 ${soft} flex flex-col justify-center p-6 sm:p-8`}>
      <p className="font-lab text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
        {steps?.length ? "How it works" : "What I built"}
      </p>
      <ol className="mt-4 space-y-3">
        {shown.map((item, i) => (
          <li key={item.head + item.detail} className="flex gap-3 items-start">
            <span className="flex-none grid place-items-center w-7 h-7 rounded-full bg-surface border-2 border-ink font-lab text-xs font-semibold">
              {i + 1}
            </span>
            <p className="min-w-0 pt-0.5 font-body text-[15px] leading-snug">
              {item.head ? (
                <>
                  <strong className="font-extrabold">{item.head}</strong>
                  <span className="block truncate font-semibold text-ink/70">{item.detail}</span>
                </>
              ) : (
                <span className="line-clamp-2 font-bold text-ink/85">{item.detail}</span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * The picture side of a project card: phone screenshots, a cover image, or,
 * when a project has neither, a short how-it-works note.
 */
export function CardVisual({ cs, sizes }: { cs: CaseStudy; sizes: string }) {
  const look = lookFor(cs.accent);
  const phones = cs.media.screenshots.filter((s) => s.frame === "phone");
  // The text note sizes to its content below desktop width, where a 4:3 box would clip it.
  const hasImage = phones.length >= 2 || Boolean(cs.media.cover);

  return (
    <div className="relative min-w-0">
      <span className={`tape -top-3 left-8 -rotate-6 ${look.tape}`} />
      <span className={`tape -top-3 right-8 rotate-6 ${look.tape}`} />
      <div
        className={`relative ${hasImage ? "aspect-[4/3]" : "lg:aspect-[4/3]"} overflow-hidden rounded-xl border-[3px] border-ink bg-surface text-ink`}
      >
        {phones.length >= 2 ? (
          <ThreePhonesComposite images={phones} />
        ) : cs.media.cover ? (
          <Image src={cs.media.cover.src} alt={cs.media.cover.alt} fill sizes={sizes} className="object-contain p-3" />
        ) : (
          <HowItWorks cs={cs} soft={look.soft} />
        )}
      </div>
    </div>
  );
}
