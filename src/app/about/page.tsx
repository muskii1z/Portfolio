export const metadata = {
  title: "About - Musab Saraswat",
  description: "About Musab Saraswat - AI Product Manager & Builder",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-8">About Me</h1>

      <div className="space-y-6 text-neutral-600 leading-relaxed">
        <p>
          Most companies know they need AI in their product. They don&apos;t
          know where it fits, what to build first, or how to get from idea to
          working software.
        </p>

        <p className="font-medium text-black">That&apos;s what I do.</p>

        <p>
          I&apos;m an AI Product Manager who builds — not one who hands off a
          PRD and waits. I come into your product, find the highest-value AI
          opportunities, and build a working version. Strategy to prototype,
          fast.
        </p>

        <div>
          <p className="font-medium text-black mb-3">What I&apos;ve shipped:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              VH — a healthcare platform unifying bloodwork, records, and
              supplements for the UAE market (product strategy through launch)
            </li>
            <li>
              AI automation workflows in n8n that replaced hours of manual ops
              work for clients
            </li>
            <li>
              Multiple consumer apps and internal tools built end-to-end with
              Claude Code
            </li>
          </ul>
        </div>

        <p>
          I&apos;m building in public — shipping AI products and sharing what I
          learn on YouTube and LinkedIn.
        </p>

        <p>
          If your team needs someone who can find where AI fits and actually
          build it:{" "}
          <a
            href="mailto:musab.work17@gmail.com"
            className="text-black hover:opacity-60 transition-opacity"
          >
            musab.work17@gmail.com
          </a>
        </p>
      </div>

      <div className="border-t border-neutral-200 my-10" />

      <div>
        <h2 className="text-xl font-semibold text-black mb-4">
          Where You Can Find Me
        </h2>
        <div className="space-y-3">
          <a
            href="https://www.youtube.com/@Aigenticbros"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/musab-saraswat-a42944230/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="mailto:musab.work17@gmail.com"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            musab.work17@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
