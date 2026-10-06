import Image from "next/image";

/** Up to three phone screenshots side by side, used as a card cover for mobile apps. */
export function ThreePhonesComposite({ images }: { images: Array<{ src: string; alt: string }> }) {
  return (
    <div className="relative w-full h-full bg-learn-soft flex items-center justify-center gap-3 p-6">
      {images.slice(0, 3).map((img) => (
        <div
          key={img.src + img.alt}
          className="relative flex-1 aspect-[9/19.5] max-w-[80px] sm:max-w-[100px] md:max-w-[120px] rounded-2xl overflow-hidden border-[2.5px] border-ink bg-surface"
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="120px" />
        </div>
      ))}
    </div>
  );
}
