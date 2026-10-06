import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const HEADSHOT_SRC = "/images/me/headshot.jpg";

/**
 * A taped polaroid. Shows the headshot when it exists in /public, otherwise a
 * clearly marked placeholder so the page still renders.
 */
export function Polaroid({
  hasPhoto,
  caption,
  tape = "idea",
  className,
  sizes = "220px",
  priority = false,
  children,
}: {
  hasPhoto: boolean;
  caption?: string;
  tape?: "idea" | "blue" | "pink" | "none";
  className?: string;
  sizes?: string;
  /** Load eagerly (use for the above-the-fold hero photo). */
  priority?: boolean;
  /** Content for the polaroid's bottom margin (e.g. quick stats). */
  children?: ReactNode;
}) {
  return (
    <figure
      className={cn(
        "relative bg-surface border-[3px] border-ink rounded-[6px] p-2.5 pb-3 shadow-[5px_5px_0_var(--color-ink)]",
        className
      )}
    >
      {tape !== "none" && (
        <span
          className={cn("tape -top-3 left-1/2 -translate-x-1/2 -rotate-3", tape === "blue" && "blue", tape === "pink" && "pink")}
        />
      )}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border-2 border-ink bg-learn-soft">
        {hasPhoto ? (
          <Image src={HEADSHOT_SRC} alt="Musab Saraswat" fill sizes={sizes} priority={priority} className="object-cover object-[center_32%] scale-[1.35] origin-[50%_38%]" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-center p-3">
            <span className="font-hand text-xl leading-tight text-muted">
              your headshot
              <br />
              goes here
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="font-hand text-lg text-center text-ink mt-1.5 leading-none">
          {caption}
        </figcaption>
      )}
      {children && <figcaption className="px-1.5 pt-4 pb-1">{children}</figcaption>}
    </figure>
  );
}
