export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm gap-3 sm:gap-0">
        <span className="text-neutral-500">&copy; {new Date().getFullYear()} Musab Saraswat</span>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="mailto:musab.work17@gmail.com"
            className="text-neutral-500 hover:text-black transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/musab-saraswat-a42944230/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
