import type { ReactNode } from "react";

/** A numbered section on a case study page: "02 · What I built". */
export function CaseStudySection({ n, label, children }: { n: number; label: string; children: ReactNode }) {
  return (
    <section className="pt-12 sm:pt-14">
      <h2 className="flex items-baseline gap-3 font-display font-bold text-ink text-[clamp(24px,3vw,32px)] leading-tight">
        <span className="font-lab text-sm font-semibold text-muted tabular-nums">{String(n).padStart(2, "0")}</span>
        {label}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** Body copy for case studies: comfortable size and measure. */
export function Prose({ children }: { children: ReactNode }) {
  return <p className="font-body font-semibold text-[17px] sm:text-lg leading-relaxed text-ink/85 max-w-[68ch] text-pretty">{children}</p>;
}

/** A list where each item gets a small marker. */
export function BulletList({ items, marker = "→" }: { items: string[]; marker?: string }) {
  return (
    <ul className="space-y-3 max-w-[68ch]">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-body font-semibold text-[17px] leading-relaxed text-ink/85">
          <span className="flex-none font-lab font-semibold text-muted mt-px" aria-hidden="true">
            {marker}
          </span>
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}
