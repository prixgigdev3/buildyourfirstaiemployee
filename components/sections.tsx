import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { FaqList } from "@/components/faq-list";
import { Kicker, Prose, Section, SectionTitle, Shell } from "@/components/section";
import {
  employees,
  finalCta,
  guarantee,
  instructor,
  pricing,
  proof,
  whoFor,
} from "@/lib/copy";
import { cn } from "@/lib/cn";

export function WhoFor() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl">
            {whoFor.forYouIf.label}
          </h2>
          <ul className="mt-8 space-y-4">
            {whoFor.forYouIf.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-ink/20 pl-4 text-pretty text-base leading-7 text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl">
            {whoFor.notForYouIf.label}
          </h2>
          <ul className="mt-8 space-y-4">
            {whoFor.notForYouIf.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-line pl-4 text-pretty text-base leading-7 text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Employees() {
  return (
    <Section id="employees">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="space-y-5 lg:sticky lg:top-24">
          <Kicker>The 17 ready-made AI employees</Kicker>
          <SectionTitle>Seventeen ready-made AI employees.</SectionTitle>
          <Prose>
            The suite it would take a massive human team to run. Already built.
            You plug them in. You run. This is how I use mine. You get the same
            suite inside the community.
          </Prose>
          <div className="flex items-start gap-4 pt-2">
            <Image
              src="/johnny-nel.jpg"
              alt="Johnny Nel"
              width={64}
              height={64}
              className="size-14 shrink-0 rounded-full object-cover ring-1 ring-black/10"
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-ink">{instructor.label}</p>
              <p className="text-pretty text-sm leading-6 text-mute">
                {instructor.p1}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          {employees.groups.map((group) => (
            <div key={group.name}>
              <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-mute">
                {group.name}
              </h3>
              <ul className="mt-4 divide-y divide-black/[0.06] border-y border-black/[0.06]">
                {group.seats.map((seat) => (
                  <li
                    key={seat.name}
                    className="grid gap-1 py-3.5 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <p className="font-medium text-ink">{seat.name}</p>
                    <p className="text-pretty text-sm leading-6 text-ink/70 sm:text-base sm:leading-7">
                      {seat.line}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 max-w-3xl space-y-4">
        <Prose>{employees.pinch}</Prose>
        <Prose>{employees.after}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function PricingGuarantee() {
  const plans = [pricing.monthly, pricing.annual];
  return (
    <Section id="pricing">
      <div className="max-w-3xl space-y-4">
        <Kicker>Pricing</Kicker>
        <SectionTitle>{pricing.look}</SectionTitle>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {plans.map((plan, i) => (
          <article
            key={plan.name}
            className={cn(
              "rounded-3xl border bg-white/80 p-6 shadow-[0_20px_50px_-36px_rgba(20,19,18,0.45)] backdrop-blur-sm sm:p-8",
              i === 1 ? "border-ink/20" : "border-black/[0.06]",
            )}
          >
            <h3 className="text-lg font-medium text-ink">{plan.name}</h3>
            <p className="mt-4 font-display text-5xl tracking-[-0.03em] text-ink">
              {plan.price}
              <span className="ml-1 font-sans text-base font-normal text-mute">
                {plan.cadence}
              </span>
            </p>
            <p className="mt-5 text-pretty text-base leading-7 text-ink/75">
              {plan.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 max-w-3xl space-y-4">
        <Prose>{pricing.tools}</Prose>
        <p className="text-pretty text-sm leading-6 text-mute">{pricing.scarcity}</p>
      </div>
      <div
        id="guarantee"
        className="mt-14 max-w-3xl scroll-mt-[calc(var(--header-h)+1rem)] space-y-5 rounded-3xl border border-black/[0.06] bg-white/70 p-6 sm:p-8"
      >
        <Kicker>7-day money back</Kicker>
        <p className="text-pretty font-display text-2xl leading-snug tracking-[-0.02em] text-ink sm:text-3xl">
          {guarantee.steps}
        </p>
        <Prose>{guarantee.promise}</Prose>
        <Prose>{guarantee.whatItIs}</Prose>
        <Prose>{guarantee.skipped}</Prose>
        <Prose className="text-mute">{proof.honest}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-[calc(var(--header-h)+1rem)] py-20 sm:py-24 lg:py-32"
    >
      <Shell>
        <div className="mx-auto max-w-3xl space-y-4">
          <Kicker>FAQ</Kicker>
          <SectionTitle>FAQ</SectionTitle>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqList />
        </div>
      </Shell>
    </section>
  );
}

export function FinalCta() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-pretty font-display text-3xl leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl">
          {finalCta.clock}
        </p>
        <Prose className="mx-auto">{finalCta.stay}</Prose>
        <Prose className="mx-auto">{finalCta.or}</Prose>
        <p className="text-pretty text-lg font-medium leading-8 text-ink">
          {finalCta.time}
        </p>
        <Prose className="mx-auto">{finalCta.no}</Prose>
        <Prose className="mx-auto">{finalCta.price}</Prose>
        <Prose className="mx-auto text-mute">{finalCta.form}</Prose>
        <CtaBlock align="center" className="pt-2" />
      </div>
    </Section>
  );
}
