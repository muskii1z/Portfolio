import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience, education } from "@/data/experience";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Pop } from "./Pop";

/** Work history on the home page: the short version, with links to the case studies. */
export function Experience() {
  return (
    <section id="experience" className="relative px-4 sm:px-6 py-16 sm:py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <p className="font-hand text-2xl text-muted -rotate-2">where I&apos;ve worked</p>
        <h2 className="font-pixel font-bold text-ink leading-none tracking-tight text-[clamp(44px,9vw,96px)] mt-1">
          EXPERIENCE
        </h2>

        <div className="mt-10">
          <ExperienceTimeline items={experience} compact />
        </div>

        <Pop rotate={-1.5} className="mt-8 ml-10">
          <div className="relative bg-idea-soft border-[3px] border-ink rounded-2xl p-5 shadow-[4px_4px_0_var(--color-ink)]">
            <span className="tape blue -top-3 right-8 rotate-[4deg]" />
            <p className="font-lab text-[11px] uppercase tracking-[0.12em] text-muted">education</p>
            <p className="mt-2 font-display font-bold text-xl text-ink">{education.school}</p>
            <p className="font-body font-bold text-ink/80">
              {education.degree} · {education.period}
            </p>
          </div>
        </Pop>

        <Link
          href="/about"
          className="mt-10 ml-10 inline-flex items-center gap-1.5 font-lab text-xs font-semibold uppercase tracking-[0.14em] border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
        >
          The full story <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
