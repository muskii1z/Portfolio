export const metadata = {
  title: "Contact - Musab Saraswat",
  description: "Get in touch with Musab Saraswat",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Contact</h1>

      <div className="space-y-6 text-neutral-600">
        <p>
          I'm always open to discussing new opportunities, interesting projects,
          or just connecting.
        </p>

        <div className="space-y-4 pt-4">
          <a
            href="mailto:musab.work17@gmail.com"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            musab.work17@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/musab-saraswat-a42944230/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
