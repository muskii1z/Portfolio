import { Mail, FileText } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { site, socials } from "@/data/site";
import { PageHeader } from "@/components/shared/PageHeader";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Musab Saraswat about AI engineer and forward deployed engineer roles.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHeader
        kicker="your move"
        title="LET'S TALK"
        intro={
          <>
            I&apos;m looking for AI engineer and forward deployed engineer roles. If you&apos;re hiring, building
            something with AI, or want to compare notes, reach out. I&apos;m based in Dallas–Fort Worth and open to
            remote, hybrid, travel, and relocation.
          </>
        }
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="btn-chunky bg-idea!">
            <Mail size={18} aria-hidden="true" /> {site.email}
          </a>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-chunky">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
              {s.label}
            </a>
          ))}
          <a href={site.resume.pdf} target="_blank" rel="noopener noreferrer" className="btn-chunky">
            <FileText size={18} aria-hidden="true" /> Résumé
          </a>
        </div>
      </PageHeader>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <p className="font-hand text-2xl text-muted -rotate-1">or grab 30 minutes</p>
        <div className="relative mt-4 blk overflow-hidden">
          <span className="tape -top-3 left-12 -rotate-6" />
          <CalendlyEmbed />
        </div>
      </section>
    </div>
  );
}
