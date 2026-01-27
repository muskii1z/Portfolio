import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { ThreePhonesComposite } from "./three-phones-composite";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
  featured?: boolean;
}

const statusStyles = {
  shipped: "bg-green-50 text-green-700 border-green-200",
  ongoing: "bg-blue-50 text-blue-700 border-blue-200",
  pivoted: "bg-amber-50 text-amber-700 border-amber-200",
  sunset: "bg-neutral-100 text-neutral-600 border-neutral-300",
};

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, project, featured = false, ...props }, ref) => {
    if (featured) {
      return (
        <div ref={ref} {...props}>
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              "group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300",
              className
            )}
          >
            {/* Card Image Section */}
            {project.imgSrc && (
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            )}

            {/* Card Content Section */}
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-bold uppercase tracking-wider text-red-500">
                  Featured Project
                </span>
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-neutral-600">
                {project.title}
              </h3>
              <p className="mt-3 text-neutral-600 mb-4">{project.tagline}</p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 mb-4">
                <span>{project.role}</span>
                <span>·</span>
                <span>{project.timeline}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card Link/CTA */}
              <div className="group/button inline-flex items-center gap-2 text-sm font-medium text-red-500 transition-all duration-300">
                View Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      );
    }

    return (
      <div ref={ref} {...props}>
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            "group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:border-neutral-300 h-full",
            className
          )}
        >
          {/* Card Image Section */}
          {project.slug === "vitalz-hub" && project.screenshots ? (
            <div className="aspect-video overflow-hidden relative">
              <ThreePhonesComposite
                images={project.screenshots.map((s) => ({ src: s.src, alt: s.alt }))}
              />
            </div>
          ) : project.imgSrc ? (
            <div className="aspect-video overflow-hidden relative">
              <Image
                src={project.imgSrc}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          ) : null}

          {/* Card Content Section */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-neutral-600">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-xs text-neutral-600 line-clamp-2">{project.tagline}</p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mt-3 mb-2">
              <span className="text-[11px]">{project.role}</span>
              <span>·</span>
              <span className="text-[11px]">{project.timeline}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                  statusStyles[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Card Link/CTA */}
            <div className="group/button inline-flex items-center gap-2 text-xs font-medium text-red-500 transition-all duration-300">
              View Project
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/button:translate-x-1" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
