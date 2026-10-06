import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { clientLine, type CaseStudy } from "@/data/work";
import { CardVisual } from "@/components/work/CardVisual";
import { lookFor } from "@/components/work/accent";
import { Sticker } from "./Sticker";

export function FeaturedWork({ projects }: { projects: CaseStudy[] }) {
  return (
    <section id="work" className="relative px-4 sm:px-6 py-16 sm:py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-hand text-2xl text-muted -rotate-2">stuff I&apos;ve shipped</p>
        <h2 className="font-pixel font-bold text-ink leading-none tracking-tight text-[clamp(44px,9vw,104px)] mt-1">
          FEATURED WORK
        </h2>

        <div className="mt-12 flex flex-col gap-14">
          {projects.map((p, i) => {
            const look = lookFor(p.accent);
            const live = p.status === "live" || p.status === "shipped";
            return (
              <article key={p.slug} className="relative">
                <span
                  className={`inline-block font-lab text-xs font-semibold uppercase tracking-[0.14em] border-[3px] border-b-0 border-ink rounded-t-lg pl-4 pr-8 py-2 ${look.tab}`}
                  style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)" }}
                >
                  ✦ Project {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={`grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-center border-[3px] border-ink rounded-b-2xl rounded-tr-2xl p-6 sm:p-10 shadow-[7px_7px_0_var(--color-ink)] ${look.block}`}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-lab text-xs uppercase tracking-[0.12em] opacity-80">● {p.timeline}</span>
                      {live && <Sticker tint="done">{p.status}</Sticker>}
                      {p.status === "in-progress" && <Sticker tint="idea">in progress</Sticker>}
                    </div>
                    <p className="mt-4 font-lab text-xs font-semibold uppercase tracking-[0.12em] opacity-75">{clientLine(p)}</p>
                    <h3 className="mt-2 font-display font-bold text-[clamp(34px,5vw,56px)] leading-none">{p.title}</h3>
                    <p className="mt-4 font-body font-semibold text-lg leading-relaxed opacity-90 max-w-md">{p.tagline}</p>

                    <dl className="mt-6 grid grid-cols-2 gap-4 max-w-md">
                      {p.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="border-l-[3px] border-current pl-3">
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-display font-bold text-2xl sm:text-3xl leading-none">{m.value}</dd>
                          <dd className="mt-1.5 font-body font-bold text-sm leading-snug opacity-80">{m.label}</dd>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href={`/work/${p.slug}`}
                      className="mt-7 inline-flex items-center gap-1.5 font-lab text-xs font-semibold uppercase tracking-[0.14em] border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
                    >
                      Read the case study <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>

                  <CardVisual cs={p} sizes="(min-width: 768px) 520px, 100vw" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/work" className="btn-chunky bg-idea!">
            See all work <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
