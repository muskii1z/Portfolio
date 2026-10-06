/** Hand-drawn SVG bits: a squiggle underline and a scribbled box. */

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 14" fill="none" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M2 9 C 20 2, 34 13, 52 7 S 86 2, 104 8 S 140 13, 158 6 S 186 3, 198 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A slightly wobbly rectangle drawn around its parent (absolute, full-bleed). */
export function ScribbleBox({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 160"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 14 C 120 6, 280 10, 392 12 C 396 60, 394 110, 390 150 C 270 156, 130 152, 8 148 C 5 100, 7 55, 10 14 Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
