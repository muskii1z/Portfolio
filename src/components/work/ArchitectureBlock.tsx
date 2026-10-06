import Image from "next/image";
import type { CaseStudy } from "@/data/work";

/** How the system works: a diagram when there is one, otherwise the steps as a numbered flow. */
export function ArchitectureBlock({ architecture }: { architecture: NonNullable<CaseStudy["architecture"]> }) {
  const { diagram, steps } = architecture;

  if (diagram) {
    return (
      <figure className="overflow-hidden rounded-2xl border-[2.5px] border-ink bg-surface p-4">
        <div className="relative aspect-[16/9]">
          <Image src={diagram.src} alt={diagram.alt} fill sizes="(min-width: 896px) 860px, 100vw" className="object-contain" />
        </div>
        {diagram.caption && <figcaption className="mt-3 font-lab text-xs text-muted text-center">{diagram.caption}</figcaption>}
      </figure>
    );
  }

  if (!steps?.length) return null;

  return (
    <ol className="relative space-y-4">
      <span aria-hidden="true" className="absolute left-[19px] top-4 bottom-4 w-[3px] bg-ink/15" />
      {steps.map((step, i) => {
        const [head, ...rest] = step.split(": ");
        return (
          <li key={step} className="relative flex gap-4 items-start">
            <span className="relative z-10 flex-none grid place-items-center w-10 h-10 rounded-full bg-idea border-[2.5px] border-ink font-lab text-sm font-semibold text-ink">
              {i + 1}
            </span>
            <p className="pt-1.5 font-body font-semibold text-[17px] leading-relaxed text-ink/85">
              {rest.length ? (
                <>
                  <strong className="font-extrabold text-ink">{head}:</strong> {rest.join(": ")}
                </>
              ) : (
                step
              )}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
