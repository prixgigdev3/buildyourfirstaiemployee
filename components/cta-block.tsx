import { CHECKOUT_URL, cta } from "@/lib/copy";
import { cn } from "@/lib/cn";

export const ctaButtonClass = cn(
  "inline-flex max-w-full cursor-pointer touch-manipulation items-center justify-center",
  "rounded-full bg-join px-6 py-3 text-center text-[0.9375rem] font-extrabold text-pretty text-on-join sm:px-7 sm:text-base",
  "min-h-12 w-full sm:w-auto",
  "transition-[transform,background-color,box-shadow,opacity] duration-150 ease-out",
  "hover:bg-accent-hover",
  "active:scale-[0.96] active:opacity-90 active:duration-75",
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent",
);

export const ctaOnDarkClass = cn(
  "inline-flex max-w-full cursor-pointer touch-manipulation items-center justify-center",
  "rounded-full bg-join px-6 py-3 text-center text-[0.9375rem] font-extrabold text-pretty text-on-join sm:px-7 sm:text-base",
  "min-h-12 w-full sm:w-auto",
  "transition-[transform,background-color,box-shadow,opacity] duration-150 ease-out",
  "hover:bg-accent-hover",
  "active:scale-[0.96] active:opacity-90 active:duration-75",
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white",
);

export function CtaButton({
  className,
  tone = "join",
  label,
}: {
  className?: string;
  tone?: "join" | "onDark";
  label?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(tone === "onDark" ? ctaOnDarkClass : ctaButtonClass, className)}
    >
      {label ?? cta.label}
    </a>
  );
}

export function CtaBlock({
  align = "start",
  className,
  tone = "join",
}: {
  align?: "start" | "center";
  className?: string;
  tone?: "join" | "onDark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-stretch sm:items-start",
        className,
      )}
    >
      <CtaButton tone={tone} />
      <p
        className={cn(
          "max-w-md text-pretty text-sm leading-6",
          tone === "onDark" ? "text-on-dark-mute" : "text-mute",
        )}
      >
        {cta.subtext}
      </p>
    </div>
  );
}
