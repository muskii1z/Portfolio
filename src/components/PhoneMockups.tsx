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
      <div className="flex justify-start sm:justify-center gap-3 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 sm:px-0">
        {screenshots.map((screenshot, i) => {
          const isPlaceholder = !screenshot.src;

          return (
            <div key={i} className="flex-shrink-0 snap-center">
              {/* iPhone Frame */}
              <div className="relative w-32 sm:w-44 bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-xl">
                {/* Notch */}
                <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-4 sm:h-5 bg-black rounded-b-xl z-10" />

                {/* Screen */}
                <div className="relative bg-neutral-100 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden aspect-[9/19.5]">
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
                <p className="text-xs text-neutral-500 text-center mt-2 sm:mt-3 max-w-32 sm:max-w-44 leading-relaxed">
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
