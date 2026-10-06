import { proof } from "@/data/home";
import { MetricsRow } from "@/components/shared/MetricsRow";

/** Headline numbers right under the hero, each linking to the work behind it. */
export function ProofStrip() {
  return (
    <section aria-label="Highlights" className="px-4 sm:px-6 pb-4 sm:pb-8">
      <div className="max-w-6xl mx-auto">
        <p className="font-hand text-2xl text-muted -rotate-1 mb-4">the receipts</p>
        <MetricsRow metrics={proof} variant="chunky" />
      </div>
    </section>
  );
}
