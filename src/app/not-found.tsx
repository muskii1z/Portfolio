import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center text-center">
      <p className="font-hand text-2xl text-muted -rotate-2">well, this is awkward</p>
      <h1 className="mt-2 font-pixel font-bold text-ink leading-none text-[clamp(88px,20vw,180px)]">404</h1>
      <p className="mt-4 font-body font-semibold text-lg text-muted">That page doesn&apos;t exist, or it moved.</p>
      <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
        <Link href="/" className="btn-chunky bg-idea!">
          <ArrowLeft size={18} aria-hidden="true" /> Back home
        </Link>
        <Link href="/work" className="btn-chunky">
          See my work
        </Link>
      </div>
    </div>
  );
}
