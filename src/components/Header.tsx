import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-black hover:opacity-60 transition-opacity">
          Musab Saraswat
        </Link>
        <nav className="flex items-center gap-8 text-sm">
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
      </div>
    </header>
  );
}
