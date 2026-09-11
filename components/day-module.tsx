import type { DayModule } from "@/lib/copy";
import { cn } from "@/lib/cn";

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
      <div className="mt-5 space-y-4">
        {day.paragraphs.map((p) => (
          <p key={p} className="text-pretty text-base leading-7 text-ink/80">
            {p}
          </p>
        ))}
        {day.mappings ? (
          <ul className="space-y-3">
            {day.mappings.map((row) => (
              <li key={row.when} className="space-y-1 border-l-2 border-line pl-4">
                <p className="text-pretty text-sm leading-6 text-mute">{row.when}</p>
                <p className="text-pretty text-sm leading-6 text-ink">{row.then}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {day.files ? (
          <ol className="space-y-3">
            {day.files.map((file, i) => (
              <li key={file} className="flex gap-3 text-pretty text-base leading-7 text-ink/80">
                <span className="font-mono text-xs text-mute">{i + 1}.</span>
                <span>{file}</span>
              </li>
            ))}
          </ol>
        ) : null}
        {day.paragraphsAfter ? (
          <p className="text-pretty text-base leading-7 text-ink/80">
            {day.paragraphsAfter}
          </p>
        ) : null}
        {day.toolNote ? (
          <p className="text-pretty text-base leading-7 text-ink/80">
            {day.toolNote}
          </p>
        ) : null}
        {day.post ? (
          <p className="rounded-xl bg-accent-soft/60 px-4 py-3 font-mono text-sm leading-6 text-ink">
            {day.post}
          </p>
        ) : null}
      </div>
      <dl className="mt-6 border-t border-line pt-5">
        <dt className="font-mono text-xs uppercase tracking-[0.12em] text-mute">
          Done when
        </dt>
        <dd className="mt-1 text-pretty text-base leading-7 text-ink">
          {day.doneWhen}
        </dd>
      </dl>
      {day.doNot ? (
        <p className="mt-4 text-pretty text-base leading-7 text-ink/80">{day.doNot}</p>
      ) : null}
    </article>
  );
}
