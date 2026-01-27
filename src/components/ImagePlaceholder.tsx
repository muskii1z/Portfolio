import Image from "next/image";
import type { Screenshot } from "@/data/projects";

interface ImagePlaceholderProps {
  screenshot: Screenshot;
}

export function ImagePlaceholder({ screenshot }: ImagePlaceholderProps) {
  const isPlaceholder = !screenshot.src || screenshot.src.includes("placeholder");

  if (isPlaceholder) {
    return (
      <figure className="mb-8">
        <div className="bg-neutral-100 border border-neutral-200 aspect-video flex items-center justify-center">
          <span className="text-neutral-400 text-sm">{screenshot.alt}</span>
        </div>
        {screenshot.caption && (
          <figcaption className="text-sm text-neutral-500 mt-3">
            {screenshot.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="mb-8">
      <div className="border border-neutral-200 overflow-hidden">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={800}
          height={450}
          className="w-full h-auto"
        />
      </div>
      {screenshot.caption && (
        <figcaption className="text-sm text-neutral-500 mt-3">
          {screenshot.caption}
        </figcaption>
      )}
    </figure>
  );
}
