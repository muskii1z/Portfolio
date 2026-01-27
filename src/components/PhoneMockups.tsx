"use client";

import Image from "next/image";
import type { Screenshot } from "@/data/projects";

interface PhoneMockupsProps {
  screenshots: Screenshot[];
}

export function PhoneMockups({ screenshots }: PhoneMockupsProps) {
  if (screenshots.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="flex justify-center gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {screenshots.map((screenshot, i) => {
          const isPlaceholder = !screenshot.src;

          return (
            <div key={i} className="flex-shrink-0 snap-center">
              {/* iPhone Frame */}
              <div className="relative w-44 bg-black rounded-[2.5rem] p-2 shadow-xl">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-10" />

                {/* Screen */}
                <div className="relative bg-neutral-100 rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                  {isPlaceholder ? (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <span className="text-neutral-400 text-xs text-center">{screenshot.alt}</span>
                    </div>
                  ) : (
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Caption */}
              {screenshot.caption && (
                <p className="text-xs text-neutral-500 text-center mt-3 max-w-44 leading-relaxed">
                  {screenshot.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
