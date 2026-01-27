import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="text-2xl font-medium mb-4">Page not found</h1>
      <p className="text-neutral-500 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-black transition-colors"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
