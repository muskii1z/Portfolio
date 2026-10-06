import Link from "next/link";
import { site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white border-t-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-hand text-2xl leading-none">
          designed + built by me · © {new Date().getFullYear()} {site.name}
        </p>
        <nav className="flex flex-wrap justify-center items-center gap-5 font-lab text-xs uppercase tracking-[0.12em]" aria-label="Footer">
          <a href={`mailto:${site.email}`} className="hover:text-idea transition-colors">
            Email
          </a>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-idea transition-colors">
              {s.label}
            </a>
          ))}
          <Link href="/resume" className="hover:text-idea transition-colors">
            Résumé
          </Link>
        </nav>
      </div>
    </footer>
  );
}
