import Image from "next/image";
import { hero } from "@/lib/copy";
import { cn } from "@/lib/cn";

export function VslPoster({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="group w-full">
      <div
        className={cn(
          "relative aspect-video overflow-hidden rounded-2xl border border-black/[0.06] bg-surface-2",
          compact && "rounded-xl",
        )}
      >
        <Image
          src="/vsl-poster.png"
          alt="Warm oak desk with open notebook, blue paperclip on a blank note, and soft leaf-shadow light"
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/10" />
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-md ring-1 ring-ink/10 backdrop-blur-sm transition-transform duration-150 ease-out group-hover:scale-105 group-active:scale-95 sm:size-14">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 size-5 fill-ink"
              aria-hidden="true"
            >
              <path d="M8 5.14v13.72L19.5 12 8 5.14z" />
            </svg>
          </span>
        </div>
        <p className="absolute bottom-3 left-4 right-4 text-sm font-medium text-pretty text-white drop-shadow-sm">
          {hero.videoTitle}
        </p>
      </div>
      <figcaption className="mt-3 text-pretty text-sm leading-6 text-mute">
        {hero.posterLine}
      </figcaption>
    </figure>
  );
}
