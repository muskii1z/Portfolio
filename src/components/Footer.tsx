import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-white border-t-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-hand text-2xl leading-none">
          designed + built by me · © {new Date().getFullYear()} Musab Saraswat
        </p>
        <nav className="flex items-center gap-5 font-lab text-xs uppercase tracking-[0.12em]" aria-label="Footer">
          <a href="mailto:musab.work17@gmail.com" className="hover:text-idea transition-colors">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/musab-saraswat-a42944230/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-idea transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@Aigenticbros"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-idea transition-colors"
          >
            YouTube
          </a>
          <Link href="/resume" className="hover:text-idea transition-colors">
            Résumé
          </Link>
        </nav>
      </div>
    </footer>
  );
}
