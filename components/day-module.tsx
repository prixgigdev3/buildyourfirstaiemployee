import type { DayModule } from "@/lib/copy";
import { cn } from "@/lib/cn";

function DayBody({
  day,
  tone,
}: {
  day: DayModule;
  tone: "light" | "dark";
}) {
  const body = tone === "dark" ? "text-on-dark/75" : "text-ink/80";
  const ink = tone === "dark" ? "text-on-dark" : "text-ink";
  const mute = tone === "dark" ? "text-on-dark-mute" : "text-mute";
  const line = tone === "dark" ? "border-white/10" : "border-line";

  return (
    <div className="space-y-4">
      {day.paragraphs.map((p) => (
        <p key={p} className={cn("text-pretty text-base leading-7", body)}>
          {p}
        </p>
      ))}
      {day.mappings ? (
        <ul className="space-y-3">
          {day.mappings.map((row) => (
            <li key={row.when} className={cn("space-y-1 border-l-2 pl-4", line)}>
              <p className={cn("text-pretty text-sm leading-6", mute)}>{row.when}</p>
              <p className={cn("text-pretty text-sm leading-6", ink)}>{row.then}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {day.files ? (
        <ol className="space-y-3">
          {day.files.map((file, i) => (
            <li
              key={file}
              className={cn("flex gap-3 text-pretty text-base leading-7", body)}
            >
              <span className={cn("font-mono text-xs", mute)}>{i + 1}.</span>
              <span>{file}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {day.paragraphsAfter ? (
        <p className={cn("text-pretty text-base leading-7", body)}>
          {day.paragraphsAfter}
        </p>
      ) : null}
      {day.toolNote ? (
        <p className={cn("text-pretty text-base leading-7", body)}>{day.toolNote}</p>
      ) : null}
      {day.post ? (
        <p
          className={cn(
            "rounded-xl px-4 py-3 font-mono text-sm leading-6",
            tone === "dark"
              ? "bg-white/5 text-on-dark"
              : "bg-accent-soft/60 text-ink",
          )}
        >
          {day.post}
        </p>
      ) : null}
      <dl className={cn("border-t pt-5", line)}>
        <dt className={cn("font-mono text-xs uppercase tracking-[0.12em]", mute)}>
          Done when
        </dt>
        <dd className={cn("mt-1 text-pretty text-base leading-7", ink)}>
          {day.doneWhen}
        </dd>
      </dl>
      {day.doNot ? (
        <p className={cn("text-pretty text-base leading-7", body)}>{day.doNot}</p>
      ) : null}
    </div>
  );
}

export function DayCard({
  day,
  className,
}: {
  day: DayModule;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-line bg-surface p-6 sm:p-8",
        className,
      )}
    >
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">
          {day.label}
          {day.time ? ` · ${day.time}` : null}
        </p>
      </header>
      <h3 className="mt-3 text-balance text-xl font-semibold leading-snug text-ink sm:text-2xl">
        {day.title}
      </h3>
      <div className="mt-5">
        <DayBody day={day} tone="light" />
      </div>
    </article>
  );
}

export function DayRow({ day }: { day: DayModule }) {
  return (
    <details className="group border-b border-white/10">
      <summary
        className={cn(
          "flex min-h-14 cursor-pointer list-none items-center gap-4 py-5 text-left",
          "transition-colors duration-150 hover:text-white",
        )}
      >
        <span className="w-16 shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-on-dark-mute">
          {day.label}
        </span>
        <span className="min-w-0 flex-1 text-pretty font-display text-lg leading-snug tracking-[-0.01em] text-on-dark sm:text-xl">
          {day.title}
        </span>
        {day.time ? (
          <span className="hidden shrink-0 font-mono text-xs text-on-dark-mute sm:inline">
            {day.time}
          </span>
        ) : null}
        <span
          aria-hidden="true"
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-on-dark-mute transition-transform duration-200 ease-out group-open:rotate-45"
        >
          <svg viewBox="0 0 16 16" className="size-3.5 fill-current">
            <path d="M7.25 2.5h1.5v11h-1.5z" />
            <path d="M2.5 7.25h11v1.5h-11z" />
          </svg>
        </span>
      </summary>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="max-w-2xl pb-6 pl-0 sm:pl-20">
            {day.time ? (
              <p className="mb-4 font-mono text-xs text-on-dark-mute sm:hidden">
                {day.time}
              </p>
            ) : null}
            <DayBody day={day} tone="dark" />
          </div>
        </div>
      </div>
    </details>
  );
}
