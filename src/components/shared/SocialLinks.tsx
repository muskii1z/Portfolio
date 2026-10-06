import { socials } from "@/data/site";
import { cn } from "@/lib/utils";

/** Round social icon buttons (LinkedIn, GitHub, YouTube). */
export function SocialLinks({ size = "md", className }: { size?: "md" | "lg"; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={cn(
            "grid place-items-center rounded-full border-[2.5px] border-ink text-ink shadow-[2px_2px_0_var(--color-ink)] hover:-translate-y-0.5 transition-transform",
            size === "lg" ? "w-12 h-12" : "w-11 h-11",
            s.bg
          )}
        >
          <svg viewBox="0 0 24 24" className={size === "lg" ? "w-[22px] h-[22px]" : "w-5 h-5"} fill="currentColor" aria-hidden="true">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
