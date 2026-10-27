"use client";

import Image from "next/image";
import { useRef, useState, type UIEvent } from "react";

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const multiple = images.length > 1;

  function scrollToImage(index: number) {
    const container = containerRef.current;
    if (!container) return;

    const nextIndex = Math.max(0, Math.min(index, images.length - 1));

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    container.scrollTo({
      left: nextIndex * container.clientWidth,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });

    setActiveIndex(nextIndex);
  }

  function onScroll(event: UIEvent<HTMLDivElement>) {
    const element = event.currentTarget;

    if (element.clientWidth === 0) return;

    const index = Math.round(element.scrollLeft / element.clientWidth);

    setActiveIndex(Math.max(0, Math.min(index, images.length - 1)));
  }

  if (images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-[#EEF4E5] p-8 text-center text-muted">
        Fotografia në përgatitje
      </div>
    );
  }

  return (
    <div className="w-full min-w-0">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-[#EEF4E5]">
        <div
          ref={containerRef}
          onScroll={onScroll}
          tabIndex={multiple ? 0 : undefined}
          aria-label={`Galeria e fotografive: ${productName}`}
          className={
            "flex w-full snap-x snap-mandatory overflow-x-auto " +
            "overscroll-x-contain scroll-smooth " +
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative aspect-square w-full shrink-0 snap-start p-5 sm:p-8 lg:p-10"
            >
              <div className="relative h-full w-full overflow-hidden bg-white">
                <Image
                  src={image}
                  alt={`${productName} — pamja ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {multiple && (
          <>
            <button
              type="button"
              onClick={() => scrollToImage(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Fotografia e mëparshme"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/95 text-primary shadow-md transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollToImage(activeIndex + 1)}
              disabled={activeIndex === images.length - 1}
              aria-label="Fotografia tjetër"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/95 text-primary shadow-md transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <span
              aria-live="off"
              className="absolute bottom-4 right-4 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-white"
            >
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {multiple && (
        <div
          aria-label="Miniaturat e fotografive"
          className="mt-4 flex gap-3 overflow-x-auto pb-2"
        >
          {images.map((image, index) => (
            <button
              key={`thumbnail-${image}-${index}`}
              type="button"
              onClick={() => scrollToImage(index)}
              aria-label={`Shfaq fotografinë ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-all ${
                activeIndex === index
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
