import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Sticker } from "./Sticker";

const looks = [
  { block: "bg-ink text-white", tab: "bg-learn text-ink", tape: "" },
  { block: "bg-idea text-ink", tab: "bg-ink text-white", tape: "blue" },
  { block: "bg-learn text-ink", tab: "bg-idea text-ink", tape: "pink" },
];

export function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="relative px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <p className="font-hand text-2xl text-muted -rotate-2">stuff I&apos;ve shipped</p>
        <h2 className="font-pixel font-bold text-ink leading-none tracking-tight text-[clamp(44px,9vw,104px)] mt-1">
          FEATURED WORK
        </h2>

        <div className="mt-12 flex flex-col gap-14">
          {projects.map((p, i) => {
            const look = looks[i % looks.length];
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
                      {p.status === "shipped" && <Sticker tint="done">shipped</Sticker>}
                    </div>
                    <h3 className="mt-4 font-display font-bold text-[clamp(34px,5vw,56px)] leading-none">
                      {p.title}
                    </h3>
                    <p className="mt-4 font-body font-semibold text-lg leading-relaxed opacity-90 max-w-md">
                      {p.tagline}
                    </p>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="mt-7 inline-flex items-center gap-1.5 font-lab text-xs font-semibold uppercase tracking-[0.14em] border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
                    >
                      View project <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  </div>

                  {p.imgSrc && (
                    <div className="relative">
                      <span className={`tape -top-3 left-8 -rotate-6 ${look.tape}`} />
                      <span className={`tape -top-3 right-8 rotate-6 ${look.tape}`} />
                      <div className={`relative aspect-[4/3] overflow-hidden rounded-xl border-[3px] border-ink bg-surface`}>
                        <Image
                          src={p.imgSrc}
                          alt={`${p.title} screenshot`}
                          fill
                          sizes="(min-width: 768px) 520px, 100vw"
                          className="object-contain p-3"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
