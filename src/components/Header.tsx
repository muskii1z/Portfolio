"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/musab-saraswat-a42944230/",
    bg: "bg-idea",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Aigenticbros",
    bg: "bg-watch",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z",
  },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b-[3px] border-ink">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex-none grid place-items-center w-10 h-10 bg-idea border-[3px] border-ink rounded-[10px] font-pixel font-bold text-ink text-sm shadow-[2px_2px_0_var(--color-ink)]"
          aria-label="Musab Saraswat, home"
        >
          MS
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              aria-current={isActive(pathname, t.href) ? "page" : undefined}
              className={cn(
                "font-display font-semibold text-[15px] text-ink px-3.5 py-1.5 rounded-lg border-[2.5px] transition-colors",
                isActive(pathname, t.href)
                  ? "bg-idea border-ink"
                  : "border-transparent hover:bg-learn-soft"
              )}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={cn(
                "hidden sm:grid place-items-center w-9 h-9 rounded-full border-[2.5px] border-ink text-ink hover:-translate-y-0.5 transition-transform",
                s.bg
              )}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn-chunky text-sm! px-3.5! py-2! shadow-[3px_3px_0_var(--color-ink)]!"
          >
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden grid place-items-center w-10 h-10 bg-idea border-[3px] border-ink rounded-[10px] shadow-[2px_2px_0_var(--color-ink)]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t-[3px] border-ink bg-surface px-4 py-4 flex flex-col gap-2" aria-label="Mobile">
          {[...tabs, { label: "Contact", href: "/contact" }].map((t) => (
            <Link
              key={t.href}
              href={t.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display font-semibold text-lg text-ink px-4 py-3 rounded-xl border-[2.5px]",
                isActive(pathname, t.href) ? "bg-idea border-ink" : "border-transparent"
              )}
            >
              {t.label}
            </Link>
          ))}
          <div className="flex gap-2.5 px-4 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={cn("grid place-items-center w-11 h-11 rounded-full border-[2.5px] border-ink text-ink", s.bg)}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
