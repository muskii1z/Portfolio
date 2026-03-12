export const metadata = {
  title: "Resume - Musab Saraswat",
  description: "Musab Saraswat's resume",
};

export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Resume</h1>

      <div className="space-y-6 text-neutral-600">
        <p>Download my resume or view my experience below.</p>

        <a
          href="/resume.pdf"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Download PDF
        </a>

        {/* Experience Section */}
        <section className="pt-8">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* Camel Case Labs */}
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-black">AI Product Manager</h3>
              <p className="text-sm text-neutral-500 mb-2">
                Camel Case Labs · Dallas, TX · Feb 2026 - Present
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>
                  Delivered working product mockups and gathered stakeholder
                  approval across 2 client engagements, reducing feature
                  definition cycles by 75% (from 4 weeks to 1 week) by building
                  functional prototypes with Claude Code instead of static
                  wireframes
                </li>
                <li>
                  Designed and integrated AI voice agent system that
                  automatically converts client voice inputs into structured
                  tickets within internal ops tool, streamlining employee task
                  management workflows
                </li>
                <li>
                  Built high-fidelity interactive prototypes in 2-3 days that
                  enabled engineering to ship production features within 1 week,
                  including Activities Board (now live) and Event Management
                  system (in development)
                </li>
                <li>
                  Led stakeholder feedback sessions, achieving feature approval
                  in 2 iteration cycles by presenting functioning prototypes
                  that surfaced edge cases and UX questions before development,
                  reducing downstream rework
                </li>
              </ul>
            </div>

            {/* Digital Vault Solutions */}
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-black">
                Co-Founder & AI Product Manager
              </h3>
              <p className="text-sm text-neutral-500 mb-2">
                Digital Vault Solutions LLC · Dallas, TX · March 2025 - Present
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>
                  Designed and shipped full-stack mobile healthcare platform MVP
                  in 3 months that consolidated fragmented patient workflows
                  (lab reports, blood test tracking, AI recommendations,
                  supplement marketplace) into a unified app for high-net-worth
                  UAE customers, earning stakeholder approval in Dubai and
                  advancing to active funding stage
                </li>
                <li>
                  Led product development and go-to-market strategy for AI for
                  Teachers, achieving 50% visitor-to-customer conversion rate
                  and building a 90-member community through live webinar
                  campaign and Udemy course launch
                </li>
                <li>
                  Owned end-to-end product lifecycle for 4 SaaS products
                  (AIgentDesk, Terminal Mastery, Menu IQ, AI for Teachers),
                  shipping from 0 to revenue-generating in 8 months using rapid
                  prototyping with Claude Code and Supabase
                </li>
              </ul>
            </div>

            {/* Mind Propel */}
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-black">
                Automation & Marketing Lead
              </h3>
              <p className="text-sm text-neutral-500 mb-2">
                Mind Propel · Dallas, TX · Aug 2024 - May 2025
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>
                  Built automated content pipelines for daily LinkedIn and X
                  posting using AI generation and workflow automation tools,
                  reducing content production time by 50% while maintaining
                  engagement rates
                </li>
                <li>
                  Designed and scheduled automated posting systems across
                  multiple channels that maintained consistent brand presence
                  with 7 posts/week while eliminating manual publishing overhead
                </li>
                <li>
                  Produced multimedia learning materials and digital assets for
                  online courses, improving visual consistency and learner
                  engagement through standardized design templates
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="pt-8">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            Education
          </h2>
          <div className="border-l-2 border-neutral-200 pl-6">
            <h3 className="font-medium text-black">
              Bachelor of Science in Exercise Science and Kinesiology
            </h3>
            <p className="text-sm text-neutral-500">
              University of Texas - Arlington · Arlington, TX · May 2024
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="pt-8">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            Skills
          </h2>

          {/* Product Management */}
          <div className="mb-4">
            <h3 className="font-semibold text-black text-sm mb-2">
              Product Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Product Strategy",
                "User Stories",
                "Backlog Prioritization",
                "MVP Scoping",
                "Roadmapping",
                "Product Lifecycle Management",
                "Cross-Functional Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Automation */}
          <div className="mb-4">
            <h3 className="font-semibold text-black text-sm mb-2">
              AI & Automation
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "n8n",
                "Supabase",
                "Claude Code",
                "Retrieval-Augmented Generation (RAG)",
                "Prompt Engineering",
                "API Design",
                "Workflow Automation",
                "AI Agent Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-4">
            <h3 className="font-semibold text-black text-sm mb-2">
              UI/UX Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "User Research",
                "User Experience",
                "Wireframing",
                "Prototyping",
                "Design Systems",
                "Usability Testing",
                "Interface Architecture",
                "Branding Consistency",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h3 className="font-semibold text-black text-sm mb-2">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "IBM Product Manager Professional Certificate",
                "Google Project Management Professional Certificate",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="font-semibold text-black text-sm mb-2">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Travel & Exploration",
                "Basketball League Competitor",
                "Outdoorsman",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
