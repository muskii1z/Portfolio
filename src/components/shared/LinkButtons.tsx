import { Code2, ExternalLink, PlayCircle, Smartphone } from "lucide-react";
import type { CaseStudy } from "@/data/work";

/** Live site, code, demo, and store links for a case study. Renders nothing if there are none. */
export function LinkButtons({ links }: { links: CaseStudy["links"] }) {
  const items = [
    links.live && { href: links.live, label: "Live site", Icon: ExternalLink, cls: "bg-idea!" },
    links.repo && { href: links.repo, label: "Code on GitHub", Icon: Code2, cls: "" },
    links.video && { href: links.video, label: "Watch the demo", Icon: PlayCircle, cls: "bg-watch!" },
    links.appStore && { href: links.appStore, label: "App Store", Icon: Smartphone, cls: "" },
    links.playStore && { href: links.playStore, label: "Google Play", Icon: Smartphone, cls: "" },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Code2; cls: string }[];

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ href, label, Icon, cls }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-chunky text-[15px]! px-4! py-2.5! ${cls}`}
        >
          <Icon size={17} aria-hidden="true" /> {label}
        </a>
      ))}
    </div>
  );
}
