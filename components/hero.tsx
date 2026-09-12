import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { Kicker, Shell } from "@/components/section";
import { VslPoster } from "@/components/vsl-poster";
import { hero } from "@/lib/copy";

export function Hero() {
  return (
    <section className="pa-grain relative overflow-hidden bg-dark pb-16 pt-10 text-on-dark sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div
        aria-hidden="true"
        className="pa-vignette pointer-events-none absolute inset-0 opacity-90"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,122,0,0.08),transparent_55%)]"
      />
      <Shell className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-6 lg:max-w-xl lg:pt-4">
            <Kicker pill className="bg-black/45">
              {hero.eyebrow}
            </Kicker>
            <h1 className="text-balance text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem]">
              Get Your{" "}
              <span className="pa-power text-[1.05em]">First AI Employee</span>
              <br />
              Working
            </h1>
            <p className="max-w-md text-pretty text-lg font-medium leading-8 text-white/85 sm:text-xl sm:leading-9">
              {hero.subhead}
            </p>
            <p className="max-w-md text-pretty text-base leading-7 text-on-dark-mute">
              {hero.door}
            </p>
            <CtaBlock className="hidden pt-1 lg:flex" />
            <p className="hidden max-w-md text-pretty text-sm leading-6 text-on-dark-mute lg:block">
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
            <p className="max-w-md text-pretty text-sm leading-6 text-on-dark-mute lg:hidden">
              {hero.microLine}
            </p>
          </div>
        </div>
      </Shell>
    </section>
  );
}
