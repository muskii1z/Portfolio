import { cn } from "@/lib/utils";

/** Tech stack as small chips. `tilt` gives them the scrapbook rotation. */
export function StackChips({ stack, tilt = false, className }: { stack: string[]; tilt?: boolean; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {stack.map((s, i) => (
        <li key={s} style={tilt ? { transform: `rotate(${[-2, 1.5, -1, 2][i % 4]}deg)` } : undefined}>
          <span className="sticker bg-surface normal-case! tracking-normal! text-[13px]! font-semibold!">{s}</span>
        </li>
      ))}
    </ul>
  );
}
