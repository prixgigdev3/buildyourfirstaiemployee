import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { DayCard } from "@/components/day-module";
import { FaqList } from "@/components/faq-list";
import { Kicker, Prose, Section, SectionTitle } from "@/components/section";
import { VslPoster } from "@/components/vsl-poster";
import {
  camps,
  dayModules,
  employees,
  finalCta,
  guarantee,
  hero,
  howHelps,
  instructor,
  offer,
  pricing,
  proof,
  room,
  weekGlance,
  whoFor,
} from "@/lib/copy";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section className="bg-paper pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 lg:pt-4">
          <Kicker>{hero.eyebrow}</Kicker>
          <h1 className="max-w-xl text-balance text-[2.35rem] font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-[3.35rem]">
            {hero.headline}
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-8 text-ink/80 sm:text-xl sm:leading-9">
            {hero.subhead}
          </p>
          <Prose>{hero.door}</Prose>
        </div>
        <div className="flex flex-col gap-6">
          <VslPoster />
          <CtaBlock />
          <p className="max-w-md text-pretty text-sm leading-6 text-mute">
            {hero.microLine}
          </p>
        </div>
      </div>
    </section>
  );
}

export function OfferOverview() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-6">
        <SectionTitle>{offer.kicker}</SectionTitle>
        <Prose>{offer.body}</Prose>
        <Prose>{offer.guarantee}</Prose>
        <p className="max-w-2xl text-pretty text-base font-medium leading-7 text-ink">
          {offer.rule}
        </p>
        <Prose className="text-mute">{offer.disclaimer}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function Instructor() {
  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
        <Image
          src="/johnny-nel.jpg"
          alt="Johnny Nel"
          width={224}
          height={224}
          className="size-28 rounded-2xl object-cover ring-1 ring-line sm:size-40 lg:size-52"
        />
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {instructor.label}
          </h2>
          <Prose>{instructor.p1}</Prose>
          <Prose>{instructor.p2}</Prose>
        </div>
      </div>
    </Section>
  );
}

export function WeekGlance() {
  const facts = [weekGlance.time, weekGlance.walkOut, weekGlance.who];
  return (
    <Section id="week" tone="surface">
      <div className="space-y-12">
        <Kicker>The week at a glance</Kicker>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {facts.map((fact) => (
            <div key={fact.label} className="space-y-3">
              <h3 className="text-lg font-semibold text-ink">{fact.label}</h3>
              <p className="text-pretty text-base leading-7 text-ink/80">
                {fact.body}
              </p>
            </div>
          ))}
        </div>
        <CtaBlock />
      </div>
    </Section>
  );
}

export function WhoFor() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-ink">
            {whoFor.forYouIf.label}
          </h2>
          <ul className="mt-6 space-y-4">
            {whoFor.forYouIf.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-accent pl-4 text-pretty text-base leading-7 text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-ink">
            {whoFor.notForYouIf.label}
          </h2>
          <ul className="mt-6 space-y-4">
            {whoFor.notForYouIf.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-line pl-4 text-pretty text-base leading-7 text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CtaBlock className="mt-12" />
    </Section>
  );
}

export function DayByDay() {
  const [watch, name, pick, plug, work, send, check] = dayModules;
  return (
    <Section id="start-here">
      <div className="max-w-3xl space-y-4">
        <SectionTitle>Day by day</SectionTitle>
      </div>
      <div className="mt-12 space-y-6">
        <DayCard day={watch} />
        <DayCard day={name} />
        <CtaBlock className="py-4" />
        <DayCard day={pick} />
        <DayCard day={plug} />
        <DayCard day={work} />
        <CtaBlock className="py-4" />
        <DayCard day={send} />
        <DayCard day={check} />
        <CtaBlock className="py-4" />
      </div>
    </Section>
  );
}

export function Camps() {
  const cards = [camps.camp1, camps.camp2, camps.camp3];
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-4">
        <Kicker>Why the tab could not take you off the work</Kicker>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-line bg-paper p-6 sm:p-7"
          >
            <h3 className="text-lg font-semibold leading-snug text-ink">
              {card.label}
            </h3>
            <p className="mt-4 text-pretty text-base leading-7 text-ink/80">
              {card.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 max-w-3xl rounded-2xl bg-accent-soft/70 px-6 py-6 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">
          {camps.missing.label}
        </p>
        <p className="mt-3 text-pretty text-lg font-medium leading-8 text-ink">
          {camps.missing.body}
        </p>
      </div>
      <CtaBlock className="mt-10" />
    </Section>
  );
}

