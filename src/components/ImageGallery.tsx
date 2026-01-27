"use client";

import { useState } from "react";
import Image from "next/image";
import type { Screenshot } from "@/data/projects";

interface ImageGalleryProps {
  screenshots: Screenshot[];
}

export function ImageGallery({ screenshots }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (screenshots.length === 0) return null;

  const current = screenshots[currentIndex];
  const isPlaceholder = !current.src || current.src.includes("placeholder");

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-10">
      {/* Main Image */}
      <div className="relative bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden aspect-video mb-4">
        {isPlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-neutral-400">{current.alt}</span>
          </div>
        ) : (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
          />
        )}

        {/* Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-neutral-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <span className="text-lg">&larr;</span>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-neutral-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <span className="text-lg">&rarr;</span>
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {current.caption && (
        <p className="text-sm text-neutral-500 text-center mb-4">
          {current.caption}
        </p>
      )}

      {/* Thumbnails / Dots */}
      {screenshots.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-black"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {screenshots.length > 1 && (
        <p className="text-xs text-neutral-400 text-center mt-2">
          {currentIndex + 1} / {screenshots.length}
        </p>
      )}
    </div>
  );
}
