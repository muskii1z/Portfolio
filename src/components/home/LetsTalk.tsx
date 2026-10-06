import Link from "next/link";
import { Mail, CalendarDays, FileText } from "lucide-react";

const EMAIL = "musab.work17@gmail.com";

export function LetsTalk() {
  return (
    <section className="px-4 sm:px-6 pt-12 pb-24 sm:pb-32">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <p className="font-hand text-2xl text-muted -rotate-2">your move</p>
        <h2 className="mt-2 font-pixel font-bold text-ink leading-none tracking-tight text-[clamp(52px,11vw,112px)]">
          LET&apos;S TALK
        </h2>
        <p className="mt-5 font-hand text-[26px] sm:text-[30px] leading-snug text-ink max-w-[28ch]">
          Got an AI product to build, a role to fill, or a problem nobody&apos;s
          cracked yet? Say hi.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${EMAIL}`} className="btn-chunky bg-idea!">
            <Mail size={18} aria-hidden="true" /> Email me
          </a>
          <Link href="/contact" className="btn-chunky bg-done!">
            <CalendarDays size={18} aria-hidden="true" /> Book a call
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-chunky">
            <FileText size={18} aria-hidden="true" /> Résumé
          </a>
        </div>

        <p className="mt-6 font-lab text-sm text-muted select-all">{EMAIL}</p>
      </div>
    </section>
  );
}
