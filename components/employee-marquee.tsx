import { marqueeChips } from "@/lib/copy";
import { cn } from "@/lib/cn";

function Chip({ label }: { label: string }) {
  return (
    <li
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border border-black/[0.05] bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-[0_8px_24px_-16px_rgba(20,19,18,0.45)]",
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-ink/40"
      />
      {label}
    </li>
  );
}

function ChipRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex items-center gap-3 pr-3"
      aria-hidden={hidden ? true : undefined}
    >
      {marqueeChips.map((label) => (
        <Chip key={label} label={label} />
      ))}
    </ul>
  );
}

export function EmployeeMarquee() {
  return (
    <section
      aria-label="Ready-made employees"
      data-muse-slot="marquee-chips"
      className="relative overflow-hidden border-y border-black/[0.05] py-8 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="wash-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
      />
      <div className="relative">
        <p className="mb-5 text-center text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-mute">
          Ready-made employees
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max">
            <ChipRow />
            <ChipRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
