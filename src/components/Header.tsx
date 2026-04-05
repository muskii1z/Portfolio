"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-black hover:opacity-60 transition-opacity">
          Musab Saraswat
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="text-neutral-600 hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-neutral-600 hover:text-black transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-neutral-600 hover:text-black transition-colors">
            Contact
          </Link>
          <Link href="/resume" className="text-black font-medium hover:opacity-60 transition-opacity">
            Resume
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-neutral-100 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-neutral-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-neutral-600 hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-neutral-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-neutral-600 hover:text-black transition-colors">
              Contact
            </Link>
            <Link href="/resume" onClick={() => setMenuOpen(false)} className="text-black font-medium hover:opacity-60 transition-opacity">
              Resume
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
