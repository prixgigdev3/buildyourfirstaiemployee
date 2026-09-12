import { marqueeChips } from "@/lib/copy";
import { cn } from "@/lib/cn";

const accents = [
  "bg-[#5B8DEF]",
  "bg-[#3DB88A]",
  "bg-[#8B7CF6]",
  "bg-[#E45D5D]",
  "bg-[#2DB8C0]",
  "bg-[#4A7FD4]",
  "bg-[#3DAA6D]",
  "bg-[#9B6FE8]",
] as const;

function Chip({ label, accent }: { label: string; accent: string }) {
  return (
    <li
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 rounded-full border border-black/[0.06] bg-white px-4 py-2.5 text-[0.8125rem] font-medium text-ink",
        "shadow-[0_10px_28px_-18px_rgba(20,19,18,0.55)]",
      )}
    >
      <span aria-hidden="true" className={cn("size-2.5 rounded-full", accent)} />
      {label}
    </li>
  );
}

function ChipRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex items-center gap-2.5 pr-2.5"
      aria-hidden={hidden ? true : undefined}
    >
      {marqueeChips.map((label, i) => (
        <Chip key={`${label}-${i}`} label={label} accent={accents[i % accents.length]} />
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
      {/* Muse 05 DNA plate — soft underlay for product density */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 opacity-[0.35] sm:h-28"
        style={{
          backgroundImage: "url(/kinso/05-employee-marquee.png)",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />
      <div className="relative">
        <p className="mb-5 text-center text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-mute">
          Ready-made employees
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max items-center">
            <ChipRow />
            <ChipRow hidden />
            <ChipRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
