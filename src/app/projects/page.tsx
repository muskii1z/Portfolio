import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata = {
  title: "Projects - Musab",
  description: "Selected product work and case studies.",
};

export default function ProjectsPage() {

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-6">
        <h1 className="text-2xl font-medium tracking-tight mb-2">Projects</h1>
        <p className="text-neutral-500 text-sm">
          Selected work from my time as a product manager at AI startups.
        </p>
      </header>

      {/* Visual separator */}
      <div className="w-24 h-px bg-neutral-200 mb-8" />

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
