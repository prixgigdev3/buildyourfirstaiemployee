import { CHECKOUT_URL, cta } from "@/lib/copy";
import { cn } from "@/lib/cn";

export const ctaButtonClass = cn(
  "inline-flex max-w-full cursor-pointer touch-manipulation items-center justify-center",
  "rounded-full bg-accent px-6 py-3 text-center text-[0.9375rem] font-medium text-pretty text-on-accent sm:px-7 sm:text-base",
  "min-h-12 w-full sm:w-auto",
  "transition-[transform,background-color] duration-150 ease-out",
  "hover:bg-accent-hover",
  "active:scale-[0.97] active:duration-100",
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink",
);

export function CtaButton({ className }: { className?: string }) {
  return (
    <a href={CHECKOUT_URL} className={cn(ctaButtonClass, className)}>
      {cta.label}
    </a>
  );
}

export function CtaBlock({
  align = "start",
  className,
}: {
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-stretch sm:items-start",
        className,
      )}
    >
      <CtaButton />
      <p className="max-w-md text-pretty text-sm leading-6 text-mute">
        {cta.subtext}
      </p>
    </div>
  );
}
