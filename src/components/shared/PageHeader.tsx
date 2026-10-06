import type { ReactNode } from "react";

/** Handwritten kicker, big title, and an optional intro: the top of every inner page. */
export function PageHeader({
  kicker,
  title,
  intro,
  pixel = true,
  children,
}: {
  kicker: string;
  title: string;
  intro?: ReactNode;
  /** Pixel font for the scrapbook pages; the rounded display font for the clean ones. */
  pixel?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
      <p className="font-hand text-2xl text-muted -rotate-2">{kicker}</p>
      <h1
        className={
          pixel
            ? "mt-1 font-pixel font-bold text-ink leading-none tracking-tight text-[clamp(44px,9vw,96px)]"
            : "mt-2 font-display font-bold text-ink leading-none tracking-tight text-[clamp(40px,6vw,64px)]"
        }
      >
        {title}
      </h1>
      {intro && (
        <div className="mt-6 max-w-[62ch] font-body font-semibold text-lg sm:text-xl leading-relaxed text-muted text-pretty">
          {intro}
        </div>
      )}
      {children}
    </header>
  );
}
