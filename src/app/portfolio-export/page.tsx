import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio Export",
  robots: "noindex",
};

function HeroCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="w-[1920px] aspect-[16/9] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl overflow-hidden relative flex flex-col justify-center items-center text-center px-32">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
      <div className="relative z-10">
        <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-xl font-medium mb-8">
          {project.role}
        </span>
        <h2 className="text-[5.5rem] font-bold text-white leading-tight mb-6">
          {project.title}
        </h2>
        <p className="text-3xl text-neutral-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          {project.tagline}
        </p>
        <div className="flex items-center justify-center gap-6">
          <span className="text-xl text-neutral-400 border border-neutral-600 px-5 py-2 rounded-full">
            {project.timeline}
          </span>
          <span className="text-xl text-neutral-400 border border-neutral-600 px-5 py-2 rounded-full capitalize">
            {project.status}
          </span>
          {project.techStack && (
            <span className="text-xl text-neutral-400 border border-neutral-600 px-5 py-2 rounded-full">
              {project.techStack}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="w-[1920px] aspect-[16/9] bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden relative flex px-28 py-24">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
      <div className="relative z-10 flex gap-20 w-full">
        {/* Left: Problems */}
        <div className="flex-1">
          <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-10">
            Problems Identified
          </h3>
          <div className="space-y-8">
            {project.problems.map((problem, i) => (
              <div key={i} className="flex gap-5">
                <span className="text-4xl font-bold text-neutral-600 leading-none mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-2xl text-neutral-200 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Approach */}
        <div className="flex-1">
          <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-10">
            Approach
          </h3>
          <p className="text-2xl text-neutral-200 leading-relaxed mb-12">
            {project.approach.framing}
          </p>

          {project.approach.constraints.length > 0 && (
            <>
              <h4 className="text-xl font-medium text-neutral-500 uppercase tracking-wider mb-6">
                Constraints
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.approach.constraints.map((c, i) => (
                  <span
                    key={i}
                    className="text-lg text-neutral-300 bg-neutral-800 border border-neutral-700 px-5 py-2 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ScreenshotsCard({ project }: { project: (typeof projects)[number] }) {
  const hasPhoneScreenshots =
    project.screenshots.length > 0 && project.screenshots[0].src;
  const hasCoverImage = project.imgSrc;

  return (
    <div className="w-[1920px] aspect-[16/9] bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden relative flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-12">
          {project.title} — Product Screenshots
        </h3>

        {hasPhoneScreenshots ? (
          <div className="flex gap-8 justify-center items-end">
            {project.screenshots
              .filter((s) => s.src)
              .map((screenshot, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-[260px] bg-black rounded-[2.5rem] p-2 shadow-2xl shadow-black/50">
                    <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-neutral-400 mt-6 max-w-[260px]">
                    {screenshot.caption}
                  </p>
                </div>
              ))}
          </div>
        ) : hasCoverImage ? (
          <div className="px-32">
            <div className="relative w-[1200px] aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl shadow-black/50">
              <Image
                src={project.imgSrc!}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <p className="text-2xl text-neutral-500">
            Screenshots coming soon
          </p>
        )}
      </div>
    </div>
  );
}

function OutcomeCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="w-[1920px] aspect-[16/9] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl overflow-hidden relative flex flex-col justify-center px-28 py-24">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
      <div className="relative z-10">
        <h3 className="text-2xl font-medium text-neutral-400 uppercase tracking-widest mb-16">
          Results & Impact
        </h3>

        <div className="flex gap-20">
          {/* Primary Metric */}
          <div className="flex-shrink-0">
            <div className="text-[7rem] font-bold text-white leading-none mb-4">
              {project.outcome.primaryMetric.value}
            </div>
            <p className="text-2xl text-neutral-400">
              {project.outcome.primaryMetric.label}
            </p>
          </div>

          {/* Secondary Impacts */}
          <div className="flex-1 pt-4">
            <div className="space-y-6">
              {project.outcome.secondaryImpacts.map((impact, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl text-green-400 mt-1">+</span>
                  <p className="text-2xl text-neutral-200 leading-relaxed">
                    {impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mt-16 pt-10 border-t border-neutral-700">
            <span className="text-lg text-neutral-500 uppercase tracking-wider">
              Tech Stack:
            </span>
            <span className="text-lg text-neutral-300 ml-4">
              {project.techStack}
            </span>
          </div>
        )}

        {/* Current Status */}
        <div className="mt-6">
          <span className="text-lg text-neutral-500 uppercase tracking-wider">
            Status:
          </span>
          <span className="text-lg text-neutral-300 ml-4">
            {project.outcome.currentStatus}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioExportPage() {
  return (
    <div className="bg-neutral-100 min-h-screen py-16 px-8">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-3xl font-bold mb-4">Portfolio Export</h1>
        <p className="text-neutral-600 mb-12">
          Right-click each card → &quot;Save Image As&quot; or take a
          screenshot. Each card is 16:9 aspect ratio.
        </p>

        {projects.map((project) => (
          <div key={project.slug} className="mb-20">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-neutral-500 mb-8">
              {project.screenshots.filter((s) => s.src).length > 0 ? 4 : 3}{" "}
              cards available
            </p>

            <div className="space-y-8 overflow-x-auto">
              {/* Card 1: Hero */}
              <div>
                <p className="text-sm text-neutral-400 mb-2 font-medium">
                  Card 1 — Hero / Cover
                </p>
                <HeroCard project={project} />
              </div>

              {/* Card 2: Problem & Approach */}
              <div>
                <p className="text-sm text-neutral-400 mb-2 font-medium">
                  Card 2 — Problem & Approach
                </p>
                <ProblemCard project={project} />
              </div>

              {/* Card 3: Screenshots */}
              <div>
                <p className="text-sm text-neutral-400 mb-2 font-medium">
                  Card 3 — Screenshots
                </p>
                <ScreenshotsCard project={project} />
              </div>

              {/* Card 4: Outcomes */}
              <div>
                <p className="text-sm text-neutral-400 mb-2 font-medium">
                  Card 4 — Results & Impact
                </p>
                <OutcomeCard project={project} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
