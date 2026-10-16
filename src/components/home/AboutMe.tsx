import Link from "next/link";
import { Bot, Database, Smartphone, Layers, Sparkles, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fastFacts, currently } from "@/data/home";
import { Pop } from "./Pop";

const skills: { label: string; bg: string; Icon: LucideIcon }[] = [
  { label: "AI agents", bg: "bg-idea", Icon: Bot },
  { label: "RAG + evals", bg: "bg-learn", Icon: Database },
  { label: "Mobile apps", bg: "bg-warm", Icon: Smartphone },
  { label: "Full-stack", bg: "bg-done", Icon: Layers },
  { label: "Prototyping", bg: "bg-read", Icon: Sparkles },
  { label: "Claude Code", bg: "bg-build", Icon: Terminal },
];

export function AboutMe() {
  return (
    <section className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-hand text-2xl text-muted -rotate-2 mb-6">who I am</p>

        <div className="grid gap-12 md:grid-cols-[220px_minmax(0,1fr)_220px] md:gap-10 items-start">
          {/* Lined index card with fast facts */}
          <Pop rotate={-4} className="md:mt-12 max-w-xs mx-auto md:mx-0 w-full">
            <div className="relative bg-surface border-[3px] border-ink rounded-md shadow-[5px_5px_0_var(--color-ink)]">
              <span className="tape blue -top-3 right-6 rotate-[5deg]" />
              <div className="px-5 pt-4 pb-2 border-b-2 border-watch">
                <p className="font-lab text-[11px] uppercase tracking-[0.12em] text-muted">fast facts</p>
              </div>
              <ol
                className="relative pl-11 pr-5 py-1 font-body font-bold text-[15px] text-ink"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, rgba(106,165,255,0.35) 35px, rgba(106,165,255,0.35) 36px)",
                }}
              >
                <span aria-hidden="true" className="absolute left-8 top-0 bottom-0 w-0.5 bg-watch/60" />
                {fastFacts.map((fact, i) => (
                  <li key={i} className="flex items-center gap-2 min-h-9 leading-snug">
                    <span className="font-hand text-xl text-learn -ml-6 w-5 text-right">{i + 1}.</span>
                    {fact}
                  </li>
                ))}
              </ol>
            </div>
          </Pop>

          <div className="min-w-0 text-center">
            <h2 className="inline-block font-display font-semibold text-xl sm:text-2xl border-[3px] border-ink rounded-lg bg-surface px-4 py-1.5 shadow-[3px_3px_0_var(--color-ink)]">
              About me
            </h2>
            <p className="mt-7 font-body font-semibold text-lg sm:text-xl leading-relaxed text-ink max-w-[52ch] mx-auto text-pretty">
              I&apos;m an AI engineer who builds the whole system: the retrieval,
              the agents, the evals that prove a change actually helped, and the
              app real people use on the other end. I ship to production, not to
              a demo.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {skills.map(({ label, bg, Icon }, i) => (
                <li key={label} className="flex items-stretch gap-1.5" style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}>
                  <span className={`torn ${bg} font-display font-semibold text-ink text-lg px-4 py-2`}>
                    {label}
                  </span>
                  <span className={`torn ${bg} grid place-items-center px-2.5`} aria-hidden="true">
                    <Icon size={18} strokeWidth={2.4} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Pop rotate={4} delay={0.15} className="md:mt-16 max-w-xs mx-auto md:mx-0 w-full">
            <div className="relative bg-idea-soft border-[3px] border-ink rounded-md p-5 shadow-[5px_5px_0_var(--color-ink)]">
              <span className="tape pink -top-3 left-6 rotate-[-6deg]" />
              <p className="font-lab text-[11px] uppercase tracking-[0.12em] text-muted">currently</p>
              <ul className="mt-3 space-y-2.5 font-body font-bold text-[15px] leading-snug text-ink">
                {currently.map((c) => (
                  <li key={c.text}>
                    →{" "}
                    {c.href ? (
                      <Link href={c.href} className="underline decoration-2 underline-offset-4 hover:text-muted">
                        {c.text}
                      </Link>
                    ) : (
                      c.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Pop>
        </div>
      </div>
    </section>
  );
}
