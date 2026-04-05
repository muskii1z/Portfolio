"use client";

import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import type { Project } from "@/data/projects";

export default function HomeHero({
  featuredProject,
}: {
  featuredProject: Project;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4">
                Musab Saraswat
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 font-medium mb-4">
                AI PM. Build. Ship.
              </p>
              <p className="text-neutral-500 max-w-xl mx-auto mb-4">
                I find where AI fits in your product and build working
                prototypes. Fast.
              </p>
              <p className="text-sm text-neutral-400 mb-8">
                3 products shipped • Healthcare, SaaS, EdTech • Concept to MVP
                in weeks
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/projects"
                  className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium hover:bg-neutral-800 hover:scale-105 transition-all shadow-lg shadow-black/10 w-full sm:w-auto text-center"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border border-neutral-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-lg shadow-black/5 w-full sm:w-auto text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          }
        >
          {/* Bento Grid inside the tablet */}
          <div className="w-full p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Featured Project - Large Card */}
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="md:col-span-2 group bg-white rounded-3xl p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-2xl font-bold text-red-500">
                    Featured Project
                  </h2>
                  <span className="text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all text-xl">
                    →
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {featuredProject.tagline}
                </p>

                {/* Phone Mockups Preview */}
                <div className="flex gap-3 justify-center">
                  {featuredProject.screenshots.slice(0, 3).map((screenshot, i) => (
                    <div
                      key={i}
                      className="relative w-24 bg-black rounded-2xl p-1 shadow-lg"
                    >
                      <div className="relative bg-white rounded-xl overflow-hidden aspect-[9/19.5]">
                        {screenshot.src ? (
                          <Image
                            src={screenshot.src}
                            alt={screenshot.alt}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-neutral-100" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>

              {/* About Card */}
              <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-6 flex flex-col items-center text-center justify-between h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-3xl font-bold mb-3">
                  M
                </div>
                <div className="font-bold text-xl">Musab Saraswat</div>
                <div className="text-base text-neutral-400 mb-3">
                  AI Product Manager
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3 flex-1">
                  Through AIgentic Bros, I partner with founders and teams to
                  take AI products from concept to launch — owning strategy, UX
                  design, and hands-on prototyping across SaaS and client
                  platforms.
                </p>
                <div className="w-28 h-px bg-neutral-700 mb-3" />
                <a
                  href="https://www.linkedin.com/in/musab-saraswat-a42944230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Skills Card 1 */}
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Product Strategy</h3>
                <p className="text-sm text-neutral-500">
                  0→1 development, feature scoping, roadmap planning
                </p>
              </div>

              {/* Skills Card 2 */}
              <div className="bg-white rounded-3xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">UX/UI Design</h3>
                <p className="text-sm text-neutral-500">
                  Prototyping, user flows, mobile-first design
                </p>
              </div>

              {/* What I Do Card */}
              <div className="relative bg-black text-white rounded-3xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  What I Do
                </span>
                <div className="mt-4 space-y-2">
                  <div className="text-base font-medium">
                    AI Product Management
                  </div>
                  <div className="text-base font-medium">
                    Rapid MVP Prototyping
                  </div>
                  <div className="text-base font-medium">
                    UX-Driven Product Design
                  </div>
                  <div className="text-base font-medium">
                    Client & Startup Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}
