import Image from "next/image";
import type { Metadata } from "next";
import { detailPages, type CaseStudy } from "@/data/work";

export const metadata: Metadata = {
  title: "Portfolio Export",
  robots: { index: false, follow: false },
};

const frame =
  "w-[1920px] aspect-[16/9] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl overflow-hidden relative flex";

function HeroCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className={`${frame} flex-col justify-center items-center text-center px-32`}>
      <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-xl font-medium mb-8">{cs.role}</span>
      <h2 className="text-[5.5rem] font-bold text-white leading-tight mb-6">{cs.title}</h2>
      <p className="text-3xl text-neutral-300 max-w-5xl mx-auto mb-10 leading-relaxed">{cs.tagline}</p>
      <div className="flex items-center justify-center gap-6 text-xl text-neutral-400">
        <span className="border border-neutral-600 px-5 py-2 rounded-full">{cs.timeline}</span>
        <span className="border border-neutral-600 px-5 py-2 rounded-full">{cs.stack.slice(0, 5).join(" · ")}</span>
      </div>
    </div>
  );
}

function ProblemCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className={`${frame} px-28 py-24 gap-20`}>
      <div className="flex-1">
        <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-10">The problem</h3>
        <p className="text-3xl text-neutral-200 leading-relaxed">{cs.problem}</p>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-10">What I built</h3>
        <ul className="space-y-6">
          {(cs.whatIBuilt ?? []).slice(0, 5).map((item) => (
            <li key={item} className="text-2xl text-neutral-200 leading-relaxed">
              → {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ScreenshotsCard({ cs }: { cs: CaseStudy }) {
  const shots = cs.media.screenshots;
  return (
    <div className={`${frame} flex-col justify-center items-center`}>
      <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-12">{cs.title}</h3>
      {shots.length ? (
        <div className="flex gap-8 justify-center items-end">
          {shots.map((s) => (
            <div key={s.src} className="flex flex-col items-center">
              <div className="relative w-[260px] bg-black rounded-[2.5rem] p-2">
                <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" />
                </div>
              </div>
              {s.caption && <p className="text-lg text-neutral-400 mt-6 max-w-[260px] text-center">{s.caption}</p>}
            </div>
          ))}
        </div>
      ) : cs.media.cover ? (
        <div className="relative w-[1200px] aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-700">
          <Image src={cs.media.cover.src} alt={cs.media.cover.alt} fill className="object-cover" />
        </div>
      ) : (
        <p className="text-2xl text-neutral-500">No screenshots for this project</p>
      )}
    </div>
  );
}

function OutcomeCard({ cs }: { cs: CaseStudy }) {
  const [lead, ...rest] = cs.metrics;
  return (
    <div className={`${frame} flex-col justify-center px-28 py-24`}>
      <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-16">Results</h3>
      <div className="flex gap-20">
        {lead && (
          <div className="flex-shrink-0 max-w-[560px]">
            <div className="text-[7rem] font-bold text-white leading-none mb-4">{lead.value}</div>
            <p className="text-2xl text-neutral-400">{lead.label}</p>
          </div>
        )}
        <ul className="flex-1 pt-4 space-y-6">
          {[...rest.map((m) => `${m.value}: ${m.label}`), ...(cs.results ?? [])].slice(0, 5).map((r) => (
            <li key={r} className="text-2xl text-neutral-200 leading-relaxed">
              <span className="text-green-400 mr-3">+</span>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Internal tool: 16:9 slides per case study, for saving as images. */
export default function PortfolioExportPage() {
  return (
    <div className="bg-neutral-100 min-h-screen py-16 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-3xl font-bold mb-4">Portfolio Export</h1>
        <p className="text-neutral-600 mb-12">
          Right-click a card and choose &quot;Save Image As,&quot; or take a screenshot. Each card is 16:9.
        </p>
        {detailPages().map((cs) => (
          <div key={cs.slug} className="mb-20">
            <h2 className="text-2xl font-bold mb-8">{cs.title}</h2>
            <div className="space-y-8 overflow-x-auto">
              <HeroCard cs={cs} />
              <ProblemCard cs={cs} />
              <ScreenshotsCard cs={cs} />
              <OutcomeCard cs={cs} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
