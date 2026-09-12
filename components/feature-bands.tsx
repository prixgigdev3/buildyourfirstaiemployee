import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { Kicker, Prose, SectionTitle, Shell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { dayModules, howHelps, offer } from "@/lib/copy";
import { cn } from "@/lib/cn";

const draft = dayModules.find((d) => d.id === "day-3-5-send")!;
const name = dayModules.find((d) => d.id === "day-0-name")!;
const pick = dayModules.find((d) => d.id === "day-1-pick")!;
const plug = dayModules.find((d) => d.id === "day-1-2-plug")!;

const bands = [
  {
    kicker: "Draft you send",
    title: draft.title,
    body: [draft.paragraphs[0], draft.paragraphs[4], howHelps.wait],
    src: "/kinso/02-feature-draft.png",
    alt: "Draft composer with a Send control. It drafts. You keep the last click.",
    muse: "feature-draft",
    flip: false,
  },
  {
    kicker: "Name leftover job / match",
    title: name.title,
    body: [name.paragraphs[0], pick.paragraphs[0]],
    src: "/kinso/03-feature-match.png",
    alt: "Search panel for naming the leftover job and matching a ready-made employee.",
    muse: "feature-match",
    flip: true,
  },
  {
    kicker: "Plug-in / never-send",
    title: plug.title,
    body: [plug.paragraphs[0], ...(plug.files ?? [])],
    src: "/kinso/04-feature-context.png",
    alt: "How you talk and what it must never send, scoped to one employee seat.",
    muse: "feature-context",
    flip: false,
  },
] as const;

export function FeatureBands() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="wash-grid pointer-events-none absolute inset-0 opacity-45 mix-blend-multiply"
      />
      <Shell className="relative space-y-20 sm:space-y-28 lg:space-y-32">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <Kicker>This week</Kicker>
          <SectionTitle className="mx-auto">{offer.kicker}</SectionTitle>
          <Prose className="mx-auto">{offer.body}</Prose>
          <p className="text-pretty text-base font-medium leading-7 text-ink">
            {offer.rule}
          </p>
        </div>

        {bands.map((band, i) => (
          <Reveal key={band.src} delayMs={i * 40} as="article">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={cn("space-y-5", band.flip && "lg:order-2")}>
                <Kicker>{band.kicker}</Kicker>
                <h3 className="max-w-lg text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.6rem]">
                  {band.title}
                </h3>
                <div className="space-y-4">
                  {band.body.map((p) => (
                    <p
                      key={p}
                      className="max-w-md text-pretty text-base leading-7 text-ink/75 sm:text-[1.0625rem] sm:leading-8"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div
                className={cn(band.flip && "lg:order-1")}
                data-muse-slot={band.muse}
              >
                <Image
                  src={band.src}
                  alt={band.alt}
                  width={1280}
                  height={720}
                  unoptimized
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        ))}

        <CtaBlock className="pt-2" />
      </Shell>
    </section>
  );
}