export function HowHelps() {
  return (
    <Section>
      <div className="max-w-3xl space-y-6">
        <Kicker>How an AI employee helps</Kicker>
        <Prose>{howHelps.lead}</Prose>
        <Prose>{howHelps.wait}</Prose>
        <h3 className="pt-2 text-lg font-semibold text-ink">
          {howHelps.pillarsLabel}
        </h3>
        <ol className="space-y-3">
          {howHelps.pillars.map((item, i) => (
            <li key={item} className="flex gap-4 text-pretty text-base leading-7 text-ink/80">
              <span className="font-mono text-sm text-mute">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <h3 className="pt-2 text-lg font-semibold text-ink">
          {howHelps.physicsLabel}
        </h3>
        {howHelps.physics.map((item) => (
          <Prose key={item}>{item}</Prose>
        ))}
        <p className="text-pretty text-base font-medium leading-7 text-ink">
          {howHelps.close}
        </p>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function Proof() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-6">
        <Kicker>Proof we can stand behind</Kicker>
        <Prose>{proof.honest}</Prose>
        <h3 className="pt-2 text-lg font-semibold text-ink">
          {proof.howIUseLabel}
        </h3>
        <ul className="space-y-3">
          {proof.howIUse.map((item) => (
            <li
              key={item}
              className="border-l-2 border-line pl-4 text-pretty text-base leading-7 text-ink/80"
            >
              {item}
            </li>
          ))}
        </ul>
        <Prose>{proof.box}</Prose>
        <Prose className="text-mute">{proof.possibility}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function Employees() {
  return (
    <Section id="employees">
      <div className="max-w-3xl space-y-6">
        <Kicker>The 17 ready-made AI employees</Kicker>
        <Prose>{employees.opener}</Prose>
      </div>
      <div className="mt-12 space-y-12">
        {employees.groups.map((group) => (
          <div key={group.name}>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-mute">
              {group.name}
            </h3>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {group.seats.map((seat) => (
                <li
                  key={seat.name}
                  className="grid gap-2 py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-8"
                >
                  <p className="font-medium text-ink">{seat.name}</p>
                  <p className="text-pretty text-base leading-7 text-ink/80">
                    {seat.line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 max-w-3xl space-y-4">
        <Prose>{employees.pinch}</Prose>
        <Prose>{employees.after}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function Room() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl space-y-4">
        <Kicker>What else is in the room</Kicker>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {room.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-line bg-paper p-6 text-pretty text-base leading-7 text-ink/80"
          >
            {item}
          </li>
        ))}
      </ul>
      <CtaBlock className="mt-10" />
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
              "rounded-2xl border p-6 sm:p-8",
              i === 1
                ? "border-ink/20 bg-surface"
                : "border-line bg-paper",
            )}
          >
            <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
            <p className="mt-4 font-mono text-4xl font-medium tabular-nums tracking-tight text-ink">
              {plan.price}
              <span className="ml-1 text-base font-normal text-mute">
                {plan.cadence}
              </span>
            </p>
            <p className="mt-5 text-pretty text-base leading-7 text-ink/80">
              {plan.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 max-w-3xl space-y-4">
        <Prose>{pricing.tools}</Prose>
        <p className="text-pretty text-sm leading-6 text-mute">
          {pricing.scarcity}
        </p>
        <CtaBlock className="pt-2" />
      </div>
      <div className="mt-16 max-w-3xl space-y-5 border-t border-line pt-12">
        <Kicker>7-day money back</Kicker>
        <p className="text-pretty text-lg font-medium leading-8 text-ink">
          {guarantee.steps}
        </p>
        <Prose>{guarantee.promise}</Prose>
        <Prose>{guarantee.whatItIs}</Prose>
        <Prose>{guarantee.skipped}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" tone="surface">
      <div className="max-w-3xl space-y-4">
        <SectionTitle>FAQ</SectionTitle>
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        <FaqList />
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section>
      <div className="max-w-3xl space-y-6">
        <p className="text-pretty text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          {finalCta.clock}
        </p>
        <Prose>{finalCta.stay}</Prose>
        <Prose>{finalCta.or}</Prose>
        <p className="text-pretty text-lg font-medium leading-8 text-ink">
          {finalCta.time}
        </p>
        <Prose>{finalCta.no}</Prose>
        <Prose>{finalCta.price}</Prose>
        <Prose className="text-mute">{finalCta.form}</Prose>
        <CtaBlock className="pt-2" />
      </div>
    </Section>
  );
}
