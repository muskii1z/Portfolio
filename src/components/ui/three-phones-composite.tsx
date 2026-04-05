import Image from "next/image";

interface ThreePhonesCompositeProps {
  images: Array<{ src: string; alt: string }>;
}

export function ThreePhonesComposite({ images }: ThreePhonesCompositeProps) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center gap-3 p-6">
      {images.slice(0, 3).map((img, i) => (
        <div
          key={i}
          className="relative flex-1 aspect-[9/19.5] max-w-[80px] sm:max-w-[100px] md:max-w-[120px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="120px"
          />
        </div>
      ))}
    </div>
  );
}
