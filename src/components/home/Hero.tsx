import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { heroStats as stats } from "@/data/home";
import { site } from "@/data/site";
import { Pop } from "./Pop";
import { Sticker } from "./Sticker";
import { Polaroid } from "./Polaroid";
import { ScribbleBox, Squiggle } from "./Doodle";

function HeadshotCard({ hasPhoto, priority = false }: { hasPhoto: boolean; priority?: boolean }) {
  return (
    <Polaroid hasPhoto={hasPhoto} tape="pink" priority={priority} sizes="(min-width: 1360px) 340px, 320px">
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 items-baseline">
        {stats.map((s) => (
          <div key={s.label} className="contents">
            <dt className="font-lab text-[10px] uppercase tracking-[0.14em] text-muted">{s.label}</dt>
            <dd className="font-body font-extrabold text-[15px] text-ink leading-snug">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Polaroid>
  );
}

export function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24">
      <div className="relative max-w-[1480px] mx-auto">
        {/* Wide screens: big polaroid floats in the open space left of the centered text */}
        <Pop
          rotate={-3}
          delay={0.2}
          className="hidden min-[1360px]:block absolute right-[calc(50%+min(20vw+110px,470px))] top-1/2 -translate-y-1/2 w-[clamp(240px,19vw,340px)] z-10"
        >
          <HeadshotCard hasPhoto={hasPhoto} priority />
        </Pop>

        <div className="min-w-0 max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="font-hand text-2xl sm:text-3xl text-muted -rotate-2 mb-3">my name is</p>

          {/* Name in a scribbled box, stickers pinned to its corners */}
          <div className="relative px-6 sm:px-9 py-3 sm:py-5">
            <ScribbleBox className="absolute inset-0 w-full h-full text-watch" />
            <h1 className="font-display font-bold text-ink leading-[0.95] tracking-tight text-balance text-[clamp(44px,4.8vw,86px)]">
              Musab Saraswat
            </h1>

            <Pop rotate={-6} delay={0.1} className="hidden md:block absolute -top-6 -left-8">
              <Sticker tint="done-soft">builds AI things</Sticker>
            </Pop>
            <Pop rotate={5} delay={0.18} className="hidden md:block absolute -top-6 -right-8">
              <Sticker tint="idea-soft">sweats the details</Sticker>
            </Pop>
            <Pop rotate={-4} delay={0.26} className="hidden md:block absolute -bottom-8 -left-10">
              <span className="inline-block font-hand text-2xl font-bold bg-idea border-[2.5px] border-ink rounded-md px-3 py-0.5 shadow-[3px_3px_0_var(--color-ink)]">
                AI Engineer
              </span>
            </Pop>
            <Pop rotate={4} delay={0.34} className="hidden md:block absolute -bottom-8 -right-10">
              <span className="inline-block font-hand text-2xl font-bold bg-done-soft border-[2.5px] border-ink rounded-md px-3 py-0.5 shadow-[3px_3px_0_var(--color-ink)]">
                DFW → worldwide
              </span>
            </Pop>
          </div>

          {/* Same tags as a wrapped row on phones */}
          <div className="md:hidden flex flex-wrap justify-center gap-2 mt-6">
            <Sticker tint="idea">AI Engineer</Sticker>
            <Sticker tint="done-soft">builds AI things</Sticker>
            <Sticker tint="learn-soft">DFW → worldwide</Sticker>
          </div>

          <p className="mt-8 md:mt-14 inline-flex items-center gap-2 max-w-[17rem] sm:max-w-none text-left font-lab text-[11px] sm:text-xs uppercase tracking-[0.12em] text-muted">
            <span className="relative flex flex-none w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-done motion-safe:animate-ping opacity-60" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-done border border-ink" />
            </span>
            {site.availability}
          </p>

          <h2 className="mt-5 font-display font-semibold text-ink text-[clamp(30px,4.6vw,52px)] leading-[1.08] max-w-[18ch] text-balance">
            I build AI products that{" "}
            <span className="relative inline-block">
              actually ship.
              <Squiggle className="absolute left-0 -bottom-2 w-full h-3 text-learn" />
            </span>
          </h2>

          <p className="mt-6 font-body font-semibold text-muted text-lg sm:text-xl max-w-xl">
            Agents, RAG systems, and mobile apps — from the first prompt to the
            version real people use every day.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-chunky bg-ink! text-white!">
              Contact me
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#work" className="btn-chunky bg-idea!">
              See my work
            </a>
            <a href={site.resume.pdf} target="_blank" rel="noopener noreferrer" className="btn-chunky">
              <FileText size={18} aria-hidden="true" /> Résumé
            </a>
          </div>

          {/* Smaller screens: no room beside the text, so the polaroid stacks below */}
          <Pop rotate={-3} delay={0.2} className="min-[1360px]:hidden mt-14 w-full max-w-[320px]">
            <HeadshotCard hasPhoto={hasPhoto} />
          </Pop>
        </div>
      </div>
    </section>
  );
}
