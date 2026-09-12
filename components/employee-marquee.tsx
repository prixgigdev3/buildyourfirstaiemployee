import Image from "next/image";
import { marqueeChips } from "@/lib/copy";

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="relative h-14 w-[42rem] shrink-0 sm:h-16 sm:w-[48rem]"
      aria-hidden={hidden ? true : undefined}
    >
      <Image
        src="/kinso/05-employee-marquee-tight.png"
        alt=""
        fill
        unoptimized
        sizes="48rem"
        className="object-contain object-left"
      />
    </div>
  );
}

export function EmployeeMarquee() {
  return (
    <section
      aria-label="Ready-made employees"
      data-muse-slot="marquee-chips"
      className="relative overflow-hidden border-y border-black/[0.05] py-7 sm:py-9"
    >
      <div
        aria-hidden="true"
        className="wash-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
      />
      <div className="relative">
        <p className="mb-4 text-center text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-mute">
          Ready-made employees
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-3 pr-3">
            <Strip />
            <Strip hidden />
            <Strip hidden />
            <Strip hidden />
          </div>
        </div>
        <ul className="sr-only">
          {marqueeChips.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
