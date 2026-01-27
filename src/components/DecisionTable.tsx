import type { Decision } from "@/data/projects";

interface DecisionTableProps {
  decisions: Decision[];
}

export function DecisionTable({ decisions }: DecisionTableProps) {
  return (
    <div className="space-y-8">
      {decisions.map((decision, index) => (
        <div key={index} className="border-l-2 border-black pl-6">
          <h3 className="font-medium text-black mb-3">{decision.decision}</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-neutral-400 uppercase tracking-wider text-xs">
                Options considered
              </span>
              <p className="text-neutral-600 mt-1">{decision.options.join(" · ")}</p>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-wider text-xs">
                Rationale
              </span>
              <p className="text-neutral-600 mt-1">{decision.rationale}</p>
            </div>
            <div>
              <span className="text-neutral-400 uppercase tracking-wider text-xs">
                Outcome
              </span>
              <p className="text-neutral-600 mt-1">{decision.outcome}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
