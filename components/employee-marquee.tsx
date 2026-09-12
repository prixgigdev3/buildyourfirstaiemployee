import Image from "next/image";
import { marqueeChips } from "@/lib/copy";

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="relative h-[4.5rem] w-[min(100vw,52rem)] shrink-0 sm:h-20 sm:w-[56rem]"
      aria-hidden={hidden ? true : undefined}
    >
      <Image
        src="/kinso/05-employee-marquee.png"
        alt=""
        fill
        unoptimized
        sizes="(min-width: 640px) 56rem, 100vw"
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
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-4 pr-4">
            <Strip />
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
