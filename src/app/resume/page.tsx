export const metadata = {
  title: "Resume - Musab Saraswat",
  description: "Musab Saraswat's resume",
};

export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Resume</h1>

      <div className="space-y-6 text-neutral-600">
        <p>
          Download my resume or view my experience below.
        </p>

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
            {/* AIgentic Bros */}
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-black">AI Product Manager</h3>
              <p className="text-sm text-neutral-500 mb-2">AIgentic Bros · Dallas, TX · May 2025 - Present</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Lead product development and design for AIgentic Bros, managing the full lifecycle of multiple web applications and automation tools from ideation to deployment.</li>
                <li>Designed and launched products including AIgentDesk, Terminal Mastery, Menu IQ, and AI for Teachers, overseeing UX/UI strategy, product roadmaps, and iteration cycles.</li>
                <li>Utilize Claude Code, Lovable AI, Supabase, and n8n to prototype and ship production-ready SaaS applications, thereby reducing build time and enhancing feature validation speed.</li>
                <li>Translate product vision into clear user experiences by wireframing, designing, and testing interfaces that balance functionality with usability.</li>
                <li>Lead cross-functional collaboration between designers, developers, and stakeholders to align business goals with intuitive design and efficient user workflows.</li>
                <li>Established AIgentic Bros' internal rapid prototyping and design framework, improving MVP turnaround by 60% while maintaining consistent brand and user experience standards.</li>
                <li>Oversee product branding, interface design, and launch strategy across the company's portfolio of AI and automation tools.</li>
              </ul>

              {/* Vitalz Hub Sub-section */}
              <div className="mt-4 pl-4 border-l-2 border-neutral-100">
                <h4 className="font-medium text-black text-sm">Vitalz Hub — Client Healthcare Platform</h4>
                <ul className="text-sm space-y-2 list-disc list-inside mt-2">
                  <li>Led end-to-end product development for a patient-facing healthcare app from concept to working MVP.</li>
                  <li>Designed workflows for blood test tracking, historical comparisons, and trend visualization to make medical data easy to understand.</li>
                  <li>Built a clean, intuitive UX for comparing lab results over time and monitoring health changes.</li>
                  <li>Designed and integrated an in-app supplement store aligned with user health data and recommendations.</li>
                  <li>Worked directly with the client to translate clinical and business requirements into product features and interface designs.</li>
                </ul>
              </div>
            </div>

            {/* Mind Propel */}
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-black">Automation & Marketing Lead</h3>
              <p className="text-sm text-neutral-500 mb-2">Mind Propel · Aug 2024 - May 2025</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Created and automated digital content pipelines for courses, social media, and marketing campaigns using n8n and AI content-generation tools.</li>
                <li>Developed and scheduled automated posting systems that maintained consistent brand output across multiple channels with minimal manual work.</li>
                <li>Produced multimedia learning materials and digital assets for educational content, improving visual consistency and engagement in online courses.</li>
                <li>Supported the launch of automation-based marketing strategies, optimizing workflows that reduced repetitive tasks and content turnaround time by 50%.</li>
                <li>Collaborated with instructors, marketers, and product teams to refine digital course materials and improve learner experience across platforms.</li>
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
            <h3 className="font-medium text-black">Bachelor of Science in Exercise Science and Kinesiology</h3>
            <p className="text-sm text-neutral-500">University of Texas - Arlington · Arlington, TX · May 2024</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="pt-8">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
            Skills
          </h2>

          {/* Product Management */}
          <div className="mb-4">
            <h3 className="font-semibold text-black text-sm mb-2">Product Management</h3>
            <div className="flex flex-wrap gap-2">
              {["Product Strategy", "User Stories", "Backlog Prioritization", "MVP Scoping", "Roadmapping", "Product Lifecycle Management", "Cross-Functional Collaboration"].map((skill) => (
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
            <h3 className="font-semibold text-black text-sm mb-2">AI & Automation</h3>
            <div className="flex flex-wrap gap-2">
              {["n8n", "Supabase", "Claude Code", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "API Design", "Workflow Automation", "AI Agent Design"].map((skill) => (
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
            <h3 className="font-semibold text-black text-sm mb-2">UI/UX Design</h3>
            <div className="flex flex-wrap gap-2">
              {["User Research", "User Experience", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Interface Architecture", "Branding Consistency"].map((skill) => (
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
          <div>
            <h3 className="font-semibold text-black text-sm mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {["IBM Product Manager Professional Certificate", "Google Project Management Professional Certificate"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
