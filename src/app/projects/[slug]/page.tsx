import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { PhoneMockups } from "@/components/PhoneMockups";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Musab`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-8"
      >
        <span>&larr;</span> Home
      </Link>

      {/* Header Card */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-lg text-neutral-600 mb-6">{project.tagline}</p>
        {project.metrics && (
          <p className="text-lg md:text-xl font-bold text-black mb-6">
            {project.metrics}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.role}
          </span>
          <span className="bg-white border border-neutral-300 px-3 py-1 rounded-full text-sm">
            {project.timeline}
          </span>
          <span className="bg-white border border-neutral-300 px-3 py-1 rounded-full text-sm capitalize">
            {project.status}
          </span>
        </div>
      </div>

      {/* Video Demo - Only for projects with videoSrc */}
      {project.videoSrc ? (
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
            Product Demo
          </h2>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
            <video
              controls
              className="w-full"
              poster={project.imgSrc}
              preload="metadata"
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : project.screenshots.length > 0 ? (
        <PhoneMockups screenshots={project.screenshots} />
      ) : project.imgSrc ? (
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>
      ) : null}

      {/* The Hook - Highlighted */}
      <div className="bg-black text-white rounded-2xl p-8 mb-10">
        <p className="text-lg leading-relaxed">
          {project.hook}
        </p>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            <span className="font-semibold text-black">What:</span>{" "}
            {project.overview.what}
          </p>
          <p>
            <span className="font-semibold text-black">Who:</span>{" "}
            {project.overview.who}
          </p>
          <p>
            <span className="font-semibold text-black">My Role:</span>{" "}
            {project.overview.myRole}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Problem</h2>
        <ul className="space-y-3 mb-4">
          {project.problems.map((problem, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-700">
              <span className="bg-neutral-200 text-neutral-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{problem}</span>
            </li>
          ))}
        </ul>
        <p className="text-neutral-500 text-sm mt-4 pl-9">{project.businessImpact}</p>
      </section>

      {/* Approach */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Approach</h2>
        <p className="text-neutral-700 leading-relaxed mb-6">{project.approach.framing}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
            <h3 className="font-semibold text-sm uppercase tracking-wide text-neutral-500 mb-3">
              Constraints
            </h3>
            <ul className="space-y-2">
              {project.approach.constraints.map((c, i) => (
                <li key={i} className="text-sm text-neutral-700 flex items-start gap-2">
                  <span className="text-neutral-400">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {project.approach.alternatives.length > 0 && (
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-neutral-500 mb-3">
                Alternatives Rejected
              </h3>
              <ul className="space-y-2">
                {project.approach.alternatives.map((alt, i) => (
                  <li key={i} className="text-sm">
                    <span className="text-black font-medium">{alt.option}</span>
                    <span className="text-neutral-500"> — {alt.whyRejected}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Key Decisions - Cards */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Key Product Decisions</h2>
        <div className="space-y-4">
          {project.decisions.map((decision, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-black mb-3">{decision.decision}</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-xs font-medium">Options</span>
                  <p className="text-neutral-600 mt-1">{decision.options.join(" · ")}</p>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-xs font-medium">Rationale</span>
                  <p className="text-neutral-600 mt-1">{decision.rationale}</p>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wide text-xs font-medium">Outcome</span>
                  <p className="text-neutral-700 font-medium mt-1">{decision.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Didn't Work */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">What Didn't Work</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-neutral-700 mb-4 leading-relaxed">{project.whatDidntWork.experiment}</p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-amber-800">Learning:</span>{" "}
              <span className="text-neutral-700">{project.whatDidntWork.learning}</span>
            </p>
            <p>
              <span className="font-semibold text-amber-800">How it helped:</span>{" "}
              <span className="text-neutral-700">{project.whatDidntWork.howItHelped}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Outcome - Big numbers */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Outcome</h2>
        <div className="bg-black text-white rounded-xl p-6 mb-4">
          <span className="text-4xl font-bold">
            {project.outcome.primaryMetric.value}
          </span>
          <p className="text-neutral-300 mt-1">
            {project.outcome.primaryMetric.label}
          </p>
        </div>

        <ul className="space-y-2">
          {project.outcome.secondaryImpacts.map((impact, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-700">
              <span className="text-green-500 mt-1">✓</span>
              <span>{impact}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-neutral-500 mt-4 italic">
          {project.outcome.currentStatus}
        </p>
      </section>

      {/* Reflection */}
      {project.reflection && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Reflection</h2>
          <p className="text-neutral-600 leading-relaxed italic border-l-4 border-neutral-200 pl-4">
            {project.reflection}
          </p>
        </section>
      )}

      {/* Back to projects */}
      <div className="pt-8 border-t border-neutral-200">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors"
        >
          <span>&larr;</span> Back to all projects
        </Link>
      </div>
    </div>
  );
}
