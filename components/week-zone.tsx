import Image from "next/image";
import { CtaBlock } from "@/components/cta-block";
import { DayRow } from "@/components/day-module";
import { dayModules, offer, weekGlance } from "@/lib/copy";

const facts = [weekGlance.time, weekGlance.walkOut, weekGlance.who];

export function WeekZone() {
  return (
    <section
      id="week"
      data-muse-slot="dark-week-fragments"
      className="pa-grain relative scroll-mt-[calc(var(--header-h)+1rem)] overflow-hidden bg-dark py-20 text-on-dark sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="space-y-6">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-on-dark-mute">
              The week
            </p>
            <h2 className="max-w-xl text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-on-dark sm:text-5xl lg:text-[3.15rem]">
              {offer.kicker}
            </h2>
            <p className="max-w-lg text-pretty text-base leading-7 text-on-dark/75 sm:text-lg sm:leading-8">
              {weekGlance.walkOut.body}
            </p>
          </div>
          <div className="relative">
            <Image
              src="/kinso/06-dark-week.png"
              alt="Day 0 through Day 3 on a dark grid: name the job, pick the employee, draft and send"
              width={1280}
              height={720}
              unoptimized
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3 md:gap-10">
          {facts.map((fact) => (
            <div key={fact.label} className="space-y-3">
              <h3 className="text-sm font-medium tracking-tight text-on-dark">
                {fact.label}
              </h3>
              <p className="text-pretty text-sm leading-6 text-on-dark/70 sm:text-base sm:leading-7">
                {fact.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10">
          {dayModules.map((day) => (
            <DayRow key={day.id} day={day} />
          ))}
        </div>

        <CtaBlock tone="onDark" className="mt-14" />
      </div>
    </section>
  );
}
