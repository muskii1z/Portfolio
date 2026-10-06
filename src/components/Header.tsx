"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav } from "@/data/site";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b-[3px] border-ink">
      <div className="max-w-6xl mx-auto h-20 px-4 sm:px-6 flex items-center gap-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex-none grid place-items-center w-12 h-12 bg-idea border-[3px] border-ink rounded-xl font-pixel font-bold text-ink text-base shadow-[3px_3px_0_var(--color-ink)]"
          aria-label="Musab Saraswat, home"
        >
          MS
        </Link>

        <nav className="hidden md:flex items-center gap-2" aria-label="Main">
          {nav.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              aria-current={isActive(pathname, t.href) ? "page" : undefined}
              className={cn(
                "font-display font-semibold text-lg text-ink px-5 py-2.5 rounded-xl border-[3px] transition-colors",
                isActive(pathname, t.href)
                  ? "bg-idea border-ink shadow-[3px_3px_0_var(--color-ink)]"
                  : "border-transparent hover:bg-learn-soft hover:border-ink"
              )}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <SocialLinks className="hidden lg:flex" />
          <Link href="/contact" className="hidden sm:inline-flex btn-chunky text-base! px-5! py-3!">
            Contact <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden grid place-items-center w-12 h-12 bg-idea border-[3px] border-ink rounded-xl shadow-[3px_3px_0_var(--color-ink)]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t-[3px] border-ink bg-surface px-4 py-4 flex flex-col gap-2" aria-label="Mobile">
          {[...nav, { label: "Contact", href: "/contact" }].map((t) => (
            <Link
              key={t.href}
              href={t.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display font-semibold text-xl text-ink px-4 py-3.5 rounded-xl border-[3px]",
                isActive(pathname, t.href) ? "bg-idea border-ink" : "border-transparent"
              )}
            >
              {t.label}
            </Link>
          ))}
          <SocialLinks size="lg" className="px-4 pt-2" />
        </nav>
      )}
    </header>
  );
}
