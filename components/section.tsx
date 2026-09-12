import { cn } from "@/lib/cn";

export function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "wash",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "wash" | "clear" | "dark";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-h)+1rem)] py-20 sm:py-24 lg:py-32",
        tone === "dark" && "bg-dark text-on-dark",
        className,
      )}
    >
      <Shell>{children}</Shell>
    </section>
  );
}

export function Kicker({
  children,
  className,
  pill = false,
}: {
  children: React.ReactNode;
  className?: string;
  pill?: boolean;
}) {
  if (pill) {
    return <p className={cn("pa-pill w-fit", className)}>{children}</p>;
  }
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-extrabold uppercase tracking-[0.12em] text-mute",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "max-w-3xl text-balance font-sans text-3xl font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.75rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-2xl text-pretty text-base leading-7 text-ink/75 sm:text-[1.0625rem] sm:leading-8",
        className,
      )}
    >
      {children}
    </p>
  );
}
