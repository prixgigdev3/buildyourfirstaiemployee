import Image from "next/image";

const marqueeSeats = [
  "Clark",
  "Vesper",
  "Pulse",
  "Anchor",
  "Ledger",
  "Lisa",
  "Swen",
  "Radar",
  "Scribe",
  "Herald",
  "Nova",
  "Donna",
  "Nexus",
  "Keel",
  "Vox",
  "Steve",
  "Forge",
] as const;

function Pill({ name }: { name: string }) {
  return (
    <li className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-black/[0.06] bg-white py-1.5 pl-1.5 pr-4 shadow-[0_10px_28px_-18px_rgba(20,19,18,0.55)]">
      <Image
        src={`/kinso/avatars/${name.toLowerCase()}.png`}
        alt=""
        width={36}
        height={36}
        unoptimized
        className="size-9 rounded-full"
      />
      <span className="font-display text-[0.9375rem] tracking-tight text-ink">
        {name}
      </span>
    </li>
  );
}

function PillRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex items-center gap-2.5 pr-2.5"
      aria-hidden={hidden ? true : undefined}
    >
      {marqueeSeats.map((name) => (
        <Pill key={name} name={name} />
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
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="marquee-track flex w-max items-center">
            <PillRow />
            <PillRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
