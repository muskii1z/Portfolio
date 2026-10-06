import { stack } from "@/data/home";
import { Sticker } from "./Sticker";

export function BuiltWith() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-hand text-2xl text-muted -rotate-1">what I build with</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {stack.map((s, i) => (
            <li key={s.label} style={{ transform: `rotate(${[-3, 2, -1, 3, -2][i % 5]}deg)` }}>
              <Sticker tint={s.tint} className="text-xs px-3.5 py-2.5">
                {s.label}
              </Sticker>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
