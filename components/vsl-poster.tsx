import Image from "next/image";
import { hero } from "@/lib/copy";

export function VslPoster() {
  return (
    <figure className="group w-full">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface-2">
        <Image
          src="/vsl-poster.png"
          alt="Warm oak desk with open notebook, blue paperclip on a blank note, and soft leaf-shadow light"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/10" />
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-surface/90 shadow-md ring-1 ring-ink/10 backdrop-blur-sm transition-transform duration-150 ease-out group-hover:scale-105 group-active:scale-95 sm:size-16">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 size-5 fill-ink sm:size-6"
              aria-hidden="true"
            >
              <path d="M8 5.14v13.72L19.5 12 8 5.14z" />
            </svg>
          </span>
        </div>
        <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-surface text-pretty drop-shadow-sm sm:bottom-5 sm:left-5">
          {hero.videoTitle}
        </p>
      </div>
      <figcaption className="mt-3 text-pretty text-sm leading-6 text-mute">
        {hero.posterLine}
      </figcaption>
    </figure>
  );
}
