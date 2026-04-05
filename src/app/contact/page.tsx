import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata = {
  title: "Contact - Musab Saraswat",
  description: "Get in touch with Musab Saraswat",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Let&apos;s Talk</h1>
      <p className="text-neutral-600 mb-8">
        Need help figuring out where AI fits in your product? Let&apos;s talk.
      </p>

      <CalendlyEmbed />

      <div className="mt-12 space-y-4 text-neutral-600">
        <p className="font-medium text-black">You can also find me on:</p>
        <div className="space-y-3">
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
        <p className="text-sm text-neutral-400 pt-2">
          Based in Dallas-Fort Worth · Available for remote and hybrid roles
        </p>
      </div>
    </div>
  );
}
