import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { Kicker, Shell } from "@/components/section";
import { VslPoster } from "@/components/vsl-poster";
import { hero } from "@/lib/copy";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div
        aria-hidden="true"
        className="wash-grid pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply"
      />
      <Shell className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-6 lg:max-w-xl lg:pt-4">
            <Kicker>{hero.eyebrow}</Kicker>
            <h1 className="text-balance font-display text-[2.6rem] leading-[1.04] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.15rem]">
              Get Your First
              <br />
              AI Employee Working
            </h1>
            <p className="max-w-md text-pretty text-lg leading-8 text-ink/75 sm:text-xl sm:leading-9">
              {hero.subhead}
            </p>
            <p className="max-w-md text-pretty text-base leading-7 text-mute">
              {hero.door}
            </p>
            <CtaBlock className="hidden pt-1 lg:flex" />
            <p className="hidden max-w-md text-pretty text-sm leading-6 text-mute lg:block">
              {hero.microLine}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative -mx-2 sm:mx-0">
              <Image
                src="/kinso/01-hero-ui.png"
                alt="AI employee product UI: inbox draft ready to send, morning checklist, and leftover-job chips"
                width={1280}
                height={720}
                priority
                unoptimized
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <VslPoster compact />
            <CtaBlock className="lg:hidden" />
            <p className="max-w-md text-pretty text-sm leading-6 text-mute lg:hidden">
              {hero.microLine}
            </p>
          </div>
        </div>
      </Shell>
    </section>
  );
}
