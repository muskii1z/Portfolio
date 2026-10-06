import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowRight, FileText } from "lucide-react";
import { experience, education, certifications } from "@/data/experience";
import { site } from "@/data/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Polaroid, HEADSHOT_SRC } from "@/components/home/Polaroid";
import { Pop } from "@/components/home/Pop";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How Musab Saraswat went from an exercise science degree to building and shipping AI products: RAG systems, agents, and mobile apps.",
  path: "/about",
});

const howIWork = [
  {
    title: "I learn by building",
    body: "Every tool I use, I picked up because a real project needed it, then shipped something with it.",
    bg: "bg-idea",
  },
  {
    title: "I measure before I change things",
    body: "Test sets, before-and-after numbers, and runs averaged so a change only counts if it beats the noise.",
    bg: "bg-learn",
  },
  {
    title: "I ship to real people",
    body: "App stores, field teams, clinicians, coaches. The best fixes come from watching how people actually use it.",
    bg: "bg-done",
  },
];

export default function AboutPage() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", HEADSHOT_SRC));

  return (
    <div className="pb-24">
      <PageHeader kicker="the longer version" title="ABOUT ME" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-12 md:grid-cols-[280px_minmax(0,1fr)] items-start">
        <Pop rotate={-3} className="w-full max-w-[280px] mx-auto md:mx-0">
          <Polaroid hasPhoto={hasPhoto} tape="pink" sizes="280px" caption="Dallas, TX" />
        </Pop>

        <div className="space-y-5 font-body font-semibold text-lg sm:text-xl leading-relaxed text-ink/85 max-w-[62ch]">
          <p>
            I studied exercise science at UT Arlington and finished my degree at 20, right as AI was taking off.
            I didn&apos;t have a computer science degree, so I learned the way I still learn best: by building.
          </p>
          <p>
            I started with automation in n8n, then co-founded Aigentic Bros with my brother, teaching people to use
            AI and building automations and custom GPTs for clients. Once we had paying customers, I taught myself
            to go from no-code tools to writing real code with Claude Code and Codex.
          </p>
          <p>
            I came in as a product manager, but the deeper I got into the engineering, the more I realized building
            is what I love. So I formed my own company, Starline Labs, and took contracts as an AI engineer: a
            healthcare platform that got funded, a combat sports app that&apos;s live in both app stores, and a voice
            agent that field teams use to log their work.
          </p>
          <p>
            Now I&apos;m building{" "}
            <Link href="/work/rag-motion" className="underline decoration-2 underline-offset-4 decoration-learn hover:text-ink">
              rag-motion
            </Link>
            , an AI assistant for strength coaches that puts my exercise science background to work. I&apos;m looking
            for a team where I can build AI products and work directly with the people who use them.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <p className="font-hand text-2xl text-muted -rotate-1">how I work</p>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {howIWork.map((h, i) => (
            <li key={h.title}>
              <Pop rotate={[-2, 1.5, -1][i]} delay={i * 0.08}>
                <div className="h-full bg-surface border-[3px] border-ink rounded-2xl p-6 shadow-[5px_5px_0_var(--color-ink)]">
                  <span className={`torn inline-block ${h.bg} font-display font-semibold text-ink text-lg px-4 py-1.5`}>{h.title}</span>
                  <p className="mt-4 font-body font-semibold text-[17px] leading-relaxed text-ink/85">{h.body}</p>
                </div>
              </Pop>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20">
        <p className="font-hand text-2xl text-muted -rotate-1">where I&apos;ve worked</p>
        <h2 className="mt-1 font-pixel font-bold text-ink leading-none tracking-tight text-[clamp(40px,8vw,80px)]">EXPERIENCE</h2>
        <div className="mt-10">
          <ExperienceTimeline items={experience} />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="relative bg-idea-soft border-[3px] border-ink rounded-2xl p-6 shadow-[4px_4px_0_var(--color-ink)]">
            <span className="tape blue -top-3 right-8 rotate-[4deg]" />
            <p className="font-lab text-[11px] uppercase tracking-[0.12em] text-muted">education</p>
            <p className="mt-2 font-display font-bold text-xl text-ink">{education.school}</p>
            <p className="font-body font-bold text-ink/80">
              {education.degree} · {education.period}
            </p>
            {education.notes.map((n) => (
              <p key={n} className="mt-3 font-body font-semibold text-[15px] leading-relaxed text-ink/80">
                {n}
              </p>
            ))}
          </div>
          <div className="relative bg-surface border-[3px] border-ink rounded-2xl p-6 shadow-[4px_4px_0_var(--color-ink)]">
            <span className="tape pink -top-3 left-8 -rotate-[5deg]" />
            <p className="font-lab text-[11px] uppercase tracking-[0.12em] text-muted">certifications</p>
            <ul className="mt-3 space-y-2 font-body font-bold text-[16px] text-ink/85">
              {certifications.map((c) => (
                <li key={c}>→ {c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/work" className="btn-chunky bg-idea!">
            See my work <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a href={site.resume.pdf} target="_blank" rel="noopener noreferrer" className="btn-chunky">
            <FileText size={18} aria-hidden="true" /> Résumé
          </a>
          <Link href="/contact" className="btn-chunky bg-ink! text-white!">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
